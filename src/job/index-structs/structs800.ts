/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface JobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#create Job#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#update Job#update}
  */
  readonly update?: string;
}

export function jobTimeoutsToTerraform(struct?: JobTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function jobTimeoutsToHclTerraform(struct?: JobTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggerFileArrivalToTerraform(struct?: JobTriggerFileArrivalOutputReference | JobTriggerFileArrival): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#aliases Job#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#condition Job#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#securable_name Job#securable_name}
  */
  readonly securableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggerModelToTerraform(struct?: JobTriggerModelOutputReference | JobTriggerModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#interval Job#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#unit Job#unit}
  */
  readonly unit: string;
}

export function jobTriggerPeriodicToTerraform(struct?: JobTriggerPeriodicOutputReference | JobTriggerPeriodic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktn.numberToTerraform(struct!.interval),
    unit: cdktn.stringToTerraform(struct!.unit),
  }
}


export function jobTriggerPeriodicToHclTerraform(struct?: JobTriggerPeriodicOutputReference | JobTriggerPeriodic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
export interface JobTriggerTableUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#condition Job#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#min_time_between_triggers_seconds Job#min_time_between_triggers_seconds}
  */
  readonly minTimeBetweenTriggersSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#table_names Job#table_names}
  */
  readonly tableNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#wait_after_last_change_seconds Job#wait_after_last_change_seconds}
  */
  readonly waitAfterLastChangeSeconds?: number;
}

export function jobTriggerTableUpdateToTerraform(struct?: JobTriggerTableUpdateOutputReference | JobTriggerTableUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#pause_status Job#pause_status}
  */
  readonly pauseStatus?: string;
  /**
  * file_arrival block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#file_arrival Job#file_arrival}
  */
  readonly fileArrival?: JobTriggerFileArrival;
  /**
  * model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#model Job#model}
  */
  readonly model?: JobTriggerModel;
  /**
  * periodic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#periodic Job#periodic}
  */
  readonly periodic?: JobTriggerPeriodic;
  /**
  * table_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#table_update Job#table_update}
  */
  readonly tableUpdate?: JobTriggerTableUpdate;
}

export function jobTriggerToTerraform(struct?: JobTriggerOutputReference | JobTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pause_status: cdktn.stringToTerraform(struct!.pauseStatus),
    file_arrival: jobTriggerFileArrivalToTerraform(struct!.fileArrival),
    model: jobTriggerModelToTerraform(struct!.model),
    periodic: jobTriggerPeriodicToTerraform(struct!.periodic),
    table_update: jobTriggerTableUpdateToTerraform(struct!.tableUpdate),
  }
}


export function jobTriggerToHclTerraform(struct?: JobTriggerOutputReference | JobTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      this._tableUpdate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pauseStatus = value.pauseStatus;
      this._fileArrival.internalValue = value.fileArrival;
      this._model.internalValue = value.model;
      this._periodic.internalValue = value.periodic;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnDurationWarningThresholdExceededToTerraform(struct?: JobWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform(struct?: JobWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnFailureToTerraform(struct?: JobWebhookNotificationsOnFailure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnFailureToHclTerraform(struct?: JobWebhookNotificationsOnFailure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnStartToTerraform(struct?: JobWebhookNotificationsOnStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnStartToHclTerraform(struct?: JobWebhookNotificationsOnStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnStreamingBacklogExceededToTerraform(struct?: JobWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnStreamingBacklogExceededToHclTerraform(struct?: JobWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobWebhookNotificationsOnSuccessToTerraform(struct?: JobWebhookNotificationsOnSuccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobWebhookNotificationsOnSuccessToHclTerraform(struct?: JobWebhookNotificationsOnSuccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: JobWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: JobWebhookNotificationsOnFailure[] | cdktn.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: JobWebhookNotificationsOnStart[] | cdktn.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: JobWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/job#on_success Job#on_success}
  */
  readonly onSuccess?: JobWebhookNotificationsOnSuccess[] | cdktn.IResolvable;
}

export function jobWebhookNotificationsToTerraform(struct?: JobWebhookNotificationsOutputReference | JobWebhookNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
