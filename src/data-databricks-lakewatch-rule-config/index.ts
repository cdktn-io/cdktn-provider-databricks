/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksLakewatchRuleConfigAConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#name DataDatabricksLakewatchRuleConfigA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#provider_config DataDatabricksLakewatchRuleConfigA#provider_config}
  */
  readonly providerConfig?: DataDatabricksLakewatchRuleConfigProviderConfig;
}
export interface DataDatabricksLakewatchRuleConfigDefaultSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#at_least_every DataDatabricksLakewatchRuleConfigA#at_least_every}
  */
  readonly atLeastEvery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#continuous DataDatabricksLakewatchRuleConfigA#continuous}
  */
  readonly continuous?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#cron_expression DataDatabricksLakewatchRuleConfigA#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#enabled DataDatabricksLakewatchRuleConfigA#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function dataDatabricksLakewatchRuleConfigDefaultScheduleToTerraform(struct?: DataDatabricksLakewatchRuleConfigDefaultSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    at_least_every: cdktn.stringToTerraform(struct!.atLeastEvery),
    continuous: cdktn.booleanToTerraform(struct!.continuous),
    cron_expression: cdktn.stringToTerraform(struct!.cronExpression),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function dataDatabricksLakewatchRuleConfigDefaultScheduleToHclTerraform(struct?: DataDatabricksLakewatchRuleConfigDefaultSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    at_least_every: {
      value: cdktn.stringToHclTerraform(struct!.atLeastEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continuous: {
      value: cdktn.booleanToHclTerraform(struct!.continuous),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cron_expression: {
      value: cdktn.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRuleConfigDefaultSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atLeastEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.atLeastEvery = this._atLeastEvery;
    }
    if (this._continuous !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuous = this._continuous;
    }
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRuleConfigDefaultSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._atLeastEvery = undefined;
      this._continuous = undefined;
      this._cronExpression = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._atLeastEvery = value.atLeastEvery;
      this._continuous = value.continuous;
      this._cronExpression = value.cronExpression;
      this._enabled = value.enabled;
    }
  }

  // at_least_every - computed: true, optional: true, required: false
  private _atLeastEvery?: string; 
  public get atLeastEvery() {
    return this.getStringAttribute('at_least_every');
  }
  public set atLeastEvery(value: string) {
    this._atLeastEvery = value;
  }
  public resetAtLeastEvery() {
    this._atLeastEvery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atLeastEveryInput() {
    return this._atLeastEvery;
  }

  // continuous - computed: true, optional: true, required: false
  private _continuous?: boolean | cdktn.IResolvable; 
  public get continuous() {
    return this.getBooleanAttribute('continuous');
  }
  public set continuous(value: boolean | cdktn.IResolvable) {
    this._continuous = value;
  }
  public resetContinuous() {
    this._continuous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous;
  }

  // cron_expression - computed: true, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataDatabricksLakewatchRuleConfigProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#workspace_id DataDatabricksLakewatchRuleConfigA#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksLakewatchRuleConfigProviderConfigToTerraform(struct?: DataDatabricksLakewatchRuleConfigProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksLakewatchRuleConfigProviderConfigToHclTerraform(struct?: DataDatabricksLakewatchRuleConfigProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksLakewatchRuleConfigProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRuleConfigProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksLakewatchRuleConfigProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksLakewatchRuleConfigUpdatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#display_name DataDatabricksLakewatchRuleConfigA#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#email DataDatabricksLakewatchRuleConfigA#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#id DataDatabricksLakewatchRuleConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#principal_type DataDatabricksLakewatchRuleConfigA#principal_type}
  */
  readonly principalType?: string;
}

export function dataDatabricksLakewatchRuleConfigUpdatedByToTerraform(struct?: DataDatabricksLakewatchRuleConfigUpdatedBy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    email: cdktn.stringToTerraform(struct!.email),
    id: cdktn.stringToTerraform(struct!.id),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
  }
}


export function dataDatabricksLakewatchRuleConfigUpdatedByToHclTerraform(struct?: DataDatabricksLakewatchRuleConfigUpdatedBy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataDatabricksLakewatchRuleConfigUpdatedByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksLakewatchRuleConfigUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksLakewatchRuleConfigUpdatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._email = undefined;
      this._id = undefined;
      this._principalType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._email = value.email;
      this._id = value.id;
      this._principalType = value.principalType;
    }
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

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

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

  // principal_type - computed: true, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config databricks_lakewatch_rule_config}
*/
export class DataDatabricksLakewatchRuleConfigA extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_lakewatch_rule_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksLakewatchRuleConfigA resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksLakewatchRuleConfigA to import
  * @param importFromId The id of the existing DataDatabricksLakewatchRuleConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksLakewatchRuleConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_lakewatch_rule_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule_config databricks_lakewatch_rule_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksLakewatchRuleConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksLakewatchRuleConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_lakewatch_rule_config',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.142.0',
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
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_folder - computed: true, optional: false, required: false
  public get defaultFolder() {
    return this.getStringAttribute('default_folder');
  }

  // default_schedule - computed: true, optional: false, required: false
  private _defaultSchedule = new DataDatabricksLakewatchRuleConfigDefaultScheduleOutputReference(this, "default_schedule");
  public get defaultSchedule() {
    return this._defaultSchedule;
  }

  // default_signal_collation_window - computed: true, optional: false, required: false
  public get defaultSignalCollationWindow() {
    return this.getStringAttribute('default_signal_collation_window');
  }

  // detection_categories - computed: true, optional: false, required: false
  public get detectionCategories() {
    return this.getListAttribute('detection_categories');
  }

  // effective_default_folder - computed: true, optional: false, required: false
  public get effectiveDefaultFolder() {
    return this.getStringAttribute('effective_default_folder');
  }

  // effective_detection_categories - computed: true, optional: false, required: false
  public get effectiveDetectionCategories() {
    return this.getListAttribute('effective_detection_categories');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksLakewatchRuleConfigProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksLakewatchRuleConfigProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new DataDatabricksLakewatchRuleConfigUpdatedByOutputReference(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksLakewatchRuleConfigProviderConfigToTerraform(this._providerConfig.internalValue),
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
      provider_config: {
        value: dataDatabricksLakewatchRuleConfigProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksLakewatchRuleConfigProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
