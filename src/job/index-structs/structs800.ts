/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { JobTaskNewClusterAutoscale,
jobTaskNewClusterAutoscaleToTerraform,
jobTaskNewClusterAutoscaleToHclTerraform,
JobTaskNewClusterAutoscaleOutputReference,
JobTaskNewClusterAwsAttributes,
jobTaskNewClusterAwsAttributesToTerraform,
jobTaskNewClusterAwsAttributesToHclTerraform,
JobTaskNewClusterAwsAttributesOutputReference,
JobTaskNewClusterAzureAttributes,
jobTaskNewClusterAzureAttributesToTerraform,
jobTaskNewClusterAzureAttributesToHclTerraform,
JobTaskNewClusterAzureAttributesOutputReference,
JobTaskNewClusterClusterLogConf,
jobTaskNewClusterClusterLogConfToTerraform,
jobTaskNewClusterClusterLogConfToHclTerraform,
JobTaskNewClusterClusterLogConfOutputReference,
JobTaskNewClusterClusterMountInfo,
jobTaskNewClusterClusterMountInfoToTerraform,
jobTaskNewClusterClusterMountInfoToHclTerraform,
JobTaskNewClusterClusterMountInfoList,
JobTaskNewClusterDockerImage,
jobTaskNewClusterDockerImageToTerraform,
jobTaskNewClusterDockerImageToHclTerraform,
JobTaskNewClusterDockerImageOutputReference,
JobTaskDependsOn,
jobTaskDependsOnToTerraform,
jobTaskDependsOnToHclTerraform,
JobTaskDependsOnList,
JobTaskEmailNotifications,
jobTaskEmailNotificationsToTerraform,
jobTaskEmailNotificationsToHclTerraform,
JobTaskEmailNotificationsOutputReference,
JobTaskForEachTask,
jobTaskForEachTaskToTerraform,
jobTaskForEachTaskToHclTerraform,
JobTaskForEachTaskOutputReference,
JobTaskGenAiComputeTask,
jobTaskGenAiComputeTaskToTerraform,
jobTaskGenAiComputeTaskToHclTerraform,
JobTaskGenAiComputeTaskOutputReference,
JobTaskHealth,
jobTaskHealthToTerraform,
jobTaskHealthToHclTerraform,
JobTaskHealthOutputReference,
JobTaskLibrary,
jobTaskLibraryToTerraform,
jobTaskLibraryToHclTerraform,
JobTaskLibraryList } from './structs400';
import { JobTaskAiFunctionTask,
jobTaskAiFunctionTaskToTerraform,
jobTaskAiFunctionTaskToHclTerraform,
JobTaskAiFunctionTaskOutputReference,
JobTaskAiRuntimeTask,
jobTaskAiRuntimeTaskToTerraform,
jobTaskAiRuntimeTaskToHclTerraform,
JobTaskAiRuntimeTaskOutputReference,
JobTaskAlertTask,
jobTaskAlertTaskToTerraform,
jobTaskAlertTaskToHclTerraform,
JobTaskAlertTaskOutputReference,
JobTaskCleanRoomsNotebookTask,
jobTaskCleanRoomsNotebookTaskToTerraform,
jobTaskCleanRoomsNotebookTaskToHclTerraform,
JobTaskCleanRoomsNotebookTaskOutputReference,
JobTaskCompute,
jobTaskComputeToTerraform,
jobTaskComputeToHclTerraform,
JobTaskComputeOutputReference,
JobTaskConditionTask,
jobTaskConditionTaskToTerraform,
jobTaskConditionTaskToHclTerraform,
JobTaskConditionTaskOutputReference,
JobTaskDashboardTask,
jobTaskDashboardTaskToTerraform,
jobTaskDashboardTaskToHclTerraform,
JobTaskDashboardTaskOutputReference,
JobTaskDbtCloudTask,
jobTaskDbtCloudTaskToTerraform,
jobTaskDbtCloudTaskToHclTerraform,
JobTaskDbtCloudTaskOutputReference,
JobTaskDbtPlatformTask,
jobTaskDbtPlatformTaskToTerraform,
jobTaskDbtPlatformTaskToHclTerraform,
JobTaskDbtPlatformTaskOutputReference,
JobTaskDbtTask,
jobTaskDbtTaskToTerraform,
jobTaskDbtTaskToHclTerraform,
JobTaskDbtTaskOutputReference } from './structs0';
export interface JobTaskNewClusterDriverNodeTypeFlexibility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#alternate_node_type_ids Job#alternate_node_type_ids}
  */
  readonly alternateNodeTypeIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#aws_context_id Job#aws_context_id}
  */
  readonly awsContextId?: string;
}

export function jobTaskNewClusterDriverNodeTypeFlexibilityToTerraform(struct?: JobTaskNewClusterDriverNodeTypeFlexibilityOutputReference | JobTaskNewClusterDriverNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alternate_node_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alternateNodeTypeIds),
    aws_context_id: cdktn.stringToTerraform(struct!.awsContextId),
  }
}


export function jobTaskNewClusterDriverNodeTypeFlexibilityToHclTerraform(struct?: JobTaskNewClusterDriverNodeTypeFlexibilityOutputReference | JobTaskNewClusterDriverNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alternate_node_type_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alternateNodeTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    aws_context_id: {
      value: cdktn.stringToHclTerraform(struct!.awsContextId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterDriverNodeTypeFlexibilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterDriverNodeTypeFlexibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNodeTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNodeTypeIds = this._alternateNodeTypeIds;
    }
    if (this._awsContextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsContextId = this._awsContextId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterDriverNodeTypeFlexibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alternateNodeTypeIds = undefined;
      this._awsContextId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alternateNodeTypeIds = value.alternateNodeTypeIds;
      this._awsContextId = value.awsContextId;
    }
  }

  // alternate_node_type_ids - computed: false, optional: true, required: false
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

  // aws_context_id - computed: false, optional: true, required: false
  private _awsContextId?: string; 
  public get awsContextId() {
    return this.getStringAttribute('aws_context_id');
  }
  public set awsContextId(value: string) {
    this._awsContextId = value;
  }
  public resetAwsContextId() {
    this._awsContextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsContextIdInput() {
    return this._awsContextId;
  }
}
export interface JobTaskNewClusterGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#boot_disk_size Job#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#confidential_compute_type Job#confidential_compute_type}
  */
  readonly confidentialComputeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#google_service_account Job#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#local_ssd_count Job#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#use_preemptible_executors Job#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobTaskNewClusterGcpAttributesToTerraform(struct?: JobTaskNewClusterGcpAttributesOutputReference | JobTaskNewClusterGcpAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    boot_disk_size: cdktn.numberToTerraform(struct!.bootDiskSize),
    confidential_compute_type: cdktn.stringToTerraform(struct!.confidentialComputeType),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    google_service_account: cdktn.stringToTerraform(struct!.googleServiceAccount),
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
    use_preemptible_executors: cdktn.booleanToTerraform(struct!.usePreemptibleExecutors),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function jobTaskNewClusterGcpAttributesToHclTerraform(struct?: JobTaskNewClusterGcpAttributesOutputReference | JobTaskNewClusterGcpAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    confidential_compute_type: {
      value: cdktn.stringToHclTerraform(struct!.confidentialComputeType),
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

export class JobTaskNewClusterGcpAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterGcpAttributes | undefined {
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
    if (this._confidentialComputeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialComputeType = this._confidentialComputeType;
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

  public set internalValue(value: JobTaskNewClusterGcpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._bootDiskSize = undefined;
      this._confidentialComputeType = undefined;
      this._firstOnDemand = undefined;
      this._googleServiceAccount = undefined;
      this._localSsdCount = undefined;
      this._usePreemptibleExecutors = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._bootDiskSize = value.bootDiskSize;
      this._confidentialComputeType = value.confidentialComputeType;
      this._firstOnDemand = value.firstOnDemand;
      this._googleServiceAccount = value.googleServiceAccount;
      this._localSsdCount = value.localSsdCount;
      this._usePreemptibleExecutors = value.usePreemptibleExecutors;
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

  // boot_disk_size - computed: false, optional: true, required: false
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

  // confidential_compute_type - computed: false, optional: true, required: false
  private _confidentialComputeType?: string; 
  public get confidentialComputeType() {
    return this.getStringAttribute('confidential_compute_type');
  }
  public set confidentialComputeType(value: string) {
    this._confidentialComputeType = value;
  }
  public resetConfidentialComputeType() {
    this._confidentialComputeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialComputeTypeInput() {
    return this._confidentialComputeType;
  }

  // first_on_demand - computed: false, optional: true, required: false
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

  // google_service_account - computed: false, optional: true, required: false
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

  // local_ssd_count - computed: false, optional: true, required: false
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

  // use_preemptible_executors - computed: false, optional: true, required: false
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

  // zone_id - computed: false, optional: true, required: false
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
export interface JobTaskNewClusterInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsAbfssToTerraform(struct?: JobTaskNewClusterInitScriptsAbfssOutputReference | JobTaskNewClusterInitScriptsAbfss): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsAbfssToHclTerraform(struct?: JobTaskNewClusterInitScriptsAbfssOutputReference | JobTaskNewClusterInitScriptsAbfss): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class JobTaskNewClusterInitScriptsAbfssOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsAbfss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsAbfss | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
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
export interface JobTaskNewClusterInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsDbfsToTerraform(struct?: JobTaskNewClusterInitScriptsDbfsOutputReference | JobTaskNewClusterInitScriptsDbfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsDbfsToHclTerraform(struct?: JobTaskNewClusterInitScriptsDbfsOutputReference | JobTaskNewClusterInitScriptsDbfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class JobTaskNewClusterInitScriptsDbfsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
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
export interface JobTaskNewClusterInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsFileToTerraform(struct?: JobTaskNewClusterInitScriptsFileOutputReference | JobTaskNewClusterInitScriptsFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsFileToHclTerraform(struct?: JobTaskNewClusterInitScriptsFileOutputReference | JobTaskNewClusterInitScriptsFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class JobTaskNewClusterInitScriptsFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
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
export interface JobTaskNewClusterInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsGcsToTerraform(struct?: JobTaskNewClusterInitScriptsGcsOutputReference | JobTaskNewClusterInitScriptsGcs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsGcsToHclTerraform(struct?: JobTaskNewClusterInitScriptsGcsOutputReference | JobTaskNewClusterInitScriptsGcs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class JobTaskNewClusterInitScriptsGcsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
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
export interface JobTaskNewClusterInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobTaskNewClusterInitScriptsS3ToTerraform(struct?: JobTaskNewClusterInitScriptsS3OutputReference | JobTaskNewClusterInitScriptsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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


export function jobTaskNewClusterInitScriptsS3ToHclTerraform(struct?: JobTaskNewClusterInitScriptsS3OutputReference | JobTaskNewClusterInitScriptsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class JobTaskNewClusterInitScriptsS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsS3 | undefined {
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

  public set internalValue(value: JobTaskNewClusterInitScriptsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
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

  // destination - computed: false, optional: false, required: true
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

  // enable_encryption - computed: false, optional: true, required: false
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

  // encryption_type - computed: false, optional: true, required: false
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

  // endpoint - computed: false, optional: true, required: false
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

  // kms_key - computed: false, optional: true, required: false
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
}
export interface JobTaskNewClusterInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsVolumesToTerraform(struct?: JobTaskNewClusterInitScriptsVolumesOutputReference | JobTaskNewClusterInitScriptsVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsVolumesToHclTerraform(struct?: JobTaskNewClusterInitScriptsVolumesOutputReference | JobTaskNewClusterInitScriptsVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class JobTaskNewClusterInitScriptsVolumesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
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
export interface JobTaskNewClusterInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsWorkspaceToTerraform(struct?: JobTaskNewClusterInitScriptsWorkspaceOutputReference | JobTaskNewClusterInitScriptsWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct?: JobTaskNewClusterInitScriptsWorkspaceOutputReference | JobTaskNewClusterInitScriptsWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class JobTaskNewClusterInitScriptsWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
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
export interface JobTaskNewClusterInitScripts {
  /**
  * abfss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#abfss Job#abfss}
  */
  readonly abfss?: JobTaskNewClusterInitScriptsAbfss;
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobTaskNewClusterInitScriptsDbfs;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#file Job#file}
  */
  readonly file?: JobTaskNewClusterInitScriptsFile;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#gcs Job#gcs}
  */
  readonly gcs?: JobTaskNewClusterInitScriptsGcs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobTaskNewClusterInitScriptsS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobTaskNewClusterInitScriptsVolumes;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#workspace Job#workspace}
  */
  readonly workspace?: JobTaskNewClusterInitScriptsWorkspace;
}

export function jobTaskNewClusterInitScriptsToTerraform(struct?: JobTaskNewClusterInitScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    abfss: jobTaskNewClusterInitScriptsAbfssToTerraform(struct!.abfss),
    dbfs: jobTaskNewClusterInitScriptsDbfsToTerraform(struct!.dbfs),
    file: jobTaskNewClusterInitScriptsFileToTerraform(struct!.file),
    gcs: jobTaskNewClusterInitScriptsGcsToTerraform(struct!.gcs),
    s3: jobTaskNewClusterInitScriptsS3ToTerraform(struct!.s3),
    volumes: jobTaskNewClusterInitScriptsVolumesToTerraform(struct!.volumes),
    workspace: jobTaskNewClusterInitScriptsWorkspaceToTerraform(struct!.workspace),
  }
}


export function jobTaskNewClusterInitScriptsToHclTerraform(struct?: JobTaskNewClusterInitScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    abfss: {
      value: jobTaskNewClusterInitScriptsAbfssToHclTerraform(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsAbfssList",
    },
    dbfs: {
      value: jobTaskNewClusterInitScriptsDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsDbfsList",
    },
    file: {
      value: jobTaskNewClusterInitScriptsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsFileList",
    },
    gcs: {
      value: jobTaskNewClusterInitScriptsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsGcsList",
    },
    s3: {
      value: jobTaskNewClusterInitScriptsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsS3List",
    },
    volumes: {
      value: jobTaskNewClusterInitScriptsVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsVolumesList",
    },
    workspace: {
      value: jobTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterInitScriptsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskNewClusterInitScripts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: JobTaskNewClusterInitScripts | cdktn.IResolvable | undefined) {
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

  // abfss - computed: false, optional: true, required: false
  private _abfss = new JobTaskNewClusterInitScriptsAbfssOutputReference(this, "abfss");
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: JobTaskNewClusterInitScriptsAbfss) {
    this._abfss.internalValue = value;
  }
  public resetAbfss() {
    this._abfss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abfssInput() {
    return this._abfss.internalValue;
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new JobTaskNewClusterInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobTaskNewClusterInitScriptsDbfs) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new JobTaskNewClusterInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobTaskNewClusterInitScriptsFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new JobTaskNewClusterInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: JobTaskNewClusterInitScriptsGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new JobTaskNewClusterInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobTaskNewClusterInitScriptsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new JobTaskNewClusterInitScriptsVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobTaskNewClusterInitScriptsVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new JobTaskNewClusterInitScriptsWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: JobTaskNewClusterInitScriptsWorkspace) {
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

export class JobTaskNewClusterInitScriptsList extends cdktn.ComplexList {
  public internalValue? : JobTaskNewClusterInitScripts[] | cdktn.IResolvable

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
  public get(index: number): JobTaskNewClusterInitScriptsOutputReference {
    return new JobTaskNewClusterInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskNewClusterLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskNewClusterLibraryCranToTerraform(struct?: JobTaskNewClusterLibraryCranOutputReference | JobTaskNewClusterLibraryCran): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function jobTaskNewClusterLibraryCranToHclTerraform(struct?: JobTaskNewClusterLibraryCranOutputReference | JobTaskNewClusterLibraryCran): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    package: {
      value: cdktn.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktn.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterLibraryCranOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterLibraryCran | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterLibraryCran | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._package = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._package = value.package;
      this._repo = value.repo;
    }
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface JobTaskNewClusterLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#coordinates Job#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#exclusions Job#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskNewClusterLibraryMavenToTerraform(struct?: JobTaskNewClusterLibraryMavenOutputReference | JobTaskNewClusterLibraryMaven): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    coordinates: cdktn.stringToTerraform(struct!.coordinates),
    exclusions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusions),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function jobTaskNewClusterLibraryMavenToHclTerraform(struct?: JobTaskNewClusterLibraryMavenOutputReference | JobTaskNewClusterLibraryMaven): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    coordinates: {
      value: cdktn.stringToHclTerraform(struct!.coordinates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repo: {
      value: cdktn.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterLibraryMavenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterLibraryMaven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinates !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinates = this._coordinates;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterLibraryMaven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coordinates = undefined;
      this._exclusions = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coordinates = value.coordinates;
      this._exclusions = value.exclusions;
      this._repo = value.repo;
    }
  }

  // coordinates - computed: false, optional: false, required: true
  private _coordinates?: string; 
  public get coordinates() {
    return this.getStringAttribute('coordinates');
  }
  public set coordinates(value: string) {
    this._coordinates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface JobTaskNewClusterLibraryProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#workspace_id Job#workspace_id}
  */
  readonly workspaceId?: string;
}

export function jobTaskNewClusterLibraryProviderConfigToTerraform(struct?: JobTaskNewClusterLibraryProviderConfigOutputReference | JobTaskNewClusterLibraryProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function jobTaskNewClusterLibraryProviderConfigToHclTerraform(struct?: JobTaskNewClusterLibraryProviderConfigOutputReference | JobTaskNewClusterLibraryProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class JobTaskNewClusterLibraryProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterLibraryProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterLibraryProviderConfig | undefined) {
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
export interface JobTaskNewClusterLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskNewClusterLibraryPypiToTerraform(struct?: JobTaskNewClusterLibraryPypiOutputReference | JobTaskNewClusterLibraryPypi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function jobTaskNewClusterLibraryPypiToHclTerraform(struct?: JobTaskNewClusterLibraryPypiOutputReference | JobTaskNewClusterLibraryPypi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    package: {
      value: cdktn.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktn.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterLibraryPypiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterLibraryPypi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterLibraryPypi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._package = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._package = value.package;
      this._repo = value.repo;
    }
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface JobTaskNewClusterLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobTaskNewClusterLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobTaskNewClusterLibraryMaven;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#provider_config Job#provider_config}
  */
  readonly providerConfig?: JobTaskNewClusterLibraryProviderConfig;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobTaskNewClusterLibraryPypi;
}

export function jobTaskNewClusterLibraryToTerraform(struct?: JobTaskNewClusterLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    egg: cdktn.stringToTerraform(struct!.egg),
    jar: cdktn.stringToTerraform(struct!.jar),
    requirements: cdktn.stringToTerraform(struct!.requirements),
    whl: cdktn.stringToTerraform(struct!.whl),
    cran: jobTaskNewClusterLibraryCranToTerraform(struct!.cran),
    maven: jobTaskNewClusterLibraryMavenToTerraform(struct!.maven),
    provider_config: jobTaskNewClusterLibraryProviderConfigToTerraform(struct!.providerConfig),
    pypi: jobTaskNewClusterLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobTaskNewClusterLibraryToHclTerraform(struct?: JobTaskNewClusterLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    egg: {
      value: cdktn.stringToHclTerraform(struct!.egg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jar: {
      value: cdktn.stringToHclTerraform(struct!.jar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirements: {
      value: cdktn.stringToHclTerraform(struct!.requirements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whl: {
      value: cdktn.stringToHclTerraform(struct!.whl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cran: {
      value: jobTaskNewClusterLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterLibraryCranList",
    },
    maven: {
      value: jobTaskNewClusterLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterLibraryMavenList",
    },
    provider_config: {
      value: jobTaskNewClusterLibraryProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterLibraryProviderConfigList",
    },
    pypi: {
      value: jobTaskNewClusterLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterLibraryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskNewClusterLibrary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egg !== undefined) {
      hasAnyValues = true;
      internalValueResult.egg = this._egg;
    }
    if (this._jar !== undefined) {
      hasAnyValues = true;
      internalValueResult.jar = this._jar;
    }
    if (this._requirements !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirements = this._requirements;
    }
    if (this._whl !== undefined) {
      hasAnyValues = true;
      internalValueResult.whl = this._whl;
    }
    if (this._cran?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cran = this._cran?.internalValue;
    }
    if (this._maven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maven = this._maven?.internalValue;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    if (this._pypi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pypi = this._pypi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterLibrary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egg = undefined;
      this._jar = undefined;
      this._requirements = undefined;
      this._whl = undefined;
      this._cran.internalValue = undefined;
      this._maven.internalValue = undefined;
      this._providerConfig.internalValue = undefined;
      this._pypi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egg = value.egg;
      this._jar = value.jar;
      this._requirements = value.requirements;
      this._whl = value.whl;
      this._cran.internalValue = value.cran;
      this._maven.internalValue = value.maven;
      this._providerConfig.internalValue = value.providerConfig;
      this._pypi.internalValue = value.pypi;
    }
  }

  // egg - computed: false, optional: true, required: false
  private _egg?: string; 
  public get egg() {
    return this.getStringAttribute('egg');
  }
  public set egg(value: string) {
    this._egg = value;
  }
  public resetEgg() {
    this._egg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eggInput() {
    return this._egg;
  }

  // jar - computed: false, optional: true, required: false
  private _jar?: string; 
  public get jar() {
    return this.getStringAttribute('jar');
  }
  public set jar(value: string) {
    this._jar = value;
  }
  public resetJar() {
    this._jar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarInput() {
    return this._jar;
  }

  // requirements - computed: false, optional: true, required: false
  private _requirements?: string; 
  public get requirements() {
    return this.getStringAttribute('requirements');
  }
  public set requirements(value: string) {
    this._requirements = value;
  }
  public resetRequirements() {
    this._requirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements;
  }

  // whl - computed: false, optional: true, required: false
  private _whl?: string; 
  public get whl() {
    return this.getStringAttribute('whl');
  }
  public set whl(value: string) {
    this._whl = value;
  }
  public resetWhl() {
    this._whl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whlInput() {
    return this._whl;
  }

  // cran - computed: false, optional: true, required: false
  private _cran = new JobTaskNewClusterLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobTaskNewClusterLibraryCran) {
    this._cran.internalValue = value;
  }
  public resetCran() {
    this._cran.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cranInput() {
    return this._cran.internalValue;
  }

  // maven - computed: false, optional: true, required: false
  private _maven = new JobTaskNewClusterLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobTaskNewClusterLibraryMaven) {
    this._maven.internalValue = value;
  }
  public resetMaven() {
    this._maven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenInput() {
    return this._maven.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new JobTaskNewClusterLibraryProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: JobTaskNewClusterLibraryProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // pypi - computed: false, optional: true, required: false
  private _pypi = new JobTaskNewClusterLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobTaskNewClusterLibraryPypi) {
    this._pypi.internalValue = value;
  }
  public resetPypi() {
    this._pypi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pypiInput() {
    return this._pypi.internalValue;
  }
}

export class JobTaskNewClusterLibraryList extends cdktn.ComplexList {
  public internalValue? : JobTaskNewClusterLibrary[] | cdktn.IResolvable

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
  public get(index: number): JobTaskNewClusterLibraryOutputReference {
    return new JobTaskNewClusterLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskNewClusterProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#workspace_id Job#workspace_id}
  */
  readonly workspaceId?: string;
}

export function jobTaskNewClusterProviderConfigToTerraform(struct?: JobTaskNewClusterProviderConfigOutputReference | JobTaskNewClusterProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function jobTaskNewClusterProviderConfigToHclTerraform(struct?: JobTaskNewClusterProviderConfigOutputReference | JobTaskNewClusterProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class JobTaskNewClusterProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterProviderConfig | undefined) {
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
export interface JobTaskNewClusterWorkerNodeTypeFlexibility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#alternate_node_type_ids Job#alternate_node_type_ids}
  */
  readonly alternateNodeTypeIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#aws_context_id Job#aws_context_id}
  */
  readonly awsContextId?: string;
}

export function jobTaskNewClusterWorkerNodeTypeFlexibilityToTerraform(struct?: JobTaskNewClusterWorkerNodeTypeFlexibilityOutputReference | JobTaskNewClusterWorkerNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alternate_node_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alternateNodeTypeIds),
    aws_context_id: cdktn.stringToTerraform(struct!.awsContextId),
  }
}


export function jobTaskNewClusterWorkerNodeTypeFlexibilityToHclTerraform(struct?: JobTaskNewClusterWorkerNodeTypeFlexibilityOutputReference | JobTaskNewClusterWorkerNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alternate_node_type_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alternateNodeTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    aws_context_id: {
      value: cdktn.stringToHclTerraform(struct!.awsContextId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterWorkerNodeTypeFlexibilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterWorkerNodeTypeFlexibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNodeTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNodeTypeIds = this._alternateNodeTypeIds;
    }
    if (this._awsContextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsContextId = this._awsContextId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterWorkerNodeTypeFlexibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alternateNodeTypeIds = undefined;
      this._awsContextId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alternateNodeTypeIds = value.alternateNodeTypeIds;
      this._awsContextId = value.awsContextId;
    }
  }

  // alternate_node_type_ids - computed: false, optional: true, required: false
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

  // aws_context_id - computed: false, optional: true, required: false
  private _awsContextId?: string; 
  public get awsContextId() {
    return this.getStringAttribute('aws_context_id');
  }
  public set awsContextId(value: string) {
    this._awsContextId = value;
  }
  public resetAwsContextId() {
    this._awsContextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsContextIdInput() {
    return this._awsContextId;
  }
}
export interface JobTaskNewClusterWorkloadTypeClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#jobs Job#jobs}
  */
  readonly jobs?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#notebooks Job#notebooks}
  */
  readonly notebooks?: boolean | cdktn.IResolvable;
}

export function jobTaskNewClusterWorkloadTypeClientsToTerraform(struct?: JobTaskNewClusterWorkloadTypeClientsOutputReference | JobTaskNewClusterWorkloadTypeClients): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    jobs: cdktn.booleanToTerraform(struct!.jobs),
    notebooks: cdktn.booleanToTerraform(struct!.notebooks),
  }
}


export function jobTaskNewClusterWorkloadTypeClientsToHclTerraform(struct?: JobTaskNewClusterWorkloadTypeClientsOutputReference | JobTaskNewClusterWorkloadTypeClients): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class JobTaskNewClusterWorkloadTypeClientsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterWorkloadTypeClients | undefined {
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

  public set internalValue(value: JobTaskNewClusterWorkloadTypeClients | undefined) {
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

  // jobs - computed: false, optional: true, required: false
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

  // notebooks - computed: false, optional: true, required: false
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
export interface JobTaskNewClusterWorkloadType {
  /**
  * clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#clients Job#clients}
  */
  readonly clients: JobTaskNewClusterWorkloadTypeClients;
}

export function jobTaskNewClusterWorkloadTypeToTerraform(struct?: JobTaskNewClusterWorkloadTypeOutputReference | JobTaskNewClusterWorkloadType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clients: jobTaskNewClusterWorkloadTypeClientsToTerraform(struct!.clients),
  }
}


export function jobTaskNewClusterWorkloadTypeToHclTerraform(struct?: JobTaskNewClusterWorkloadTypeOutputReference | JobTaskNewClusterWorkloadType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clients: {
      value: jobTaskNewClusterWorkloadTypeClientsToHclTerraform(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterWorkloadTypeClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterWorkloadTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterWorkloadType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterWorkloadType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clients.internalValue = value.clients;
    }
  }

  // clients - computed: false, optional: false, required: true
  private _clients = new JobTaskNewClusterWorkloadTypeClientsOutputReference(this, "clients");
  public get clients() {
    return this._clients;
  }
  public putClients(value: JobTaskNewClusterWorkloadTypeClients) {
    this._clients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }
}
export interface JobTaskNewCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#__apply_policy_default_values_allow_list Job#__apply_policy_default_values_allow_list}
  */
  readonly applyPolicyDefaultValuesAllowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#apply_policy_default_values Job#apply_policy_default_values}
  */
  readonly applyPolicyDefaultValues?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#cluster_id Job#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#cluster_name Job#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#custom_tags Job#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#data_security_mode Job#data_security_mode}
  */
  readonly dataSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#dependency_mode Job#dependency_mode}
  */
  readonly dependencyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#driver_instance_pool_id Job#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#driver_node_type_id Job#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#enable_elastic_disk Job#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#enable_local_disk_encryption Job#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#idempotency_token Job#idempotency_token}
  */
  readonly idempotencyToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#instance_pool_id Job#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#is_single_node Job#is_single_node}
  */
  readonly isSingleNode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#kind Job#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#node_type_id Job#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#num_workers Job#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#policy_id Job#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#remote_disk_throughput Job#remote_disk_throughput}
  */
  readonly remoteDiskThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#runtime_engine Job#runtime_engine}
  */
  readonly runtimeEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#single_user_name Job#single_user_name}
  */
  readonly singleUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#spark_conf Job#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#spark_env_vars Job#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#spark_version Job#spark_version}
  */
  readonly sparkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#ssh_public_keys Job#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#total_initial_remote_disk_size Job#total_initial_remote_disk_size}
  */
  readonly totalInitialRemoteDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#use_ml_runtime Job#use_ml_runtime}
  */
  readonly useMlRuntime?: boolean | cdktn.IResolvable;
  /**
  * autoscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#autoscale Job#autoscale}
  */
  readonly autoscale?: JobTaskNewClusterAutoscale;
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#aws_attributes Job#aws_attributes}
  */
  readonly awsAttributes?: JobTaskNewClusterAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#azure_attributes Job#azure_attributes}
  */
  readonly azureAttributes?: JobTaskNewClusterAzureAttributes;
  /**
  * cluster_log_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#cluster_log_conf Job#cluster_log_conf}
  */
  readonly clusterLogConf?: JobTaskNewClusterClusterLogConf;
  /**
  * cluster_mount_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#cluster_mount_info Job#cluster_mount_info}
  */
  readonly clusterMountInfo?: JobTaskNewClusterClusterMountInfo[] | cdktn.IResolvable;
  /**
  * docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#docker_image Job#docker_image}
  */
  readonly dockerImage?: JobTaskNewClusterDockerImage;
  /**
  * driver_node_type_flexibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#driver_node_type_flexibility Job#driver_node_type_flexibility}
  */
  readonly driverNodeTypeFlexibility?: JobTaskNewClusterDriverNodeTypeFlexibility;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#gcp_attributes Job#gcp_attributes}
  */
  readonly gcpAttributes?: JobTaskNewClusterGcpAttributes;
  /**
  * init_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#init_scripts Job#init_scripts}
  */
  readonly initScripts?: JobTaskNewClusterInitScripts[] | cdktn.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#library Job#library}
  */
  readonly library?: JobTaskNewClusterLibrary[] | cdktn.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#provider_config Job#provider_config}
  */
  readonly providerConfig?: JobTaskNewClusterProviderConfig;
  /**
  * worker_node_type_flexibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#worker_node_type_flexibility Job#worker_node_type_flexibility}
  */
  readonly workerNodeTypeFlexibility?: JobTaskNewClusterWorkerNodeTypeFlexibility;
  /**
  * workload_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#workload_type Job#workload_type}
  */
  readonly workloadType?: JobTaskNewClusterWorkloadType;
}

export function jobTaskNewClusterToTerraform(struct?: JobTaskNewClusterOutputReference | JobTaskNewCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    __apply_policy_default_values_allow_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.applyPolicyDefaultValuesAllowList),
    apply_policy_default_values: cdktn.booleanToTerraform(struct!.applyPolicyDefaultValues),
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
    cluster_name: cdktn.stringToTerraform(struct!.clusterName),
    custom_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customTags),
    data_security_mode: cdktn.stringToTerraform(struct!.dataSecurityMode),
    dependency_mode: cdktn.stringToTerraform(struct!.dependencyMode),
    driver_instance_pool_id: cdktn.stringToTerraform(struct!.driverInstancePoolId),
    driver_node_type_id: cdktn.stringToTerraform(struct!.driverNodeTypeId),
    enable_elastic_disk: cdktn.booleanToTerraform(struct!.enableElasticDisk),
    enable_local_disk_encryption: cdktn.booleanToTerraform(struct!.enableLocalDiskEncryption),
    idempotency_token: cdktn.stringToTerraform(struct!.idempotencyToken),
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
    autoscale: jobTaskNewClusterAutoscaleToTerraform(struct!.autoscale),
    aws_attributes: jobTaskNewClusterAwsAttributesToTerraform(struct!.awsAttributes),
    azure_attributes: jobTaskNewClusterAzureAttributesToTerraform(struct!.azureAttributes),
    cluster_log_conf: jobTaskNewClusterClusterLogConfToTerraform(struct!.clusterLogConf),
    cluster_mount_info: cdktn.listMapper(jobTaskNewClusterClusterMountInfoToTerraform, true)(struct!.clusterMountInfo),
    docker_image: jobTaskNewClusterDockerImageToTerraform(struct!.dockerImage),
    driver_node_type_flexibility: jobTaskNewClusterDriverNodeTypeFlexibilityToTerraform(struct!.driverNodeTypeFlexibility),
    gcp_attributes: jobTaskNewClusterGcpAttributesToTerraform(struct!.gcpAttributes),
    init_scripts: cdktn.listMapper(jobTaskNewClusterInitScriptsToTerraform, true)(struct!.initScripts),
    library: cdktn.listMapper(jobTaskNewClusterLibraryToTerraform, true)(struct!.library),
    provider_config: jobTaskNewClusterProviderConfigToTerraform(struct!.providerConfig),
    worker_node_type_flexibility: jobTaskNewClusterWorkerNodeTypeFlexibilityToTerraform(struct!.workerNodeTypeFlexibility),
    workload_type: jobTaskNewClusterWorkloadTypeToTerraform(struct!.workloadType),
  }
}


export function jobTaskNewClusterToHclTerraform(struct?: JobTaskNewClusterOutputReference | JobTaskNewCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    __apply_policy_default_values_allow_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.applyPolicyDefaultValuesAllowList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    apply_policy_default_values: {
      value: cdktn.booleanToHclTerraform(struct!.applyPolicyDefaultValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    dependency_mode: {
      value: cdktn.stringToHclTerraform(struct!.dependencyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_instance_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.driverInstancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    idempotency_token: {
      value: cdktn.stringToHclTerraform(struct!.idempotencyToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    autoscale: {
      value: jobTaskNewClusterAutoscaleToHclTerraform(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterAutoscaleList",
    },
    aws_attributes: {
      value: jobTaskNewClusterAwsAttributesToHclTerraform(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterAwsAttributesList",
    },
    azure_attributes: {
      value: jobTaskNewClusterAzureAttributesToHclTerraform(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterAzureAttributesList",
    },
    cluster_log_conf: {
      value: jobTaskNewClusterClusterLogConfToHclTerraform(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterLogConfList",
    },
    cluster_mount_info: {
      value: cdktn.listMapperHcl(jobTaskNewClusterClusterMountInfoToHclTerraform, true)(struct!.clusterMountInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterMountInfoList",
    },
    docker_image: {
      value: jobTaskNewClusterDockerImageToHclTerraform(struct!.dockerImage),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterDockerImageList",
    },
    driver_node_type_flexibility: {
      value: jobTaskNewClusterDriverNodeTypeFlexibilityToHclTerraform(struct!.driverNodeTypeFlexibility),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterDriverNodeTypeFlexibilityList",
    },
    gcp_attributes: {
      value: jobTaskNewClusterGcpAttributesToHclTerraform(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterGcpAttributesList",
    },
    init_scripts: {
      value: cdktn.listMapperHcl(jobTaskNewClusterInitScriptsToHclTerraform, true)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsList",
    },
    library: {
      value: cdktn.listMapperHcl(jobTaskNewClusterLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "set",
      storageClassType: "JobTaskNewClusterLibraryList",
    },
    provider_config: {
      value: jobTaskNewClusterProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterProviderConfigList",
    },
    worker_node_type_flexibility: {
      value: jobTaskNewClusterWorkerNodeTypeFlexibilityToHclTerraform(struct!.workerNodeTypeFlexibility),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterWorkerNodeTypeFlexibilityList",
    },
    workload_type: {
      value: jobTaskNewClusterWorkloadTypeToHclTerraform(struct!.workloadType),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterWorkloadTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyDefaultValuesAllowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValuesAllowList = this._applyPolicyDefaultValuesAllowList;
    }
    if (this._applyPolicyDefaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValues = this._applyPolicyDefaultValues;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
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
    if (this._dependencyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyMode = this._dependencyMode;
    }
    if (this._driverInstancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverInstancePoolId = this._driverInstancePoolId;
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
    if (this._idempotencyToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.idempotencyToken = this._idempotencyToken;
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
    if (this._autoscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale?.internalValue;
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
    if (this._clusterMountInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMountInfo = this._clusterMountInfo?.internalValue;
    }
    if (this._dockerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage?.internalValue;
    }
    if (this._driverNodeTypeFlexibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeFlexibility = this._driverNodeTypeFlexibility?.internalValue;
    }
    if (this._gcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAttributes = this._gcpAttributes?.internalValue;
    }
    if (this._initScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScripts = this._initScripts?.internalValue;
    }
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
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

  public set internalValue(value: JobTaskNewCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyPolicyDefaultValuesAllowList = undefined;
      this._applyPolicyDefaultValues = undefined;
      this._clusterId = undefined;
      this._clusterName = undefined;
      this._customTags = undefined;
      this._dataSecurityMode = undefined;
      this._dependencyMode = undefined;
      this._driverInstancePoolId = undefined;
      this._driverNodeTypeId = undefined;
      this._enableElasticDisk = undefined;
      this._enableLocalDiskEncryption = undefined;
      this._idempotencyToken = undefined;
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
      this._autoscale.internalValue = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._clusterMountInfo.internalValue = undefined;
      this._dockerImage.internalValue = undefined;
      this._driverNodeTypeFlexibility.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
      this._library.internalValue = undefined;
      this._providerConfig.internalValue = undefined;
      this._workerNodeTypeFlexibility.internalValue = undefined;
      this._workloadType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyPolicyDefaultValuesAllowList = value.applyPolicyDefaultValuesAllowList;
      this._applyPolicyDefaultValues = value.applyPolicyDefaultValues;
      this._clusterId = value.clusterId;
      this._clusterName = value.clusterName;
      this._customTags = value.customTags;
      this._dataSecurityMode = value.dataSecurityMode;
      this._dependencyMode = value.dependencyMode;
      this._driverInstancePoolId = value.driverInstancePoolId;
      this._driverNodeTypeId = value.driverNodeTypeId;
      this._enableElasticDisk = value.enableElasticDisk;
      this._enableLocalDiskEncryption = value.enableLocalDiskEncryption;
      this._idempotencyToken = value.idempotencyToken;
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
      this._autoscale.internalValue = value.autoscale;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._clusterMountInfo.internalValue = value.clusterMountInfo;
      this._dockerImage.internalValue = value.dockerImage;
      this._driverNodeTypeFlexibility.internalValue = value.driverNodeTypeFlexibility;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
      this._library.internalValue = value.library;
      this._providerConfig.internalValue = value.providerConfig;
      this._workerNodeTypeFlexibility.internalValue = value.workerNodeTypeFlexibility;
      this._workloadType.internalValue = value.workloadType;
    }
  }

  // __apply_policy_default_values_allow_list - computed: false, optional: true, required: false
  private _applyPolicyDefaultValuesAllowList?: string[]; 
  public get applyPolicyDefaultValuesAllowList() {
    return this.getListAttribute('__apply_policy_default_values_allow_list');
  }
  public set applyPolicyDefaultValuesAllowList(value: string[]) {
    this._applyPolicyDefaultValuesAllowList = value;
  }
  public resetApplyPolicyDefaultValuesAllowList() {
    this._applyPolicyDefaultValuesAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyDefaultValuesAllowListInput() {
    return this._applyPolicyDefaultValuesAllowList;
  }

  // apply_policy_default_values - computed: false, optional: true, required: false
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

  // cluster_id - computed: false, optional: true, required: false
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

  // cluster_name - computed: false, optional: true, required: false
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

  // data_security_mode - computed: false, optional: true, required: false
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

  // dependency_mode - computed: false, optional: true, required: false
  private _dependencyMode?: string; 
  public get dependencyMode() {
    return this.getStringAttribute('dependency_mode');
  }
  public set dependencyMode(value: string) {
    this._dependencyMode = value;
  }
  public resetDependencyMode() {
    this._dependencyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyModeInput() {
    return this._dependencyMode;
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

  // idempotency_token - computed: false, optional: true, required: false
  private _idempotencyToken?: string; 
  public get idempotencyToken() {
    return this.getStringAttribute('idempotency_token');
  }
  public set idempotencyToken(value: string) {
    this._idempotencyToken = value;
  }
  public resetIdempotencyToken() {
    this._idempotencyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idempotencyTokenInput() {
    return this._idempotencyToken;
  }

  // instance_pool_id - computed: false, optional: true, required: false
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

  // is_single_node - computed: false, optional: true, required: false
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

  // kind - computed: false, optional: true, required: false
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

  // num_workers - computed: false, optional: true, required: false
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

  // policy_id - computed: false, optional: true, required: false
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

  // remote_disk_throughput - computed: false, optional: true, required: false
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

  // runtime_engine - computed: false, optional: true, required: false
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

  // single_user_name - computed: false, optional: true, required: false
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

  // spark_conf - computed: false, optional: true, required: false
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

  // spark_env_vars - computed: false, optional: true, required: false
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

  // spark_version - computed: false, optional: true, required: false
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

  // ssh_public_keys - computed: false, optional: true, required: false
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

  // total_initial_remote_disk_size - computed: false, optional: true, required: false
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

  // use_ml_runtime - computed: false, optional: true, required: false
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

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new JobTaskNewClusterAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: JobTaskNewClusterAutoscale) {
    this._autoscale.internalValue = value;
  }
  public resetAutoscale() {
    this._autoscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale.internalValue;
  }

  // aws_attributes - computed: false, optional: true, required: false
  private _awsAttributes = new JobTaskNewClusterAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: JobTaskNewClusterAwsAttributes) {
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
  private _azureAttributes = new JobTaskNewClusterAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: JobTaskNewClusterAzureAttributes) {
    this._azureAttributes.internalValue = value;
  }
  public resetAzureAttributes() {
    this._azureAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAttributesInput() {
    return this._azureAttributes.internalValue;
  }

  // cluster_log_conf - computed: false, optional: true, required: false
  private _clusterLogConf = new JobTaskNewClusterClusterLogConfOutputReference(this, "cluster_log_conf");
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: JobTaskNewClusterClusterLogConf) {
    this._clusterLogConf.internalValue = value;
  }
  public resetClusterLogConf() {
    this._clusterLogConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogConfInput() {
    return this._clusterLogConf.internalValue;
  }

  // cluster_mount_info - computed: false, optional: true, required: false
  private _clusterMountInfo = new JobTaskNewClusterClusterMountInfoList(this, "cluster_mount_info", false);
  public get clusterMountInfo() {
    return this._clusterMountInfo;
  }
  public putClusterMountInfo(value: JobTaskNewClusterClusterMountInfo[] | cdktn.IResolvable) {
    this._clusterMountInfo.internalValue = value;
  }
  public resetClusterMountInfo() {
    this._clusterMountInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMountInfoInput() {
    return this._clusterMountInfo.internalValue;
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage = new JobTaskNewClusterDockerImageOutputReference(this, "docker_image");
  public get dockerImage() {
    return this._dockerImage;
  }
  public putDockerImage(value: JobTaskNewClusterDockerImage) {
    this._dockerImage.internalValue = value;
  }
  public resetDockerImage() {
    this._dockerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage.internalValue;
  }

  // driver_node_type_flexibility - computed: false, optional: true, required: false
  private _driverNodeTypeFlexibility = new JobTaskNewClusterDriverNodeTypeFlexibilityOutputReference(this, "driver_node_type_flexibility");
  public get driverNodeTypeFlexibility() {
    return this._driverNodeTypeFlexibility;
  }
  public putDriverNodeTypeFlexibility(value: JobTaskNewClusterDriverNodeTypeFlexibility) {
    this._driverNodeTypeFlexibility.internalValue = value;
  }
  public resetDriverNodeTypeFlexibility() {
    this._driverNodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeFlexibilityInput() {
    return this._driverNodeTypeFlexibility.internalValue;
  }

  // gcp_attributes - computed: false, optional: true, required: false
  private _gcpAttributes = new JobTaskNewClusterGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: JobTaskNewClusterGcpAttributes) {
    this._gcpAttributes.internalValue = value;
  }
  public resetGcpAttributes() {
    this._gcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAttributesInput() {
    return this._gcpAttributes.internalValue;
  }

  // init_scripts - computed: false, optional: true, required: false
  private _initScripts = new JobTaskNewClusterInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: JobTaskNewClusterInitScripts[] | cdktn.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new JobTaskNewClusterLibraryList(this, "library", true);
  public get library() {
    return this._library;
  }
  public putLibrary(value: JobTaskNewClusterLibrary[] | cdktn.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new JobTaskNewClusterProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: JobTaskNewClusterProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // worker_node_type_flexibility - computed: false, optional: true, required: false
  private _workerNodeTypeFlexibility = new JobTaskNewClusterWorkerNodeTypeFlexibilityOutputReference(this, "worker_node_type_flexibility");
  public get workerNodeTypeFlexibility() {
    return this._workerNodeTypeFlexibility;
  }
  public putWorkerNodeTypeFlexibility(value: JobTaskNewClusterWorkerNodeTypeFlexibility) {
    this._workerNodeTypeFlexibility.internalValue = value;
  }
  public resetWorkerNodeTypeFlexibility() {
    this._workerNodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeTypeFlexibilityInput() {
    return this._workerNodeTypeFlexibility.internalValue;
  }

  // workload_type - computed: false, optional: true, required: false
  private _workloadType = new JobTaskNewClusterWorkloadTypeOutputReference(this, "workload_type");
  public get workloadType() {
    return this._workloadType;
  }
  public putWorkloadType(value: JobTaskNewClusterWorkloadType) {
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
export interface JobTaskNotebookTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#base_parameters Job#base_parameters}
  */
  readonly baseParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#notebook_path Job#notebook_path}
  */
  readonly notebookPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function jobTaskNotebookTaskToTerraform(struct?: JobTaskNotebookTaskOutputReference | JobTaskNotebookTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.baseParameters),
    notebook_path: cdktn.stringToTerraform(struct!.notebookPath),
    source: cdktn.stringToTerraform(struct!.source),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
  }
}


export function jobTaskNotebookTaskToHclTerraform(struct?: JobTaskNotebookTaskOutputReference | JobTaskNotebookTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.baseParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    notebook_path: {
      value: cdktn.stringToHclTerraform(struct!.notebookPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNotebookTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNotebookTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseParameters = this._baseParameters;
    }
    if (this._notebookPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookPath = this._notebookPath;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNotebookTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseParameters = undefined;
      this._notebookPath = undefined;
      this._source = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseParameters = value.baseParameters;
      this._notebookPath = value.notebookPath;
      this._source = value.source;
      this._warehouseId = value.warehouseId;
    }
  }

  // base_parameters - computed: false, optional: true, required: false
  private _baseParameters?: { [key: string]: string }; 
  public get baseParameters() {
    return this.getStringMapAttribute('base_parameters');
  }
  public set baseParameters(value: { [key: string]: string }) {
    this._baseParameters = value;
  }
  public resetBaseParameters() {
    this._baseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseParametersInput() {
    return this._baseParameters;
  }

  // notebook_path - computed: false, optional: false, required: true
  private _notebookPath?: string; 
  public get notebookPath() {
    return this.getStringAttribute('notebook_path');
  }
  public set notebookPath(value: string) {
    this._notebookPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookPathInput() {
    return this._notebookPath;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // warehouse_id - computed: false, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }
}
export interface JobTaskNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#alert_on_last_attempt Job#alert_on_last_attempt}
  */
  readonly alertOnLastAttempt?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#no_alert_for_canceled_runs Job#no_alert_for_canceled_runs}
  */
  readonly noAlertForCanceledRuns?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#no_alert_for_skipped_runs Job#no_alert_for_skipped_runs}
  */
  readonly noAlertForSkippedRuns?: boolean | cdktn.IResolvable;
}

export function jobTaskNotificationSettingsToTerraform(struct?: JobTaskNotificationSettingsOutputReference | JobTaskNotificationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alert_on_last_attempt: cdktn.booleanToTerraform(struct!.alertOnLastAttempt),
    no_alert_for_canceled_runs: cdktn.booleanToTerraform(struct!.noAlertForCanceledRuns),
    no_alert_for_skipped_runs: cdktn.booleanToTerraform(struct!.noAlertForSkippedRuns),
  }
}


export function jobTaskNotificationSettingsToHclTerraform(struct?: JobTaskNotificationSettingsOutputReference | JobTaskNotificationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alert_on_last_attempt: {
      value: cdktn.booleanToHclTerraform(struct!.alertOnLastAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_alert_for_canceled_runs: {
      value: cdktn.booleanToHclTerraform(struct!.noAlertForCanceledRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_alert_for_skipped_runs: {
      value: cdktn.booleanToHclTerraform(struct!.noAlertForSkippedRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNotificationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertOnLastAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertOnLastAttempt = this._alertOnLastAttempt;
    }
    if (this._noAlertForCanceledRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlertForCanceledRuns = this._noAlertForCanceledRuns;
    }
    if (this._noAlertForSkippedRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlertForSkippedRuns = this._noAlertForSkippedRuns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertOnLastAttempt = undefined;
      this._noAlertForCanceledRuns = undefined;
      this._noAlertForSkippedRuns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertOnLastAttempt = value.alertOnLastAttempt;
      this._noAlertForCanceledRuns = value.noAlertForCanceledRuns;
      this._noAlertForSkippedRuns = value.noAlertForSkippedRuns;
    }
  }

  // alert_on_last_attempt - computed: false, optional: true, required: false
  private _alertOnLastAttempt?: boolean | cdktn.IResolvable; 
  public get alertOnLastAttempt() {
    return this.getBooleanAttribute('alert_on_last_attempt');
  }
  public set alertOnLastAttempt(value: boolean | cdktn.IResolvable) {
    this._alertOnLastAttempt = value;
  }
  public resetAlertOnLastAttempt() {
    this._alertOnLastAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnLastAttemptInput() {
    return this._alertOnLastAttempt;
  }

  // no_alert_for_canceled_runs - computed: false, optional: true, required: false
  private _noAlertForCanceledRuns?: boolean | cdktn.IResolvable; 
  public get noAlertForCanceledRuns() {
    return this.getBooleanAttribute('no_alert_for_canceled_runs');
  }
  public set noAlertForCanceledRuns(value: boolean | cdktn.IResolvable) {
    this._noAlertForCanceledRuns = value;
  }
  public resetNoAlertForCanceledRuns() {
    this._noAlertForCanceledRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAlertForCanceledRunsInput() {
    return this._noAlertForCanceledRuns;
  }

  // no_alert_for_skipped_runs - computed: false, optional: true, required: false
  private _noAlertForSkippedRuns?: boolean | cdktn.IResolvable; 
  public get noAlertForSkippedRuns() {
    return this.getBooleanAttribute('no_alert_for_skipped_runs');
  }
  public set noAlertForSkippedRuns(value: boolean | cdktn.IResolvable) {
    this._noAlertForSkippedRuns = value;
  }
  public resetNoAlertForSkippedRuns() {
    this._noAlertForSkippedRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAlertForSkippedRunsInput() {
    return this._noAlertForSkippedRuns;
  }
}
export interface JobTaskPipelineTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#full_refresh Job#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#full_refresh_selection Job#full_refresh_selection}
  */
  readonly fullRefreshSelection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#pipeline_id Job#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#refresh_flow_selection Job#refresh_flow_selection}
  */
  readonly refreshFlowSelection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#refresh_selection Job#refresh_selection}
  */
  readonly refreshSelection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#reset_checkpoint_selection Job#reset_checkpoint_selection}
  */
  readonly resetCheckpointSelection?: string[];
}

export function jobTaskPipelineTaskToTerraform(struct?: JobTaskPipelineTaskOutputReference | JobTaskPipelineTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    full_refresh: cdktn.booleanToTerraform(struct!.fullRefresh),
    full_refresh_selection: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fullRefreshSelection),
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    pipeline_id: cdktn.stringToTerraform(struct!.pipelineId),
    refresh_flow_selection: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.refreshFlowSelection),
    refresh_selection: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.refreshSelection),
    reset_checkpoint_selection: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resetCheckpointSelection),
  }
}


export function jobTaskPipelineTaskToHclTerraform(struct?: JobTaskPipelineTaskOutputReference | JobTaskPipelineTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    full_refresh: {
      value: cdktn.booleanToHclTerraform(struct!.fullRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    full_refresh_selection: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fullRefreshSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pipeline_id: {
      value: cdktn.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_flow_selection: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.refreshFlowSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_selection: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.refreshSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reset_checkpoint_selection: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resetCheckpointSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskPipelineTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskPipelineTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefresh = this._fullRefresh;
    }
    if (this._fullRefreshSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefreshSelection = this._fullRefreshSelection;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    if (this._refreshFlowSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshFlowSelection = this._refreshFlowSelection;
    }
    if (this._refreshSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshSelection = this._refreshSelection;
    }
    if (this._resetCheckpointSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetCheckpointSelection = this._resetCheckpointSelection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPipelineTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullRefresh = undefined;
      this._fullRefreshSelection = undefined;
      this._parameters = undefined;
      this._pipelineId = undefined;
      this._refreshFlowSelection = undefined;
      this._refreshSelection = undefined;
      this._resetCheckpointSelection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullRefresh = value.fullRefresh;
      this._fullRefreshSelection = value.fullRefreshSelection;
      this._parameters = value.parameters;
      this._pipelineId = value.pipelineId;
      this._refreshFlowSelection = value.refreshFlowSelection;
      this._refreshSelection = value.refreshSelection;
      this._resetCheckpointSelection = value.resetCheckpointSelection;
    }
  }

  // full_refresh - computed: false, optional: true, required: false
  private _fullRefresh?: boolean | cdktn.IResolvable; 
  public get fullRefresh() {
    return this.getBooleanAttribute('full_refresh');
  }
  public set fullRefresh(value: boolean | cdktn.IResolvable) {
    this._fullRefresh = value;
  }
  public resetFullRefresh() {
    this._fullRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRefreshInput() {
    return this._fullRefresh;
  }

  // full_refresh_selection - computed: false, optional: true, required: false
  private _fullRefreshSelection?: string[]; 
  public get fullRefreshSelection() {
    return this.getListAttribute('full_refresh_selection');
  }
  public set fullRefreshSelection(value: string[]) {
    this._fullRefreshSelection = value;
  }
  public resetFullRefreshSelection() {
    this._fullRefreshSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRefreshSelectionInput() {
    return this._fullRefreshSelection;
  }

  // parameters - computed: false, optional: true, required: false
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

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // refresh_flow_selection - computed: false, optional: true, required: false
  private _refreshFlowSelection?: string[]; 
  public get refreshFlowSelection() {
    return this.getListAttribute('refresh_flow_selection');
  }
  public set refreshFlowSelection(value: string[]) {
    this._refreshFlowSelection = value;
  }
  public resetRefreshFlowSelection() {
    this._refreshFlowSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshFlowSelectionInput() {
    return this._refreshFlowSelection;
  }

  // refresh_selection - computed: false, optional: true, required: false
  private _refreshSelection?: string[]; 
  public get refreshSelection() {
    return this.getListAttribute('refresh_selection');
  }
  public set refreshSelection(value: string[]) {
    this._refreshSelection = value;
  }
  public resetRefreshSelection() {
    this._refreshSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshSelectionInput() {
    return this._refreshSelection;
  }

  // reset_checkpoint_selection - computed: false, optional: true, required: false
  private _resetCheckpointSelection?: string[]; 
  public get resetCheckpointSelection() {
    return this.getListAttribute('reset_checkpoint_selection');
  }
  public set resetCheckpointSelection(value: string[]) {
    this._resetCheckpointSelection = value;
  }
  public resetResetCheckpointSelection() {
    this._resetCheckpointSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetCheckpointSelectionInput() {
    return this._resetCheckpointSelection;
  }
}
export interface JobTaskPowerBiTaskPowerBiModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#authentication_method Job#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#model_name Job#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#overwrite_existing Job#overwrite_existing}
  */
  readonly overwriteExisting?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#storage_mode Job#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#workspace_name Job#workspace_name}
  */
  readonly workspaceName?: string;
}

export function jobTaskPowerBiTaskPowerBiModelToTerraform(struct?: JobTaskPowerBiTaskPowerBiModelOutputReference | JobTaskPowerBiTaskPowerBiModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_method: cdktn.stringToTerraform(struct!.authenticationMethod),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    overwrite_existing: cdktn.booleanToTerraform(struct!.overwriteExisting),
    storage_mode: cdktn.stringToTerraform(struct!.storageMode),
    workspace_name: cdktn.stringToTerraform(struct!.workspaceName),
  }
}


export function jobTaskPowerBiTaskPowerBiModelToHclTerraform(struct?: JobTaskPowerBiTaskPowerBiModelOutputReference | JobTaskPowerBiTaskPowerBiModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_method: {
      value: cdktn.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_mode: {
      value: cdktn.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_name: {
      value: cdktn.stringToHclTerraform(struct!.workspaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskPowerBiTaskPowerBiModelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskPowerBiTaskPowerBiModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._workspaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceName = this._workspaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPowerBiTaskPowerBiModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationMethod = undefined;
      this._modelName = undefined;
      this._overwriteExisting = undefined;
      this._storageMode = undefined;
      this._workspaceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationMethod = value.authenticationMethod;
      this._modelName = value.modelName;
      this._overwriteExisting = value.overwriteExisting;
      this._storageMode = value.storageMode;
      this._workspaceName = value.workspaceName;
    }
  }

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: boolean | cdktn.IResolvable; 
  public get overwriteExisting() {
    return this.getBooleanAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: boolean | cdktn.IResolvable) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // workspace_name - computed: false, optional: true, required: false
  private _workspaceName?: string; 
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }
  public resetWorkspaceName() {
    this._workspaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName;
  }
}
export interface JobTaskPowerBiTaskTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#catalog Job#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#name Job#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#schema Job#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#storage_mode Job#storage_mode}
  */
  readonly storageMode?: string;
}

export function jobTaskPowerBiTaskTablesToTerraform(struct?: JobTaskPowerBiTaskTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    name: cdktn.stringToTerraform(struct!.name),
    schema: cdktn.stringToTerraform(struct!.schema),
    storage_mode: cdktn.stringToTerraform(struct!.storageMode),
  }
}


export function jobTaskPowerBiTaskTablesToHclTerraform(struct?: JobTaskPowerBiTaskTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_mode: {
      value: cdktn.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskPowerBiTaskTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskPowerBiTaskTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPowerBiTaskTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._name = undefined;
      this._schema = undefined;
      this._storageMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._name = value.name;
      this._schema = value.schema;
      this._storageMode = value.storageMode;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }
}

export class JobTaskPowerBiTaskTablesList extends cdktn.ComplexList {
  public internalValue? : JobTaskPowerBiTaskTables[] | cdktn.IResolvable

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
  public get(index: number): JobTaskPowerBiTaskTablesOutputReference {
    return new JobTaskPowerBiTaskTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskPowerBiTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#connection_resource_name Job#connection_resource_name}
  */
  readonly connectionResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#refresh_after_update Job#refresh_after_update}
  */
  readonly refreshAfterUpdate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId?: string;
  /**
  * power_bi_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#power_bi_model Job#power_bi_model}
  */
  readonly powerBiModel?: JobTaskPowerBiTaskPowerBiModel;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#tables Job#tables}
  */
  readonly tables?: JobTaskPowerBiTaskTables[] | cdktn.IResolvable;
}

export function jobTaskPowerBiTaskToTerraform(struct?: JobTaskPowerBiTaskOutputReference | JobTaskPowerBiTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_resource_name: cdktn.stringToTerraform(struct!.connectionResourceName),
    refresh_after_update: cdktn.booleanToTerraform(struct!.refreshAfterUpdate),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
    power_bi_model: jobTaskPowerBiTaskPowerBiModelToTerraform(struct!.powerBiModel),
    tables: cdktn.listMapper(jobTaskPowerBiTaskTablesToTerraform, true)(struct!.tables),
  }
}


export function jobTaskPowerBiTaskToHclTerraform(struct?: JobTaskPowerBiTaskOutputReference | JobTaskPowerBiTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_resource_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_after_update: {
      value: cdktn.booleanToHclTerraform(struct!.refreshAfterUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_bi_model: {
      value: jobTaskPowerBiTaskPowerBiModelToHclTerraform(struct!.powerBiModel),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskPowerBiTaskPowerBiModelList",
    },
    tables: {
      value: cdktn.listMapperHcl(jobTaskPowerBiTaskTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskPowerBiTaskTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskPowerBiTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskPowerBiTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionResourceName = this._connectionResourceName;
    }
    if (this._refreshAfterUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshAfterUpdate = this._refreshAfterUpdate;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    if (this._powerBiModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerBiModel = this._powerBiModel?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPowerBiTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionResourceName = undefined;
      this._refreshAfterUpdate = undefined;
      this._warehouseId = undefined;
      this._powerBiModel.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionResourceName = value.connectionResourceName;
      this._refreshAfterUpdate = value.refreshAfterUpdate;
      this._warehouseId = value.warehouseId;
      this._powerBiModel.internalValue = value.powerBiModel;
      this._tables.internalValue = value.tables;
    }
  }

  // connection_resource_name - computed: false, optional: true, required: false
  private _connectionResourceName?: string; 
  public get connectionResourceName() {
    return this.getStringAttribute('connection_resource_name');
  }
  public set connectionResourceName(value: string) {
    this._connectionResourceName = value;
  }
  public resetConnectionResourceName() {
    this._connectionResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionResourceNameInput() {
    return this._connectionResourceName;
  }

  // refresh_after_update - computed: false, optional: true, required: false
  private _refreshAfterUpdate?: boolean | cdktn.IResolvable; 
  public get refreshAfterUpdate() {
    return this.getBooleanAttribute('refresh_after_update');
  }
  public set refreshAfterUpdate(value: boolean | cdktn.IResolvable) {
    this._refreshAfterUpdate = value;
  }
  public resetRefreshAfterUpdate() {
    this._refreshAfterUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshAfterUpdateInput() {
    return this._refreshAfterUpdate;
  }

  // warehouse_id - computed: false, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // power_bi_model - computed: false, optional: true, required: false
  private _powerBiModel = new JobTaskPowerBiTaskPowerBiModelOutputReference(this, "power_bi_model");
  public get powerBiModel() {
    return this._powerBiModel;
  }
  public putPowerBiModel(value: JobTaskPowerBiTaskPowerBiModel) {
    this._powerBiModel.internalValue = value;
  }
  public resetPowerBiModel() {
    this._powerBiModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerBiModelInput() {
    return this._powerBiModel.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new JobTaskPowerBiTaskTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: JobTaskPowerBiTaskTables[] | cdktn.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface JobTaskPythonOperatorTaskParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#name Job#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#value Job#value}
  */
  readonly value?: string;
}

export function jobTaskPythonOperatorTaskParametersToTerraform(struct?: JobTaskPythonOperatorTaskParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function jobTaskPythonOperatorTaskParametersToHclTerraform(struct?: JobTaskPythonOperatorTaskParameters | cdktn.IResolvable): any {
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

export class JobTaskPythonOperatorTaskParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskPythonOperatorTaskParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPythonOperatorTaskParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class JobTaskPythonOperatorTaskParametersList extends cdktn.ComplexList {
  public internalValue? : JobTaskPythonOperatorTaskParameters[] | cdktn.IResolvable

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
  public get(index: number): JobTaskPythonOperatorTaskParametersOutputReference {
    return new JobTaskPythonOperatorTaskParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskPythonOperatorTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#main Job#main}
  */
  readonly main?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: JobTaskPythonOperatorTaskParameters[] | cdktn.IResolvable;
}

export function jobTaskPythonOperatorTaskToTerraform(struct?: JobTaskPythonOperatorTaskOutputReference | JobTaskPythonOperatorTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    main: cdktn.stringToTerraform(struct!.main),
    parameters: cdktn.listMapper(jobTaskPythonOperatorTaskParametersToTerraform, true)(struct!.parameters),
  }
}


export function jobTaskPythonOperatorTaskToHclTerraform(struct?: JobTaskPythonOperatorTaskOutputReference | JobTaskPythonOperatorTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    main: {
      value: cdktn.stringToHclTerraform(struct!.main),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(jobTaskPythonOperatorTaskParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskPythonOperatorTaskParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskPythonOperatorTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskPythonOperatorTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._main !== undefined) {
      hasAnyValues = true;
      internalValueResult.main = this._main;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPythonOperatorTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._main = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._main = value.main;
      this._parameters.internalValue = value.parameters;
    }
  }

  // main - computed: false, optional: true, required: false
  private _main?: string; 
  public get main() {
    return this.getStringAttribute('main');
  }
  public set main(value: string) {
    this._main = value;
  }
  public resetMain() {
    this._main = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainInput() {
    return this._main;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new JobTaskPythonOperatorTaskParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: JobTaskPythonOperatorTaskParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface JobTaskPythonWheelTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#entry_point Job#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#named_parameters Job#named_parameters}
  */
  readonly namedParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#package_name Job#package_name}
  */
  readonly packageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobTaskPythonWheelTaskToTerraform(struct?: JobTaskPythonWheelTaskOutputReference | JobTaskPythonWheelTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entry_point: cdktn.stringToTerraform(struct!.entryPoint),
    named_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.namedParameters),
    package_name: cdktn.stringToTerraform(struct!.packageName),
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
  }
}


export function jobTaskPythonWheelTaskToHclTerraform(struct?: JobTaskPythonWheelTaskOutputReference | JobTaskPythonWheelTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entry_point: {
      value: cdktn.stringToHclTerraform(struct!.entryPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.namedParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    package_name: {
      value: cdktn.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskPythonWheelTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskPythonWheelTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._namedParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedParameters = this._namedParameters;
    }
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPythonWheelTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryPoint = undefined;
      this._namedParameters = undefined;
      this._packageName = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryPoint = value.entryPoint;
      this._namedParameters = value.namedParameters;
      this._packageName = value.packageName;
      this._parameters = value.parameters;
    }
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // named_parameters - computed: false, optional: true, required: false
  private _namedParameters?: { [key: string]: string }; 
  public get namedParameters() {
    return this.getStringMapAttribute('named_parameters');
  }
  public set namedParameters(value: { [key: string]: string }) {
    this._namedParameters = value;
  }
  public resetNamedParameters() {
    this._namedParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedParametersInput() {
    return this._namedParameters;
  }

  // package_name - computed: false, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface JobTaskRunJobTaskPipelineParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#full_refresh Job#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#full_refresh_selection Job#full_refresh_selection}
  */
  readonly fullRefreshSelection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#refresh_flow_selection Job#refresh_flow_selection}
  */
  readonly refreshFlowSelection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#refresh_selection Job#refresh_selection}
  */
  readonly refreshSelection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#reset_checkpoint_selection Job#reset_checkpoint_selection}
  */
  readonly resetCheckpointSelection?: string[];
}

export function jobTaskRunJobTaskPipelineParamsToTerraform(struct?: JobTaskRunJobTaskPipelineParamsOutputReference | JobTaskRunJobTaskPipelineParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    full_refresh: cdktn.booleanToTerraform(struct!.fullRefresh),
    full_refresh_selection: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fullRefreshSelection),
    refresh_flow_selection: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.refreshFlowSelection),
    refresh_selection: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.refreshSelection),
    reset_checkpoint_selection: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resetCheckpointSelection),
  }
}


export function jobTaskRunJobTaskPipelineParamsToHclTerraform(struct?: JobTaskRunJobTaskPipelineParamsOutputReference | JobTaskRunJobTaskPipelineParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    full_refresh: {
      value: cdktn.booleanToHclTerraform(struct!.fullRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    full_refresh_selection: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fullRefreshSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_flow_selection: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.refreshFlowSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_selection: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.refreshSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reset_checkpoint_selection: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resetCheckpointSelection),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskRunJobTaskPipelineParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskRunJobTaskPipelineParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefresh = this._fullRefresh;
    }
    if (this._fullRefreshSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefreshSelection = this._fullRefreshSelection;
    }
    if (this._refreshFlowSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshFlowSelection = this._refreshFlowSelection;
    }
    if (this._refreshSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshSelection = this._refreshSelection;
    }
    if (this._resetCheckpointSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetCheckpointSelection = this._resetCheckpointSelection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskRunJobTaskPipelineParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullRefresh = undefined;
      this._fullRefreshSelection = undefined;
      this._refreshFlowSelection = undefined;
      this._refreshSelection = undefined;
      this._resetCheckpointSelection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullRefresh = value.fullRefresh;
      this._fullRefreshSelection = value.fullRefreshSelection;
      this._refreshFlowSelection = value.refreshFlowSelection;
      this._refreshSelection = value.refreshSelection;
      this._resetCheckpointSelection = value.resetCheckpointSelection;
    }
  }

  // full_refresh - computed: false, optional: true, required: false
  private _fullRefresh?: boolean | cdktn.IResolvable; 
  public get fullRefresh() {
    return this.getBooleanAttribute('full_refresh');
  }
  public set fullRefresh(value: boolean | cdktn.IResolvable) {
    this._fullRefresh = value;
  }
  public resetFullRefresh() {
    this._fullRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRefreshInput() {
    return this._fullRefresh;
  }

  // full_refresh_selection - computed: false, optional: true, required: false
  private _fullRefreshSelection?: string[]; 
  public get fullRefreshSelection() {
    return this.getListAttribute('full_refresh_selection');
  }
  public set fullRefreshSelection(value: string[]) {
    this._fullRefreshSelection = value;
  }
  public resetFullRefreshSelection() {
    this._fullRefreshSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRefreshSelectionInput() {
    return this._fullRefreshSelection;
  }

  // refresh_flow_selection - computed: false, optional: true, required: false
  private _refreshFlowSelection?: string[]; 
  public get refreshFlowSelection() {
    return this.getListAttribute('refresh_flow_selection');
  }
  public set refreshFlowSelection(value: string[]) {
    this._refreshFlowSelection = value;
  }
  public resetRefreshFlowSelection() {
    this._refreshFlowSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshFlowSelectionInput() {
    return this._refreshFlowSelection;
  }

  // refresh_selection - computed: false, optional: true, required: false
  private _refreshSelection?: string[]; 
  public get refreshSelection() {
    return this.getListAttribute('refresh_selection');
  }
  public set refreshSelection(value: string[]) {
    this._refreshSelection = value;
  }
  public resetRefreshSelection() {
    this._refreshSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshSelectionInput() {
    return this._refreshSelection;
  }

  // reset_checkpoint_selection - computed: false, optional: true, required: false
  private _resetCheckpointSelection?: string[]; 
  public get resetCheckpointSelection() {
    return this.getListAttribute('reset_checkpoint_selection');
  }
  public set resetCheckpointSelection(value: string[]) {
    this._resetCheckpointSelection = value;
  }
  public resetResetCheckpointSelection() {
    this._resetCheckpointSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetCheckpointSelectionInput() {
    return this._resetCheckpointSelection;
  }
}
export interface JobTaskRunJobTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#dbt_commands Job#dbt_commands}
  */
  readonly dbtCommands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#jar_params Job#jar_params}
  */
  readonly jarParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#job_id Job#job_id}
  */
  readonly jobId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#job_parameters Job#job_parameters}
  */
  readonly jobParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#notebook_params Job#notebook_params}
  */
  readonly notebookParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#python_named_params Job#python_named_params}
  */
  readonly pythonNamedParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#python_params Job#python_params}
  */
  readonly pythonParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#spark_submit_params Job#spark_submit_params}
  */
  readonly sparkSubmitParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#sql_params Job#sql_params}
  */
  readonly sqlParams?: { [key: string]: string };
  /**
  * pipeline_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#pipeline_params Job#pipeline_params}
  */
  readonly pipelineParams?: JobTaskRunJobTaskPipelineParams;
}

export function jobTaskRunJobTaskToTerraform(struct?: JobTaskRunJobTaskOutputReference | JobTaskRunJobTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dbt_commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dbtCommands),
    jar_params: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.jarParams),
    job_id: cdktn.numberToTerraform(struct!.jobId),
    job_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.jobParameters),
    notebook_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.notebookParams),
    python_named_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.pythonNamedParams),
    python_params: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pythonParams),
    spark_submit_params: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sparkSubmitParams),
    sql_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sqlParams),
    pipeline_params: jobTaskRunJobTaskPipelineParamsToTerraform(struct!.pipelineParams),
  }
}


export function jobTaskRunJobTaskToHclTerraform(struct?: JobTaskRunJobTaskOutputReference | JobTaskRunJobTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dbt_commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dbtCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jar_params: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.jarParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    job_id: {
      value: cdktn.numberToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.jobParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    notebook_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.notebookParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_named_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.pythonNamedParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_params: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pythonParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spark_submit_params: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sparkSubmitParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sqlParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pipeline_params: {
      value: jobTaskRunJobTaskPipelineParamsToHclTerraform(struct!.pipelineParams),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskRunJobTaskPipelineParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskRunJobTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskRunJobTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbtCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtCommands = this._dbtCommands;
    }
    if (this._jarParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarParams = this._jarParams;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._jobParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobParameters = this._jobParameters;
    }
    if (this._notebookParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookParams = this._notebookParams;
    }
    if (this._pythonNamedParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonNamedParams = this._pythonNamedParams;
    }
    if (this._pythonParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonParams = this._pythonParams;
    }
    if (this._sparkSubmitParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitParams = this._sparkSubmitParams;
    }
    if (this._sqlParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlParams = this._sqlParams;
    }
    if (this._pipelineParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineParams = this._pipelineParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskRunJobTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbtCommands = undefined;
      this._jarParams = undefined;
      this._jobId = undefined;
      this._jobParameters = undefined;
      this._notebookParams = undefined;
      this._pythonNamedParams = undefined;
      this._pythonParams = undefined;
      this._sparkSubmitParams = undefined;
      this._sqlParams = undefined;
      this._pipelineParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbtCommands = value.dbtCommands;
      this._jarParams = value.jarParams;
      this._jobId = value.jobId;
      this._jobParameters = value.jobParameters;
      this._notebookParams = value.notebookParams;
      this._pythonNamedParams = value.pythonNamedParams;
      this._pythonParams = value.pythonParams;
      this._sparkSubmitParams = value.sparkSubmitParams;
      this._sqlParams = value.sqlParams;
      this._pipelineParams.internalValue = value.pipelineParams;
    }
  }

  // dbt_commands - computed: false, optional: true, required: false
  private _dbtCommands?: string[]; 
  public get dbtCommands() {
    return this.getListAttribute('dbt_commands');
  }
  public set dbtCommands(value: string[]) {
    this._dbtCommands = value;
  }
  public resetDbtCommands() {
    this._dbtCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtCommandsInput() {
    return this._dbtCommands;
  }

  // jar_params - computed: false, optional: true, required: false
  private _jarParams?: string[]; 
  public get jarParams() {
    return this.getListAttribute('jar_params');
  }
  public set jarParams(value: string[]) {
    this._jarParams = value;
  }
  public resetJarParams() {
    this._jarParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarParamsInput() {
    return this._jarParams;
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: number; 
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }
  public set jobId(value: number) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_parameters - computed: false, optional: true, required: false
  private _jobParameters?: { [key: string]: string }; 
  public get jobParameters() {
    return this.getStringMapAttribute('job_parameters');
  }
  public set jobParameters(value: { [key: string]: string }) {
    this._jobParameters = value;
  }
  public resetJobParameters() {
    this._jobParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobParametersInput() {
    return this._jobParameters;
  }

  // notebook_params - computed: false, optional: true, required: false
  private _notebookParams?: { [key: string]: string }; 
  public get notebookParams() {
    return this.getStringMapAttribute('notebook_params');
  }
  public set notebookParams(value: { [key: string]: string }) {
    this._notebookParams = value;
  }
  public resetNotebookParams() {
    this._notebookParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookParamsInput() {
    return this._notebookParams;
  }

  // python_named_params - computed: false, optional: true, required: false
  private _pythonNamedParams?: { [key: string]: string }; 
  public get pythonNamedParams() {
    return this.getStringMapAttribute('python_named_params');
  }
  public set pythonNamedParams(value: { [key: string]: string }) {
    this._pythonNamedParams = value;
  }
  public resetPythonNamedParams() {
    this._pythonNamedParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonNamedParamsInput() {
    return this._pythonNamedParams;
  }

  // python_params - computed: false, optional: true, required: false
  private _pythonParams?: string[]; 
  public get pythonParams() {
    return this.getListAttribute('python_params');
  }
  public set pythonParams(value: string[]) {
    this._pythonParams = value;
  }
  public resetPythonParams() {
    this._pythonParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonParamsInput() {
    return this._pythonParams;
  }

  // spark_submit_params - computed: false, optional: true, required: false
  private _sparkSubmitParams?: string[]; 
  public get sparkSubmitParams() {
    return this.getListAttribute('spark_submit_params');
  }
  public set sparkSubmitParams(value: string[]) {
    this._sparkSubmitParams = value;
  }
  public resetSparkSubmitParams() {
    this._sparkSubmitParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitParamsInput() {
    return this._sparkSubmitParams;
  }

  // sql_params - computed: false, optional: true, required: false
  private _sqlParams?: { [key: string]: string }; 
  public get sqlParams() {
    return this.getStringMapAttribute('sql_params');
  }
  public set sqlParams(value: { [key: string]: string }) {
    this._sqlParams = value;
  }
  public resetSqlParams() {
    this._sqlParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlParamsInput() {
    return this._sqlParams;
  }

  // pipeline_params - computed: false, optional: true, required: false
  private _pipelineParams = new JobTaskRunJobTaskPipelineParamsOutputReference(this, "pipeline_params");
  public get pipelineParams() {
    return this._pipelineParams;
  }
  public putPipelineParams(value: JobTaskRunJobTaskPipelineParams) {
    this._pipelineParams.internalValue = value;
  }
  public resetPipelineParams() {
    this._pipelineParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParamsInput() {
    return this._pipelineParams.internalValue;
  }
}
export interface JobTaskSparkJarTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#jar_uri Job#jar_uri}
  */
  readonly jarUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#main_class_name Job#main_class_name}
  */
  readonly mainClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#run_as_repl Job#run_as_repl}
  */
  readonly runAsRepl?: boolean | cdktn.IResolvable;
}

export function jobTaskSparkJarTaskToTerraform(struct?: JobTaskSparkJarTaskOutputReference | JobTaskSparkJarTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    jar_uri: cdktn.stringToTerraform(struct!.jarUri),
    main_class_name: cdktn.stringToTerraform(struct!.mainClassName),
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
    run_as_repl: cdktn.booleanToTerraform(struct!.runAsRepl),
  }
}


export function jobTaskSparkJarTaskToHclTerraform(struct?: JobTaskSparkJarTaskOutputReference | JobTaskSparkJarTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    jar_uri: {
      value: cdktn.stringToHclTerraform(struct!.jarUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_class_name: {
      value: cdktn.stringToHclTerraform(struct!.mainClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    run_as_repl: {
      value: cdktn.booleanToHclTerraform(struct!.runAsRepl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSparkJarTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSparkJarTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jarUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarUri = this._jarUri;
    }
    if (this._mainClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClassName = this._mainClassName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._runAsRepl !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsRepl = this._runAsRepl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSparkJarTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jarUri = undefined;
      this._mainClassName = undefined;
      this._parameters = undefined;
      this._runAsRepl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jarUri = value.jarUri;
      this._mainClassName = value.mainClassName;
      this._parameters = value.parameters;
      this._runAsRepl = value.runAsRepl;
    }
  }

  // jar_uri - computed: false, optional: true, required: false
  private _jarUri?: string; 
  public get jarUri() {
    return this.getStringAttribute('jar_uri');
  }
  public set jarUri(value: string) {
    this._jarUri = value;
  }
  public resetJarUri() {
    this._jarUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarUriInput() {
    return this._jarUri;
  }

  // main_class_name - computed: false, optional: true, required: false
  private _mainClassName?: string; 
  public get mainClassName() {
    return this.getStringAttribute('main_class_name');
  }
  public set mainClassName(value: string) {
    this._mainClassName = value;
  }
  public resetMainClassName() {
    this._mainClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassNameInput() {
    return this._mainClassName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // run_as_repl - computed: true, optional: true, required: false
  private _runAsRepl?: boolean | cdktn.IResolvable; 
  public get runAsRepl() {
    return this.getBooleanAttribute('run_as_repl');
  }
  public set runAsRepl(value: boolean | cdktn.IResolvable) {
    this._runAsRepl = value;
  }
  public resetRunAsRepl() {
    this._runAsRepl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsReplInput() {
    return this._runAsRepl;
  }
}
export interface JobTaskSparkPythonTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#python_file Job#python_file}
  */
  readonly pythonFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
}

export function jobTaskSparkPythonTaskToTerraform(struct?: JobTaskSparkPythonTaskOutputReference | JobTaskSparkPythonTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
    python_file: cdktn.stringToTerraform(struct!.pythonFile),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function jobTaskSparkPythonTaskToHclTerraform(struct?: JobTaskSparkPythonTaskOutputReference | JobTaskSparkPythonTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    python_file: {
      value: cdktn.stringToHclTerraform(struct!.pythonFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSparkPythonTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSparkPythonTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._pythonFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonFile = this._pythonFile;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSparkPythonTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._pythonFile = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._pythonFile = value.pythonFile;
      this._source = value.source;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // python_file - computed: false, optional: false, required: true
  private _pythonFile?: string; 
  public get pythonFile() {
    return this.getStringAttribute('python_file');
  }
  public set pythonFile(value: string) {
    this._pythonFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonFileInput() {
    return this._pythonFile;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface JobTaskSparkSubmitTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobTaskSparkSubmitTaskToTerraform(struct?: JobTaskSparkSubmitTaskOutputReference | JobTaskSparkSubmitTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
  }
}


export function jobTaskSparkSubmitTaskToHclTerraform(struct?: JobTaskSparkSubmitTaskOutputReference | JobTaskSparkSubmitTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSparkSubmitTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSparkSubmitTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSparkSubmitTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface JobTaskSqlTaskAlertSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#user_name Job#user_name}
  */
  readonly userName?: string;
}

export function jobTaskSqlTaskAlertSubscriptionsToTerraform(struct?: JobTaskSqlTaskAlertSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_id: cdktn.stringToTerraform(struct!.destinationId),
    user_name: cdktn.stringToTerraform(struct!.userName),
  }
}


export function jobTaskSqlTaskAlertSubscriptionsToHclTerraform(struct?: JobTaskSqlTaskAlertSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_id: {
      value: cdktn.stringToHclTerraform(struct!.destinationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktn.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskAlertSubscriptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskSqlTaskAlertSubscriptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationId = this._destinationId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskAlertSubscriptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationId = undefined;
      this._userName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationId = value.destinationId;
      this._userName = value.userName;
    }
  }

  // destination_id - computed: false, optional: true, required: false
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class JobTaskSqlTaskAlertSubscriptionsList extends cdktn.ComplexList {
  public internalValue? : JobTaskSqlTaskAlertSubscriptions[] | cdktn.IResolvable

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
  public get(index: number): JobTaskSqlTaskAlertSubscriptionsOutputReference {
    return new JobTaskSqlTaskAlertSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskSqlTaskAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#alert_id Job#alert_id}
  */
  readonly alertId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktn.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#subscriptions Job#subscriptions}
  */
  readonly subscriptions?: JobTaskSqlTaskAlertSubscriptions[] | cdktn.IResolvable;
}

export function jobTaskSqlTaskAlertToTerraform(struct?: JobTaskSqlTaskAlertOutputReference | JobTaskSqlTaskAlert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alert_id: cdktn.stringToTerraform(struct!.alertId),
    pause_subscriptions: cdktn.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktn.listMapper(jobTaskSqlTaskAlertSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function jobTaskSqlTaskAlertToHclTerraform(struct?: JobTaskSqlTaskAlertOutputReference | JobTaskSqlTaskAlert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alert_id: {
      value: cdktn.stringToHclTerraform(struct!.alertId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_subscriptions: {
      value: cdktn.booleanToHclTerraform(struct!.pauseSubscriptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subscriptions: {
      value: cdktn.listMapperHcl(jobTaskSqlTaskAlertSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskAlertSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskAlertOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertId = this._alertId;
    }
    if (this._pauseSubscriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseSubscriptions = this._pauseSubscriptions;
    }
    if (this._subscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptions = this._subscriptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertId = undefined;
      this._pauseSubscriptions = undefined;
      this._subscriptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertId = value.alertId;
      this._pauseSubscriptions = value.pauseSubscriptions;
      this._subscriptions.internalValue = value.subscriptions;
    }
  }

  // alert_id - computed: false, optional: false, required: true
  private _alertId?: string; 
  public get alertId() {
    return this.getStringAttribute('alert_id');
  }
  public set alertId(value: string) {
    this._alertId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIdInput() {
    return this._alertId;
  }

  // pause_subscriptions - computed: false, optional: true, required: false
  private _pauseSubscriptions?: boolean | cdktn.IResolvable; 
  public get pauseSubscriptions() {
    return this.getBooleanAttribute('pause_subscriptions');
  }
  public set pauseSubscriptions(value: boolean | cdktn.IResolvable) {
    this._pauseSubscriptions = value;
  }
  public resetPauseSubscriptions() {
    this._pauseSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseSubscriptionsInput() {
    return this._pauseSubscriptions;
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new JobTaskSqlTaskAlertSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: JobTaskSqlTaskAlertSubscriptions[] | cdktn.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }
}
export interface JobTaskSqlTaskDashboardSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#user_name Job#user_name}
  */
  readonly userName?: string;
}

export function jobTaskSqlTaskDashboardSubscriptionsToTerraform(struct?: JobTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_id: cdktn.stringToTerraform(struct!.destinationId),
    user_name: cdktn.stringToTerraform(struct!.userName),
  }
}


export function jobTaskSqlTaskDashboardSubscriptionsToHclTerraform(struct?: JobTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_id: {
      value: cdktn.stringToHclTerraform(struct!.destinationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktn.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskDashboardSubscriptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationId = this._destinationId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationId = undefined;
      this._userName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationId = value.destinationId;
      this._userName = value.userName;
    }
  }

  // destination_id - computed: false, optional: true, required: false
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class JobTaskSqlTaskDashboardSubscriptionsList extends cdktn.ComplexList {
  public internalValue? : JobTaskSqlTaskDashboardSubscriptions[] | cdktn.IResolvable

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
  public get(index: number): JobTaskSqlTaskDashboardSubscriptionsOutputReference {
    return new JobTaskSqlTaskDashboardSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskSqlTaskDashboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#custom_subject Job#custom_subject}
  */
  readonly customSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#dashboard_id Job#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktn.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#subscriptions Job#subscriptions}
  */
  readonly subscriptions?: JobTaskSqlTaskDashboardSubscriptions[] | cdktn.IResolvable;
}

export function jobTaskSqlTaskDashboardToTerraform(struct?: JobTaskSqlTaskDashboardOutputReference | JobTaskSqlTaskDashboard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_subject: cdktn.stringToTerraform(struct!.customSubject),
    dashboard_id: cdktn.stringToTerraform(struct!.dashboardId),
    pause_subscriptions: cdktn.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktn.listMapper(jobTaskSqlTaskDashboardSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function jobTaskSqlTaskDashboardToHclTerraform(struct?: JobTaskSqlTaskDashboardOutputReference | JobTaskSqlTaskDashboard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_subject: {
      value: cdktn.stringToHclTerraform(struct!.customSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_id: {
      value: cdktn.stringToHclTerraform(struct!.dashboardId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_subscriptions: {
      value: cdktn.booleanToHclTerraform(struct!.pauseSubscriptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subscriptions: {
      value: cdktn.listMapperHcl(jobTaskSqlTaskDashboardSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskDashboardSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskDashboardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskDashboard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSubject = this._customSubject;
    }
    if (this._dashboardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardId = this._dashboardId;
    }
    if (this._pauseSubscriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseSubscriptions = this._pauseSubscriptions;
    }
    if (this._subscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptions = this._subscriptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskDashboard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSubject = undefined;
      this._dashboardId = undefined;
      this._pauseSubscriptions = undefined;
      this._subscriptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSubject = value.customSubject;
      this._dashboardId = value.dashboardId;
      this._pauseSubscriptions = value.pauseSubscriptions;
      this._subscriptions.internalValue = value.subscriptions;
    }
  }

  // custom_subject - computed: false, optional: true, required: false
  private _customSubject?: string; 
  public get customSubject() {
    return this.getStringAttribute('custom_subject');
  }
  public set customSubject(value: string) {
    this._customSubject = value;
  }
  public resetCustomSubject() {
    this._customSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubjectInput() {
    return this._customSubject;
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // pause_subscriptions - computed: false, optional: true, required: false
  private _pauseSubscriptions?: boolean | cdktn.IResolvable; 
  public get pauseSubscriptions() {
    return this.getBooleanAttribute('pause_subscriptions');
  }
  public set pauseSubscriptions(value: boolean | cdktn.IResolvable) {
    this._pauseSubscriptions = value;
  }
  public resetPauseSubscriptions() {
    this._pauseSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseSubscriptionsInput() {
    return this._pauseSubscriptions;
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new JobTaskSqlTaskDashboardSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: JobTaskSqlTaskDashboardSubscriptions[] | cdktn.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }
}
export interface JobTaskSqlTaskFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#path Job#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
}

export function jobTaskSqlTaskFileToTerraform(struct?: JobTaskSqlTaskFileOutputReference | JobTaskSqlTaskFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function jobTaskSqlTaskFileToHclTerraform(struct?: JobTaskSqlTaskFileOutputReference | JobTaskSqlTaskFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._source = value.source;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface JobTaskSqlTaskQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#query_id Job#query_id}
  */
  readonly queryId: string;
}

export function jobTaskSqlTaskQueryToTerraform(struct?: JobTaskSqlTaskQueryOutputReference | JobTaskSqlTaskQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query_id: cdktn.stringToTerraform(struct!.queryId),
  }
}


export function jobTaskSqlTaskQueryToHclTerraform(struct?: JobTaskSqlTaskQueryOutputReference | JobTaskSqlTaskQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    query_id: {
      value: cdktn.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryId = value.queryId;
    }
  }

  // query_id - computed: false, optional: false, required: true
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }
}
export interface JobTaskSqlTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#alert Job#alert}
  */
  readonly alert?: JobTaskSqlTaskAlert;
  /**
  * dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#dashboard Job#dashboard}
  */
  readonly dashboard?: JobTaskSqlTaskDashboard;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#file Job#file}
  */
  readonly file?: JobTaskSqlTaskFile;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#query Job#query}
  */
  readonly query?: JobTaskSqlTaskQuery;
}

export function jobTaskSqlTaskToTerraform(struct?: JobTaskSqlTaskOutputReference | JobTaskSqlTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
    alert: jobTaskSqlTaskAlertToTerraform(struct!.alert),
    dashboard: jobTaskSqlTaskDashboardToTerraform(struct!.dashboard),
    file: jobTaskSqlTaskFileToTerraform(struct!.file),
    query: jobTaskSqlTaskQueryToTerraform(struct!.query),
  }
}


export function jobTaskSqlTaskToHclTerraform(struct?: JobTaskSqlTaskOutputReference | JobTaskSqlTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert: {
      value: jobTaskSqlTaskAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskAlertList",
    },
    dashboard: {
      value: jobTaskSqlTaskDashboardToHclTerraform(struct!.dashboard),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskDashboardList",
    },
    file: {
      value: jobTaskSqlTaskFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskFileList",
    },
    query: {
      value: jobTaskSqlTaskQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._dashboard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._warehouseId = undefined;
      this._alert.internalValue = undefined;
      this._dashboard.internalValue = undefined;
      this._file.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._warehouseId = value.warehouseId;
      this._alert.internalValue = value.alert;
      this._dashboard.internalValue = value.dashboard;
      this._file.internalValue = value.file;
      this._query.internalValue = value.query;
    }
  }

  // parameters - computed: false, optional: true, required: false
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

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // alert - computed: false, optional: true, required: false
  private _alert = new JobTaskSqlTaskAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: JobTaskSqlTaskAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard = new JobTaskSqlTaskDashboardOutputReference(this, "dashboard");
  public get dashboard() {
    return this._dashboard;
  }
  public putDashboard(value: JobTaskSqlTaskDashboard) {
    this._dashboard.internalValue = value;
  }
  public resetDashboard() {
    this._dashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new JobTaskSqlTaskFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobTaskSqlTaskFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new JobTaskSqlTaskQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: JobTaskSqlTaskQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform(struct?: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform(struct?: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobTaskWebhookNotificationsOnDurationWarningThresholdExceededList extends cdktn.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference {
    return new JobTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnFailureToTerraform(struct?: JobTaskWebhookNotificationsOnFailure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnFailureToHclTerraform(struct?: JobTaskWebhookNotificationsOnFailure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOnFailureOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnFailure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskWebhookNotificationsOnFailure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobTaskWebhookNotificationsOnFailureList extends cdktn.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnFailure[] | cdktn.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnFailureOutputReference {
    return new JobTaskWebhookNotificationsOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnMaintenanceComplete {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnMaintenanceCompleteToTerraform(struct?: JobTaskWebhookNotificationsOnMaintenanceComplete | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnMaintenanceCompleteToHclTerraform(struct?: JobTaskWebhookNotificationsOnMaintenanceComplete | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOnMaintenanceCompleteOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnMaintenanceComplete | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskWebhookNotificationsOnMaintenanceComplete | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobTaskWebhookNotificationsOnMaintenanceCompleteList extends cdktn.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnMaintenanceComplete[] | cdktn.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnMaintenanceCompleteOutputReference {
    return new JobTaskWebhookNotificationsOnMaintenanceCompleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnMaintenanceStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnMaintenanceStartToTerraform(struct?: JobTaskWebhookNotificationsOnMaintenanceStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnMaintenanceStartToHclTerraform(struct?: JobTaskWebhookNotificationsOnMaintenanceStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOnMaintenanceStartOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnMaintenanceStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskWebhookNotificationsOnMaintenanceStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobTaskWebhookNotificationsOnMaintenanceStartList extends cdktn.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnMaintenanceStart[] | cdktn.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnMaintenanceStartOutputReference {
    return new JobTaskWebhookNotificationsOnMaintenanceStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnStartToTerraform(struct?: JobTaskWebhookNotificationsOnStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnStartToHclTerraform(struct?: JobTaskWebhookNotificationsOnStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOnStartOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskWebhookNotificationsOnStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobTaskWebhookNotificationsOnStartList extends cdktn.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnStart[] | cdktn.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnStartOutputReference {
    return new JobTaskWebhookNotificationsOnStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnStreamingBacklogExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform(struct?: JobTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform(struct?: JobTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobTaskWebhookNotificationsOnStreamingBacklogExceededList extends cdktn.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference {
    return new JobTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnSuccessToTerraform(struct?: JobTaskWebhookNotificationsOnSuccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnSuccessToHclTerraform(struct?: JobTaskWebhookNotificationsOnSuccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOnSuccessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnSuccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskWebhookNotificationsOnSuccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobTaskWebhookNotificationsOnSuccessList extends cdktn.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnSuccess[] | cdktn.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnSuccessOutputReference {
    return new JobTaskWebhookNotificationsOnSuccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotifications {
  /**
  * on_duration_warning_threshold_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: JobTaskWebhookNotificationsOnFailure[] | cdktn.IResolvable;
  /**
  * on_maintenance_complete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_maintenance_complete Job#on_maintenance_complete}
  */
  readonly onMaintenanceComplete?: JobTaskWebhookNotificationsOnMaintenanceComplete[] | cdktn.IResolvable;
  /**
  * on_maintenance_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_maintenance_start Job#on_maintenance_start}
  */
  readonly onMaintenanceStart?: JobTaskWebhookNotificationsOnMaintenanceStart[] | cdktn.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: JobTaskWebhookNotificationsOnStart[] | cdktn.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: JobTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_success Job#on_success}
  */
  readonly onSuccess?: JobTaskWebhookNotificationsOnSuccess[] | cdktn.IResolvable;
}

export function jobTaskWebhookNotificationsToTerraform(struct?: JobTaskWebhookNotificationsOutputReference | JobTaskWebhookNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_duration_warning_threshold_exceeded: cdktn.listMapper(jobTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform, true)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktn.listMapper(jobTaskWebhookNotificationsOnFailureToTerraform, true)(struct!.onFailure),
    on_maintenance_complete: cdktn.listMapper(jobTaskWebhookNotificationsOnMaintenanceCompleteToTerraform, true)(struct!.onMaintenanceComplete),
    on_maintenance_start: cdktn.listMapper(jobTaskWebhookNotificationsOnMaintenanceStartToTerraform, true)(struct!.onMaintenanceStart),
    on_start: cdktn.listMapper(jobTaskWebhookNotificationsOnStartToTerraform, true)(struct!.onStart),
    on_streaming_backlog_exceeded: cdktn.listMapper(jobTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform, true)(struct!.onStreamingBacklogExceeded),
    on_success: cdktn.listMapper(jobTaskWebhookNotificationsOnSuccessToTerraform, true)(struct!.onSuccess),
  }
}


export function jobTaskWebhookNotificationsToHclTerraform(struct?: JobTaskWebhookNotificationsOutputReference | JobTaskWebhookNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_duration_warning_threshold_exceeded: {
      value: cdktn.listMapperHcl(jobTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform, true)(struct!.onDurationWarningThresholdExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnDurationWarningThresholdExceededList",
    },
    on_failure: {
      value: cdktn.listMapperHcl(jobTaskWebhookNotificationsOnFailureToHclTerraform, true)(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnFailureList",
    },
    on_maintenance_complete: {
      value: cdktn.listMapperHcl(jobTaskWebhookNotificationsOnMaintenanceCompleteToHclTerraform, true)(struct!.onMaintenanceComplete),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnMaintenanceCompleteList",
    },
    on_maintenance_start: {
      value: cdktn.listMapperHcl(jobTaskWebhookNotificationsOnMaintenanceStartToHclTerraform, true)(struct!.onMaintenanceStart),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnMaintenanceStartList",
    },
    on_start: {
      value: cdktn.listMapperHcl(jobTaskWebhookNotificationsOnStartToHclTerraform, true)(struct!.onStart),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnStartList",
    },
    on_streaming_backlog_exceeded: {
      value: cdktn.listMapperHcl(jobTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform, true)(struct!.onStreamingBacklogExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnStreamingBacklogExceededList",
    },
    on_success: {
      value: cdktn.listMapperHcl(jobTaskWebhookNotificationsOnSuccessToHclTerraform, true)(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskWebhookNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDurationWarningThresholdExceeded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDurationWarningThresholdExceeded = this._onDurationWarningThresholdExceeded?.internalValue;
    }
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onMaintenanceComplete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onMaintenanceComplete = this._onMaintenanceComplete?.internalValue;
    }
    if (this._onMaintenanceStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onMaintenanceStart = this._onMaintenanceStart?.internalValue;
    }
    if (this._onStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStart = this._onStart?.internalValue;
    }
    if (this._onStreamingBacklogExceeded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStreamingBacklogExceeded = this._onStreamingBacklogExceeded?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskWebhookNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDurationWarningThresholdExceeded.internalValue = undefined;
      this._onFailure.internalValue = undefined;
      this._onMaintenanceComplete.internalValue = undefined;
      this._onMaintenanceStart.internalValue = undefined;
      this._onStart.internalValue = undefined;
      this._onStreamingBacklogExceeded.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDurationWarningThresholdExceeded.internalValue = value.onDurationWarningThresholdExceeded;
      this._onFailure.internalValue = value.onFailure;
      this._onMaintenanceComplete.internalValue = value.onMaintenanceComplete;
      this._onMaintenanceStart.internalValue = value.onMaintenanceStart;
      this._onStart.internalValue = value.onStart;
      this._onStreamingBacklogExceeded.internalValue = value.onStreamingBacklogExceeded;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // on_duration_warning_threshold_exceeded - computed: false, optional: true, required: false
  private _onDurationWarningThresholdExceeded = new JobTaskWebhookNotificationsOnDurationWarningThresholdExceededList(this, "on_duration_warning_threshold_exceeded", false);
  public get onDurationWarningThresholdExceeded() {
    return this._onDurationWarningThresholdExceeded;
  }
  public putOnDurationWarningThresholdExceeded(value: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable) {
    this._onDurationWarningThresholdExceeded.internalValue = value;
  }
  public resetOnDurationWarningThresholdExceeded() {
    this._onDurationWarningThresholdExceeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDurationWarningThresholdExceededInput() {
    return this._onDurationWarningThresholdExceeded.internalValue;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new JobTaskWebhookNotificationsOnFailureList(this, "on_failure", false);
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: JobTaskWebhookNotificationsOnFailure[] | cdktn.IResolvable) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_maintenance_complete - computed: false, optional: true, required: false
  private _onMaintenanceComplete = new JobTaskWebhookNotificationsOnMaintenanceCompleteList(this, "on_maintenance_complete", false);
  public get onMaintenanceComplete() {
    return this._onMaintenanceComplete;
  }
  public putOnMaintenanceComplete(value: JobTaskWebhookNotificationsOnMaintenanceComplete[] | cdktn.IResolvable) {
    this._onMaintenanceComplete.internalValue = value;
  }
  public resetOnMaintenanceComplete() {
    this._onMaintenanceComplete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMaintenanceCompleteInput() {
    return this._onMaintenanceComplete.internalValue;
  }

  // on_maintenance_start - computed: false, optional: true, required: false
  private _onMaintenanceStart = new JobTaskWebhookNotificationsOnMaintenanceStartList(this, "on_maintenance_start", false);
  public get onMaintenanceStart() {
    return this._onMaintenanceStart;
  }
  public putOnMaintenanceStart(value: JobTaskWebhookNotificationsOnMaintenanceStart[] | cdktn.IResolvable) {
    this._onMaintenanceStart.internalValue = value;
  }
  public resetOnMaintenanceStart() {
    this._onMaintenanceStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMaintenanceStartInput() {
    return this._onMaintenanceStart.internalValue;
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart = new JobTaskWebhookNotificationsOnStartList(this, "on_start", false);
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: JobTaskWebhookNotificationsOnStart[] | cdktn.IResolvable) {
    this._onStart.internalValue = value;
  }
  public resetOnStart() {
    this._onStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart.internalValue;
  }

  // on_streaming_backlog_exceeded - computed: false, optional: true, required: false
  private _onStreamingBacklogExceeded = new JobTaskWebhookNotificationsOnStreamingBacklogExceededList(this, "on_streaming_backlog_exceeded", false);
  public get onStreamingBacklogExceeded() {
    return this._onStreamingBacklogExceeded;
  }
  public putOnStreamingBacklogExceeded(value: JobTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable) {
    this._onStreamingBacklogExceeded.internalValue = value;
  }
  public resetOnStreamingBacklogExceeded() {
    this._onStreamingBacklogExceeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStreamingBacklogExceededInput() {
    return this._onStreamingBacklogExceeded.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new JobTaskWebhookNotificationsOnSuccessList(this, "on_success", false);
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: JobTaskWebhookNotificationsOnSuccess[] | cdktn.IResolvable) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }
}
export interface JobTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#description Job#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#disable_auto_optimization Job#disable_auto_optimization}
  */
  readonly disableAutoOptimization?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#disabled Job#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#environment_key Job#environment_key}
  */
  readonly environmentKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#environment_variables_key Job#environment_variables_key}
  */
  readonly environmentVariablesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#existing_cluster_id Job#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#job_cluster_key Job#job_cluster_key}
  */
  readonly jobClusterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#max_retries Job#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#min_retry_interval_millis Job#min_retry_interval_millis}
  */
  readonly minRetryIntervalMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#retry_on_timeout Job#retry_on_timeout}
  */
  readonly retryOnTimeout?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#run_if Job#run_if}
  */
  readonly runIf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#task_key Job#task_key}
  */
  readonly taskKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#timeout_seconds Job#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * ai_function_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#ai_function_task Job#ai_function_task}
  */
  readonly aiFunctionTask?: JobTaskAiFunctionTask;
  /**
  * ai_runtime_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#ai_runtime_task Job#ai_runtime_task}
  */
  readonly aiRuntimeTask?: JobTaskAiRuntimeTask;
  /**
  * alert_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#alert_task Job#alert_task}
  */
  readonly alertTask?: JobTaskAlertTask;
  /**
  * clean_rooms_notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#clean_rooms_notebook_task Job#clean_rooms_notebook_task}
  */
  readonly cleanRoomsNotebookTask?: JobTaskCleanRoomsNotebookTask;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#compute Job#compute}
  */
  readonly compute?: JobTaskCompute;
  /**
  * condition_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#condition_task Job#condition_task}
  */
  readonly conditionTask?: JobTaskConditionTask;
  /**
  * dashboard_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#dashboard_task Job#dashboard_task}
  */
  readonly dashboardTask?: JobTaskDashboardTask;
  /**
  * dbt_cloud_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#dbt_cloud_task Job#dbt_cloud_task}
  */
  readonly dbtCloudTask?: JobTaskDbtCloudTask;
  /**
  * dbt_platform_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#dbt_platform_task Job#dbt_platform_task}
  */
  readonly dbtPlatformTask?: JobTaskDbtPlatformTask;
  /**
  * dbt_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#dbt_task Job#dbt_task}
  */
  readonly dbtTask?: JobTaskDbtTask;
  /**
  * depends_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#depends_on Job#depends_on}
  */
  readonly dependsOn?: JobTaskDependsOn[] | cdktn.IResolvable;
  /**
  * email_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#email_notifications Job#email_notifications}
  */
  readonly emailNotifications?: JobTaskEmailNotifications;
  /**
  * for_each_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#for_each_task Job#for_each_task}
  */
  readonly forEachTask?: JobTaskForEachTask;
  /**
  * gen_ai_compute_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#gen_ai_compute_task Job#gen_ai_compute_task}
  */
  readonly genAiComputeTask?: JobTaskGenAiComputeTask;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#health Job#health}
  */
  readonly health?: JobTaskHealth;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#library Job#library}
  */
  readonly library?: JobTaskLibrary[] | cdktn.IResolvable;
  /**
  * new_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#new_cluster Job#new_cluster}
  */
  readonly newCluster?: JobTaskNewCluster;
  /**
  * notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#notebook_task Job#notebook_task}
  */
  readonly notebookTask?: JobTaskNotebookTask;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#notification_settings Job#notification_settings}
  */
  readonly notificationSettings?: JobTaskNotificationSettings;
  /**
  * pipeline_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#pipeline_task Job#pipeline_task}
  */
  readonly pipelineTask?: JobTaskPipelineTask;
  /**
  * power_bi_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#power_bi_task Job#power_bi_task}
  */
  readonly powerBiTask?: JobTaskPowerBiTask;
  /**
  * python_operator_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#python_operator_task Job#python_operator_task}
  */
  readonly pythonOperatorTask?: JobTaskPythonOperatorTask;
  /**
  * python_wheel_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#python_wheel_task Job#python_wheel_task}
  */
  readonly pythonWheelTask?: JobTaskPythonWheelTask;
  /**
  * run_job_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#run_job_task Job#run_job_task}
  */
  readonly runJobTask?: JobTaskRunJobTask;
  /**
  * spark_jar_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#spark_jar_task Job#spark_jar_task}
  */
  readonly sparkJarTask?: JobTaskSparkJarTask;
  /**
  * spark_python_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#spark_python_task Job#spark_python_task}
  */
  readonly sparkPythonTask?: JobTaskSparkPythonTask;
  /**
  * spark_submit_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#spark_submit_task Job#spark_submit_task}
  */
  readonly sparkSubmitTask?: JobTaskSparkSubmitTask;
  /**
  * sql_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#sql_task Job#sql_task}
  */
  readonly sqlTask?: JobTaskSqlTask;
  /**
  * webhook_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#webhook_notifications Job#webhook_notifications}
  */
  readonly webhookNotifications?: JobTaskWebhookNotifications;
}

export function jobTaskToTerraform(struct?: JobTask | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    disable_auto_optimization: cdktn.booleanToTerraform(struct!.disableAutoOptimization),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    environment_key: cdktn.stringToTerraform(struct!.environmentKey),
    environment_variables_key: cdktn.stringToTerraform(struct!.environmentVariablesKey),
    existing_cluster_id: cdktn.stringToTerraform(struct!.existingClusterId),
    job_cluster_key: cdktn.stringToTerraform(struct!.jobClusterKey),
    max_retries: cdktn.numberToTerraform(struct!.maxRetries),
    min_retry_interval_millis: cdktn.numberToTerraform(struct!.minRetryIntervalMillis),
    retry_on_timeout: cdktn.booleanToTerraform(struct!.retryOnTimeout),
    run_if: cdktn.stringToTerraform(struct!.runIf),
    task_key: cdktn.stringToTerraform(struct!.taskKey),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    ai_function_task: jobTaskAiFunctionTaskToTerraform(struct!.aiFunctionTask),
    ai_runtime_task: jobTaskAiRuntimeTaskToTerraform(struct!.aiRuntimeTask),
    alert_task: jobTaskAlertTaskToTerraform(struct!.alertTask),
    clean_rooms_notebook_task: jobTaskCleanRoomsNotebookTaskToTerraform(struct!.cleanRoomsNotebookTask),
    compute: jobTaskComputeToTerraform(struct!.compute),
    condition_task: jobTaskConditionTaskToTerraform(struct!.conditionTask),
    dashboard_task: jobTaskDashboardTaskToTerraform(struct!.dashboardTask),
    dbt_cloud_task: jobTaskDbtCloudTaskToTerraform(struct!.dbtCloudTask),
    dbt_platform_task: jobTaskDbtPlatformTaskToTerraform(struct!.dbtPlatformTask),
    dbt_task: jobTaskDbtTaskToTerraform(struct!.dbtTask),
    depends_on: cdktn.listMapper(jobTaskDependsOnToTerraform, true)(struct!.dependsOn),
    email_notifications: jobTaskEmailNotificationsToTerraform(struct!.emailNotifications),
    for_each_task: jobTaskForEachTaskToTerraform(struct!.forEachTask),
    gen_ai_compute_task: jobTaskGenAiComputeTaskToTerraform(struct!.genAiComputeTask),
    health: jobTaskHealthToTerraform(struct!.health),
    library: cdktn.listMapper(jobTaskLibraryToTerraform, true)(struct!.library),
    new_cluster: jobTaskNewClusterToTerraform(struct!.newCluster),
    notebook_task: jobTaskNotebookTaskToTerraform(struct!.notebookTask),
    notification_settings: jobTaskNotificationSettingsToTerraform(struct!.notificationSettings),
    pipeline_task: jobTaskPipelineTaskToTerraform(struct!.pipelineTask),
    power_bi_task: jobTaskPowerBiTaskToTerraform(struct!.powerBiTask),
    python_operator_task: jobTaskPythonOperatorTaskToTerraform(struct!.pythonOperatorTask),
    python_wheel_task: jobTaskPythonWheelTaskToTerraform(struct!.pythonWheelTask),
    run_job_task: jobTaskRunJobTaskToTerraform(struct!.runJobTask),
    spark_jar_task: jobTaskSparkJarTaskToTerraform(struct!.sparkJarTask),
    spark_python_task: jobTaskSparkPythonTaskToTerraform(struct!.sparkPythonTask),
    spark_submit_task: jobTaskSparkSubmitTaskToTerraform(struct!.sparkSubmitTask),
    sql_task: jobTaskSqlTaskToTerraform(struct!.sqlTask),
    webhook_notifications: jobTaskWebhookNotificationsToTerraform(struct!.webhookNotifications),
  }
}


export function jobTaskToHclTerraform(struct?: JobTask | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_auto_optimization: {
      value: cdktn.booleanToHclTerraform(struct!.disableAutoOptimization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment_key: {
      value: cdktn.stringToHclTerraform(struct!.environmentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables_key: {
      value: cdktn.stringToHclTerraform(struct!.environmentVariablesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    existing_cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.existingClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_cluster_key: {
      value: cdktn.stringToHclTerraform(struct!.jobClusterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retries: {
      value: cdktn.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_retry_interval_millis: {
      value: cdktn.numberToHclTerraform(struct!.minRetryIntervalMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_on_timeout: {
      value: cdktn.booleanToHclTerraform(struct!.retryOnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_if: {
      value: cdktn.stringToHclTerraform(struct!.runIf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_key: {
      value: cdktn.stringToHclTerraform(struct!.taskKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ai_function_task: {
      value: jobTaskAiFunctionTaskToHclTerraform(struct!.aiFunctionTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskAiFunctionTaskList",
    },
    ai_runtime_task: {
      value: jobTaskAiRuntimeTaskToHclTerraform(struct!.aiRuntimeTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskAiRuntimeTaskList",
    },
    alert_task: {
      value: jobTaskAlertTaskToHclTerraform(struct!.alertTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskAlertTaskList",
    },
    clean_rooms_notebook_task: {
      value: jobTaskCleanRoomsNotebookTaskToHclTerraform(struct!.cleanRoomsNotebookTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskCleanRoomsNotebookTaskList",
    },
    compute: {
      value: jobTaskComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskComputeList",
    },
    condition_task: {
      value: jobTaskConditionTaskToHclTerraform(struct!.conditionTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskConditionTaskList",
    },
    dashboard_task: {
      value: jobTaskDashboardTaskToHclTerraform(struct!.dashboardTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskDashboardTaskList",
    },
    dbt_cloud_task: {
      value: jobTaskDbtCloudTaskToHclTerraform(struct!.dbtCloudTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskDbtCloudTaskList",
    },
    dbt_platform_task: {
      value: jobTaskDbtPlatformTaskToHclTerraform(struct!.dbtPlatformTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskDbtPlatformTaskList",
    },
    dbt_task: {
      value: jobTaskDbtTaskToHclTerraform(struct!.dbtTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskDbtTaskList",
    },
    depends_on: {
      value: cdktn.listMapperHcl(jobTaskDependsOnToHclTerraform, true)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskDependsOnList",
    },
    email_notifications: {
      value: jobTaskEmailNotificationsToHclTerraform(struct!.emailNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskEmailNotificationsList",
    },
    for_each_task: {
      value: jobTaskForEachTaskToHclTerraform(struct!.forEachTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskList",
    },
    gen_ai_compute_task: {
      value: jobTaskGenAiComputeTaskToHclTerraform(struct!.genAiComputeTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskGenAiComputeTaskList",
    },
    health: {
      value: jobTaskHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskHealthList",
    },
    library: {
      value: cdktn.listMapperHcl(jobTaskLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskLibraryList",
    },
    new_cluster: {
      value: jobTaskNewClusterToHclTerraform(struct!.newCluster),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterList",
    },
    notebook_task: {
      value: jobTaskNotebookTaskToHclTerraform(struct!.notebookTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNotebookTaskList",
    },
    notification_settings: {
      value: jobTaskNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNotificationSettingsList",
    },
    pipeline_task: {
      value: jobTaskPipelineTaskToHclTerraform(struct!.pipelineTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskPipelineTaskList",
    },
    power_bi_task: {
      value: jobTaskPowerBiTaskToHclTerraform(struct!.powerBiTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskPowerBiTaskList",
    },
    python_operator_task: {
      value: jobTaskPythonOperatorTaskToHclTerraform(struct!.pythonOperatorTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskPythonOperatorTaskList",
    },
    python_wheel_task: {
      value: jobTaskPythonWheelTaskToHclTerraform(struct!.pythonWheelTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskPythonWheelTaskList",
    },
    run_job_task: {
      value: jobTaskRunJobTaskToHclTerraform(struct!.runJobTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskRunJobTaskList",
    },
    spark_jar_task: {
      value: jobTaskSparkJarTaskToHclTerraform(struct!.sparkJarTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSparkJarTaskList",
    },
    spark_python_task: {
      value: jobTaskSparkPythonTaskToHclTerraform(struct!.sparkPythonTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSparkPythonTaskList",
    },
    spark_submit_task: {
      value: jobTaskSparkSubmitTaskToHclTerraform(struct!.sparkSubmitTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSparkSubmitTaskList",
    },
    sql_task: {
      value: jobTaskSqlTaskToHclTerraform(struct!.sqlTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskList",
    },
    webhook_notifications: {
      value: jobTaskWebhookNotificationsToHclTerraform(struct!.webhookNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskWebhookNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTask | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableAutoOptimization !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoOptimization = this._disableAutoOptimization;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._environmentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentKey = this._environmentKey;
    }
    if (this._environmentVariablesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariablesKey = this._environmentVariablesKey;
    }
    if (this._existingClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingClusterId = this._existingClusterId;
    }
    if (this._jobClusterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobClusterKey = this._jobClusterKey;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._minRetryIntervalMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryIntervalMillis = this._minRetryIntervalMillis;
    }
    if (this._retryOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOnTimeout = this._retryOnTimeout;
    }
    if (this._runIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.runIf = this._runIf;
    }
    if (this._taskKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskKey = this._taskKey;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._aiFunctionTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiFunctionTask = this._aiFunctionTask?.internalValue;
    }
    if (this._aiRuntimeTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiRuntimeTask = this._aiRuntimeTask?.internalValue;
    }
    if (this._alertTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertTask = this._alertTask?.internalValue;
    }
    if (this._cleanRoomsNotebookTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanRoomsNotebookTask = this._cleanRoomsNotebookTask?.internalValue;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._conditionTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionTask = this._conditionTask?.internalValue;
    }
    if (this._dashboardTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardTask = this._dashboardTask?.internalValue;
    }
    if (this._dbtCloudTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtCloudTask = this._dbtCloudTask?.internalValue;
    }
    if (this._dbtPlatformTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtPlatformTask = this._dbtPlatformTask?.internalValue;
    }
    if (this._dbtTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtTask = this._dbtTask?.internalValue;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._emailNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailNotifications = this._emailNotifications?.internalValue;
    }
    if (this._forEachTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forEachTask = this._forEachTask?.internalValue;
    }
    if (this._genAiComputeTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genAiComputeTask = this._genAiComputeTask?.internalValue;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
    }
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    if (this._newCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newCluster = this._newCluster?.internalValue;
    }
    if (this._notebookTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookTask = this._notebookTask?.internalValue;
    }
    if (this._notificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
    }
    if (this._pipelineTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineTask = this._pipelineTask?.internalValue;
    }
    if (this._powerBiTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerBiTask = this._powerBiTask?.internalValue;
    }
    if (this._pythonOperatorTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonOperatorTask = this._pythonOperatorTask?.internalValue;
    }
    if (this._pythonWheelTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonWheelTask = this._pythonWheelTask?.internalValue;
    }
    if (this._runJobTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runJobTask = this._runJobTask?.internalValue;
    }
    if (this._sparkJarTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkJarTask = this._sparkJarTask?.internalValue;
    }
    if (this._sparkPythonTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkPythonTask = this._sparkPythonTask?.internalValue;
    }
    if (this._sparkSubmitTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitTask = this._sparkSubmitTask?.internalValue;
    }
    if (this._sqlTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlTask = this._sqlTask?.internalValue;
    }
    if (this._webhookNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookNotifications = this._webhookNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTask | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disableAutoOptimization = undefined;
      this._disabled = undefined;
      this._environmentKey = undefined;
      this._environmentVariablesKey = undefined;
      this._existingClusterId = undefined;
      this._jobClusterKey = undefined;
      this._maxRetries = undefined;
      this._minRetryIntervalMillis = undefined;
      this._retryOnTimeout = undefined;
      this._runIf = undefined;
      this._taskKey = undefined;
      this._timeoutSeconds = undefined;
      this._aiFunctionTask.internalValue = undefined;
      this._aiRuntimeTask.internalValue = undefined;
      this._alertTask.internalValue = undefined;
      this._cleanRoomsNotebookTask.internalValue = undefined;
      this._compute.internalValue = undefined;
      this._conditionTask.internalValue = undefined;
      this._dashboardTask.internalValue = undefined;
      this._dbtCloudTask.internalValue = undefined;
      this._dbtPlatformTask.internalValue = undefined;
      this._dbtTask.internalValue = undefined;
      this._dependsOn.internalValue = undefined;
      this._emailNotifications.internalValue = undefined;
      this._forEachTask.internalValue = undefined;
      this._genAiComputeTask.internalValue = undefined;
      this._health.internalValue = undefined;
      this._library.internalValue = undefined;
      this._newCluster.internalValue = undefined;
      this._notebookTask.internalValue = undefined;
      this._notificationSettings.internalValue = undefined;
      this._pipelineTask.internalValue = undefined;
      this._powerBiTask.internalValue = undefined;
      this._pythonOperatorTask.internalValue = undefined;
      this._pythonWheelTask.internalValue = undefined;
      this._runJobTask.internalValue = undefined;
      this._sparkJarTask.internalValue = undefined;
      this._sparkPythonTask.internalValue = undefined;
      this._sparkSubmitTask.internalValue = undefined;
      this._sqlTask.internalValue = undefined;
      this._webhookNotifications.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._disableAutoOptimization = value.disableAutoOptimization;
      this._disabled = value.disabled;
      this._environmentKey = value.environmentKey;
      this._environmentVariablesKey = value.environmentVariablesKey;
      this._existingClusterId = value.existingClusterId;
      this._jobClusterKey = value.jobClusterKey;
      this._maxRetries = value.maxRetries;
      this._minRetryIntervalMillis = value.minRetryIntervalMillis;
      this._retryOnTimeout = value.retryOnTimeout;
      this._runIf = value.runIf;
      this._taskKey = value.taskKey;
      this._timeoutSeconds = value.timeoutSeconds;
      this._aiFunctionTask.internalValue = value.aiFunctionTask;
      this._aiRuntimeTask.internalValue = value.aiRuntimeTask;
      this._alertTask.internalValue = value.alertTask;
      this._cleanRoomsNotebookTask.internalValue = value.cleanRoomsNotebookTask;
      this._compute.internalValue = value.compute;
      this._conditionTask.internalValue = value.conditionTask;
      this._dashboardTask.internalValue = value.dashboardTask;
      this._dbtCloudTask.internalValue = value.dbtCloudTask;
      this._dbtPlatformTask.internalValue = value.dbtPlatformTask;
      this._dbtTask.internalValue = value.dbtTask;
      this._dependsOn.internalValue = value.dependsOn;
      this._emailNotifications.internalValue = value.emailNotifications;
      this._forEachTask.internalValue = value.forEachTask;
      this._genAiComputeTask.internalValue = value.genAiComputeTask;
      this._health.internalValue = value.health;
      this._library.internalValue = value.library;
      this._newCluster.internalValue = value.newCluster;
      this._notebookTask.internalValue = value.notebookTask;
      this._notificationSettings.internalValue = value.notificationSettings;
      this._pipelineTask.internalValue = value.pipelineTask;
      this._powerBiTask.internalValue = value.powerBiTask;
      this._pythonOperatorTask.internalValue = value.pythonOperatorTask;
      this._pythonWheelTask.internalValue = value.pythonWheelTask;
      this._runJobTask.internalValue = value.runJobTask;
      this._sparkJarTask.internalValue = value.sparkJarTask;
      this._sparkPythonTask.internalValue = value.sparkPythonTask;
      this._sparkSubmitTask.internalValue = value.sparkSubmitTask;
      this._sqlTask.internalValue = value.sqlTask;
      this._webhookNotifications.internalValue = value.webhookNotifications;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_auto_optimization - computed: false, optional: true, required: false
  private _disableAutoOptimization?: boolean | cdktn.IResolvable; 
  public get disableAutoOptimization() {
    return this.getBooleanAttribute('disable_auto_optimization');
  }
  public set disableAutoOptimization(value: boolean | cdktn.IResolvable) {
    this._disableAutoOptimization = value;
  }
  public resetDisableAutoOptimization() {
    this._disableAutoOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoOptimizationInput() {
    return this._disableAutoOptimization;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // environment_key - computed: false, optional: true, required: false
  private _environmentKey?: string; 
  public get environmentKey() {
    return this.getStringAttribute('environment_key');
  }
  public set environmentKey(value: string) {
    this._environmentKey = value;
  }
  public resetEnvironmentKey() {
    this._environmentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentKeyInput() {
    return this._environmentKey;
  }

  // environment_variables_key - computed: false, optional: true, required: false
  private _environmentVariablesKey?: string; 
  public get environmentVariablesKey() {
    return this.getStringAttribute('environment_variables_key');
  }
  public set environmentVariablesKey(value: string) {
    this._environmentVariablesKey = value;
  }
  public resetEnvironmentVariablesKey() {
    this._environmentVariablesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesKeyInput() {
    return this._environmentVariablesKey;
  }

  // existing_cluster_id - computed: false, optional: true, required: false
  private _existingClusterId?: string; 
  public get existingClusterId() {
    return this.getStringAttribute('existing_cluster_id');
  }
  public set existingClusterId(value: string) {
    this._existingClusterId = value;
  }
  public resetExistingClusterId() {
    this._existingClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingClusterIdInput() {
    return this._existingClusterId;
  }

  // job_cluster_key - computed: false, optional: true, required: false
  private _jobClusterKey?: string; 
  public get jobClusterKey() {
    return this.getStringAttribute('job_cluster_key');
  }
  public set jobClusterKey(value: string) {
    this._jobClusterKey = value;
  }
  public resetJobClusterKey() {
    this._jobClusterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobClusterKeyInput() {
    return this._jobClusterKey;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // min_retry_interval_millis - computed: false, optional: true, required: false
  private _minRetryIntervalMillis?: number; 
  public get minRetryIntervalMillis() {
    return this.getNumberAttribute('min_retry_interval_millis');
  }
  public set minRetryIntervalMillis(value: number) {
    this._minRetryIntervalMillis = value;
  }
  public resetMinRetryIntervalMillis() {
    this._minRetryIntervalMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetryIntervalMillisInput() {
    return this._minRetryIntervalMillis;
  }

  // retry_on_timeout - computed: true, optional: true, required: false
  private _retryOnTimeout?: boolean | cdktn.IResolvable; 
  public get retryOnTimeout() {
    return this.getBooleanAttribute('retry_on_timeout');
  }
  public set retryOnTimeout(value: boolean | cdktn.IResolvable) {
    this._retryOnTimeout = value;
  }
  public resetRetryOnTimeout() {
    this._retryOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnTimeoutInput() {
    return this._retryOnTimeout;
  }

  // run_if - computed: false, optional: true, required: false
  private _runIf?: string; 
  public get runIf() {
    return this.getStringAttribute('run_if');
  }
  public set runIf(value: string) {
    this._runIf = value;
  }
  public resetRunIf() {
    this._runIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIfInput() {
    return this._runIf;
  }

  // task_key - computed: false, optional: false, required: true
  private _taskKey?: string; 
  public get taskKey() {
    return this.getStringAttribute('task_key');
  }
  public set taskKey(value: string) {
    this._taskKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskKeyInput() {
    return this._taskKey;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // ai_function_task - computed: false, optional: true, required: false
  private _aiFunctionTask = new JobTaskAiFunctionTaskOutputReference(this, "ai_function_task");
  public get aiFunctionTask() {
    return this._aiFunctionTask;
  }
  public putAiFunctionTask(value: JobTaskAiFunctionTask) {
    this._aiFunctionTask.internalValue = value;
  }
  public resetAiFunctionTask() {
    this._aiFunctionTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiFunctionTaskInput() {
    return this._aiFunctionTask.internalValue;
  }

  // ai_runtime_task - computed: false, optional: true, required: false
  private _aiRuntimeTask = new JobTaskAiRuntimeTaskOutputReference(this, "ai_runtime_task");
  public get aiRuntimeTask() {
    return this._aiRuntimeTask;
  }
  public putAiRuntimeTask(value: JobTaskAiRuntimeTask) {
    this._aiRuntimeTask.internalValue = value;
  }
  public resetAiRuntimeTask() {
    this._aiRuntimeTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiRuntimeTaskInput() {
    return this._aiRuntimeTask.internalValue;
  }

  // alert_task - computed: false, optional: true, required: false
  private _alertTask = new JobTaskAlertTaskOutputReference(this, "alert_task");
  public get alertTask() {
    return this._alertTask;
  }
  public putAlertTask(value: JobTaskAlertTask) {
    this._alertTask.internalValue = value;
  }
  public resetAlertTask() {
    this._alertTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTaskInput() {
    return this._alertTask.internalValue;
  }

  // clean_rooms_notebook_task - computed: false, optional: true, required: false
  private _cleanRoomsNotebookTask = new JobTaskCleanRoomsNotebookTaskOutputReference(this, "clean_rooms_notebook_task");
  public get cleanRoomsNotebookTask() {
    return this._cleanRoomsNotebookTask;
  }
  public putCleanRoomsNotebookTask(value: JobTaskCleanRoomsNotebookTask) {
    this._cleanRoomsNotebookTask.internalValue = value;
  }
  public resetCleanRoomsNotebookTask() {
    this._cleanRoomsNotebookTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanRoomsNotebookTaskInput() {
    return this._cleanRoomsNotebookTask.internalValue;
  }

  // compute - computed: false, optional: true, required: false
  private _compute = new JobTaskComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: JobTaskCompute) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // condition_task - computed: false, optional: true, required: false
  private _conditionTask = new JobTaskConditionTaskOutputReference(this, "condition_task");
  public get conditionTask() {
    return this._conditionTask;
  }
  public putConditionTask(value: JobTaskConditionTask) {
    this._conditionTask.internalValue = value;
  }
  public resetConditionTask() {
    this._conditionTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTaskInput() {
    return this._conditionTask.internalValue;
  }

  // dashboard_task - computed: false, optional: true, required: false
  private _dashboardTask = new JobTaskDashboardTaskOutputReference(this, "dashboard_task");
  public get dashboardTask() {
    return this._dashboardTask;
  }
  public putDashboardTask(value: JobTaskDashboardTask) {
    this._dashboardTask.internalValue = value;
  }
  public resetDashboardTask() {
    this._dashboardTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardTaskInput() {
    return this._dashboardTask.internalValue;
  }

  // dbt_cloud_task - computed: false, optional: true, required: false
  private _dbtCloudTask = new JobTaskDbtCloudTaskOutputReference(this, "dbt_cloud_task");
  public get dbtCloudTask() {
    return this._dbtCloudTask;
  }
  public putDbtCloudTask(value: JobTaskDbtCloudTask) {
    this._dbtCloudTask.internalValue = value;
  }
  public resetDbtCloudTask() {
    this._dbtCloudTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtCloudTaskInput() {
    return this._dbtCloudTask.internalValue;
  }

  // dbt_platform_task - computed: false, optional: true, required: false
  private _dbtPlatformTask = new JobTaskDbtPlatformTaskOutputReference(this, "dbt_platform_task");
  public get dbtPlatformTask() {
    return this._dbtPlatformTask;
  }
  public putDbtPlatformTask(value: JobTaskDbtPlatformTask) {
    this._dbtPlatformTask.internalValue = value;
  }
  public resetDbtPlatformTask() {
    this._dbtPlatformTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtPlatformTaskInput() {
    return this._dbtPlatformTask.internalValue;
  }

  // dbt_task - computed: false, optional: true, required: false
  private _dbtTask = new JobTaskDbtTaskOutputReference(this, "dbt_task");
  public get dbtTask() {
    return this._dbtTask;
  }
  public putDbtTask(value: JobTaskDbtTask) {
    this._dbtTask.internalValue = value;
  }
  public resetDbtTask() {
    this._dbtTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtTaskInput() {
    return this._dbtTask.internalValue;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new JobTaskDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: JobTaskDependsOn[] | cdktn.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // email_notifications - computed: false, optional: true, required: false
  private _emailNotifications = new JobTaskEmailNotificationsOutputReference(this, "email_notifications");
  public get emailNotifications() {
    return this._emailNotifications;
  }
  public putEmailNotifications(value: JobTaskEmailNotifications) {
    this._emailNotifications.internalValue = value;
  }
  public resetEmailNotifications() {
    this._emailNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotificationsInput() {
    return this._emailNotifications.internalValue;
  }

  // for_each_task - computed: false, optional: true, required: false
  private _forEachTask = new JobTaskForEachTaskOutputReference(this, "for_each_task");
  public get forEachTask() {
    return this._forEachTask;
  }
  public putForEachTask(value: JobTaskForEachTask) {
    this._forEachTask.internalValue = value;
  }
  public resetForEachTask() {
    this._forEachTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forEachTaskInput() {
    return this._forEachTask.internalValue;
  }

  // gen_ai_compute_task - computed: false, optional: true, required: false
  private _genAiComputeTask = new JobTaskGenAiComputeTaskOutputReference(this, "gen_ai_compute_task");
  public get genAiComputeTask() {
    return this._genAiComputeTask;
  }
  public putGenAiComputeTask(value: JobTaskGenAiComputeTask) {
    this._genAiComputeTask.internalValue = value;
  }
  public resetGenAiComputeTask() {
    this._genAiComputeTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genAiComputeTaskInput() {
    return this._genAiComputeTask.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new JobTaskHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: JobTaskHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new JobTaskLibraryList(this, "library", false);
  public get library() {
    return this._library;
  }
  public putLibrary(value: JobTaskLibrary[] | cdktn.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // new_cluster - computed: false, optional: true, required: false
  private _newCluster = new JobTaskNewClusterOutputReference(this, "new_cluster");
  public get newCluster() {
    return this._newCluster;
  }
  public putNewCluster(value: JobTaskNewCluster) {
    this._newCluster.internalValue = value;
  }
  public resetNewCluster() {
    this._newCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newClusterInput() {
    return this._newCluster.internalValue;
  }

  // notebook_task - computed: false, optional: true, required: false
  private _notebookTask = new JobTaskNotebookTaskOutputReference(this, "notebook_task");
  public get notebookTask() {
    return this._notebookTask;
  }
  public putNotebookTask(value: JobTaskNotebookTask) {
    this._notebookTask.internalValue = value;
  }
  public resetNotebookTask() {
    this._notebookTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookTaskInput() {
    return this._notebookTask.internalValue;
  }

  // notification_settings - computed: false, optional: true, required: false
  private _notificationSettings = new JobTaskNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: JobTaskNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // pipeline_task - computed: false, optional: true, required: false
  private _pipelineTask = new JobTaskPipelineTaskOutputReference(this, "pipeline_task");
  public get pipelineTask() {
    return this._pipelineTask;
  }
  public putPipelineTask(value: JobTaskPipelineTask) {
    this._pipelineTask.internalValue = value;
  }
  public resetPipelineTask() {
    this._pipelineTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTaskInput() {
    return this._pipelineTask.internalValue;
  }

  // power_bi_task - computed: false, optional: true, required: false
  private _powerBiTask = new JobTaskPowerBiTaskOutputReference(this, "power_bi_task");
  public get powerBiTask() {
    return this._powerBiTask;
  }
  public putPowerBiTask(value: JobTaskPowerBiTask) {
    this._powerBiTask.internalValue = value;
  }
  public resetPowerBiTask() {
    this._powerBiTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerBiTaskInput() {
    return this._powerBiTask.internalValue;
  }

  // python_operator_task - computed: false, optional: true, required: false
  private _pythonOperatorTask = new JobTaskPythonOperatorTaskOutputReference(this, "python_operator_task");
  public get pythonOperatorTask() {
    return this._pythonOperatorTask;
  }
  public putPythonOperatorTask(value: JobTaskPythonOperatorTask) {
    this._pythonOperatorTask.internalValue = value;
  }
  public resetPythonOperatorTask() {
    this._pythonOperatorTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonOperatorTaskInput() {
    return this._pythonOperatorTask.internalValue;
  }

  // python_wheel_task - computed: false, optional: true, required: false
  private _pythonWheelTask = new JobTaskPythonWheelTaskOutputReference(this, "python_wheel_task");
  public get pythonWheelTask() {
    return this._pythonWheelTask;
  }
  public putPythonWheelTask(value: JobTaskPythonWheelTask) {
    this._pythonWheelTask.internalValue = value;
  }
  public resetPythonWheelTask() {
    this._pythonWheelTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonWheelTaskInput() {
    return this._pythonWheelTask.internalValue;
  }

  // run_job_task - computed: false, optional: true, required: false
  private _runJobTask = new JobTaskRunJobTaskOutputReference(this, "run_job_task");
  public get runJobTask() {
    return this._runJobTask;
  }
  public putRunJobTask(value: JobTaskRunJobTask) {
    this._runJobTask.internalValue = value;
  }
  public resetRunJobTask() {
    this._runJobTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runJobTaskInput() {
    return this._runJobTask.internalValue;
  }

  // spark_jar_task - computed: false, optional: true, required: false
  private _sparkJarTask = new JobTaskSparkJarTaskOutputReference(this, "spark_jar_task");
  public get sparkJarTask() {
    return this._sparkJarTask;
  }
  public putSparkJarTask(value: JobTaskSparkJarTask) {
    this._sparkJarTask.internalValue = value;
  }
  public resetSparkJarTask() {
    this._sparkJarTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkJarTaskInput() {
    return this._sparkJarTask.internalValue;
  }

  // spark_python_task - computed: false, optional: true, required: false
  private _sparkPythonTask = new JobTaskSparkPythonTaskOutputReference(this, "spark_python_task");
  public get sparkPythonTask() {
    return this._sparkPythonTask;
  }
  public putSparkPythonTask(value: JobTaskSparkPythonTask) {
    this._sparkPythonTask.internalValue = value;
  }
  public resetSparkPythonTask() {
    this._sparkPythonTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkPythonTaskInput() {
    return this._sparkPythonTask.internalValue;
  }

  // spark_submit_task - computed: false, optional: true, required: false
  private _sparkSubmitTask = new JobTaskSparkSubmitTaskOutputReference(this, "spark_submit_task");
  public get sparkSubmitTask() {
    return this._sparkSubmitTask;
  }
  public putSparkSubmitTask(value: JobTaskSparkSubmitTask) {
    this._sparkSubmitTask.internalValue = value;
  }
  public resetSparkSubmitTask() {
    this._sparkSubmitTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitTaskInput() {
    return this._sparkSubmitTask.internalValue;
  }

  // sql_task - computed: false, optional: true, required: false
  private _sqlTask = new JobTaskSqlTaskOutputReference(this, "sql_task");
  public get sqlTask() {
    return this._sqlTask;
  }
  public putSqlTask(value: JobTaskSqlTask) {
    this._sqlTask.internalValue = value;
  }
  public resetSqlTask() {
    this._sqlTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTaskInput() {
    return this._sqlTask.internalValue;
  }

  // webhook_notifications - computed: false, optional: true, required: false
  private _webhookNotifications = new JobTaskWebhookNotificationsOutputReference(this, "webhook_notifications");
  public get webhookNotifications() {
    return this._webhookNotifications;
  }
  public putWebhookNotifications(value: JobTaskWebhookNotifications) {
    this._webhookNotifications.internalValue = value;
  }
  public resetWebhookNotifications() {
    this._webhookNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookNotificationsInput() {
    return this._webhookNotifications.internalValue;
  }
}

export class JobTaskList extends cdktn.ComplexList {
  public internalValue? : JobTask[] | cdktn.IResolvable

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
  public get(index: number): JobTaskOutputReference {
    return new JobTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#create Job#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#update Job#update}
  */
  readonly update?: string;
}

export function jobTimeoutsToTerraform(struct?: JobTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function jobTimeoutsToHclTerraform(struct?: JobTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JobTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface JobTriggerFileArrival {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggerFileArrivalToTerraform(struct?: JobTriggerFileArrivalOutputReference | JobTriggerFileArrival): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    min_time_between_triggers_seconds: cdktn.numberToTerraform(struct!.minTimeBetweenTriggersSeconds),
    url: cdktn.stringToTerraform(struct!.url),
    wait_after_last_change_seconds: cdktn.numberToTerraform(struct!.waitAfterLastChangeSeconds),
  }
}


export function jobTriggerFileArrivalToHclTerraform(struct?: JobTriggerFileArrivalOutputReference | JobTriggerFileArrival): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    min_time_between_triggers_seconds: {
      value: cdktn.numberToHclTerraform(struct!.minTimeBetweenTriggersSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_after_last_change_seconds: {
      value: cdktn.numberToHclTerraform(struct!.waitAfterLastChangeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggerFileArrivalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggerFileArrival | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minTimeBetweenTriggersSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeBetweenTriggersSeconds = this._minTimeBetweenTriggersSeconds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._waitAfterLastChangeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitAfterLastChangeSeconds = this._waitAfterLastChangeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggerFileArrival | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minTimeBetweenTriggersSeconds = undefined;
      this._url = undefined;
      this._waitAfterLastChangeSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minTimeBetweenTriggersSeconds = value.minTimeBetweenTriggersSeconds;
      this._url = value.url;
      this._waitAfterLastChangeSeconds = value.waitAfterLastChangeSeconds;
    }
  }

  // min_time_between_triggers_seconds - computed: false, optional: true, required: false
  private _minTimeBetweenTriggersSeconds?: number; 
  public get minTimeBetweenTriggersSeconds() {
    return this.getNumberAttribute('min_time_between_triggers_seconds');
  }
  public set minTimeBetweenTriggersSeconds(value: number) {
    this._minTimeBetweenTriggersSeconds = value;
  }
  public resetMinTimeBetweenTriggersSeconds() {
    this._minTimeBetweenTriggersSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeBetweenTriggersSecondsInput() {
    return this._minTimeBetweenTriggersSeconds;
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

  // wait_after_last_change_seconds - computed: false, optional: true, required: false
  private _waitAfterLastChangeSeconds?: number; 
  public get waitAfterLastChangeSeconds() {
    return this.getNumberAttribute('wait_after_last_change_seconds');
  }
  public set waitAfterLastChangeSeconds(value: number) {
    this._waitAfterLastChangeSeconds = value;
  }
  public resetWaitAfterLastChangeSeconds() {
    this._waitAfterLastChangeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitAfterLastChangeSecondsInput() {
    return this._waitAfterLastChangeSeconds;
  }
}
export interface JobTriggerJobCompletionJobs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#job_id Job#job_id}
  */
  readonly jobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#workspace_id Job#workspace_id}
  */
  readonly workspaceId: string;
}

export function jobTriggerJobCompletionJobsToTerraform(struct?: JobTriggerJobCompletionJobs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_id: cdktn.stringToTerraform(struct!.jobId),
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function jobTriggerJobCompletionJobsToHclTerraform(struct?: JobTriggerJobCompletionJobs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_id: {
      value: cdktn.stringToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class JobTriggerJobCompletionJobsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTriggerJobCompletionJobs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggerJobCompletionJobs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobId = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobId = value.jobId;
      this._workspaceId = value.workspaceId;
    }
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
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

export class JobTriggerJobCompletionJobsList extends cdktn.ComplexList {
  public internalValue? : JobTriggerJobCompletionJobs[] | cdktn.IResolvable

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
  public get(index: number): JobTriggerJobCompletionJobsOutputReference {
    return new JobTriggerJobCompletionJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTriggerJobCompletion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#if_status Job#if_status}
  */
  readonly ifStatus?: string;
  /**
  * jobs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#jobs Job#jobs}
  */
  readonly jobs: JobTriggerJobCompletionJobs[] | cdktn.IResolvable;
}

export function jobTriggerJobCompletionToTerraform(struct?: JobTriggerJobCompletionOutputReference | JobTriggerJobCompletion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    if_status: cdktn.stringToTerraform(struct!.ifStatus),
    jobs: cdktn.listMapper(jobTriggerJobCompletionJobsToTerraform, true)(struct!.jobs),
  }
}


export function jobTriggerJobCompletionToHclTerraform(struct?: JobTriggerJobCompletionOutputReference | JobTriggerJobCompletion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    if_status: {
      value: cdktn.stringToHclTerraform(struct!.ifStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jobs: {
      value: cdktn.listMapperHcl(jobTriggerJobCompletionJobsToHclTerraform, true)(struct!.jobs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggerJobCompletionJobsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggerJobCompletionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggerJobCompletion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStatus = this._ifStatus;
    }
    if (this._jobs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggerJobCompletion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ifStatus = undefined;
      this._jobs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ifStatus = value.ifStatus;
      this._jobs.internalValue = value.jobs;
    }
  }

  // if_status - computed: false, optional: true, required: false
  private _ifStatus?: string; 
  public get ifStatus() {
    return this.getStringAttribute('if_status');
  }
  public set ifStatus(value: string) {
    this._ifStatus = value;
  }
  public resetIfStatus() {
    this._ifStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStatusInput() {
    return this._ifStatus;
  }

  // jobs - computed: false, optional: false, required: true
  private _jobs = new JobTriggerJobCompletionJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }
  public putJobs(value: JobTriggerJobCompletionJobs[] | cdktn.IResolvable) {
    this._jobs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs.internalValue;
  }
}
export interface JobTriggerModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#aliases Job#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#condition Job#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#securable_name Job#securable_name}
  */
  readonly securableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggerModelToTerraform(struct?: JobTriggerModelOutputReference | JobTriggerModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.aliases),
    condition: cdktn.stringToTerraform(struct!.condition),
    min_time_between_triggers_seconds: cdktn.numberToTerraform(struct!.minTimeBetweenTriggersSeconds),
    securable_name: cdktn.stringToTerraform(struct!.securableName),
    wait_after_last_change_seconds: cdktn.numberToTerraform(struct!.waitAfterLastChangeSeconds),
  }
}


export function jobTriggerModelToHclTerraform(struct?: JobTriggerModelOutputReference | JobTriggerModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aliases: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.aliases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_time_between_triggers_seconds: {
      value: cdktn.numberToHclTerraform(struct!.minTimeBetweenTriggersSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    securable_name: {
      value: cdktn.stringToHclTerraform(struct!.securableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_after_last_change_seconds: {
      value: cdktn.numberToHclTerraform(struct!.waitAfterLastChangeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggerModelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggerModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._minTimeBetweenTriggersSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeBetweenTriggersSeconds = this._minTimeBetweenTriggersSeconds;
    }
    if (this._securableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securableName = this._securableName;
    }
    if (this._waitAfterLastChangeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitAfterLastChangeSeconds = this._waitAfterLastChangeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggerModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aliases = undefined;
      this._condition = undefined;
      this._minTimeBetweenTriggersSeconds = undefined;
      this._securableName = undefined;
      this._waitAfterLastChangeSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aliases = value.aliases;
      this._condition = value.condition;
      this._minTimeBetweenTriggersSeconds = value.minTimeBetweenTriggersSeconds;
      this._securableName = value.securableName;
      this._waitAfterLastChangeSeconds = value.waitAfterLastChangeSeconds;
    }
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return this.getListAttribute('aliases');
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // min_time_between_triggers_seconds - computed: false, optional: true, required: false
  private _minTimeBetweenTriggersSeconds?: number; 
  public get minTimeBetweenTriggersSeconds() {
    return this.getNumberAttribute('min_time_between_triggers_seconds');
  }
  public set minTimeBetweenTriggersSeconds(value: number) {
    this._minTimeBetweenTriggersSeconds = value;
  }
  public resetMinTimeBetweenTriggersSeconds() {
    this._minTimeBetweenTriggersSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeBetweenTriggersSecondsInput() {
    return this._minTimeBetweenTriggersSeconds;
  }

  // securable_name - computed: false, optional: true, required: false
  private _securableName?: string; 
  public get securableName() {
    return this.getStringAttribute('securable_name');
  }
  public set securableName(value: string) {
    this._securableName = value;
  }
  public resetSecurableName() {
    this._securableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securableNameInput() {
    return this._securableName;
  }

  // wait_after_last_change_seconds - computed: false, optional: true, required: false
  private _waitAfterLastChangeSeconds?: number; 
  public get waitAfterLastChangeSeconds() {
    return this.getNumberAttribute('wait_after_last_change_seconds');
  }
  public set waitAfterLastChangeSeconds(value: number) {
    this._waitAfterLastChangeSeconds = value;
  }
  public resetWaitAfterLastChangeSeconds() {
    this._waitAfterLastChangeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitAfterLastChangeSecondsInput() {
    return this._waitAfterLastChangeSeconds;
  }
}
export interface JobTriggerPeriodic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#interval Job#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#unit Job#unit}
  */
  readonly unit: string;
}

export function jobTriggerPeriodicToTerraform(struct?: JobTriggerPeriodicOutputReference | JobTriggerPeriodic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.numberToTerraform(struct!.interval),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function jobTriggerPeriodicToHclTerraform(struct?: JobTriggerPeriodicOutputReference | JobTriggerPeriodic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggerPeriodicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggerPeriodic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggerPeriodic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._unit = value.unit;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface JobTriggerSqlCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#sql_query_id Job#sql_query_id}
  */
  readonly sqlQueryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#trigger_mode Job#trigger_mode}
  */
  readonly triggerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId: string;
}

export function jobTriggerSqlConditionToTerraform(struct?: JobTriggerSqlConditionOutputReference | JobTriggerSqlCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sql_query_id: cdktn.stringToTerraform(struct!.sqlQueryId),
    trigger_mode: cdktn.stringToTerraform(struct!.triggerMode),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
  }
}


export function jobTriggerSqlConditionToHclTerraform(struct?: JobTriggerSqlConditionOutputReference | JobTriggerSqlCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sql_query_id: {
      value: cdktn.stringToHclTerraform(struct!.sqlQueryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_mode: {
      value: cdktn.stringToHclTerraform(struct!.triggerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggerSqlConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggerSqlCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlQueryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlQueryId = this._sqlQueryId;
    }
    if (this._triggerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerMode = this._triggerMode;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggerSqlCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sqlQueryId = undefined;
      this._triggerMode = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sqlQueryId = value.sqlQueryId;
      this._triggerMode = value.triggerMode;
      this._warehouseId = value.warehouseId;
    }
  }

  // sql_query_id - computed: false, optional: false, required: true
  private _sqlQueryId?: string; 
  public get sqlQueryId() {
    return this.getStringAttribute('sql_query_id');
  }
  public set sqlQueryId(value: string) {
    this._sqlQueryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryIdInput() {
    return this._sqlQueryId;
  }

  // trigger_mode - computed: false, optional: true, required: false
  private _triggerMode?: string; 
  public get triggerMode() {
    return this.getStringAttribute('trigger_mode');
  }
  public set triggerMode(value: string) {
    this._triggerMode = value;
  }
  public resetTriggerMode() {
    this._triggerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerModeInput() {
    return this._triggerMode;
  }

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }
}
export interface JobTriggerTableUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#condition Job#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#table_names Job#table_names}
  */
  readonly tableNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggerTableUpdateToTerraform(struct?: JobTriggerTableUpdateOutputReference | JobTriggerTableUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    min_time_between_triggers_seconds: cdktn.numberToTerraform(struct!.minTimeBetweenTriggersSeconds),
    table_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tableNames),
    wait_after_last_change_seconds: cdktn.numberToTerraform(struct!.waitAfterLastChangeSeconds),
  }
}


export function jobTriggerTableUpdateToHclTerraform(struct?: JobTriggerTableUpdateOutputReference | JobTriggerTableUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_time_between_triggers_seconds: {
      value: cdktn.numberToHclTerraform(struct!.minTimeBetweenTriggersSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tableNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wait_after_last_change_seconds: {
      value: cdktn.numberToHclTerraform(struct!.waitAfterLastChangeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggerTableUpdateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggerTableUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._minTimeBetweenTriggersSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeBetweenTriggersSeconds = this._minTimeBetweenTriggersSeconds;
    }
    if (this._tableNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNames = this._tableNames;
    }
    if (this._waitAfterLastChangeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitAfterLastChangeSeconds = this._waitAfterLastChangeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggerTableUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._minTimeBetweenTriggersSeconds = undefined;
      this._tableNames = undefined;
      this._waitAfterLastChangeSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._minTimeBetweenTriggersSeconds = value.minTimeBetweenTriggersSeconds;
      this._tableNames = value.tableNames;
      this._waitAfterLastChangeSeconds = value.waitAfterLastChangeSeconds;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // min_time_between_triggers_seconds - computed: false, optional: true, required: false
  private _minTimeBetweenTriggersSeconds?: number; 
  public get minTimeBetweenTriggersSeconds() {
    return this.getNumberAttribute('min_time_between_triggers_seconds');
  }
  public set minTimeBetweenTriggersSeconds(value: number) {
    this._minTimeBetweenTriggersSeconds = value;
  }
  public resetMinTimeBetweenTriggersSeconds() {
    this._minTimeBetweenTriggersSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeBetweenTriggersSecondsInput() {
    return this._minTimeBetweenTriggersSeconds;
  }

  // table_names - computed: false, optional: false, required: true
  private _tableNames?: string[]; 
  public get tableNames() {
    return this.getListAttribute('table_names');
  }
  public set tableNames(value: string[]) {
    this._tableNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamesInput() {
    return this._tableNames;
  }

  // wait_after_last_change_seconds - computed: false, optional: true, required: false
  private _waitAfterLastChangeSeconds?: number; 
  public get waitAfterLastChangeSeconds() {
    return this.getNumberAttribute('wait_after_last_change_seconds');
  }
  public set waitAfterLastChangeSeconds(value: number) {
    this._waitAfterLastChangeSeconds = value;
  }
  public resetWaitAfterLastChangeSeconds() {
    this._waitAfterLastChangeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitAfterLastChangeSecondsInput() {
    return this._waitAfterLastChangeSeconds;
  }
}
export interface JobTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#pause_status Job#pause_status}
  */
  readonly pauseStatus?: string;
  /**
  * file_arrival block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#file_arrival Job#file_arrival}
  */
  readonly fileArrival?: JobTriggerFileArrival;
  /**
  * job_completion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#job_completion Job#job_completion}
  */
  readonly jobCompletion?: JobTriggerJobCompletion;
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#model Job#model}
  */
  readonly model?: JobTriggerModel;
  /**
  * periodic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#periodic Job#periodic}
  */
  readonly periodic?: JobTriggerPeriodic;
  /**
  * sql_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#sql_condition Job#sql_condition}
  */
  readonly sqlCondition?: JobTriggerSqlCondition;
  /**
  * table_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#table_update Job#table_update}
  */
  readonly tableUpdate?: JobTriggerTableUpdate;
}

export function jobTriggerToTerraform(struct?: JobTriggerOutputReference | JobTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pause_status: cdktn.stringToTerraform(struct!.pauseStatus),
    file_arrival: jobTriggerFileArrivalToTerraform(struct!.fileArrival),
    job_completion: jobTriggerJobCompletionToTerraform(struct!.jobCompletion),
    model: jobTriggerModelToTerraform(struct!.model),
    periodic: jobTriggerPeriodicToTerraform(struct!.periodic),
    sql_condition: jobTriggerSqlConditionToTerraform(struct!.sqlCondition),
    table_update: jobTriggerTableUpdateToTerraform(struct!.tableUpdate),
  }
}


export function jobTriggerToHclTerraform(struct?: JobTriggerOutputReference | JobTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pause_status: {
      value: cdktn.stringToHclTerraform(struct!.pauseStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_arrival: {
      value: jobTriggerFileArrivalToHclTerraform(struct!.fileArrival),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggerFileArrivalList",
    },
    job_completion: {
      value: jobTriggerJobCompletionToHclTerraform(struct!.jobCompletion),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggerJobCompletionList",
    },
    model: {
      value: jobTriggerModelToHclTerraform(struct!.model),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggerModelList",
    },
    periodic: {
      value: jobTriggerPeriodicToHclTerraform(struct!.periodic),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggerPeriodicList",
    },
    sql_condition: {
      value: jobTriggerSqlConditionToHclTerraform(struct!.sqlCondition),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggerSqlConditionList",
    },
    table_update: {
      value: jobTriggerTableUpdateToHclTerraform(struct!.tableUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggerTableUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pauseStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseStatus = this._pauseStatus;
    }
    if (this._fileArrival?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileArrival = this._fileArrival?.internalValue;
    }
    if (this._jobCompletion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCompletion = this._jobCompletion?.internalValue;
    }
    if (this._model?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model?.internalValue;
    }
    if (this._periodic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodic = this._periodic?.internalValue;
    }
    if (this._sqlCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlCondition = this._sqlCondition?.internalValue;
    }
    if (this._tableUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableUpdate = this._tableUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pauseStatus = undefined;
      this._fileArrival.internalValue = undefined;
      this._jobCompletion.internalValue = undefined;
      this._model.internalValue = undefined;
      this._periodic.internalValue = undefined;
      this._sqlCondition.internalValue = undefined;
      this._tableUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pauseStatus = value.pauseStatus;
      this._fileArrival.internalValue = value.fileArrival;
      this._jobCompletion.internalValue = value.jobCompletion;
      this._model.internalValue = value.model;
      this._periodic.internalValue = value.periodic;
      this._sqlCondition.internalValue = value.sqlCondition;
      this._tableUpdate.internalValue = value.tableUpdate;
    }
  }

  // pause_status - computed: false, optional: true, required: false
  private _pauseStatus?: string; 
  public get pauseStatus() {
    return this.getStringAttribute('pause_status');
  }
  public set pauseStatus(value: string) {
    this._pauseStatus = value;
  }
  public resetPauseStatus() {
    this._pauseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseStatusInput() {
    return this._pauseStatus;
  }

  // file_arrival - computed: false, optional: true, required: false
  private _fileArrival = new JobTriggerFileArrivalOutputReference(this, "file_arrival");
  public get fileArrival() {
    return this._fileArrival;
  }
  public putFileArrival(value: JobTriggerFileArrival) {
    this._fileArrival.internalValue = value;
  }
  public resetFileArrival() {
    this._fileArrival.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileArrivalInput() {
    return this._fileArrival.internalValue;
  }

  // job_completion - computed: false, optional: true, required: false
  private _jobCompletion = new JobTriggerJobCompletionOutputReference(this, "job_completion");
  public get jobCompletion() {
    return this._jobCompletion;
  }
  public putJobCompletion(value: JobTriggerJobCompletion) {
    this._jobCompletion.internalValue = value;
  }
  public resetJobCompletion() {
    this._jobCompletion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCompletionInput() {
    return this._jobCompletion.internalValue;
  }

  // model - computed: false, optional: true, required: false
  private _model = new JobTriggerModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }
  public putModel(value: JobTriggerModel) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // periodic - computed: false, optional: true, required: false
  private _periodic = new JobTriggerPeriodicOutputReference(this, "periodic");
  public get periodic() {
    return this._periodic;
  }
  public putPeriodic(value: JobTriggerPeriodic) {
    this._periodic.internalValue = value;
  }
  public resetPeriodic() {
    this._periodic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicInput() {
    return this._periodic.internalValue;
  }

  // sql_condition - computed: false, optional: true, required: false
  private _sqlCondition = new JobTriggerSqlConditionOutputReference(this, "sql_condition");
  public get sqlCondition() {
    return this._sqlCondition;
  }
  public putSqlCondition(value: JobTriggerSqlCondition) {
    this._sqlCondition.internalValue = value;
  }
  public resetSqlCondition() {
    this._sqlCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConditionInput() {
    return this._sqlCondition.internalValue;
  }

  // table_update - computed: false, optional: true, required: false
  private _tableUpdate = new JobTriggerTableUpdateOutputReference(this, "table_update");
  public get tableUpdate() {
    return this._tableUpdate;
  }
  public putTableUpdate(value: JobTriggerTableUpdate) {
    this._tableUpdate.internalValue = value;
  }
  public resetTableUpdate() {
    this._tableUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableUpdateInput() {
    return this._tableUpdate.internalValue;
  }
}
export interface JobTriggersContinuousMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#day_of_week Job#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#start_hour Job#start_hour}
  */
  readonly startHour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#timezone_id Job#timezone_id}
  */
  readonly timezoneId: string;
}

export function jobTriggersContinuousMaintenanceWindowToTerraform(struct?: JobTriggersContinuousMaintenanceWindowOutputReference | JobTriggersContinuousMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    start_hour: cdktn.numberToTerraform(struct!.startHour),
    timezone_id: cdktn.stringToTerraform(struct!.timezoneId),
  }
}


export function jobTriggersContinuousMaintenanceWindowToHclTerraform(struct?: JobTriggersContinuousMaintenanceWindowOutputReference | JobTriggersContinuousMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day_of_week: {
      value: cdktn.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_hour: {
      value: cdktn.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone_id: {
      value: cdktn.stringToHclTerraform(struct!.timezoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggersContinuousMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggersContinuousMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._timezoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezoneId = this._timezoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggersContinuousMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._startHour = undefined;
      this._timezoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._startHour = value.startHour;
      this._timezoneId = value.timezoneId;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // start_hour - computed: false, optional: false, required: true
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // timezone_id - computed: false, optional: false, required: true
  private _timezoneId?: string; 
  public get timezoneId() {
    return this.getStringAttribute('timezone_id');
  }
  public set timezoneId(value: string) {
    this._timezoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneIdInput() {
    return this._timezoneId;
  }
}
export interface JobTriggersContinuous {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#task_retry_mode Job#task_retry_mode}
  */
  readonly taskRetryMode?: string;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#maintenance_window Job#maintenance_window}
  */
  readonly maintenanceWindow?: JobTriggersContinuousMaintenanceWindow;
}

export function jobTriggersContinuousToTerraform(struct?: JobTriggersContinuousOutputReference | JobTriggersContinuous): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    task_retry_mode: cdktn.stringToTerraform(struct!.taskRetryMode),
    maintenance_window: jobTriggersContinuousMaintenanceWindowToTerraform(struct!.maintenanceWindow),
  }
}


export function jobTriggersContinuousToHclTerraform(struct?: JobTriggersContinuousOutputReference | JobTriggersContinuous): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    task_retry_mode: {
      value: cdktn.stringToHclTerraform(struct!.taskRetryMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_window: {
      value: jobTriggersContinuousMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggersContinuousMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggersContinuousOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggersContinuous | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taskRetryMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskRetryMode = this._taskRetryMode;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggersContinuous | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._taskRetryMode = undefined;
      this._maintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._taskRetryMode = value.taskRetryMode;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
    }
  }

  // task_retry_mode - computed: false, optional: true, required: false
  private _taskRetryMode?: string; 
  public get taskRetryMode() {
    return this.getStringAttribute('task_retry_mode');
  }
  public set taskRetryMode(value: string) {
    this._taskRetryMode = value;
  }
  public resetTaskRetryMode() {
    this._taskRetryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRetryModeInput() {
    return this._taskRetryMode;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new JobTriggersContinuousMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: JobTriggersContinuousMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }
}
export interface JobTriggersFileArrival {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggersFileArrivalToTerraform(struct?: JobTriggersFileArrivalOutputReference | JobTriggersFileArrival): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    min_time_between_triggers_seconds: cdktn.numberToTerraform(struct!.minTimeBetweenTriggersSeconds),
    url: cdktn.stringToTerraform(struct!.url),
    wait_after_last_change_seconds: cdktn.numberToTerraform(struct!.waitAfterLastChangeSeconds),
  }
}


export function jobTriggersFileArrivalToHclTerraform(struct?: JobTriggersFileArrivalOutputReference | JobTriggersFileArrival): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    min_time_between_triggers_seconds: {
      value: cdktn.numberToHclTerraform(struct!.minTimeBetweenTriggersSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_after_last_change_seconds: {
      value: cdktn.numberToHclTerraform(struct!.waitAfterLastChangeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggersFileArrivalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggersFileArrival | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minTimeBetweenTriggersSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeBetweenTriggersSeconds = this._minTimeBetweenTriggersSeconds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._waitAfterLastChangeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitAfterLastChangeSeconds = this._waitAfterLastChangeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggersFileArrival | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minTimeBetweenTriggersSeconds = undefined;
      this._url = undefined;
      this._waitAfterLastChangeSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minTimeBetweenTriggersSeconds = value.minTimeBetweenTriggersSeconds;
      this._url = value.url;
      this._waitAfterLastChangeSeconds = value.waitAfterLastChangeSeconds;
    }
  }

  // min_time_between_triggers_seconds - computed: false, optional: true, required: false
  private _minTimeBetweenTriggersSeconds?: number; 
  public get minTimeBetweenTriggersSeconds() {
    return this.getNumberAttribute('min_time_between_triggers_seconds');
  }
  public set minTimeBetweenTriggersSeconds(value: number) {
    this._minTimeBetweenTriggersSeconds = value;
  }
  public resetMinTimeBetweenTriggersSeconds() {
    this._minTimeBetweenTriggersSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeBetweenTriggersSecondsInput() {
    return this._minTimeBetweenTriggersSeconds;
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

  // wait_after_last_change_seconds - computed: false, optional: true, required: false
  private _waitAfterLastChangeSeconds?: number; 
  public get waitAfterLastChangeSeconds() {
    return this.getNumberAttribute('wait_after_last_change_seconds');
  }
  public set waitAfterLastChangeSeconds(value: number) {
    this._waitAfterLastChangeSeconds = value;
  }
  public resetWaitAfterLastChangeSeconds() {
    this._waitAfterLastChangeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitAfterLastChangeSecondsInput() {
    return this._waitAfterLastChangeSeconds;
  }
}
export interface JobTriggersJobCompletionJobs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#job_id Job#job_id}
  */
  readonly jobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#workspace_id Job#workspace_id}
  */
  readonly workspaceId: string;
}

export function jobTriggersJobCompletionJobsToTerraform(struct?: JobTriggersJobCompletionJobs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_id: cdktn.stringToTerraform(struct!.jobId),
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function jobTriggersJobCompletionJobsToHclTerraform(struct?: JobTriggersJobCompletionJobs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_id: {
      value: cdktn.stringToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class JobTriggersJobCompletionJobsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTriggersJobCompletionJobs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggersJobCompletionJobs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobId = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobId = value.jobId;
      this._workspaceId = value.workspaceId;
    }
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
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

export class JobTriggersJobCompletionJobsList extends cdktn.ComplexList {
  public internalValue? : JobTriggersJobCompletionJobs[] | cdktn.IResolvable

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
  public get(index: number): JobTriggersJobCompletionJobsOutputReference {
    return new JobTriggersJobCompletionJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTriggersJobCompletion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#if_status Job#if_status}
  */
  readonly ifStatus?: string;
  /**
  * jobs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#jobs Job#jobs}
  */
  readonly jobs: JobTriggersJobCompletionJobs[] | cdktn.IResolvable;
}

export function jobTriggersJobCompletionToTerraform(struct?: JobTriggersJobCompletionOutputReference | JobTriggersJobCompletion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    if_status: cdktn.stringToTerraform(struct!.ifStatus),
    jobs: cdktn.listMapper(jobTriggersJobCompletionJobsToTerraform, true)(struct!.jobs),
  }
}


export function jobTriggersJobCompletionToHclTerraform(struct?: JobTriggersJobCompletionOutputReference | JobTriggersJobCompletion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    if_status: {
      value: cdktn.stringToHclTerraform(struct!.ifStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jobs: {
      value: cdktn.listMapperHcl(jobTriggersJobCompletionJobsToHclTerraform, true)(struct!.jobs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggersJobCompletionJobsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggersJobCompletionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggersJobCompletion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStatus = this._ifStatus;
    }
    if (this._jobs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggersJobCompletion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ifStatus = undefined;
      this._jobs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ifStatus = value.ifStatus;
      this._jobs.internalValue = value.jobs;
    }
  }

  // if_status - computed: false, optional: true, required: false
  private _ifStatus?: string; 
  public get ifStatus() {
    return this.getStringAttribute('if_status');
  }
  public set ifStatus(value: string) {
    this._ifStatus = value;
  }
  public resetIfStatus() {
    this._ifStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStatusInput() {
    return this._ifStatus;
  }

  // jobs - computed: false, optional: false, required: true
  private _jobs = new JobTriggersJobCompletionJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }
  public putJobs(value: JobTriggersJobCompletionJobs[] | cdktn.IResolvable) {
    this._jobs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs.internalValue;
  }
}
export interface JobTriggersModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#aliases Job#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#condition Job#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#securable_name Job#securable_name}
  */
  readonly securableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggersModelToTerraform(struct?: JobTriggersModelOutputReference | JobTriggersModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.aliases),
    condition: cdktn.stringToTerraform(struct!.condition),
    min_time_between_triggers_seconds: cdktn.numberToTerraform(struct!.minTimeBetweenTriggersSeconds),
    securable_name: cdktn.stringToTerraform(struct!.securableName),
    wait_after_last_change_seconds: cdktn.numberToTerraform(struct!.waitAfterLastChangeSeconds),
  }
}


export function jobTriggersModelToHclTerraform(struct?: JobTriggersModelOutputReference | JobTriggersModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aliases: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.aliases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_time_between_triggers_seconds: {
      value: cdktn.numberToHclTerraform(struct!.minTimeBetweenTriggersSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    securable_name: {
      value: cdktn.stringToHclTerraform(struct!.securableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_after_last_change_seconds: {
      value: cdktn.numberToHclTerraform(struct!.waitAfterLastChangeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggersModelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggersModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._minTimeBetweenTriggersSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeBetweenTriggersSeconds = this._minTimeBetweenTriggersSeconds;
    }
    if (this._securableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securableName = this._securableName;
    }
    if (this._waitAfterLastChangeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitAfterLastChangeSeconds = this._waitAfterLastChangeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggersModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aliases = undefined;
      this._condition = undefined;
      this._minTimeBetweenTriggersSeconds = undefined;
      this._securableName = undefined;
      this._waitAfterLastChangeSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aliases = value.aliases;
      this._condition = value.condition;
      this._minTimeBetweenTriggersSeconds = value.minTimeBetweenTriggersSeconds;
      this._securableName = value.securableName;
      this._waitAfterLastChangeSeconds = value.waitAfterLastChangeSeconds;
    }
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return this.getListAttribute('aliases');
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // min_time_between_triggers_seconds - computed: false, optional: true, required: false
  private _minTimeBetweenTriggersSeconds?: number; 
  public get minTimeBetweenTriggersSeconds() {
    return this.getNumberAttribute('min_time_between_triggers_seconds');
  }
  public set minTimeBetweenTriggersSeconds(value: number) {
    this._minTimeBetweenTriggersSeconds = value;
  }
  public resetMinTimeBetweenTriggersSeconds() {
    this._minTimeBetweenTriggersSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeBetweenTriggersSecondsInput() {
    return this._minTimeBetweenTriggersSeconds;
  }

  // securable_name - computed: false, optional: true, required: false
  private _securableName?: string; 
  public get securableName() {
    return this.getStringAttribute('securable_name');
  }
  public set securableName(value: string) {
    this._securableName = value;
  }
  public resetSecurableName() {
    this._securableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securableNameInput() {
    return this._securableName;
  }

  // wait_after_last_change_seconds - computed: false, optional: true, required: false
  private _waitAfterLastChangeSeconds?: number; 
  public get waitAfterLastChangeSeconds() {
    return this.getNumberAttribute('wait_after_last_change_seconds');
  }
  public set waitAfterLastChangeSeconds(value: number) {
    this._waitAfterLastChangeSeconds = value;
  }
  public resetWaitAfterLastChangeSeconds() {
    this._waitAfterLastChangeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitAfterLastChangeSecondsInput() {
    return this._waitAfterLastChangeSeconds;
  }
}
export interface JobTriggersPeriodic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#interval Job#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#unit Job#unit}
  */
  readonly unit: string;
}

export function jobTriggersPeriodicToTerraform(struct?: JobTriggersPeriodicOutputReference | JobTriggersPeriodic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval: cdktn.numberToTerraform(struct!.interval),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function jobTriggersPeriodicToHclTerraform(struct?: JobTriggersPeriodicOutputReference | JobTriggersPeriodic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggersPeriodicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggersPeriodic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggersPeriodic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._unit = value.unit;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface JobTriggersSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#quartz_cron_expression Job#quartz_cron_expression}
  */
  readonly quartzCronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#timezone_id Job#timezone_id}
  */
  readonly timezoneId: string;
}

export function jobTriggersScheduleToTerraform(struct?: JobTriggersScheduleOutputReference | JobTriggersSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    quartz_cron_expression: cdktn.stringToTerraform(struct!.quartzCronExpression),
    timezone_id: cdktn.stringToTerraform(struct!.timezoneId),
  }
}


export function jobTriggersScheduleToHclTerraform(struct?: JobTriggersScheduleOutputReference | JobTriggersSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    quartz_cron_expression: {
      value: cdktn.stringToHclTerraform(struct!.quartzCronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone_id: {
      value: cdktn.stringToHclTerraform(struct!.timezoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggersScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggersSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quartzCronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.quartzCronExpression = this._quartzCronExpression;
    }
    if (this._timezoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezoneId = this._timezoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggersSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._quartzCronExpression = undefined;
      this._timezoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._quartzCronExpression = value.quartzCronExpression;
      this._timezoneId = value.timezoneId;
    }
  }

  // quartz_cron_expression - computed: false, optional: false, required: true
  private _quartzCronExpression?: string; 
  public get quartzCronExpression() {
    return this.getStringAttribute('quartz_cron_expression');
  }
  public set quartzCronExpression(value: string) {
    this._quartzCronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quartzCronExpressionInput() {
    return this._quartzCronExpression;
  }

  // timezone_id - computed: false, optional: false, required: true
  private _timezoneId?: string; 
  public get timezoneId() {
    return this.getStringAttribute('timezone_id');
  }
  public set timezoneId(value: string) {
    this._timezoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneIdInput() {
    return this._timezoneId;
  }
}
export interface JobTriggersSqlCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#sql_query_id Job#sql_query_id}
  */
  readonly sqlQueryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#trigger_mode Job#trigger_mode}
  */
  readonly triggerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId: string;
}

export function jobTriggersSqlConditionToTerraform(struct?: JobTriggersSqlConditionOutputReference | JobTriggersSqlCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sql_query_id: cdktn.stringToTerraform(struct!.sqlQueryId),
    trigger_mode: cdktn.stringToTerraform(struct!.triggerMode),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
  }
}


export function jobTriggersSqlConditionToHclTerraform(struct?: JobTriggersSqlConditionOutputReference | JobTriggersSqlCondition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sql_query_id: {
      value: cdktn.stringToHclTerraform(struct!.sqlQueryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_mode: {
      value: cdktn.stringToHclTerraform(struct!.triggerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggersSqlConditionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggersSqlCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sqlQueryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlQueryId = this._sqlQueryId;
    }
    if (this._triggerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerMode = this._triggerMode;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggersSqlCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sqlQueryId = undefined;
      this._triggerMode = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sqlQueryId = value.sqlQueryId;
      this._triggerMode = value.triggerMode;
      this._warehouseId = value.warehouseId;
    }
  }

  // sql_query_id - computed: false, optional: false, required: true
  private _sqlQueryId?: string; 
  public get sqlQueryId() {
    return this.getStringAttribute('sql_query_id');
  }
  public set sqlQueryId(value: string) {
    this._sqlQueryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlQueryIdInput() {
    return this._sqlQueryId;
  }

  // trigger_mode - computed: false, optional: true, required: false
  private _triggerMode?: string; 
  public get triggerMode() {
    return this.getStringAttribute('trigger_mode');
  }
  public set triggerMode(value: string) {
    this._triggerMode = value;
  }
  public resetTriggerMode() {
    this._triggerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerModeInput() {
    return this._triggerMode;
  }

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }
}
export interface JobTriggersTableUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#condition Job#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#table_names Job#table_names}
  */
  readonly tableNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggersTableUpdateToTerraform(struct?: JobTriggersTableUpdateOutputReference | JobTriggersTableUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    min_time_between_triggers_seconds: cdktn.numberToTerraform(struct!.minTimeBetweenTriggersSeconds),
    table_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tableNames),
    wait_after_last_change_seconds: cdktn.numberToTerraform(struct!.waitAfterLastChangeSeconds),
  }
}


export function jobTriggersTableUpdateToHclTerraform(struct?: JobTriggersTableUpdateOutputReference | JobTriggersTableUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_time_between_triggers_seconds: {
      value: cdktn.numberToHclTerraform(struct!.minTimeBetweenTriggersSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tableNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wait_after_last_change_seconds: {
      value: cdktn.numberToHclTerraform(struct!.waitAfterLastChangeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggersTableUpdateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTriggersTableUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._minTimeBetweenTriggersSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeBetweenTriggersSeconds = this._minTimeBetweenTriggersSeconds;
    }
    if (this._tableNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNames = this._tableNames;
    }
    if (this._waitAfterLastChangeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitAfterLastChangeSeconds = this._waitAfterLastChangeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggersTableUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._minTimeBetweenTriggersSeconds = undefined;
      this._tableNames = undefined;
      this._waitAfterLastChangeSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._minTimeBetweenTriggersSeconds = value.minTimeBetweenTriggersSeconds;
      this._tableNames = value.tableNames;
      this._waitAfterLastChangeSeconds = value.waitAfterLastChangeSeconds;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // min_time_between_triggers_seconds - computed: false, optional: true, required: false
  private _minTimeBetweenTriggersSeconds?: number; 
  public get minTimeBetweenTriggersSeconds() {
    return this.getNumberAttribute('min_time_between_triggers_seconds');
  }
  public set minTimeBetweenTriggersSeconds(value: number) {
    this._minTimeBetweenTriggersSeconds = value;
  }
  public resetMinTimeBetweenTriggersSeconds() {
    this._minTimeBetweenTriggersSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeBetweenTriggersSecondsInput() {
    return this._minTimeBetweenTriggersSeconds;
  }

  // table_names - computed: false, optional: false, required: true
  private _tableNames?: string[]; 
  public get tableNames() {
    return this.getListAttribute('table_names');
  }
  public set tableNames(value: string[]) {
    this._tableNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamesInput() {
    return this._tableNames;
  }

  // wait_after_last_change_seconds - computed: false, optional: true, required: false
  private _waitAfterLastChangeSeconds?: number; 
  public get waitAfterLastChangeSeconds() {
    return this.getNumberAttribute('wait_after_last_change_seconds');
  }
  public set waitAfterLastChangeSeconds(value: number) {
    this._waitAfterLastChangeSeconds = value;
  }
  public resetWaitAfterLastChangeSeconds() {
    this._waitAfterLastChangeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitAfterLastChangeSecondsInput() {
    return this._waitAfterLastChangeSeconds;
  }
}
export interface JobTriggers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#pause_status Job#pause_status}
  */
  readonly pauseStatus?: string;
  /**
  * continuous block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#continuous Job#continuous}
  */
  readonly continuous?: JobTriggersContinuous;
  /**
  * file_arrival block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#file_arrival Job#file_arrival}
  */
  readonly fileArrival?: JobTriggersFileArrival;
  /**
  * job_completion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#job_completion Job#job_completion}
  */
  readonly jobCompletion?: JobTriggersJobCompletion;
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#model Job#model}
  */
  readonly model?: JobTriggersModel;
  /**
  * periodic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#periodic Job#periodic}
  */
  readonly periodic?: JobTriggersPeriodic;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#schedule Job#schedule}
  */
  readonly schedule?: JobTriggersSchedule;
  /**
  * sql_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#sql_condition Job#sql_condition}
  */
  readonly sqlCondition?: JobTriggersSqlCondition;
  /**
  * table_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#table_update Job#table_update}
  */
  readonly tableUpdate?: JobTriggersTableUpdate;
}

export function jobTriggersToTerraform(struct?: JobTriggers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pause_status: cdktn.stringToTerraform(struct!.pauseStatus),
    continuous: jobTriggersContinuousToTerraform(struct!.continuous),
    file_arrival: jobTriggersFileArrivalToTerraform(struct!.fileArrival),
    job_completion: jobTriggersJobCompletionToTerraform(struct!.jobCompletion),
    model: jobTriggersModelToTerraform(struct!.model),
    periodic: jobTriggersPeriodicToTerraform(struct!.periodic),
    schedule: jobTriggersScheduleToTerraform(struct!.schedule),
    sql_condition: jobTriggersSqlConditionToTerraform(struct!.sqlCondition),
    table_update: jobTriggersTableUpdateToTerraform(struct!.tableUpdate),
  }
}


export function jobTriggersToHclTerraform(struct?: JobTriggers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pause_status: {
      value: cdktn.stringToHclTerraform(struct!.pauseStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continuous: {
      value: jobTriggersContinuousToHclTerraform(struct!.continuous),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggersContinuousList",
    },
    file_arrival: {
      value: jobTriggersFileArrivalToHclTerraform(struct!.fileArrival),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggersFileArrivalList",
    },
    job_completion: {
      value: jobTriggersJobCompletionToHclTerraform(struct!.jobCompletion),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggersJobCompletionList",
    },
    model: {
      value: jobTriggersModelToHclTerraform(struct!.model),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggersModelList",
    },
    periodic: {
      value: jobTriggersPeriodicToHclTerraform(struct!.periodic),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggersPeriodicList",
    },
    schedule: {
      value: jobTriggersScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggersScheduleList",
    },
    sql_condition: {
      value: jobTriggersSqlConditionToHclTerraform(struct!.sqlCondition),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggersSqlConditionList",
    },
    table_update: {
      value: jobTriggersTableUpdateToHclTerraform(struct!.tableUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "JobTriggersTableUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTriggersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTriggers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pauseStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseStatus = this._pauseStatus;
    }
    if (this._continuous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuous = this._continuous?.internalValue;
    }
    if (this._fileArrival?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileArrival = this._fileArrival?.internalValue;
    }
    if (this._jobCompletion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCompletion = this._jobCompletion?.internalValue;
    }
    if (this._model?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model?.internalValue;
    }
    if (this._periodic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodic = this._periodic?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._sqlCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlCondition = this._sqlCondition?.internalValue;
    }
    if (this._tableUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableUpdate = this._tableUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTriggers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pauseStatus = undefined;
      this._continuous.internalValue = undefined;
      this._fileArrival.internalValue = undefined;
      this._jobCompletion.internalValue = undefined;
      this._model.internalValue = undefined;
      this._periodic.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._sqlCondition.internalValue = undefined;
      this._tableUpdate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pauseStatus = value.pauseStatus;
      this._continuous.internalValue = value.continuous;
      this._fileArrival.internalValue = value.fileArrival;
      this._jobCompletion.internalValue = value.jobCompletion;
      this._model.internalValue = value.model;
      this._periodic.internalValue = value.periodic;
      this._schedule.internalValue = value.schedule;
      this._sqlCondition.internalValue = value.sqlCondition;
      this._tableUpdate.internalValue = value.tableUpdate;
    }
  }

  // pause_status - computed: false, optional: true, required: false
  private _pauseStatus?: string; 
  public get pauseStatus() {
    return this.getStringAttribute('pause_status');
  }
  public set pauseStatus(value: string) {
    this._pauseStatus = value;
  }
  public resetPauseStatus() {
    this._pauseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseStatusInput() {
    return this._pauseStatus;
  }

  // continuous - computed: false, optional: true, required: false
  private _continuous = new JobTriggersContinuousOutputReference(this, "continuous");
  public get continuous() {
    return this._continuous;
  }
  public putContinuous(value: JobTriggersContinuous) {
    this._continuous.internalValue = value;
  }
  public resetContinuous() {
    this._continuous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous.internalValue;
  }

  // file_arrival - computed: false, optional: true, required: false
  private _fileArrival = new JobTriggersFileArrivalOutputReference(this, "file_arrival");
  public get fileArrival() {
    return this._fileArrival;
  }
  public putFileArrival(value: JobTriggersFileArrival) {
    this._fileArrival.internalValue = value;
  }
  public resetFileArrival() {
    this._fileArrival.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileArrivalInput() {
    return this._fileArrival.internalValue;
  }

  // job_completion - computed: false, optional: true, required: false
  private _jobCompletion = new JobTriggersJobCompletionOutputReference(this, "job_completion");
  public get jobCompletion() {
    return this._jobCompletion;
  }
  public putJobCompletion(value: JobTriggersJobCompletion) {
    this._jobCompletion.internalValue = value;
  }
  public resetJobCompletion() {
    this._jobCompletion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCompletionInput() {
    return this._jobCompletion.internalValue;
  }

  // model - computed: false, optional: true, required: false
  private _model = new JobTriggersModelOutputReference(this, "model");
  public get model() {
    return this._model;
  }
  public putModel(value: JobTriggersModel) {
    this._model.internalValue = value;
  }
  public resetModel() {
    this._model.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model.internalValue;
  }

  // periodic - computed: false, optional: true, required: false
  private _periodic = new JobTriggersPeriodicOutputReference(this, "periodic");
  public get periodic() {
    return this._periodic;
  }
  public putPeriodic(value: JobTriggersPeriodic) {
    this._periodic.internalValue = value;
  }
  public resetPeriodic() {
    this._periodic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicInput() {
    return this._periodic.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new JobTriggersScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: JobTriggersSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // sql_condition - computed: false, optional: true, required: false
  private _sqlCondition = new JobTriggersSqlConditionOutputReference(this, "sql_condition");
  public get sqlCondition() {
    return this._sqlCondition;
  }
  public putSqlCondition(value: JobTriggersSqlCondition) {
    this._sqlCondition.internalValue = value;
  }
  public resetSqlCondition() {
    this._sqlCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConditionInput() {
    return this._sqlCondition.internalValue;
  }

  // table_update - computed: false, optional: true, required: false
  private _tableUpdate = new JobTriggersTableUpdateOutputReference(this, "table_update");
  public get tableUpdate() {
    return this._tableUpdate;
  }
  public putTableUpdate(value: JobTriggersTableUpdate) {
    this._tableUpdate.internalValue = value;
  }
  public resetTableUpdate() {
    this._tableUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableUpdateInput() {
    return this._tableUpdate.internalValue;
  }
}

export class JobTriggersList extends cdktn.ComplexList {
  public internalValue? : JobTriggers[] | cdktn.IResolvable

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
  public get(index: number): JobTriggersOutputReference {
    return new JobTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotificationsOnDurationWarningThresholdExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnDurationWarningThresholdExceededToTerraform(struct?: JobWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform(struct?: JobWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobWebhookNotificationsOnDurationWarningThresholdExceededOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobWebhookNotificationsOnDurationWarningThresholdExceededList extends cdktn.ComplexList {
  public internalValue? : JobWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnDurationWarningThresholdExceededOutputReference {
    return new JobWebhookNotificationsOnDurationWarningThresholdExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotificationsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnFailureToTerraform(struct?: JobWebhookNotificationsOnFailure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnFailureToHclTerraform(struct?: JobWebhookNotificationsOnFailure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobWebhookNotificationsOnFailureOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnFailure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobWebhookNotificationsOnFailure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobWebhookNotificationsOnFailureList extends cdktn.ComplexList {
  public internalValue? : JobWebhookNotificationsOnFailure[] | cdktn.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnFailureOutputReference {
    return new JobWebhookNotificationsOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotificationsOnMaintenanceComplete {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnMaintenanceCompleteToTerraform(struct?: JobWebhookNotificationsOnMaintenanceComplete | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnMaintenanceCompleteToHclTerraform(struct?: JobWebhookNotificationsOnMaintenanceComplete | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobWebhookNotificationsOnMaintenanceCompleteOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnMaintenanceComplete | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobWebhookNotificationsOnMaintenanceComplete | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobWebhookNotificationsOnMaintenanceCompleteList extends cdktn.ComplexList {
  public internalValue? : JobWebhookNotificationsOnMaintenanceComplete[] | cdktn.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnMaintenanceCompleteOutputReference {
    return new JobWebhookNotificationsOnMaintenanceCompleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotificationsOnMaintenanceStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnMaintenanceStartToTerraform(struct?: JobWebhookNotificationsOnMaintenanceStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnMaintenanceStartToHclTerraform(struct?: JobWebhookNotificationsOnMaintenanceStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobWebhookNotificationsOnMaintenanceStartOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnMaintenanceStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobWebhookNotificationsOnMaintenanceStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobWebhookNotificationsOnMaintenanceStartList extends cdktn.ComplexList {
  public internalValue? : JobWebhookNotificationsOnMaintenanceStart[] | cdktn.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnMaintenanceStartOutputReference {
    return new JobWebhookNotificationsOnMaintenanceStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotificationsOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnStartToTerraform(struct?: JobWebhookNotificationsOnStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnStartToHclTerraform(struct?: JobWebhookNotificationsOnStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobWebhookNotificationsOnStartOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobWebhookNotificationsOnStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobWebhookNotificationsOnStartList extends cdktn.ComplexList {
  public internalValue? : JobWebhookNotificationsOnStart[] | cdktn.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnStartOutputReference {
    return new JobWebhookNotificationsOnStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotificationsOnStreamingBacklogExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnStreamingBacklogExceededToTerraform(struct?: JobWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnStreamingBacklogExceededToHclTerraform(struct?: JobWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobWebhookNotificationsOnStreamingBacklogExceededOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobWebhookNotificationsOnStreamingBacklogExceededList extends cdktn.ComplexList {
  public internalValue? : JobWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnStreamingBacklogExceededOutputReference {
    return new JobWebhookNotificationsOnStreamingBacklogExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotificationsOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnSuccessToTerraform(struct?: JobWebhookNotificationsOnSuccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnSuccessToHclTerraform(struct?: JobWebhookNotificationsOnSuccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobWebhookNotificationsOnSuccessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobWebhookNotificationsOnSuccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobWebhookNotificationsOnSuccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class JobWebhookNotificationsOnSuccessList extends cdktn.ComplexList {
  public internalValue? : JobWebhookNotificationsOnSuccess[] | cdktn.IResolvable

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
  public get(index: number): JobWebhookNotificationsOnSuccessOutputReference {
    return new JobWebhookNotificationsOnSuccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobWebhookNotifications {
  /**
  * on_duration_warning_threshold_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: JobWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: JobWebhookNotificationsOnFailure[] | cdktn.IResolvable;
  /**
  * on_maintenance_complete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_maintenance_complete Job#on_maintenance_complete}
  */
  readonly onMaintenanceComplete?: JobWebhookNotificationsOnMaintenanceComplete[] | cdktn.IResolvable;
  /**
  * on_maintenance_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_maintenance_start Job#on_maintenance_start}
  */
  readonly onMaintenanceStart?: JobWebhookNotificationsOnMaintenanceStart[] | cdktn.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: JobWebhookNotificationsOnStart[] | cdktn.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: JobWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/job#on_success Job#on_success}
  */
  readonly onSuccess?: JobWebhookNotificationsOnSuccess[] | cdktn.IResolvable;
}

export function jobWebhookNotificationsToTerraform(struct?: JobWebhookNotificationsOutputReference | JobWebhookNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on_duration_warning_threshold_exceeded: cdktn.listMapper(jobWebhookNotificationsOnDurationWarningThresholdExceededToTerraform, true)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktn.listMapper(jobWebhookNotificationsOnFailureToTerraform, true)(struct!.onFailure),
    on_maintenance_complete: cdktn.listMapper(jobWebhookNotificationsOnMaintenanceCompleteToTerraform, true)(struct!.onMaintenanceComplete),
    on_maintenance_start: cdktn.listMapper(jobWebhookNotificationsOnMaintenanceStartToTerraform, true)(struct!.onMaintenanceStart),
    on_start: cdktn.listMapper(jobWebhookNotificationsOnStartToTerraform, true)(struct!.onStart),
    on_streaming_backlog_exceeded: cdktn.listMapper(jobWebhookNotificationsOnStreamingBacklogExceededToTerraform, true)(struct!.onStreamingBacklogExceeded),
    on_success: cdktn.listMapper(jobWebhookNotificationsOnSuccessToTerraform, true)(struct!.onSuccess),
  }
}


export function jobWebhookNotificationsToHclTerraform(struct?: JobWebhookNotificationsOutputReference | JobWebhookNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on_duration_warning_threshold_exceeded: {
      value: cdktn.listMapperHcl(jobWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform, true)(struct!.onDurationWarningThresholdExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnDurationWarningThresholdExceededList",
    },
    on_failure: {
      value: cdktn.listMapperHcl(jobWebhookNotificationsOnFailureToHclTerraform, true)(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnFailureList",
    },
    on_maintenance_complete: {
      value: cdktn.listMapperHcl(jobWebhookNotificationsOnMaintenanceCompleteToHclTerraform, true)(struct!.onMaintenanceComplete),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnMaintenanceCompleteList",
    },
    on_maintenance_start: {
      value: cdktn.listMapperHcl(jobWebhookNotificationsOnMaintenanceStartToHclTerraform, true)(struct!.onMaintenanceStart),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnMaintenanceStartList",
    },
    on_start: {
      value: cdktn.listMapperHcl(jobWebhookNotificationsOnStartToHclTerraform, true)(struct!.onStart),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnStartList",
    },
    on_streaming_backlog_exceeded: {
      value: cdktn.listMapperHcl(jobWebhookNotificationsOnStreamingBacklogExceededToHclTerraform, true)(struct!.onStreamingBacklogExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnStreamingBacklogExceededList",
    },
    on_success: {
      value: cdktn.listMapperHcl(jobWebhookNotificationsOnSuccessToHclTerraform, true)(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "JobWebhookNotificationsOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobWebhookNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobWebhookNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDurationWarningThresholdExceeded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDurationWarningThresholdExceeded = this._onDurationWarningThresholdExceeded?.internalValue;
    }
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onMaintenanceComplete?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onMaintenanceComplete = this._onMaintenanceComplete?.internalValue;
    }
    if (this._onMaintenanceStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onMaintenanceStart = this._onMaintenanceStart?.internalValue;
    }
    if (this._onStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStart = this._onStart?.internalValue;
    }
    if (this._onStreamingBacklogExceeded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStreamingBacklogExceeded = this._onStreamingBacklogExceeded?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobWebhookNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDurationWarningThresholdExceeded.internalValue = undefined;
      this._onFailure.internalValue = undefined;
      this._onMaintenanceComplete.internalValue = undefined;
      this._onMaintenanceStart.internalValue = undefined;
      this._onStart.internalValue = undefined;
      this._onStreamingBacklogExceeded.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDurationWarningThresholdExceeded.internalValue = value.onDurationWarningThresholdExceeded;
      this._onFailure.internalValue = value.onFailure;
      this._onMaintenanceComplete.internalValue = value.onMaintenanceComplete;
      this._onMaintenanceStart.internalValue = value.onMaintenanceStart;
      this._onStart.internalValue = value.onStart;
      this._onStreamingBacklogExceeded.internalValue = value.onStreamingBacklogExceeded;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // on_duration_warning_threshold_exceeded - computed: false, optional: true, required: false
  private _onDurationWarningThresholdExceeded = new JobWebhookNotificationsOnDurationWarningThresholdExceededList(this, "on_duration_warning_threshold_exceeded", false);
  public get onDurationWarningThresholdExceeded() {
    return this._onDurationWarningThresholdExceeded;
  }
  public putOnDurationWarningThresholdExceeded(value: JobWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable) {
    this._onDurationWarningThresholdExceeded.internalValue = value;
  }
  public resetOnDurationWarningThresholdExceeded() {
    this._onDurationWarningThresholdExceeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDurationWarningThresholdExceededInput() {
    return this._onDurationWarningThresholdExceeded.internalValue;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new JobWebhookNotificationsOnFailureList(this, "on_failure", false);
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: JobWebhookNotificationsOnFailure[] | cdktn.IResolvable) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_maintenance_complete - computed: false, optional: true, required: false
  private _onMaintenanceComplete = new JobWebhookNotificationsOnMaintenanceCompleteList(this, "on_maintenance_complete", false);
  public get onMaintenanceComplete() {
    return this._onMaintenanceComplete;
  }
  public putOnMaintenanceComplete(value: JobWebhookNotificationsOnMaintenanceComplete[] | cdktn.IResolvable) {
    this._onMaintenanceComplete.internalValue = value;
  }
  public resetOnMaintenanceComplete() {
    this._onMaintenanceComplete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMaintenanceCompleteInput() {
    return this._onMaintenanceComplete.internalValue;
  }

  // on_maintenance_start - computed: false, optional: true, required: false
  private _onMaintenanceStart = new JobWebhookNotificationsOnMaintenanceStartList(this, "on_maintenance_start", false);
  public get onMaintenanceStart() {
    return this._onMaintenanceStart;
  }
  public putOnMaintenanceStart(value: JobWebhookNotificationsOnMaintenanceStart[] | cdktn.IResolvable) {
    this._onMaintenanceStart.internalValue = value;
  }
  public resetOnMaintenanceStart() {
    this._onMaintenanceStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMaintenanceStartInput() {
    return this._onMaintenanceStart.internalValue;
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart = new JobWebhookNotificationsOnStartList(this, "on_start", false);
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: JobWebhookNotificationsOnStart[] | cdktn.IResolvable) {
    this._onStart.internalValue = value;
  }
  public resetOnStart() {
    this._onStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart.internalValue;
  }

  // on_streaming_backlog_exceeded - computed: false, optional: true, required: false
  private _onStreamingBacklogExceeded = new JobWebhookNotificationsOnStreamingBacklogExceededList(this, "on_streaming_backlog_exceeded", false);
  public get onStreamingBacklogExceeded() {
    return this._onStreamingBacklogExceeded;
  }
  public putOnStreamingBacklogExceeded(value: JobWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable) {
    this._onStreamingBacklogExceeded.internalValue = value;
  }
  public resetOnStreamingBacklogExceeded() {
    this._onStreamingBacklogExceeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStreamingBacklogExceededInput() {
    return this._onStreamingBacklogExceeded.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new JobWebhookNotificationsOnSuccessList(this, "on_success", false);
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: JobWebhookNotificationsOnSuccess[] | cdktn.IResolvable) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }
}
