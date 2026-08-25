/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksQualityMonitorsV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#page_size DataDatabricksQualityMonitorsV2#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#provider_config DataDatabricksQualityMonitorsV2#provider_config}
  */
  readonly providerConfig?: DataDatabricksQualityMonitorsV2ProviderConfig;
}
export interface DataDatabricksQualityMonitorsV2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#workspace_id DataDatabricksQualityMonitorsV2#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksQualityMonitorsV2ProviderConfigToTerraform(struct?: DataDatabricksQualityMonitorsV2ProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksQualityMonitorsV2ProviderConfigToHclTerraform(struct?: DataDatabricksQualityMonitorsV2ProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksQualityMonitorsV2ProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorsV2ProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksQualityMonitorsV2ProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#excluded_table_full_names DataDatabricksQualityMonitorsV2#excluded_table_full_names}
  */
  readonly excludedTableFullNames?: string[];
}

export function dataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigToTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excluded_table_full_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedTableFullNames),
  }
}


export function dataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigToHclTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excluded_table_full_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedTableFullNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedTableFullNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedTableFullNames = this._excludedTableFullNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedTableFullNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedTableFullNames = value.excludedTableFullNames;
    }
  }

  // excluded_table_full_names - computed: true, optional: true, required: false
  private _excludedTableFullNames?: string[]; 
  public get excludedTableFullNames() {
    return this.getListAttribute('excluded_table_full_names');
  }
  public set excludedTableFullNames(value: string[]) {
    this._excludedTableFullNames = value;
  }
  public resetExcludedTableFullNames() {
    this._excludedTableFullNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTableFullNamesInput() {
    return this._excludedTableFullNames;
  }

  // last_run_id - computed: true, optional: false, required: false
  public get lastRunId() {
    return this.getStringAttribute('last_run_id');
  }

  // latest_run_status - computed: true, optional: false, required: false
  public get latestRunStatus() {
    return this.getStringAttribute('latest_run_status');
  }
}
export interface DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#workspace_id DataDatabricksQualityMonitorsV2#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigToTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigToHclTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#column_names DataDatabricksQualityMonitorsV2#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#upper_bound DataDatabricksQualityMonitorsV2#upper_bound}
  */
  readonly upperBound?: number;
}

export function dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckToTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnNames),
    upper_bound: cdktn.numberToTerraform(struct!.upperBound),
  }
}


export function dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckToHclTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upper_bound: {
      value: cdktn.numberToHclTerraform(struct!.upperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._upperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBound = this._upperBound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
      this._upperBound = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
      this._upperBound = value.upperBound;
    }
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // upper_bound - computed: true, optional: true, required: false
  private _upperBound?: number; 
  public get upperBound() {
    return this.getNumberAttribute('upper_bound');
  }
  public set upperBound(value: number) {
    this._upperBound = value;
  }
  public resetUpperBound() {
    this._upperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound;
  }
}
export interface DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#column_names DataDatabricksQualityMonitorsV2#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#lower_bound DataDatabricksQualityMonitorsV2#lower_bound}
  */
  readonly lowerBound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#upper_bound DataDatabricksQualityMonitorsV2#upper_bound}
  */
  readonly upperBound?: number;
}

export function dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckToTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnNames),
    lower_bound: cdktn.numberToTerraform(struct!.lowerBound),
    upper_bound: cdktn.numberToTerraform(struct!.upperBound),
  }
}


export function dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckToHclTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    lower_bound: {
      value: cdktn.numberToHclTerraform(struct!.lowerBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_bound: {
      value: cdktn.numberToHclTerraform(struct!.upperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._lowerBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerBound = this._lowerBound;
    }
    if (this._upperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBound = this._upperBound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
      this._lowerBound = undefined;
      this._upperBound = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
      this._lowerBound = value.lowerBound;
      this._upperBound = value.upperBound;
    }
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // lower_bound - computed: true, optional: true, required: false
  private _lowerBound?: number; 
  public get lowerBound() {
    return this.getNumberAttribute('lower_bound');
  }
  public set lowerBound(value: number) {
    this._lowerBound = value;
  }
  public resetLowerBound() {
    this._lowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundInput() {
    return this._lowerBound;
  }

  // upper_bound - computed: true, optional: true, required: false
  private _upperBound?: number; 
  public get upperBound() {
    return this.getNumberAttribute('upper_bound');
  }
  public set upperBound(value: number) {
    this._upperBound = value;
  }
  public resetUpperBound() {
    this._upperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound;
  }
}
export interface DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#column_names DataDatabricksQualityMonitorsV2#column_names}
  */
  readonly columnNames?: string[];
}

export function dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckToTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnNames),
  }
}


export function dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckToHclTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
    }
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }
}
export interface DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#name DataDatabricksQualityMonitorsV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#percent_null_validity_check DataDatabricksQualityMonitorsV2#percent_null_validity_check}
  */
  readonly percentNullValidityCheck?: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#range_validity_check DataDatabricksQualityMonitorsV2#range_validity_check}
  */
  readonly rangeValidityCheck?: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#uniqueness_validity_check DataDatabricksQualityMonitorsV2#uniqueness_validity_check}
  */
  readonly uniquenessValidityCheck?: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck;
}

export function dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsToTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    percent_null_validity_check: dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckToTerraform(struct!.percentNullValidityCheck),
    range_validity_check: dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckToTerraform(struct!.rangeValidityCheck),
    uniqueness_validity_check: dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckToTerraform(struct!.uniquenessValidityCheck),
  }
}


export function dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsToHclTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations): any {
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
    percent_null_validity_check: {
      value: dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckToHclTerraform(struct!.percentNullValidityCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck",
    },
    range_validity_check: {
      value: dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckToHclTerraform(struct!.rangeValidityCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck",
    },
    uniqueness_validity_check: {
      value: dataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckToHclTerraform(struct!.uniquenessValidityCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._percentNullValidityCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentNullValidityCheck = this._percentNullValidityCheck?.internalValue;
    }
    if (this._rangeValidityCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeValidityCheck = this._rangeValidityCheck?.internalValue;
    }
    if (this._uniquenessValidityCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniquenessValidityCheck = this._uniquenessValidityCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._percentNullValidityCheck.internalValue = undefined;
      this._rangeValidityCheck.internalValue = undefined;
      this._uniquenessValidityCheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._percentNullValidityCheck.internalValue = value.percentNullValidityCheck;
      this._rangeValidityCheck.internalValue = value.rangeValidityCheck;
      this._uniquenessValidityCheck.internalValue = value.uniquenessValidityCheck;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // percent_null_validity_check - computed: true, optional: true, required: false
  private _percentNullValidityCheck = new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheckOutputReference(this, "percent_null_validity_check");
  public get percentNullValidityCheck() {
    return this._percentNullValidityCheck;
  }
  public putPercentNullValidityCheck(value: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsPercentNullValidityCheck) {
    this._percentNullValidityCheck.internalValue = value;
  }
  public resetPercentNullValidityCheck() {
    this._percentNullValidityCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentNullValidityCheckInput() {
    return this._percentNullValidityCheck.internalValue;
  }

  // range_validity_check - computed: true, optional: true, required: false
  private _rangeValidityCheck = new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheckOutputReference(this, "range_validity_check");
  public get rangeValidityCheck() {
    return this._rangeValidityCheck;
  }
  public putRangeValidityCheck(value: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsRangeValidityCheck) {
    this._rangeValidityCheck.internalValue = value;
  }
  public resetRangeValidityCheck() {
    this._rangeValidityCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeValidityCheckInput() {
    return this._rangeValidityCheck.internalValue;
  }

  // uniqueness_validity_check - computed: true, optional: true, required: false
  private _uniquenessValidityCheck = new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheckOutputReference(this, "uniqueness_validity_check");
  public get uniquenessValidityCheck() {
    return this._uniquenessValidityCheck;
  }
  public putUniquenessValidityCheck(value: DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsUniquenessValidityCheck) {
    this._uniquenessValidityCheck.internalValue = value;
  }
  public resetUniquenessValidityCheck() {
    this._uniquenessValidityCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniquenessValidityCheckInput() {
    return this._uniquenessValidityCheck.internalValue;
  }
}

export class DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurations[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference {
    return new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksQualityMonitorsV2QualityMonitors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#object_id DataDatabricksQualityMonitorsV2#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#object_type DataDatabricksQualityMonitorsV2#object_type}
  */
  readonly objectType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#provider_config DataDatabricksQualityMonitorsV2#provider_config}
  */
  readonly providerConfig?: DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig;
}

export function dataDatabricksQualityMonitorsV2QualityMonitorsToTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_id: cdktn.stringToTerraform(struct!.objectId),
    object_type: cdktn.stringToTerraform(struct!.objectType),
    provider_config: dataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksQualityMonitorsV2QualityMonitorsToHclTerraform(struct?: DataDatabricksQualityMonitorsV2QualityMonitors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_id: {
      value: cdktn.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktn.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_config: {
      value: dataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksQualityMonitorsV2QualityMonitors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorsV2QualityMonitors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectId = undefined;
      this._objectType = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectId = value.objectId;
      this._objectType = value.objectType;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // anomaly_detection_config - computed: true, optional: false, required: false
  private _anomalyDetectionConfig = new DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference(this, "anomaly_detection_config");
  public get anomalyDetectionConfig() {
    return this._anomalyDetectionConfig;
  }

  // object_id - computed: true, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // object_type - computed: true, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksQualityMonitorsV2QualityMonitorsProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // validity_check_configurations - computed: true, optional: false, required: false
  private _validityCheckConfigurations = new DataDatabricksQualityMonitorsV2QualityMonitorsValidityCheckConfigurationsList(this, "validity_check_configurations", false);
  public get validityCheckConfigurations() {
    return this._validityCheckConfigurations;
  }
}

export class DataDatabricksQualityMonitorsV2QualityMonitorsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksQualityMonitorsV2QualityMonitors[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference {
    return new DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2 databricks_quality_monitors_v2}
*/
export class DataDatabricksQualityMonitorsV2 extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_quality_monitors_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksQualityMonitorsV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksQualityMonitorsV2 to import
  * @param importFromId The id of the existing DataDatabricksQualityMonitorsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksQualityMonitorsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_quality_monitors_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/quality_monitors_v2 databricks_quality_monitors_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksQualityMonitorsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksQualityMonitorsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_quality_monitors_v2',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.129.0',
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksQualityMonitorsV2ProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksQualityMonitorsV2ProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // quality_monitors - computed: true, optional: false, required: false
  private _qualityMonitors = new DataDatabricksQualityMonitorsV2QualityMonitorsList(this, "quality_monitors", false);
  public get qualityMonitors() {
    return this._qualityMonitors;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktn.numberToTerraform(this._pageSize),
      provider_config: dataDatabricksQualityMonitorsV2ProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksQualityMonitorsV2ProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksQualityMonitorsV2ProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
