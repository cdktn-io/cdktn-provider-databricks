/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { JobTaskAiRuntimeTask,
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
JobTaskDbtTaskOutputReference,
JobTaskDependsOn,
jobTaskDependsOnToTerraform,
jobTaskDependsOnToHclTerraform,
JobTaskDependsOnList,
JobTaskEmailNotifications,
jobTaskEmailNotificationsToTerraform,
jobTaskEmailNotificationsToHclTerraform,
JobTaskEmailNotificationsOutputReference } from './structs0';
import { JobTaskForEachTask,
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
JobTaskLibraryList,
JobTaskNewCluster,
jobTaskNewClusterToTerraform,
jobTaskNewClusterToHclTerraform,
JobTaskNewClusterOutputReference,
JobTaskNotebookTask,
jobTaskNotebookTaskToTerraform,
jobTaskNotebookTaskToHclTerraform,
JobTaskNotebookTaskOutputReference,
JobTaskNotificationSettings,
jobTaskNotificationSettingsToTerraform,
jobTaskNotificationSettingsToHclTerraform,
JobTaskNotificationSettingsOutputReference,
JobTaskPipelineTask,
jobTaskPipelineTaskToTerraform,
jobTaskPipelineTaskToHclTerraform,
JobTaskPipelineTaskOutputReference,
JobTaskPowerBiTask,
jobTaskPowerBiTaskToTerraform,
jobTaskPowerBiTaskToHclTerraform,
JobTaskPowerBiTaskOutputReference,
JobTaskPythonOperatorTask,
jobTaskPythonOperatorTaskToTerraform,
jobTaskPythonOperatorTaskToHclTerraform,
JobTaskPythonOperatorTaskOutputReference,
JobTaskPythonWheelTask,
jobTaskPythonWheelTaskToTerraform,
jobTaskPythonWheelTaskToHclTerraform,
JobTaskPythonWheelTaskOutputReference,
JobTaskRunJobTask,
jobTaskRunJobTaskToTerraform,
jobTaskRunJobTaskToHclTerraform,
JobTaskRunJobTaskOutputReference,
JobTaskSparkJarTask,
jobTaskSparkJarTaskToTerraform,
jobTaskSparkJarTaskToHclTerraform,
JobTaskSparkJarTaskOutputReference,
JobTaskSparkPythonTask,
jobTaskSparkPythonTaskToTerraform,
jobTaskSparkPythonTaskToHclTerraform,
JobTaskSparkPythonTaskOutputReference,
JobTaskSparkSubmitTask,
jobTaskSparkSubmitTaskToTerraform,
jobTaskSparkSubmitTaskToHclTerraform,
JobTaskSparkSubmitTaskOutputReference } from './structs400';
export interface JobTaskSqlTaskAlertSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#user_name Job#user_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#alert_id Job#alert_id}
  */
  readonly alertId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktn.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#subscriptions Job#subscriptions}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#user_name Job#user_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#custom_subject Job#custom_subject}
  */
  readonly customSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#dashboard_id Job#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktn.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#subscriptions Job#subscriptions}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#path Job#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#source Job#source}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#query_id Job#query_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#alert Job#alert}
  */
  readonly alert?: JobTaskSqlTaskAlert;
  /**
  * dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#dashboard Job#dashboard}
  */
  readonly dashboard?: JobTaskSqlTaskDashboard;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#file Job#file}
  */
  readonly file?: JobTaskSqlTaskFile;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#query Job#query}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#id Job#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#id Job#id}
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
export interface JobTaskWebhookNotificationsOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#id Job#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#id Job#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#id Job#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: JobTaskWebhookNotificationsOnFailure[] | cdktn.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: JobTaskWebhookNotificationsOnStart[] | cdktn.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: JobTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#on_success Job#on_success}
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
      this._onStart.internalValue = undefined;
      this._onStreamingBacklogExceeded.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDurationWarningThresholdExceeded.internalValue = value.onDurationWarningThresholdExceeded;
      this._onFailure.internalValue = value.onFailure;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#description Job#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#disable_auto_optimization Job#disable_auto_optimization}
  */
  readonly disableAutoOptimization?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#disabled Job#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#environment_key Job#environment_key}
  */
  readonly environmentKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#existing_cluster_id Job#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#job_cluster_key Job#job_cluster_key}
  */
  readonly jobClusterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#max_retries Job#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#min_retry_interval_millis Job#min_retry_interval_millis}
  */
  readonly minRetryIntervalMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#retry_on_timeout Job#retry_on_timeout}
  */
  readonly retryOnTimeout?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#run_if Job#run_if}
  */
  readonly runIf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#task_key Job#task_key}
  */
  readonly taskKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#timeout_seconds Job#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * ai_runtime_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#ai_runtime_task Job#ai_runtime_task}
  */
  readonly aiRuntimeTask?: JobTaskAiRuntimeTask;
  /**
  * alert_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#alert_task Job#alert_task}
  */
  readonly alertTask?: JobTaskAlertTask;
  /**
  * clean_rooms_notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#clean_rooms_notebook_task Job#clean_rooms_notebook_task}
  */
  readonly cleanRoomsNotebookTask?: JobTaskCleanRoomsNotebookTask;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#compute Job#compute}
  */
  readonly compute?: JobTaskCompute;
  /**
  * condition_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#condition_task Job#condition_task}
  */
  readonly conditionTask?: JobTaskConditionTask;
  /**
  * dashboard_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#dashboard_task Job#dashboard_task}
  */
  readonly dashboardTask?: JobTaskDashboardTask;
  /**
  * dbt_cloud_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#dbt_cloud_task Job#dbt_cloud_task}
  */
  readonly dbtCloudTask?: JobTaskDbtCloudTask;
  /**
  * dbt_platform_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#dbt_platform_task Job#dbt_platform_task}
  */
  readonly dbtPlatformTask?: JobTaskDbtPlatformTask;
  /**
  * dbt_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#dbt_task Job#dbt_task}
  */
  readonly dbtTask?: JobTaskDbtTask;
  /**
  * depends_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#depends_on Job#depends_on}
  */
  readonly dependsOn?: JobTaskDependsOn[] | cdktn.IResolvable;
  /**
  * email_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#email_notifications Job#email_notifications}
  */
  readonly emailNotifications?: JobTaskEmailNotifications;
  /**
  * for_each_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#for_each_task Job#for_each_task}
  */
  readonly forEachTask?: JobTaskForEachTask;
  /**
  * gen_ai_compute_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#gen_ai_compute_task Job#gen_ai_compute_task}
  */
  readonly genAiComputeTask?: JobTaskGenAiComputeTask;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#health Job#health}
  */
  readonly health?: JobTaskHealth;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#library Job#library}
  */
  readonly library?: JobTaskLibrary[] | cdktn.IResolvable;
  /**
  * new_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#new_cluster Job#new_cluster}
  */
  readonly newCluster?: JobTaskNewCluster;
  /**
  * notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#notebook_task Job#notebook_task}
  */
  readonly notebookTask?: JobTaskNotebookTask;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#notification_settings Job#notification_settings}
  */
  readonly notificationSettings?: JobTaskNotificationSettings;
  /**
  * pipeline_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#pipeline_task Job#pipeline_task}
  */
  readonly pipelineTask?: JobTaskPipelineTask;
  /**
  * power_bi_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#power_bi_task Job#power_bi_task}
  */
  readonly powerBiTask?: JobTaskPowerBiTask;
  /**
  * python_operator_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#python_operator_task Job#python_operator_task}
  */
  readonly pythonOperatorTask?: JobTaskPythonOperatorTask;
  /**
  * python_wheel_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#python_wheel_task Job#python_wheel_task}
  */
  readonly pythonWheelTask?: JobTaskPythonWheelTask;
  /**
  * run_job_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#run_job_task Job#run_job_task}
  */
  readonly runJobTask?: JobTaskRunJobTask;
  /**
  * spark_jar_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#spark_jar_task Job#spark_jar_task}
  */
  readonly sparkJarTask?: JobTaskSparkJarTask;
  /**
  * spark_python_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#spark_python_task Job#spark_python_task}
  */
  readonly sparkPythonTask?: JobTaskSparkPythonTask;
  /**
  * spark_submit_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#spark_submit_task Job#spark_submit_task}
  */
  readonly sparkSubmitTask?: JobTaskSparkSubmitTask;
  /**
  * sql_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#sql_task Job#sql_task}
  */
  readonly sqlTask?: JobTaskSqlTask;
  /**
  * webhook_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#webhook_notifications Job#webhook_notifications}
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
    existing_cluster_id: cdktn.stringToTerraform(struct!.existingClusterId),
    job_cluster_key: cdktn.stringToTerraform(struct!.jobClusterKey),
    max_retries: cdktn.numberToTerraform(struct!.maxRetries),
    min_retry_interval_millis: cdktn.numberToTerraform(struct!.minRetryIntervalMillis),
    retry_on_timeout: cdktn.booleanToTerraform(struct!.retryOnTimeout),
    run_if: cdktn.stringToTerraform(struct!.runIf),
    task_key: cdktn.stringToTerraform(struct!.taskKey),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
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
      this._existingClusterId = undefined;
      this._jobClusterKey = undefined;
      this._maxRetries = undefined;
      this._minRetryIntervalMillis = undefined;
      this._retryOnTimeout = undefined;
      this._runIf = undefined;
      this._taskKey = undefined;
      this._timeoutSeconds = undefined;
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
      this._existingClusterId = value.existingClusterId;
      this._jobClusterKey = value.jobClusterKey;
      this._maxRetries = value.maxRetries;
      this._minRetryIntervalMillis = value.minRetryIntervalMillis;
      this._retryOnTimeout = value.retryOnTimeout;
      this._runIf = value.runIf;
      this._taskKey = value.taskKey;
      this._timeoutSeconds = value.timeoutSeconds;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#create Job#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#update Job#update}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
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
export interface JobTriggerModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#aliases Job#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#condition Job#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#securable_name Job#securable_name}
  */
  readonly securableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#interval Job#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#unit Job#unit}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#sql_query_id Job#sql_query_id}
  */
  readonly sqlQueryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#trigger_mode Job#trigger_mode}
  */
  readonly triggerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#warehouse_id Job#warehouse_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#condition Job#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#table_names Job#table_names}
  */
  readonly tableNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#pause_status Job#pause_status}
  */
  readonly pauseStatus?: string;
  /**
  * file_arrival block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#file_arrival Job#file_arrival}
  */
  readonly fileArrival?: JobTriggerFileArrival;
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#model Job#model}
  */
  readonly model?: JobTriggerModel;
  /**
  * periodic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#periodic Job#periodic}
  */
  readonly periodic?: JobTriggerPeriodic;
  /**
  * sql_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#sql_condition Job#sql_condition}
  */
  readonly sqlCondition?: JobTriggerSqlCondition;
  /**
  * table_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#table_update Job#table_update}
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
      this._model.internalValue = undefined;
      this._periodic.internalValue = undefined;
      this._sqlCondition.internalValue = undefined;
      this._tableUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pauseStatus = value.pauseStatus;
      this._fileArrival.internalValue = value.fileArrival;
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
export interface JobWebhookNotificationsOnDurationWarningThresholdExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#id Job#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#id Job#id}
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
export interface JobWebhookNotificationsOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#id Job#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#id Job#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#id Job#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: JobWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: JobWebhookNotificationsOnFailure[] | cdktn.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: JobWebhookNotificationsOnStart[] | cdktn.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: JobWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/job#on_success Job#on_success}
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
      this._onStart.internalValue = undefined;
      this._onStreamingBacklogExceeded.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDurationWarningThresholdExceeded.internalValue = value.onDurationWarningThresholdExceeded;
      this._onFailure.internalValue = value.onFailure;
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
