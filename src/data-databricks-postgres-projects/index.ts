/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksPostgresProjectsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#page_size DataDatabricksPostgresProjects#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}
  */
  readonly providerConfig?: DataDatabricksPostgresProjectsProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#show_deleted DataDatabricksPostgresProjects#show_deleted}
  */
  readonly showDeleted?: boolean | cdktn.IResolvable;
}
export interface DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#enable_readable_secondaries DataDatabricksPostgresProjects#enable_readable_secondaries}
  */
  readonly enableReadableSecondaries?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#max DataDatabricksPostgresProjects#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#min DataDatabricksPostgresProjects#min}
  */
  readonly min: number;
}

export function dataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupToTerraform(struct?: DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_readable_secondaries: cdktn.booleanToTerraform(struct!.enableReadableSecondaries),
    max: cdktn.numberToTerraform(struct!.max),
    min: cdktn.numberToTerraform(struct!.min),
  }
}


export function dataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupToHclTerraform(struct?: DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_readable_secondaries: {
      value: cdktn.booleanToHclTerraform(struct!.enableReadableSecondaries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max: {
      value: cdktn.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktn.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableReadableSecondaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReadableSecondaries = this._enableReadableSecondaries;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableReadableSecondaries = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableReadableSecondaries = value.enableReadableSecondaries;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // enable_readable_secondaries - computed: true, optional: true, required: false
  private _enableReadableSecondaries?: boolean | cdktn.IResolvable; 
  public get enableReadableSecondaries() {
    return this.getBooleanAttribute('enable_readable_secondaries');
  }
  public set enableReadableSecondaries(value: boolean | cdktn.IResolvable) {
    this._enableReadableSecondaries = value;
  }
  public resetEnableReadableSecondaries() {
    this._enableReadableSecondaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReadableSecondariesInput() {
    return this._enableReadableSecondaries;
  }

  // max - computed: true, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataDatabricksPostgresProjectsProjectsInitialEndpointSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#group DataDatabricksPostgresProjects#group}
  */
  readonly group?: DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup;
}

export function dataDatabricksPostgresProjectsProjectsInitialEndpointSpecToTerraform(struct?: DataDatabricksPostgresProjectsProjectsInitialEndpointSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: dataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupToTerraform(struct!.group),
  }
}


export function dataDatabricksPostgresProjectsProjectsInitialEndpointSpecToHclTerraform(struct?: DataDatabricksPostgresProjectsProjectsInitialEndpointSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: dataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresProjectsProjectsInitialEndpointSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresProjectsProjectsInitialEndpointSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group.internalValue = value.group;
    }
  }

  // group - computed: true, optional: true, required: false
  private _group = new DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }
}
export interface DataDatabricksPostgresProjectsProjectsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPostgresProjectsProjectsProviderConfigToTerraform(struct?: DataDatabricksPostgresProjectsProjectsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPostgresProjectsProjectsProviderConfigToHclTerraform(struct?: DataDatabricksPostgresProjectsProjectsProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresProjectsProjectsProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresProjectsProjectsProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPostgresProjectsProjectsSpecCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}
  */
  readonly value?: string;
}

export function dataDatabricksPostgresProjectsProjectsSpecCustomTagsToTerraform(struct?: DataDatabricksPostgresProjectsProjectsSpecCustomTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksPostgresProjectsProjectsSpecCustomTagsToHclTerraform(struct?: DataDatabricksPostgresProjectsProjectsSpecCustomTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPostgresProjectsProjectsSpecCustomTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresProjectsProjectsSpecCustomTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
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

export class DataDatabricksPostgresProjectsProjectsSpecCustomTagsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPostgresProjectsProjectsSpecCustomTags[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference {
    return new DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}
  */
  readonly autoscalingLimitMaxCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}
  */
  readonly autoscalingLimitMinCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}
  */
  readonly noSuspension?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}
  */
  readonly pgSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}
  */
  readonly suspendTimeoutDuration?: string;
}

export function dataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsToTerraform(struct?: DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_limit_max_cu: cdktn.numberToTerraform(struct!.autoscalingLimitMaxCu),
    autoscaling_limit_min_cu: cdktn.numberToTerraform(struct!.autoscalingLimitMinCu),
    no_suspension: cdktn.booleanToTerraform(struct!.noSuspension),
    pg_settings: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.pgSettings),
    suspend_timeout_duration: cdktn.stringToTerraform(struct!.suspendTimeoutDuration),
  }
}


export function dataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsToHclTerraform(struct?: DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_limit_max_cu: {
      value: cdktn.numberToHclTerraform(struct!.autoscalingLimitMaxCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscaling_limit_min_cu: {
      value: cdktn.numberToHclTerraform(struct!.autoscalingLimitMinCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_suspension: {
      value: cdktn.booleanToHclTerraform(struct!.noSuspension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pg_settings: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.pgSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    suspend_timeout_duration: {
      value: cdktn.stringToHclTerraform(struct!.suspendTimeoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingLimitMaxCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingLimitMaxCu = this._autoscalingLimitMaxCu;
    }
    if (this._autoscalingLimitMinCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingLimitMinCu = this._autoscalingLimitMinCu;
    }
    if (this._noSuspension !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSuspension = this._noSuspension;
    }
    if (this._pgSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgSettings = this._pgSettings;
    }
    if (this._suspendTimeoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendTimeoutDuration = this._suspendTimeoutDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscalingLimitMaxCu = undefined;
      this._autoscalingLimitMinCu = undefined;
      this._noSuspension = undefined;
      this._pgSettings = undefined;
      this._suspendTimeoutDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscalingLimitMaxCu = value.autoscalingLimitMaxCu;
      this._autoscalingLimitMinCu = value.autoscalingLimitMinCu;
      this._noSuspension = value.noSuspension;
      this._pgSettings = value.pgSettings;
      this._suspendTimeoutDuration = value.suspendTimeoutDuration;
    }
  }

  // autoscaling_limit_max_cu - computed: true, optional: true, required: false
  private _autoscalingLimitMaxCu?: number; 
  public get autoscalingLimitMaxCu() {
    return this.getNumberAttribute('autoscaling_limit_max_cu');
  }
  public set autoscalingLimitMaxCu(value: number) {
    this._autoscalingLimitMaxCu = value;
  }
  public resetAutoscalingLimitMaxCu() {
    this._autoscalingLimitMaxCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitMaxCuInput() {
    return this._autoscalingLimitMaxCu;
  }

  // autoscaling_limit_min_cu - computed: true, optional: true, required: false
  private _autoscalingLimitMinCu?: number; 
  public get autoscalingLimitMinCu() {
    return this.getNumberAttribute('autoscaling_limit_min_cu');
  }
  public set autoscalingLimitMinCu(value: number) {
    this._autoscalingLimitMinCu = value;
  }
  public resetAutoscalingLimitMinCu() {
    this._autoscalingLimitMinCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitMinCuInput() {
    return this._autoscalingLimitMinCu;
  }

  // no_suspension - computed: true, optional: true, required: false
  private _noSuspension?: boolean | cdktn.IResolvable; 
  public get noSuspension() {
    return this.getBooleanAttribute('no_suspension');
  }
  public set noSuspension(value: boolean | cdktn.IResolvable) {
    this._noSuspension = value;
  }
  public resetNoSuspension() {
    this._noSuspension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSuspensionInput() {
    return this._noSuspension;
  }

  // pg_settings - computed: true, optional: true, required: false
  private _pgSettings?: { [key: string]: string }; 
  public get pgSettings() {
    return this.getStringMapAttribute('pg_settings');
  }
  public set pgSettings(value: { [key: string]: string }) {
    this._pgSettings = value;
  }
  public resetPgSettings() {
    this._pgSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgSettingsInput() {
    return this._pgSettings;
  }

  // suspend_timeout_duration - computed: true, optional: true, required: false
  private _suspendTimeoutDuration?: string; 
  public get suspendTimeoutDuration() {
    return this.getStringAttribute('suspend_timeout_duration');
  }
  public set suspendTimeoutDuration(value: string) {
    this._suspendTimeoutDuration = value;
  }
  public resetSuspendTimeoutDuration() {
    this._suspendTimeoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTimeoutDurationInput() {
    return this._suspendTimeoutDuration;
  }
}
export interface DataDatabricksPostgresProjectsProjectsSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#budget_policy_id DataDatabricksPostgresProjects#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#custom_tags DataDatabricksPostgresProjects#custom_tags}
  */
  readonly customTags?: DataDatabricksPostgresProjectsProjectsSpecCustomTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#default_branch DataDatabricksPostgresProjects#default_branch}
  */
  readonly defaultBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#default_endpoint_settings DataDatabricksPostgresProjects#default_endpoint_settings}
  */
  readonly defaultEndpointSettings?: DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#display_name DataDatabricksPostgresProjects#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#enable_pg_native_login DataDatabricksPostgresProjects#enable_pg_native_login}
  */
  readonly enablePgNativeLogin?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#history_retention_duration DataDatabricksPostgresProjects#history_retention_duration}
  */
  readonly historyRetentionDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#pg_version DataDatabricksPostgresProjects#pg_version}
  */
  readonly pgVersion?: number;
}

export function dataDatabricksPostgresProjectsProjectsSpecToTerraform(struct?: DataDatabricksPostgresProjectsProjectsSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    budget_policy_id: cdktn.stringToTerraform(struct!.budgetPolicyId),
    custom_tags: cdktn.listMapper(dataDatabricksPostgresProjectsProjectsSpecCustomTagsToTerraform, false)(struct!.customTags),
    default_branch: cdktn.stringToTerraform(struct!.defaultBranch),
    default_endpoint_settings: dataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsToTerraform(struct!.defaultEndpointSettings),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    enable_pg_native_login: cdktn.booleanToTerraform(struct!.enablePgNativeLogin),
    history_retention_duration: cdktn.stringToTerraform(struct!.historyRetentionDuration),
    pg_version: cdktn.numberToTerraform(struct!.pgVersion),
  }
}


export function dataDatabricksPostgresProjectsProjectsSpecToHclTerraform(struct?: DataDatabricksPostgresProjectsProjectsSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    budget_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.budgetPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktn.listMapperHcl(dataDatabricksPostgresProjectsProjectsSpecCustomTagsToHclTerraform, false)(struct!.customTags),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPostgresProjectsProjectsSpecCustomTagsList",
    },
    default_branch: {
      value: cdktn.stringToHclTerraform(struct!.defaultBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_endpoint_settings: {
      value: dataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsToHclTerraform(struct!.defaultEndpointSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pg_native_login: {
      value: cdktn.booleanToHclTerraform(struct!.enablePgNativeLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    history_retention_duration: {
      value: cdktn.stringToHclTerraform(struct!.historyRetentionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pg_version: {
      value: cdktn.numberToHclTerraform(struct!.pgVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresProjectsProjectsSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresProjectsProjectsSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._budgetPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.budgetPolicyId = this._budgetPolicyId;
    }
    if (this._customTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags?.internalValue;
    }
    if (this._defaultBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBranch = this._defaultBranch;
    }
    if (this._defaultEndpointSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEndpointSettings = this._defaultEndpointSettings?.internalValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enablePgNativeLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePgNativeLogin = this._enablePgNativeLogin;
    }
    if (this._historyRetentionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.historyRetentionDuration = this._historyRetentionDuration;
    }
    if (this._pgVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgVersion = this._pgVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresProjectsProjectsSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._budgetPolicyId = undefined;
      this._customTags.internalValue = undefined;
      this._defaultBranch = undefined;
      this._defaultEndpointSettings.internalValue = undefined;
      this._displayName = undefined;
      this._enablePgNativeLogin = undefined;
      this._historyRetentionDuration = undefined;
      this._pgVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._budgetPolicyId = value.budgetPolicyId;
      this._customTags.internalValue = value.customTags;
      this._defaultBranch = value.defaultBranch;
      this._defaultEndpointSettings.internalValue = value.defaultEndpointSettings;
      this._displayName = value.displayName;
      this._enablePgNativeLogin = value.enablePgNativeLogin;
      this._historyRetentionDuration = value.historyRetentionDuration;
      this._pgVersion = value.pgVersion;
    }
  }

  // budget_policy_id - computed: true, optional: true, required: false
  private _budgetPolicyId?: string; 
  public get budgetPolicyId() {
    return this.getStringAttribute('budget_policy_id');
  }
  public set budgetPolicyId(value: string) {
    this._budgetPolicyId = value;
  }
  public resetBudgetPolicyId() {
    this._budgetPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetPolicyIdInput() {
    return this._budgetPolicyId;
  }

  // custom_tags - computed: true, optional: true, required: false
  private _customTags = new DataDatabricksPostgresProjectsProjectsSpecCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }
  public putCustomTags(value: DataDatabricksPostgresProjectsProjectsSpecCustomTags[] | cdktn.IResolvable) {
    this._customTags.internalValue = value;
  }
  public resetCustomTags() {
    this._customTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags.internalValue;
  }

  // default_branch - computed: true, optional: true, required: false
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // default_endpoint_settings - computed: true, optional: true, required: false
  private _defaultEndpointSettings = new DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference(this, "default_endpoint_settings");
  public get defaultEndpointSettings() {
    return this._defaultEndpointSettings;
  }
  public putDefaultEndpointSettings(value: DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings) {
    this._defaultEndpointSettings.internalValue = value;
  }
  public resetDefaultEndpointSettings() {
    this._defaultEndpointSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEndpointSettingsInput() {
    return this._defaultEndpointSettings.internalValue;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_pg_native_login - computed: true, optional: true, required: false
  private _enablePgNativeLogin?: boolean | cdktn.IResolvable; 
  public get enablePgNativeLogin() {
    return this.getBooleanAttribute('enable_pg_native_login');
  }
  public set enablePgNativeLogin(value: boolean | cdktn.IResolvable) {
    this._enablePgNativeLogin = value;
  }
  public resetEnablePgNativeLogin() {
    this._enablePgNativeLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePgNativeLoginInput() {
    return this._enablePgNativeLogin;
  }

  // history_retention_duration - computed: true, optional: true, required: false
  private _historyRetentionDuration?: string; 
  public get historyRetentionDuration() {
    return this.getStringAttribute('history_retention_duration');
  }
  public set historyRetentionDuration(value: string) {
    this._historyRetentionDuration = value;
  }
  public resetHistoryRetentionDuration() {
    this._historyRetentionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyRetentionDurationInput() {
    return this._historyRetentionDuration;
  }

  // pg_version - computed: true, optional: true, required: false
  private _pgVersion?: number; 
  public get pgVersion() {
    return this.getNumberAttribute('pg_version');
  }
  public set pgVersion(value: number) {
    this._pgVersion = value;
  }
  public resetPgVersion() {
    this._pgVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgVersionInput() {
    return this._pgVersion;
  }
}
export interface DataDatabricksPostgresProjectsProjectsStatusCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}
  */
  readonly value?: string;
}

export function dataDatabricksPostgresProjectsProjectsStatusCustomTagsToTerraform(struct?: DataDatabricksPostgresProjectsProjectsStatusCustomTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksPostgresProjectsProjectsStatusCustomTagsToHclTerraform(struct?: DataDatabricksPostgresProjectsProjectsStatusCustomTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPostgresProjectsProjectsStatusCustomTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresProjectsProjectsStatusCustomTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
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

export class DataDatabricksPostgresProjectsProjectsStatusCustomTagsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPostgresProjectsProjectsStatusCustomTags[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference {
    return new DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}
  */
  readonly autoscalingLimitMaxCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}
  */
  readonly autoscalingLimitMinCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}
  */
  readonly noSuspension?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}
  */
  readonly pgSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}
  */
  readonly suspendTimeoutDuration?: string;
}

export function dataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsToTerraform(struct?: DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_limit_max_cu: cdktn.numberToTerraform(struct!.autoscalingLimitMaxCu),
    autoscaling_limit_min_cu: cdktn.numberToTerraform(struct!.autoscalingLimitMinCu),
    no_suspension: cdktn.booleanToTerraform(struct!.noSuspension),
    pg_settings: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.pgSettings),
    suspend_timeout_duration: cdktn.stringToTerraform(struct!.suspendTimeoutDuration),
  }
}


export function dataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsToHclTerraform(struct?: DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_limit_max_cu: {
      value: cdktn.numberToHclTerraform(struct!.autoscalingLimitMaxCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscaling_limit_min_cu: {
      value: cdktn.numberToHclTerraform(struct!.autoscalingLimitMinCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_suspension: {
      value: cdktn.booleanToHclTerraform(struct!.noSuspension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pg_settings: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.pgSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    suspend_timeout_duration: {
      value: cdktn.stringToHclTerraform(struct!.suspendTimeoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingLimitMaxCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingLimitMaxCu = this._autoscalingLimitMaxCu;
    }
    if (this._autoscalingLimitMinCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingLimitMinCu = this._autoscalingLimitMinCu;
    }
    if (this._noSuspension !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSuspension = this._noSuspension;
    }
    if (this._pgSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgSettings = this._pgSettings;
    }
    if (this._suspendTimeoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendTimeoutDuration = this._suspendTimeoutDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalingLimitMaxCu = undefined;
      this._autoscalingLimitMinCu = undefined;
      this._noSuspension = undefined;
      this._pgSettings = undefined;
      this._suspendTimeoutDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalingLimitMaxCu = value.autoscalingLimitMaxCu;
      this._autoscalingLimitMinCu = value.autoscalingLimitMinCu;
      this._noSuspension = value.noSuspension;
      this._pgSettings = value.pgSettings;
      this._suspendTimeoutDuration = value.suspendTimeoutDuration;
    }
  }

  // autoscaling_limit_max_cu - computed: true, optional: true, required: false
  private _autoscalingLimitMaxCu?: number; 
  public get autoscalingLimitMaxCu() {
    return this.getNumberAttribute('autoscaling_limit_max_cu');
  }
  public set autoscalingLimitMaxCu(value: number) {
    this._autoscalingLimitMaxCu = value;
  }
  public resetAutoscalingLimitMaxCu() {
    this._autoscalingLimitMaxCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitMaxCuInput() {
    return this._autoscalingLimitMaxCu;
  }

  // autoscaling_limit_min_cu - computed: true, optional: true, required: false
  private _autoscalingLimitMinCu?: number; 
  public get autoscalingLimitMinCu() {
    return this.getNumberAttribute('autoscaling_limit_min_cu');
  }
  public set autoscalingLimitMinCu(value: number) {
    this._autoscalingLimitMinCu = value;
  }
  public resetAutoscalingLimitMinCu() {
    this._autoscalingLimitMinCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitMinCuInput() {
    return this._autoscalingLimitMinCu;
  }

  // no_suspension - computed: true, optional: true, required: false
  private _noSuspension?: boolean | cdktn.IResolvable; 
  public get noSuspension() {
    return this.getBooleanAttribute('no_suspension');
  }
  public set noSuspension(value: boolean | cdktn.IResolvable) {
    this._noSuspension = value;
  }
  public resetNoSuspension() {
    this._noSuspension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSuspensionInput() {
    return this._noSuspension;
  }

  // pg_settings - computed: true, optional: true, required: false
  private _pgSettings?: { [key: string]: string }; 
  public get pgSettings() {
    return this.getStringMapAttribute('pg_settings');
  }
  public set pgSettings(value: { [key: string]: string }) {
    this._pgSettings = value;
  }
  public resetPgSettings() {
    this._pgSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgSettingsInput() {
    return this._pgSettings;
  }

  // suspend_timeout_duration - computed: true, optional: true, required: false
  private _suspendTimeoutDuration?: string; 
  public get suspendTimeoutDuration() {
    return this.getStringAttribute('suspend_timeout_duration');
  }
  public set suspendTimeoutDuration(value: string) {
    this._suspendTimeoutDuration = value;
  }
  public resetSuspendTimeoutDuration() {
    this._suspendTimeoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTimeoutDurationInput() {
    return this._suspendTimeoutDuration;
  }
}
export interface DataDatabricksPostgresProjectsProjectsStatus {
}

export function dataDatabricksPostgresProjectsProjectsStatusToTerraform(struct?: DataDatabricksPostgresProjectsProjectsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksPostgresProjectsProjectsStatusToHclTerraform(struct?: DataDatabricksPostgresProjectsProjectsStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksPostgresProjectsProjectsStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresProjectsProjectsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresProjectsProjectsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch_logical_size_limit_bytes - computed: true, optional: false, required: false
  public get branchLogicalSizeLimitBytes() {
    return this.getNumberAttribute('branch_logical_size_limit_bytes');
  }

  // budget_policy_id - computed: true, optional: false, required: false
  public get budgetPolicyId() {
    return this.getStringAttribute('budget_policy_id');
  }

  // custom_tags - computed: true, optional: false, required: false
  private _customTags = new DataDatabricksPostgresProjectsProjectsStatusCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // default_endpoint_settings - computed: true, optional: false, required: false
  private _defaultEndpointSettings = new DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference(this, "default_endpoint_settings");
  public get defaultEndpointSettings() {
    return this._defaultEndpointSettings;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enable_pg_native_login - computed: true, optional: false, required: false
  public get enablePgNativeLogin() {
    return this.getBooleanAttribute('enable_pg_native_login');
  }

  // history_retention_duration - computed: true, optional: false, required: false
  public get historyRetentionDuration() {
    return this.getStringAttribute('history_retention_duration');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // pg_version - computed: true, optional: false, required: false
  public get pgVersion() {
    return this.getNumberAttribute('pg_version');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // synthetic_storage_size_bytes - computed: true, optional: false, required: false
  public get syntheticStorageSizeBytes() {
    return this.getNumberAttribute('synthetic_storage_size_bytes');
  }
}
export interface DataDatabricksPostgresProjectsProjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#name DataDatabricksPostgresProjects#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}
  */
  readonly providerConfig?: DataDatabricksPostgresProjectsProjectsProviderConfig;
}

export function dataDatabricksPostgresProjectsProjectsToTerraform(struct?: DataDatabricksPostgresProjectsProjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksPostgresProjectsProjectsProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksPostgresProjectsProjectsToHclTerraform(struct?: DataDatabricksPostgresProjectsProjects): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_config: {
      value: dataDatabricksPostgresProjectsProjectsProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresProjectsProjectsProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresProjectsProjectsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPostgresProjectsProjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresProjectsProjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
  }

  // initial_endpoint_spec - computed: true, optional: false, required: false
  private _initialEndpointSpec = new DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference(this, "initial_endpoint_spec");
  public get initialEndpointSpec() {
    return this._initialEndpointSpec;
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

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPostgresProjectsProjectsProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // purge_time - computed: true, optional: false, required: false
  public get purgeTime() {
    return this.getStringAttribute('purge_time');
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataDatabricksPostgresProjectsProjectsSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksPostgresProjectsProjectsStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataDatabricksPostgresProjectsProjectsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPostgresProjectsProjects[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPostgresProjectsProjectsOutputReference {
    return new DataDatabricksPostgresProjectsProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPostgresProjectsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPostgresProjectsProviderConfigToTerraform(struct?: DataDatabricksPostgresProjectsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPostgresProjectsProviderConfigToHclTerraform(struct?: DataDatabricksPostgresProjectsProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresProjectsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresProjectsProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresProjectsProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects databricks_postgres_projects}
*/
export class DataDatabricksPostgresProjects extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_postgres_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksPostgresProjects resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPostgresProjects to import
  * @param importFromId The id of the existing DataDatabricksPostgresProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPostgresProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_postgres_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/postgres_projects databricks_postgres_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPostgresProjectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPostgresProjectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_postgres_projects',
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
    this._pageSize = config.pageSize;
    this._providerConfig.internalValue = config.providerConfig;
    this._showDeleted = config.showDeleted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // projects - computed: true, optional: false, required: false
  private _projects = new DataDatabricksPostgresProjectsProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksPostgresProjectsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPostgresProjectsProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // show_deleted - computed: false, optional: true, required: false
  private _showDeleted?: boolean | cdktn.IResolvable; 
  public get showDeleted() {
    return this.getBooleanAttribute('show_deleted');
  }
  public set showDeleted(value: boolean | cdktn.IResolvable) {
    this._showDeleted = value;
  }
  public resetShowDeleted() {
    this._showDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDeletedInput() {
    return this._showDeleted;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktn.numberToTerraform(this._pageSize),
      provider_config: dataDatabricksPostgresProjectsProviderConfigToTerraform(this._providerConfig.internalValue),
      show_deleted: cdktn.booleanToTerraform(this._showDeleted),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_size: {
        value: cdktn.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_config: {
        value: dataDatabricksPostgresProjectsProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksPostgresProjectsProviderConfig",
      },
      show_deleted: {
        value: cdktn.booleanToHclTerraform(this._showDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
