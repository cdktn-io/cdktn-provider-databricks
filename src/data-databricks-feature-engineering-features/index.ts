/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksFeatureEngineeringFeaturesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#catalog_name DataDatabricksFeatureEngineeringFeatures#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#page_size DataDatabricksFeatureEngineeringFeatures#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#provider_config DataDatabricksFeatureEngineeringFeatures#provider_config}
  */
  readonly providerConfig?: DataDatabricksFeatureEngineeringFeaturesProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#schema_name DataDatabricksFeatureEngineeringFeatures#schema_name}
  */
  readonly schemaName: string;
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesEntities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#name DataDatabricksFeatureEngineeringFeatures#name}
  */
  readonly name: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesEntitiesToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesEntities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesEntitiesToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesEntities): any {
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

export class DataDatabricksFeatureEngineeringFeaturesFeaturesEntitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesEntitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeaturesFeaturesEntities[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesEntitiesOutputReference {
    return new DataDatabricksFeatureEngineeringFeaturesFeaturesEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#relative_sd DataDatabricksFeatureEngineeringFeatures#relative_sd}
  */
  readonly relativeSd?: number;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinctToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
    relative_sd: cdktn.numberToTerraform(struct!.relativeSd),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinctToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_sd: {
      value: cdktn.numberToHclTerraform(struct!.relativeSd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinctOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._relativeSd !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeSd = this._relativeSd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
      this._relativeSd = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
      this._relativeSd = value.relativeSd;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // relative_sd - computed: true, optional: true, required: false
  private _relativeSd?: number; 
  public get relativeSd() {
    return this.getNumberAttribute('relative_sd');
  }
  public set relativeSd(value: number) {
    this._relativeSd = value;
  }
  public resetRelativeSd() {
    this._relativeSd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeSdInput() {
    return this._relativeSd;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#accuracy DataDatabricksFeatureEngineeringFeatures#accuracy}
  */
  readonly accuracy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#percentile DataDatabricksFeatureEngineeringFeatures#percentile}
  */
  readonly percentile: number;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentileToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accuracy: cdktn.numberToTerraform(struct!.accuracy),
    input: cdktn.stringToTerraform(struct!.input),
    percentile: cdktn.numberToTerraform(struct!.percentile),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentileToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accuracy: {
      value: cdktn.numberToHclTerraform(struct!.accuracy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentile: {
      value: cdktn.numberToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accuracy !== undefined) {
      hasAnyValues = true;
      internalValueResult.accuracy = this._accuracy;
    }
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accuracy = undefined;
      this._input = undefined;
      this._percentile = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accuracy = value.accuracy;
      this._input = value.input;
      this._percentile = value.percentile;
    }
  }

  // accuracy - computed: true, optional: true, required: false
  private _accuracy?: number; 
  public get accuracy() {
    return this.getNumberAttribute('accuracy');
  }
  public set accuracy(value: number) {
    this._accuracy = value;
  }
  public resetAccuracy() {
    this._accuracy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accuracyInput() {
    return this._accuracy;
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // percentile - computed: true, optional: false, required: true
  private _percentile?: number; 
  public get percentile() {
    return this.getNumberAttribute('percentile');
  }
  public set percentile(value: number) {
    this._percentile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvgToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvgToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvgOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvg | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvg | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunctionToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunctionToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirst {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirstToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirst | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirstToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirst | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirstOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirst | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirst | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLastToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLast | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLastToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLast | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLastOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLast | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLast | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMax {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMaxToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMaxToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMaxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMax | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMax | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMinToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMinToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMinOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMin | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPopToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPopToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPopOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPop | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPop | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSampToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSampToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSamp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSamp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSumToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSum | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSumToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSum | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSumOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSum | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSum | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuous {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#offset DataDatabricksFeatureEngineeringFeatures#offset}
  */
  readonly offset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuousToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    offset: cdktn.stringToTerraform(struct!.offset),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuousToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    offset: {
      value: cdktn.stringToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_duration: {
      value: cdktn.stringToHclTerraform(struct!.windowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuousOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._windowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDuration = this._windowDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offset = undefined;
      this._windowDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offset = value.offset;
      this._windowDuration = value.windowDuration;
    }
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // window_duration - computed: true, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRolling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#delay DataDatabricksFeatureEngineeringFeatures#delay}
  */
  readonly delay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRollingToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRolling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delay: cdktn.stringToTerraform(struct!.delay),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRollingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRolling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delay: {
      value: cdktn.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_duration: {
      value: cdktn.stringToHclTerraform(struct!.windowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRollingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRolling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._windowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDuration = this._windowDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRolling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._windowDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._windowDuration = value.windowDuration;
    }
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // window_duration - computed: true, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSliding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#slide_duration DataDatabricksFeatureEngineeringFeatures#slide_duration}
  */
  readonly slideDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSlidingToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    slide_duration: cdktn.stringToTerraform(struct!.slideDuration),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSlidingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    slide_duration: {
      value: cdktn.stringToHclTerraform(struct!.slideDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_duration: {
      value: cdktn.stringToHclTerraform(struct!.windowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSlidingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slideDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.slideDuration = this._slideDuration;
    }
    if (this._windowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDuration = this._windowDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slideDuration = undefined;
      this._windowDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slideDuration = value.slideDuration;
      this._windowDuration = value.windowDuration;
    }
  }

  // slide_duration - computed: true, optional: false, required: true
  private _slideDuration?: string; 
  public get slideDuration() {
    return this.getStringAttribute('slide_duration');
  }
  public set slideDuration(value: string) {
    this._slideDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slideDurationInput() {
    return this._slideDuration;
  }

  // window_duration - computed: true, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumbling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumblingToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumblingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    window_duration: {
      value: cdktn.stringToHclTerraform(struct!.windowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumblingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDuration = this._windowDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._windowDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._windowDuration = value.windowDuration;
    }
  }

  // window_duration - computed: true, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#continuous DataDatabricksFeatureEngineeringFeatures#continuous}
  */
  readonly continuous?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuous;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#rolling DataDatabricksFeatureEngineeringFeatures#rolling}
  */
  readonly rolling?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRolling;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#sliding DataDatabricksFeatureEngineeringFeatures#sliding}
  */
  readonly sliding?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSliding;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#tumbling DataDatabricksFeatureEngineeringFeatures#tumbling}
  */
  readonly tumbling?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumbling;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    continuous: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuousToTerraform(struct!.continuous),
    rolling: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRollingToTerraform(struct!.rolling),
    sliding: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSlidingToTerraform(struct!.sliding),
    tumbling: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumblingToTerraform(struct!.tumbling),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    continuous: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuousToHclTerraform(struct!.continuous),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuous",
    },
    rolling: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRollingToHclTerraform(struct!.rolling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRolling",
    },
    sliding: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSlidingToHclTerraform(struct!.sliding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSliding",
    },
    tumbling: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumblingToHclTerraform(struct!.tumbling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumbling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuous = this._continuous?.internalValue;
    }
    if (this._rolling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolling = this._rolling?.internalValue;
    }
    if (this._sliding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliding = this._sliding?.internalValue;
    }
    if (this._tumbling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tumbling = this._tumbling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continuous.internalValue = undefined;
      this._rolling.internalValue = undefined;
      this._sliding.internalValue = undefined;
      this._tumbling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._continuous.internalValue = value.continuous;
      this._rolling.internalValue = value.rolling;
      this._sliding.internalValue = value.sliding;
      this._tumbling.internalValue = value.tumbling;
    }
  }

  // continuous - computed: true, optional: true, required: false
  private _continuous = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuousOutputReference(this, "continuous");
  public get continuous() {
    return this._continuous;
  }
  public putContinuous(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowContinuous) {
    this._continuous.internalValue = value;
  }
  public resetContinuous() {
    this._continuous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous.internalValue;
  }

  // rolling - computed: true, optional: true, required: false
  private _rolling = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRollingOutputReference(this, "rolling");
  public get rolling() {
    return this._rolling;
  }
  public putRolling(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowRolling) {
    this._rolling.internalValue = value;
  }
  public resetRolling() {
    this._rolling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingInput() {
    return this._rolling.internalValue;
  }

  // sliding - computed: true, optional: true, required: false
  private _sliding = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSlidingOutputReference(this, "sliding");
  public get sliding() {
    return this._sliding;
  }
  public putSliding(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowSliding) {
    this._sliding.internalValue = value;
  }
  public resetSliding() {
    this._sliding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slidingInput() {
    return this._sliding.internalValue;
  }

  // tumbling - computed: true, optional: true, required: false
  private _tumbling = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumblingOutputReference(this, "tumbling");
  public get tumbling() {
    return this._tumbling;
  }
  public putTumbling(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowTumbling) {
    this._tumbling.internalValue = value;
  }
  public resetTumbling() {
    this._tumbling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tumblingInput() {
    return this._tumbling.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPopToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPopToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPopOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPop | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPop | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#input DataDatabricksFeatureEngineeringFeatures#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSampToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSampToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input: {
      value: cdktn.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSamp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSamp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._input = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._input = value.input;
    }
  }

  // input - computed: true, optional: false, required: true
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#approx_count_distinct DataDatabricksFeatureEngineeringFeatures#approx_count_distinct}
  */
  readonly approxCountDistinct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#approx_percentile DataDatabricksFeatureEngineeringFeatures#approx_percentile}
  */
  readonly approxPercentile?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#avg DataDatabricksFeatureEngineeringFeatures#avg}
  */
  readonly avg?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvg;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#count_function DataDatabricksFeatureEngineeringFeatures#count_function}
  */
  readonly countFunction?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#first DataDatabricksFeatureEngineeringFeatures#first}
  */
  readonly first?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirst;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#last DataDatabricksFeatureEngineeringFeatures#last}
  */
  readonly last?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#max DataDatabricksFeatureEngineeringFeatures#max}
  */
  readonly max?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMax;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#min DataDatabricksFeatureEngineeringFeatures#min}
  */
  readonly min?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#stddev_pop DataDatabricksFeatureEngineeringFeatures#stddev_pop}
  */
  readonly stddevPop?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#stddev_samp DataDatabricksFeatureEngineeringFeatures#stddev_samp}
  */
  readonly stddevSamp?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSamp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#sum DataDatabricksFeatureEngineeringFeatures#sum}
  */
  readonly sum?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSum;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#time_window DataDatabricksFeatureEngineeringFeatures#time_window}
  */
  readonly timeWindow?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#var_pop DataDatabricksFeatureEngineeringFeatures#var_pop}
  */
  readonly varPop?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#var_samp DataDatabricksFeatureEngineeringFeatures#var_samp}
  */
  readonly varSamp?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSamp;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    approx_count_distinct: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinctToTerraform(struct!.approxCountDistinct),
    approx_percentile: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentileToTerraform(struct!.approxPercentile),
    avg: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvgToTerraform(struct!.avg),
    count_function: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunctionToTerraform(struct!.countFunction),
    first: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirstToTerraform(struct!.first),
    last: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLastToTerraform(struct!.last),
    max: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMaxToTerraform(struct!.max),
    min: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMinToTerraform(struct!.min),
    stddev_pop: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPopToTerraform(struct!.stddevPop),
    stddev_samp: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSampToTerraform(struct!.stddevSamp),
    sum: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSumToTerraform(struct!.sum),
    time_window: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowToTerraform(struct!.timeWindow),
    var_pop: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPopToTerraform(struct!.varPop),
    var_samp: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSampToTerraform(struct!.varSamp),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    approx_count_distinct: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinctToHclTerraform(struct!.approxCountDistinct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinct",
    },
    approx_percentile: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentileToHclTerraform(struct!.approxPercentile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentile",
    },
    avg: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvgToHclTerraform(struct!.avg),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvg",
    },
    count_function: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunctionToHclTerraform(struct!.countFunction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunction",
    },
    first: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirstToHclTerraform(struct!.first),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirst",
    },
    last: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLastToHclTerraform(struct!.last),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLast",
    },
    max: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMaxToHclTerraform(struct!.max),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMax",
    },
    min: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMinToHclTerraform(struct!.min),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMin",
    },
    stddev_pop: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPopToHclTerraform(struct!.stddevPop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPop",
    },
    stddev_samp: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSampToHclTerraform(struct!.stddevSamp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSamp",
    },
    sum: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSumToHclTerraform(struct!.sum),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSum",
    },
    time_window: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowToHclTerraform(struct!.timeWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindow",
    },
    var_pop: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPopToHclTerraform(struct!.varPop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPop",
    },
    var_samp: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSampToHclTerraform(struct!.varSamp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSamp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approxCountDistinct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approxCountDistinct = this._approxCountDistinct?.internalValue;
    }
    if (this._approxPercentile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approxPercentile = this._approxPercentile?.internalValue;
    }
    if (this._avg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avg = this._avg?.internalValue;
    }
    if (this._countFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.countFunction = this._countFunction?.internalValue;
    }
    if (this._first?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first?.internalValue;
    }
    if (this._last?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last?.internalValue;
    }
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    if (this._min?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min?.internalValue;
    }
    if (this._stddevPop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stddevPop = this._stddevPop?.internalValue;
    }
    if (this._stddevSamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stddevSamp = this._stddevSamp?.internalValue;
    }
    if (this._sum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sum = this._sum?.internalValue;
    }
    if (this._timeWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow?.internalValue;
    }
    if (this._varPop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.varPop = this._varPop?.internalValue;
    }
    if (this._varSamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.varSamp = this._varSamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approxCountDistinct.internalValue = undefined;
      this._approxPercentile.internalValue = undefined;
      this._avg.internalValue = undefined;
      this._countFunction.internalValue = undefined;
      this._first.internalValue = undefined;
      this._last.internalValue = undefined;
      this._max.internalValue = undefined;
      this._min.internalValue = undefined;
      this._stddevPop.internalValue = undefined;
      this._stddevSamp.internalValue = undefined;
      this._sum.internalValue = undefined;
      this._timeWindow.internalValue = undefined;
      this._varPop.internalValue = undefined;
      this._varSamp.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approxCountDistinct.internalValue = value.approxCountDistinct;
      this._approxPercentile.internalValue = value.approxPercentile;
      this._avg.internalValue = value.avg;
      this._countFunction.internalValue = value.countFunction;
      this._first.internalValue = value.first;
      this._last.internalValue = value.last;
      this._max.internalValue = value.max;
      this._min.internalValue = value.min;
      this._stddevPop.internalValue = value.stddevPop;
      this._stddevSamp.internalValue = value.stddevSamp;
      this._sum.internalValue = value.sum;
      this._timeWindow.internalValue = value.timeWindow;
      this._varPop.internalValue = value.varPop;
      this._varSamp.internalValue = value.varSamp;
    }
  }

  // approx_count_distinct - computed: true, optional: true, required: false
  private _approxCountDistinct = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinctOutputReference(this, "approx_count_distinct");
  public get approxCountDistinct() {
    return this._approxCountDistinct;
  }
  public putApproxCountDistinct(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxCountDistinct) {
    this._approxCountDistinct.internalValue = value;
  }
  public resetApproxCountDistinct() {
    this._approxCountDistinct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approxCountDistinctInput() {
    return this._approxCountDistinct.internalValue;
  }

  // approx_percentile - computed: true, optional: true, required: false
  private _approxPercentile = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentileOutputReference(this, "approx_percentile");
  public get approxPercentile() {
    return this._approxPercentile;
  }
  public putApproxPercentile(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionApproxPercentile) {
    this._approxPercentile.internalValue = value;
  }
  public resetApproxPercentile() {
    this._approxPercentile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approxPercentileInput() {
    return this._approxPercentile.internalValue;
  }

  // avg - computed: true, optional: true, required: false
  private _avg = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvgOutputReference(this, "avg");
  public get avg() {
    return this._avg;
  }
  public putAvg(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionAvg) {
    this._avg.internalValue = value;
  }
  public resetAvg() {
    this._avg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgInput() {
    return this._avg.internalValue;
  }

  // count_function - computed: true, optional: true, required: false
  private _countFunction = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunctionOutputReference(this, "count_function");
  public get countFunction() {
    return this._countFunction;
  }
  public putCountFunction(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionCountFunction) {
    this._countFunction.internalValue = value;
  }
  public resetCountFunction() {
    this._countFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countFunctionInput() {
    return this._countFunction.internalValue;
  }

  // first - computed: true, optional: true, required: false
  private _first = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirstOutputReference(this, "first");
  public get first() {
    return this._first;
  }
  public putFirst(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionFirst) {
    this._first.internalValue = value;
  }
  public resetFirst() {
    this._first.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first.internalValue;
  }

  // last - computed: true, optional: true, required: false
  private _last = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLastOutputReference(this, "last");
  public get last() {
    return this._last;
  }
  public putLast(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionLast) {
    this._last.internalValue = value;
  }
  public resetLast() {
    this._last.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last.internalValue;
  }

  // max - computed: true, optional: true, required: false
  private _max = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }
  public putMax(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMax) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }

  // min - computed: true, optional: true, required: false
  private _min = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMinOutputReference(this, "min");
  public get min() {
    return this._min;
  }
  public putMin(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionMin) {
    this._min.internalValue = value;
  }
  public resetMin() {
    this._min.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min.internalValue;
  }

  // stddev_pop - computed: true, optional: true, required: false
  private _stddevPop = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPopOutputReference(this, "stddev_pop");
  public get stddevPop() {
    return this._stddevPop;
  }
  public putStddevPop(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevPop) {
    this._stddevPop.internalValue = value;
  }
  public resetStddevPop() {
    this._stddevPop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stddevPopInput() {
    return this._stddevPop.internalValue;
  }

  // stddev_samp - computed: true, optional: true, required: false
  private _stddevSamp = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSampOutputReference(this, "stddev_samp");
  public get stddevSamp() {
    return this._stddevSamp;
  }
  public putStddevSamp(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionStddevSamp) {
    this._stddevSamp.internalValue = value;
  }
  public resetStddevSamp() {
    this._stddevSamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stddevSampInput() {
    return this._stddevSamp.internalValue;
  }

  // sum - computed: true, optional: true, required: false
  private _sum = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSumOutputReference(this, "sum");
  public get sum() {
    return this._sum;
  }
  public putSum(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionSum) {
    this._sum.internalValue = value;
  }
  public resetSum() {
    this._sum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumInput() {
    return this._sum.internalValue;
  }

  // time_window - computed: true, optional: true, required: false
  private _timeWindow = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  public resetTimeWindow() {
    this._timeWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }

  // var_pop - computed: true, optional: true, required: false
  private _varPop = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPopOutputReference(this, "var_pop");
  public get varPop() {
    return this._varPop;
  }
  public putVarPop(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarPop) {
    this._varPop.internalValue = value;
  }
  public resetVarPop() {
    this._varPop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varPopInput() {
    return this._varPop.internalValue;
  }

  // var_samp - computed: true, optional: true, required: false
  private _varSamp = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSampOutputReference(this, "var_samp");
  public get varSamp() {
    return this._varSamp;
  }
  public putVarSamp(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionVarSamp) {
    this._varSamp.internalValue = value;
  }
  public resetVarSamp() {
    this._varSamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varSampInput() {
    return this._varSamp.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#column DataDatabricksFeatureEngineeringFeatures#column}
  */
  readonly column: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelectionToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelectionToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
    }
  }

  // column - computed: true, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#key DataDatabricksFeatureEngineeringFeatures#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#value DataDatabricksFeatureEngineeringFeatures#value}
  */
  readonly value: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters | cdktn.IResolvable | undefined) {
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

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference {
    return new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#aggregation_function DataDatabricksFeatureEngineeringFeatures#aggregation_function}
  */
  readonly aggregationFunction?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#column_selection DataDatabricksFeatureEngineeringFeatures#column_selection}
  */
  readonly columnSelection?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#extra_parameters DataDatabricksFeatureEngineeringFeatures#extra_parameters}
  */
  readonly extraParameters?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#function_type DataDatabricksFeatureEngineeringFeatures#function_type}
  */
  readonly functionType?: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation_function: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionToTerraform(struct!.aggregationFunction),
    column_selection: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelectionToTerraform(struct!.columnSelection),
    extra_parameters: cdktn.listMapper(dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersToTerraform, false)(struct!.extraParameters),
    function_type: cdktn.stringToTerraform(struct!.functionType),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation_function: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionToHclTerraform(struct!.aggregationFunction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunction",
    },
    column_selection: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelectionToHclTerraform(struct!.columnSelection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelection",
    },
    extra_parameters: {
      value: cdktn.listMapperHcl(dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersToHclTerraform, false)(struct!.extraParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList",
    },
    function_type: {
      value: cdktn.stringToHclTerraform(struct!.functionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationFunction = this._aggregationFunction?.internalValue;
    }
    if (this._columnSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnSelection = this._columnSelection?.internalValue;
    }
    if (this._extraParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParameters = this._extraParameters?.internalValue;
    }
    if (this._functionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionType = this._functionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationFunction.internalValue = undefined;
      this._columnSelection.internalValue = undefined;
      this._extraParameters.internalValue = undefined;
      this._functionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationFunction.internalValue = value.aggregationFunction;
      this._columnSelection.internalValue = value.columnSelection;
      this._extraParameters.internalValue = value.extraParameters;
      this._functionType = value.functionType;
    }
  }

  // aggregation_function - computed: true, optional: true, required: false
  private _aggregationFunction = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionAggregationFunction) {
    this._aggregationFunction.internalValue = value;
  }
  public resetAggregationFunction() {
    this._aggregationFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFunctionInput() {
    return this._aggregationFunction.internalValue;
  }

  // column_selection - computed: true, optional: true, required: false
  private _columnSelection = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelectionOutputReference(this, "column_selection");
  public get columnSelection() {
    return this._columnSelection;
  }
  public putColumnSelection(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionColumnSelection) {
    this._columnSelection.internalValue = value;
  }
  public resetColumnSelection() {
    this._columnSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSelectionInput() {
    return this._columnSelection.internalValue;
  }

  // extra_parameters - computed: true, optional: true, required: false
  private _extraParameters = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList(this, "extra_parameters", false);
  public get extraParameters() {
    return this._extraParameters;
  }
  public putExtraParameters(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[] | cdktn.IResolvable) {
    this._extraParameters.internalValue = value;
  }
  public resetExtraParameters() {
    this._extraParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParametersInput() {
    return this._extraParameters.internalValue;
  }

  // function_type - computed: true, optional: true, required: false
  private _functionType?: string; 
  public get functionType() {
    return this.getStringAttribute('function_type');
  }
  public set functionType(value: string) {
    this._functionType = value;
  }
  public resetFunctionType() {
    this._functionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionTypeInput() {
    return this._functionType;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#job_id DataDatabricksFeatureEngineeringFeatures#job_id}
  */
  readonly jobId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#job_run_id DataDatabricksFeatureEngineeringFeatures#job_run_id}
  */
  readonly jobRunId?: number;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_id: cdktn.numberToTerraform(struct!.jobId),
    job_run_id: cdktn.numberToTerraform(struct!.jobRunId),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_id: {
      value: cdktn.numberToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_run_id: {
      value: cdktn.numberToHclTerraform(struct!.jobRunId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._jobRunId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobRunId = this._jobRunId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobId = undefined;
      this._jobRunId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobId = value.jobId;
      this._jobRunId = value.jobRunId;
    }
  }

  // job_id - computed: true, optional: true, required: false
  private _jobId?: number; 
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }
  public set jobId(value: number) {
    this._jobId = value;
  }
  public resetJobId() {
    this._jobId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_run_id - computed: true, optional: true, required: false
  private _jobRunId?: number; 
  public get jobRunId() {
    return this.getNumberAttribute('job_run_id');
  }
  public set jobRunId(value: number) {
    this._jobRunId = value;
  }
  public resetJobRunId() {
    this._jobRunId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobRunIdInput() {
    return this._jobRunId;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#job_context DataDatabricksFeatureEngineeringFeatures#job_context}
  */
  readonly jobContext?: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#notebook_id DataDatabricksFeatureEngineeringFeatures#notebook_id}
  */
  readonly notebookId?: number;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_context: dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextToTerraform(struct!.jobContext),
    notebook_id: cdktn.numberToTerraform(struct!.notebookId),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_context: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextToHclTerraform(struct!.jobContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext",
    },
    notebook_id: {
      value: cdktn.numberToHclTerraform(struct!.notebookId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobContext = this._jobContext?.internalValue;
    }
    if (this._notebookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookId = this._notebookId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobContext.internalValue = undefined;
      this._notebookId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobContext.internalValue = value.jobContext;
      this._notebookId = value.notebookId;
    }
  }

  // job_context - computed: true, optional: true, required: false
  private _jobContext = new DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContextOutputReference(this, "job_context");
  public get jobContext() {
    return this._jobContext;
  }
  public putJobContext(value: DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextJobContext) {
    this._jobContext.internalValue = value;
  }
  public resetJobContext() {
    this._jobContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobContextInput() {
    return this._jobContext.internalValue;
  }

  // notebook_id - computed: true, optional: true, required: false
  private _notebookId?: number; 
  public get notebookId() {
    return this.getNumberAttribute('notebook_id');
  }
  public set notebookId(value: number) {
    this._notebookId = value;
  }
  public resetNotebookId() {
    this._notebookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookIdInput() {
    return this._notebookId;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#workspace_id DataDatabricksFeatureEngineeringFeatures#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#dataframe_schema DataDatabricksFeatureEngineeringFeatures#dataframe_schema}
  */
  readonly dataframeSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#entity_columns DataDatabricksFeatureEngineeringFeatures#entity_columns}
  */
  readonly entityColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#filter_condition DataDatabricksFeatureEngineeringFeatures#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#timeseries_column DataDatabricksFeatureEngineeringFeatures#timeseries_column}
  */
  readonly timeseriesColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#transformation_sql DataDatabricksFeatureEngineeringFeatures#transformation_sql}
  */
  readonly transformationSql?: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataframe_schema: cdktn.stringToTerraform(struct!.dataframeSchema),
    entity_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entityColumns),
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    full_name: cdktn.stringToTerraform(struct!.fullName),
    timeseries_column: cdktn.stringToTerraform(struct!.timeseriesColumn),
    transformation_sql: cdktn.stringToTerraform(struct!.transformationSql),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataframe_schema: {
      value: cdktn.stringToHclTerraform(struct!.dataframeSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entityColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_condition: {
      value: cdktn.stringToHclTerraform(struct!.filterCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_name: {
      value: cdktn.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeseries_column: {
      value: cdktn.stringToHclTerraform(struct!.timeseriesColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_sql: {
      value: cdktn.stringToHclTerraform(struct!.transformationSql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataframeSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataframeSchema = this._dataframeSchema;
    }
    if (this._entityColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityColumns = this._entityColumns;
    }
    if (this._filterCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCondition = this._filterCondition;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._timeseriesColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesColumn = this._timeseriesColumn;
    }
    if (this._transformationSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationSql = this._transformationSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataframeSchema = undefined;
      this._entityColumns = undefined;
      this._filterCondition = undefined;
      this._fullName = undefined;
      this._timeseriesColumn = undefined;
      this._transformationSql = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataframeSchema = value.dataframeSchema;
      this._entityColumns = value.entityColumns;
      this._filterCondition = value.filterCondition;
      this._fullName = value.fullName;
      this._timeseriesColumn = value.timeseriesColumn;
      this._transformationSql = value.transformationSql;
    }
  }

  // dataframe_schema - computed: true, optional: true, required: false
  private _dataframeSchema?: string; 
  public get dataframeSchema() {
    return this.getStringAttribute('dataframe_schema');
  }
  public set dataframeSchema(value: string) {
    this._dataframeSchema = value;
  }
  public resetDataframeSchema() {
    this._dataframeSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataframeSchemaInput() {
    return this._dataframeSchema;
  }

  // entity_columns - computed: true, optional: true, required: false
  private _entityColumns?: string[]; 
  public get entityColumns() {
    return this.getListAttribute('entity_columns');
  }
  public set entityColumns(value: string[]) {
    this._entityColumns = value;
  }
  public resetEntityColumns() {
    this._entityColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityColumnsInput() {
    return this._entityColumns;
  }

  // filter_condition - computed: true, optional: true, required: false
  private _filterCondition?: string; 
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }
  public set filterCondition(value: string) {
    this._filterCondition = value;
  }
  public resetFilterCondition() {
    this._filterCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionInput() {
    return this._filterCondition;
  }

  // full_name - computed: true, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // timeseries_column - computed: true, optional: true, required: false
  private _timeseriesColumn?: string; 
  public get timeseriesColumn() {
    return this.getStringAttribute('timeseries_column');
  }
  public set timeseriesColumn(value: string) {
    this._timeseriesColumn = value;
  }
  public resetTimeseriesColumn() {
    this._timeseriesColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesColumnInput() {
    return this._timeseriesColumn;
  }

  // transformation_sql - computed: true, optional: true, required: false
  private _transformationSql?: string; 
  public get transformationSql() {
    return this.getStringAttribute('transformation_sql');
  }
  public set transformationSql(value: string) {
    this._transformationSql = value;
  }
  public resetTransformationSql() {
    this._transformationSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationSqlInput() {
    return this._transformationSql;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#variant_expr_path DataDatabricksFeatureEngineeringFeatures#variant_expr_path}
  */
  readonly variantExprPath: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    variant_expr_path: cdktn.stringToTerraform(struct!.variantExprPath),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    variant_expr_path: {
      value: cdktn.stringToHclTerraform(struct!.variantExprPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variantExprPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantExprPath = this._variantExprPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variantExprPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variantExprPath = value.variantExprPath;
    }
  }

  // variant_expr_path - computed: true, optional: false, required: true
  private _variantExprPath?: string; 
  public get variantExprPath() {
    return this.getStringAttribute('variant_expr_path');
  }
  public set variantExprPath(value: string) {
    this._variantExprPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variantExprPathInput() {
    return this._variantExprPath;
  }
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference {
    return new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#variant_expr_path DataDatabricksFeatureEngineeringFeatures#variant_expr_path}
  */
  readonly variantExprPath: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    variant_expr_path: cdktn.stringToTerraform(struct!.variantExprPath),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    variant_expr_path: {
      value: cdktn.stringToHclTerraform(struct!.variantExprPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variantExprPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.variantExprPath = this._variantExprPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variantExprPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variantExprPath = value.variantExprPath;
    }
  }

  // variant_expr_path - computed: true, optional: false, required: true
  private _variantExprPath?: string; 
  public get variantExprPath() {
    return this.getStringAttribute('variant_expr_path');
  }
  public set variantExprPath(value: string) {
    this._variantExprPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variantExprPathInput() {
    return this._variantExprPath;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#entity_column_identifiers DataDatabricksFeatureEngineeringFeatures#entity_column_identifiers}
  */
  readonly entityColumnIdentifiers?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#filter_condition DataDatabricksFeatureEngineeringFeatures#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#name DataDatabricksFeatureEngineeringFeatures#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#timeseries_column_identifier DataDatabricksFeatureEngineeringFeatures#timeseries_column_identifier}
  */
  readonly timeseriesColumnIdentifier?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_column_identifiers: cdktn.listMapper(dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersToTerraform, false)(struct!.entityColumnIdentifiers),
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    name: cdktn.stringToTerraform(struct!.name),
    timeseries_column_identifier: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierToTerraform(struct!.timeseriesColumnIdentifier),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_column_identifiers: {
      value: cdktn.listMapperHcl(dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersToHclTerraform, false)(struct!.entityColumnIdentifiers),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList",
    },
    filter_condition: {
      value: cdktn.stringToHclTerraform(struct!.filterCondition),
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
    timeseries_column_identifier: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierToHclTerraform(struct!.timeseriesColumnIdentifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityColumnIdentifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityColumnIdentifiers = this._entityColumnIdentifiers?.internalValue;
    }
    if (this._filterCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCondition = this._filterCondition;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeseriesColumnIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesColumnIdentifier = this._timeseriesColumnIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityColumnIdentifiers.internalValue = undefined;
      this._filterCondition = undefined;
      this._name = undefined;
      this._timeseriesColumnIdentifier.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityColumnIdentifiers.internalValue = value.entityColumnIdentifiers;
      this._filterCondition = value.filterCondition;
      this._name = value.name;
      this._timeseriesColumnIdentifier.internalValue = value.timeseriesColumnIdentifier;
    }
  }

  // entity_column_identifiers - computed: true, optional: true, required: false
  private _entityColumnIdentifiers = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiersList(this, "entity_column_identifiers", false);
  public get entityColumnIdentifiers() {
    return this._entityColumnIdentifiers;
  }
  public putEntityColumnIdentifiers(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceEntityColumnIdentifiers[] | cdktn.IResolvable) {
    this._entityColumnIdentifiers.internalValue = value;
  }
  public resetEntityColumnIdentifiers() {
    this._entityColumnIdentifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityColumnIdentifiersInput() {
    return this._entityColumnIdentifiers.internalValue;
  }

  // filter_condition - computed: true, optional: true, required: false
  private _filterCondition?: string; 
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }
  public set filterCondition(value: string) {
    this._filterCondition = value;
  }
  public resetFilterCondition() {
    this._filterCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionInput() {
    return this._filterCondition;
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

  // timeseries_column_identifier - computed: true, optional: true, required: false
  private _timeseriesColumnIdentifier = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifierOutputReference(this, "timeseries_column_identifier");
  public get timeseriesColumnIdentifier() {
    return this._timeseriesColumnIdentifier;
  }
  public putTimeseriesColumnIdentifier(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceTimeseriesColumnIdentifier) {
    this._timeseriesColumnIdentifier.internalValue = value;
  }
  public resetTimeseriesColumnIdentifier() {
    this._timeseriesColumnIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesColumnIdentifierInput() {
    return this._timeseriesColumnIdentifier.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#data_type DataDatabricksFeatureEngineeringFeatures#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#name DataDatabricksFeatureEngineeringFeatures#name}
  */
  readonly name: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFieldsToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFieldsToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_type: {
      value: cdktn.stringToHclTerraform(struct!.dataType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataType = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataType = value.dataType;
      this._name = value.name;
    }
  }

  // data_type - computed: true, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFieldsOutputReference {
    return new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#fields DataDatabricksFeatureEngineeringFeatures#fields}
  */
  readonly fields: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFields[] | cdktn.IResolvable;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: true, optional: false, required: true
  private _fields = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#flat_schema DataDatabricksFeatureEngineeringFeatures#flat_schema}
  */
  readonly flatSchema?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchema;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flat_schema: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaToTerraform(struct!.flatSchema),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flat_schema: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaToHclTerraform(struct!.flatSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flatSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatSchema = this._flatSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flatSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flatSchema.internalValue = value.flatSchema;
    }
  }

  // flat_schema - computed: true, optional: true, required: false
  private _flatSchema = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchemaOutputReference(this, "flat_schema");
  public get flatSchema() {
    return this._flatSchema;
  }
  public putFlatSchema(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceFlatSchema) {
    this._flatSchema.internalValue = value;
  }
  public resetFlatSchema() {
    this._flatSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatSchemaInput() {
    return this._flatSchema.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#filter_condition DataDatabricksFeatureEngineeringFeatures#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}
  */
  readonly fullName: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    full_name: cdktn.stringToTerraform(struct!.fullName),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_condition: {
      value: cdktn.stringToHclTerraform(struct!.filterCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_name: {
      value: cdktn.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCondition = this._filterCondition;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterCondition = undefined;
      this._fullName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterCondition = value.filterCondition;
      this._fullName = value.fullName;
    }
  }

  // filter_condition - computed: true, optional: true, required: false
  private _filterCondition?: string; 
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }
  public set filterCondition(value: string) {
    this._filterCondition = value;
  }
  public resetFilterCondition() {
    this._filterCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionInput() {
    return this._filterCondition;
  }

  // full_name - computed: true, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#delta_table_source DataDatabricksFeatureEngineeringFeatures#delta_table_source}
  */
  readonly deltaTableSource?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#kafka_source DataDatabricksFeatureEngineeringFeatures#kafka_source}
  */
  readonly kafkaSource?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#request_source DataDatabricksFeatureEngineeringFeatures#request_source}
  */
  readonly requestSource?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#stream_source DataDatabricksFeatureEngineeringFeatures#stream_source}
  */
  readonly streamSource?: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSource;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delta_table_source: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceToTerraform(struct!.deltaTableSource),
    kafka_source: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceToTerraform(struct!.kafkaSource),
    request_source: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceToTerraform(struct!.requestSource),
    stream_source: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSourceToTerraform(struct!.streamSource),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delta_table_source: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceToHclTerraform(struct!.deltaTableSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource",
    },
    kafka_source: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceToHclTerraform(struct!.kafkaSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource",
    },
    request_source: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceToHclTerraform(struct!.requestSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSource",
    },
    stream_source: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSourceToHclTerraform(struct!.streamSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deltaTableSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaTableSource = this._deltaTableSource?.internalValue;
    }
    if (this._kafkaSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaSource = this._kafkaSource?.internalValue;
    }
    if (this._requestSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSource = this._requestSource?.internalValue;
    }
    if (this._streamSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamSource = this._streamSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deltaTableSource.internalValue = undefined;
      this._kafkaSource.internalValue = undefined;
      this._requestSource.internalValue = undefined;
      this._streamSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deltaTableSource.internalValue = value.deltaTableSource;
      this._kafkaSource.internalValue = value.kafkaSource;
      this._requestSource.internalValue = value.requestSource;
      this._streamSource.internalValue = value.streamSource;
    }
  }

  // delta_table_source - computed: true, optional: true, required: false
  private _deltaTableSource = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference(this, "delta_table_source");
  public get deltaTableSource() {
    return this._deltaTableSource;
  }
  public putDeltaTableSource(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource) {
    this._deltaTableSource.internalValue = value;
  }
  public resetDeltaTableSource() {
    this._deltaTableSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTableSourceInput() {
    return this._deltaTableSource.internalValue;
  }

  // kafka_source - computed: true, optional: true, required: false
  private _kafkaSource = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSourceOutputReference(this, "kafka_source");
  public get kafkaSource() {
    return this._kafkaSource;
  }
  public putKafkaSource(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceKafkaSource) {
    this._kafkaSource.internalValue = value;
  }
  public resetKafkaSource() {
    this._kafkaSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSourceInput() {
    return this._kafkaSource.internalValue;
  }

  // request_source - computed: true, optional: true, required: false
  private _requestSource = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSourceOutputReference(this, "request_source");
  public get requestSource() {
    return this._requestSource;
  }
  public putRequestSource(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceRequestSource) {
    this._requestSource.internalValue = value;
  }
  public resetRequestSource() {
    this._requestSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSourceInput() {
    return this._requestSource.internalValue;
  }

  // stream_source - computed: true, optional: true, required: false
  private _streamSource = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSourceOutputReference(this, "stream_source");
  public get streamSource() {
    return this._streamSource;
  }
  public putStreamSource(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceStreamSource) {
    this._streamSource.internalValue = value;
  }
  public resetStreamSource() {
    this._streamSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSourceInput() {
    return this._streamSource.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#offset DataDatabricksFeatureEngineeringFeatures#offset}
  */
  readonly offset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    offset: cdktn.stringToTerraform(struct!.offset),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    offset: {
      value: cdktn.stringToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_duration: {
      value: cdktn.stringToHclTerraform(struct!.windowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._windowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDuration = this._windowDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offset = undefined;
      this._windowDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offset = value.offset;
      this._windowDuration = value.windowDuration;
    }
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // window_duration - computed: true, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRolling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#delay DataDatabricksFeatureEngineeringFeatures#delay}
  */
  readonly delay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRollingToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRolling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delay: cdktn.stringToTerraform(struct!.delay),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRollingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRolling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delay: {
      value: cdktn.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_duration: {
      value: cdktn.stringToHclTerraform(struct!.windowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRollingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRolling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._windowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDuration = this._windowDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRolling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._windowDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._windowDuration = value.windowDuration;
    }
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // window_duration - computed: true, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#slide_duration DataDatabricksFeatureEngineeringFeatures#slide_duration}
  */
  readonly slideDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    slide_duration: cdktn.stringToTerraform(struct!.slideDuration),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    slide_duration: {
      value: cdktn.stringToHclTerraform(struct!.slideDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_duration: {
      value: cdktn.stringToHclTerraform(struct!.windowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slideDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.slideDuration = this._slideDuration;
    }
    if (this._windowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDuration = this._windowDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slideDuration = undefined;
      this._windowDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slideDuration = value.slideDuration;
      this._windowDuration = value.windowDuration;
    }
  }

  // slide_duration - computed: true, optional: false, required: true
  private _slideDuration?: string; 
  public get slideDuration() {
    return this.getStringAttribute('slide_duration');
  }
  public set slideDuration(value: string) {
    this._slideDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slideDurationInput() {
    return this._slideDuration;
  }

  // window_duration - computed: true, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#window_duration DataDatabricksFeatureEngineeringFeatures#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    window_duration: {
      value: cdktn.stringToHclTerraform(struct!.windowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowDuration = this._windowDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._windowDuration = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._windowDuration = value.windowDuration;
    }
  }

  // window_duration - computed: true, optional: false, required: true
  private _windowDuration?: string; 
  public get windowDuration() {
    return this.getStringAttribute('window_duration');
  }
  public set windowDuration(value: string) {
    this._windowDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowDurationInput() {
    return this._windowDuration;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#continuous DataDatabricksFeatureEngineeringFeatures#continuous}
  */
  readonly continuous?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#rolling DataDatabricksFeatureEngineeringFeatures#rolling}
  */
  readonly rolling?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRolling;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#sliding DataDatabricksFeatureEngineeringFeatures#sliding}
  */
  readonly sliding?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#tumbling DataDatabricksFeatureEngineeringFeatures#tumbling}
  */
  readonly tumbling?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    continuous: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousToTerraform(struct!.continuous),
    rolling: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRollingToTerraform(struct!.rolling),
    sliding: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingToTerraform(struct!.sliding),
    tumbling: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingToTerraform(struct!.tumbling),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    continuous: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousToHclTerraform(struct!.continuous),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous",
    },
    rolling: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRollingToHclTerraform(struct!.rolling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRolling",
    },
    sliding: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingToHclTerraform(struct!.sliding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding",
    },
    tumbling: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingToHclTerraform(struct!.tumbling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuous = this._continuous?.internalValue;
    }
    if (this._rolling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolling = this._rolling?.internalValue;
    }
    if (this._sliding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliding = this._sliding?.internalValue;
    }
    if (this._tumbling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tumbling = this._tumbling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continuous.internalValue = undefined;
      this._rolling.internalValue = undefined;
      this._sliding.internalValue = undefined;
      this._tumbling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continuous.internalValue = value.continuous;
      this._rolling.internalValue = value.rolling;
      this._sliding.internalValue = value.sliding;
      this._tumbling.internalValue = value.tumbling;
    }
  }

  // continuous - computed: true, optional: true, required: false
  private _continuous = new DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuousOutputReference(this, "continuous");
  public get continuous() {
    return this._continuous;
  }
  public putContinuous(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowContinuous) {
    this._continuous.internalValue = value;
  }
  public resetContinuous() {
    this._continuous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous.internalValue;
  }

  // rolling - computed: true, optional: true, required: false
  private _rolling = new DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRollingOutputReference(this, "rolling");
  public get rolling() {
    return this._rolling;
  }
  public putRolling(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowRolling) {
    this._rolling.internalValue = value;
  }
  public resetRolling() {
    this._rolling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingInput() {
    return this._rolling.internalValue;
  }

  // sliding - computed: true, optional: true, required: false
  private _sliding = new DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSlidingOutputReference(this, "sliding");
  public get sliding() {
    return this._sliding;
  }
  public putSliding(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowSliding) {
    this._sliding.internalValue = value;
  }
  public resetSliding() {
    this._sliding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slidingInput() {
    return this._sliding.internalValue;
  }

  // tumbling - computed: true, optional: true, required: false
  private _tumbling = new DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumblingOutputReference(this, "tumbling");
  public get tumbling() {
    return this._tumbling;
  }
  public putTumbling(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowTumbling) {
    this._tumbling.internalValue = value;
  }
  public resetTumbling() {
    this._tumbling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tumblingInput() {
    return this._tumbling.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesFeaturesTimeseriesColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#name DataDatabricksFeatureEngineeringFeatures#name}
  */
  readonly name: string;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeseriesColumnToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeseriesColumn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesTimeseriesColumnToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeseriesColumn): any {
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

export class DataDatabricksFeatureEngineeringFeaturesFeaturesTimeseriesColumnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeaturesTimeseriesColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeseriesColumn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface DataDatabricksFeatureEngineeringFeaturesFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#provider_config DataDatabricksFeatureEngineeringFeatures#provider_config}
  */
  readonly providerConfig?: DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig;
}

export function dataDatabricksFeatureEngineeringFeaturesFeaturesToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    full_name: cdktn.stringToTerraform(struct!.fullName),
    provider_config: dataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesFeaturesToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesFeatures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    full_name: {
      value: cdktn.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_config: {
      value: dataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullName = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullName = value.fullName;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // catalog_name - computed: true, optional: false, required: false
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entities - computed: true, optional: false, required: false
  private _entities = new DataDatabricksFeatureEngineeringFeaturesFeaturesEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
  }

  // filter_condition - computed: true, optional: false, required: false
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }

  // full_name - computed: true, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // function - computed: true, optional: false, required: false
  private _function = new DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }

  // inputs - computed: true, optional: false, required: false
  public get inputs() {
    return this.getListAttribute('inputs');
  }

  // lineage_context - computed: true, optional: false, required: false
  private _lineageContext = new DataDatabricksFeatureEngineeringFeaturesFeaturesLineageContextOutputReference(this, "lineage_context");
  public get lineageContext() {
    return this._lineageContext;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksFeatureEngineeringFeaturesFeaturesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // time_window - computed: true, optional: false, required: false
  private _timeWindow = new DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }

  // timeseries_column - computed: true, optional: false, required: false
  private _timeseriesColumn = new DataDatabricksFeatureEngineeringFeaturesFeaturesTimeseriesColumnOutputReference(this, "timeseries_column");
  public get timeseriesColumn() {
    return this._timeseriesColumn;
  }
}

export class DataDatabricksFeatureEngineeringFeaturesFeaturesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeaturesFeatures[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference {
    return new DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringFeaturesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#workspace_id DataDatabricksFeatureEngineeringFeatures#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksFeatureEngineeringFeaturesProviderConfigToTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksFeatureEngineeringFeaturesProviderConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeaturesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeaturesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeaturesProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features databricks_feature_engineering_features}
*/
export class DataDatabricksFeatureEngineeringFeatures extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_feature_engineering_features";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksFeatureEngineeringFeatures resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksFeatureEngineeringFeatures to import
  * @param importFromId The id of the existing DataDatabricksFeatureEngineeringFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksFeatureEngineeringFeatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_feature_engineering_features", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/feature_engineering_features databricks_feature_engineering_features} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksFeatureEngineeringFeaturesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksFeatureEngineeringFeaturesConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_feature_engineering_features',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.119.0',
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
    this._catalogName = config.catalogName;
    this._pageSize = config.pageSize;
    this._providerConfig.internalValue = config.providerConfig;
    this._schemaName = config.schemaName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_name - computed: false, optional: false, required: true
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // features - computed: true, optional: false, required: false
  private _features = new DataDatabricksFeatureEngineeringFeaturesFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }

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
  private _providerConfig = new DataDatabricksFeatureEngineeringFeaturesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksFeatureEngineeringFeaturesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_name: cdktn.stringToTerraform(this._catalogName),
      page_size: cdktn.numberToTerraform(this._pageSize),
      provider_config: dataDatabricksFeatureEngineeringFeaturesProviderConfigToTerraform(this._providerConfig.internalValue),
      schema_name: cdktn.stringToTerraform(this._schemaName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_name: {
        value: cdktn.stringToHclTerraform(this._catalogName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktn.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_config: {
        value: dataDatabricksFeatureEngineeringFeaturesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksFeatureEngineeringFeaturesProviderConfig",
      },
      schema_name: {
        value: cdktn.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
