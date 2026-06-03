/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FeatureEngineeringFeatureConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#description FeatureEngineeringFeature#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#entities FeatureEngineeringFeature#entities}
  */
  readonly entities?: FeatureEngineeringFeatureEntities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#function FeatureEngineeringFeature#function}
  */
  readonly function: FeatureEngineeringFeatureFunction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#inputs FeatureEngineeringFeature#inputs}
  */
  readonly inputs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#lineage_context FeatureEngineeringFeature#lineage_context}
  */
  readonly lineageContext?: FeatureEngineeringFeatureLineageContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#provider_config FeatureEngineeringFeature#provider_config}
  */
  readonly providerConfig?: FeatureEngineeringFeatureProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#source FeatureEngineeringFeature#source}
  */
  readonly source: FeatureEngineeringFeatureSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}
  */
  readonly timeWindow?: FeatureEngineeringFeatureTimeWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}
  */
  readonly timeseriesColumn?: FeatureEngineeringFeatureTimeseriesColumn;
}
export interface FeatureEngineeringFeatureEntities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}
  */
  readonly name: string;
}

export function featureEngineeringFeatureEntitiesToTerraform(struct?: FeatureEngineeringFeatureEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function featureEngineeringFeatureEntitiesToHclTerraform(struct?: FeatureEngineeringFeatureEntities | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringFeatureEntitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FeatureEngineeringFeatureEntities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringFeatureEntities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class FeatureEngineeringFeatureEntitiesList extends cdktn.ComplexList {
  public internalValue? : FeatureEngineeringFeatureEntities[] | cdktn.IResolvable

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
  public get(index: number): FeatureEngineeringFeatureEntitiesOutputReference {
    return new FeatureEngineeringFeatureEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#relative_sd FeatureEngineeringFeature#relative_sd}
  */
  readonly relativeSd?: number;
}

export function featureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
    relative_sd: cdktn.numberToTerraform(struct!.relativeSd),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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

  // relative_sd - computed: false, optional: true, required: false
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#accuracy FeatureEngineeringFeature#accuracy}
  */
  readonly accuracy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#percentile FeatureEngineeringFeature#percentile}
  */
  readonly percentile: number;
}

export function featureEngineeringFeatureFunctionAggregationFunctionApproxPercentileToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accuracy: cdktn.numberToTerraform(struct!.accuracy),
    input: cdktn.stringToTerraform(struct!.input),
    percentile: cdktn.numberToTerraform(struct!.percentile),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionApproxPercentileToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable | undefined) {
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

  // accuracy - computed: false, optional: true, required: false
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

  // input - computed: false, optional: false, required: true
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

  // percentile - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionAvg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionAvgToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionAvg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionAvgToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionAvg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionAvg | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionAvg | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionCountFunctionToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionCountFunctionToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionFirst {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionFirstToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionFirst | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionFirstToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionFirst | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionFirst | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionFirst | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionLast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionLastToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionLast | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionLastToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionLast | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionLast | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionLast | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionMax {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionMaxToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionMaxToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionMax | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionMax | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionMin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionMinToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionMin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionMinToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionMin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionMin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionMin | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionStddevPopToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionStddevPopToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionStddevSampToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionStddevSampToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionSum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionSumToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionSum | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionSumToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionSum | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionSum | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionSum | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}
  */
  readonly offset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktn.stringToTerraform(struct!.offset),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable | undefined) {
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

  // offset - computed: false, optional: true, required: false
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

  // window_duration - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowRolling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#delay FeatureEngineeringFeature#delay}
  */
  readonly delay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionTimeWindowRollingToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowRolling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktn.stringToTerraform(struct!.delay),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionTimeWindowRollingToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowRolling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowRollingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowRolling | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowRolling | cdktn.IResolvable | undefined) {
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

  // delay - computed: false, optional: true, required: false
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

  // window_duration - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#slide_duration FeatureEngineeringFeature#slide_duration}
  */
  readonly slideDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slide_duration: cdktn.stringToTerraform(struct!.slideDuration),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable | undefined) {
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

  // slide_duration - computed: false, optional: false, required: true
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

  // window_duration - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable | undefined) {
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

  // window_duration - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#continuous FeatureEngineeringFeature#continuous}
  */
  readonly continuous?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#rolling FeatureEngineeringFeature#rolling}
  */
  readonly rolling?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowRolling;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#sliding FeatureEngineeringFeature#sliding}
  */
  readonly sliding?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#tumbling FeatureEngineeringFeature#tumbling}
  */
  readonly tumbling?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling;
}

export function featureEngineeringFeatureFunctionAggregationFunctionTimeWindowToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuous: featureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousToTerraform(struct!.continuous),
    rolling: featureEngineeringFeatureFunctionAggregationFunctionTimeWindowRollingToTerraform(struct!.rolling),
    sliding: featureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingToTerraform(struct!.sliding),
    tumbling: featureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingToTerraform(struct!.tumbling),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionTimeWindowToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continuous: {
      value: featureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousToHclTerraform(struct!.continuous),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous",
    },
    rolling: {
      value: featureEngineeringFeatureFunctionAggregationFunctionTimeWindowRollingToHclTerraform(struct!.rolling),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowRolling",
    },
    sliding: {
      value: featureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingToHclTerraform(struct!.sliding),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding",
    },
    tumbling: {
      value: featureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingToHclTerraform(struct!.tumbling),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow | cdktn.IResolvable | undefined) {
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

  // continuous - computed: false, optional: true, required: false
  private _continuous = new FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference(this, "continuous");
  public get continuous() {
    return this._continuous;
  }
  public putContinuous(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous) {
    this._continuous.internalValue = value;
  }
  public resetContinuous() {
    this._continuous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous.internalValue;
  }

  // rolling - computed: false, optional: true, required: false
  private _rolling = new FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowRollingOutputReference(this, "rolling");
  public get rolling() {
    return this._rolling;
  }
  public putRolling(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowRolling) {
    this._rolling.internalValue = value;
  }
  public resetRolling() {
    this._rolling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingInput() {
    return this._rolling.internalValue;
  }

  // sliding - computed: false, optional: true, required: false
  private _sliding = new FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference(this, "sliding");
  public get sliding() {
    return this._sliding;
  }
  public putSliding(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding) {
    this._sliding.internalValue = value;
  }
  public resetSliding() {
    this._sliding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slidingInput() {
    return this._sliding.internalValue;
  }

  // tumbling - computed: false, optional: true, required: false
  private _tumbling = new FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference(this, "tumbling");
  public get tumbling() {
    return this._tumbling;
  }
  public putTumbling(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling) {
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionVarPop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionVarPopToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionVarPop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionVarPopToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionVarPop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionVarPop | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionVarPop | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#input FeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function featureEngineeringFeatureFunctionAggregationFunctionVarSampToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionVarSampToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp | cdktn.IResolvable | undefined) {
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

  // input - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#approx_count_distinct FeatureEngineeringFeature#approx_count_distinct}
  */
  readonly approxCountDistinct?: FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#approx_percentile FeatureEngineeringFeature#approx_percentile}
  */
  readonly approxPercentile?: FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#avg FeatureEngineeringFeature#avg}
  */
  readonly avg?: FeatureEngineeringFeatureFunctionAggregationFunctionAvg;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#count_function FeatureEngineeringFeature#count_function}
  */
  readonly countFunction?: FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#first FeatureEngineeringFeature#first}
  */
  readonly first?: FeatureEngineeringFeatureFunctionAggregationFunctionFirst;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#last FeatureEngineeringFeature#last}
  */
  readonly last?: FeatureEngineeringFeatureFunctionAggregationFunctionLast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#max FeatureEngineeringFeature#max}
  */
  readonly max?: FeatureEngineeringFeatureFunctionAggregationFunctionMax;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#min FeatureEngineeringFeature#min}
  */
  readonly min?: FeatureEngineeringFeatureFunctionAggregationFunctionMin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#stddev_pop FeatureEngineeringFeature#stddev_pop}
  */
  readonly stddevPop?: FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#stddev_samp FeatureEngineeringFeature#stddev_samp}
  */
  readonly stddevSamp?: FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#sum FeatureEngineeringFeature#sum}
  */
  readonly sum?: FeatureEngineeringFeatureFunctionAggregationFunctionSum;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}
  */
  readonly timeWindow?: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#var_pop FeatureEngineeringFeature#var_pop}
  */
  readonly varPop?: FeatureEngineeringFeatureFunctionAggregationFunctionVarPop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#var_samp FeatureEngineeringFeature#var_samp}
  */
  readonly varSamp?: FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp;
}

export function featureEngineeringFeatureFunctionAggregationFunctionToTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approx_count_distinct: featureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctToTerraform(struct!.approxCountDistinct),
    approx_percentile: featureEngineeringFeatureFunctionAggregationFunctionApproxPercentileToTerraform(struct!.approxPercentile),
    avg: featureEngineeringFeatureFunctionAggregationFunctionAvgToTerraform(struct!.avg),
    count_function: featureEngineeringFeatureFunctionAggregationFunctionCountFunctionToTerraform(struct!.countFunction),
    first: featureEngineeringFeatureFunctionAggregationFunctionFirstToTerraform(struct!.first),
    last: featureEngineeringFeatureFunctionAggregationFunctionLastToTerraform(struct!.last),
    max: featureEngineeringFeatureFunctionAggregationFunctionMaxToTerraform(struct!.max),
    min: featureEngineeringFeatureFunctionAggregationFunctionMinToTerraform(struct!.min),
    stddev_pop: featureEngineeringFeatureFunctionAggregationFunctionStddevPopToTerraform(struct!.stddevPop),
    stddev_samp: featureEngineeringFeatureFunctionAggregationFunctionStddevSampToTerraform(struct!.stddevSamp),
    sum: featureEngineeringFeatureFunctionAggregationFunctionSumToTerraform(struct!.sum),
    time_window: featureEngineeringFeatureFunctionAggregationFunctionTimeWindowToTerraform(struct!.timeWindow),
    var_pop: featureEngineeringFeatureFunctionAggregationFunctionVarPopToTerraform(struct!.varPop),
    var_samp: featureEngineeringFeatureFunctionAggregationFunctionVarSampToTerraform(struct!.varSamp),
  }
}


export function featureEngineeringFeatureFunctionAggregationFunctionToHclTerraform(struct?: FeatureEngineeringFeatureFunctionAggregationFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approx_count_distinct: {
      value: featureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctToHclTerraform(struct!.approxCountDistinct),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct",
    },
    approx_percentile: {
      value: featureEngineeringFeatureFunctionAggregationFunctionApproxPercentileToHclTerraform(struct!.approxPercentile),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile",
    },
    avg: {
      value: featureEngineeringFeatureFunctionAggregationFunctionAvgToHclTerraform(struct!.avg),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionAvg",
    },
    count_function: {
      value: featureEngineeringFeatureFunctionAggregationFunctionCountFunctionToHclTerraform(struct!.countFunction),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction",
    },
    first: {
      value: featureEngineeringFeatureFunctionAggregationFunctionFirstToHclTerraform(struct!.first),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionFirst",
    },
    last: {
      value: featureEngineeringFeatureFunctionAggregationFunctionLastToHclTerraform(struct!.last),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionLast",
    },
    max: {
      value: featureEngineeringFeatureFunctionAggregationFunctionMaxToHclTerraform(struct!.max),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionMax",
    },
    min: {
      value: featureEngineeringFeatureFunctionAggregationFunctionMinToHclTerraform(struct!.min),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionMin",
    },
    stddev_pop: {
      value: featureEngineeringFeatureFunctionAggregationFunctionStddevPopToHclTerraform(struct!.stddevPop),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop",
    },
    stddev_samp: {
      value: featureEngineeringFeatureFunctionAggregationFunctionStddevSampToHclTerraform(struct!.stddevSamp),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp",
    },
    sum: {
      value: featureEngineeringFeatureFunctionAggregationFunctionSumToHclTerraform(struct!.sum),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionSum",
    },
    time_window: {
      value: featureEngineeringFeatureFunctionAggregationFunctionTimeWindowToHclTerraform(struct!.timeWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow",
    },
    var_pop: {
      value: featureEngineeringFeatureFunctionAggregationFunctionVarPopToHclTerraform(struct!.varPop),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionVarPop",
    },
    var_samp: {
      value: featureEngineeringFeatureFunctionAggregationFunctionVarSampToHclTerraform(struct!.varSamp),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionAggregationFunction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionAggregationFunction | cdktn.IResolvable | undefined) {
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

  // approx_count_distinct - computed: false, optional: true, required: false
  private _approxCountDistinct = new FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference(this, "approx_count_distinct");
  public get approxCountDistinct() {
    return this._approxCountDistinct;
  }
  public putApproxCountDistinct(value: FeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct) {
    this._approxCountDistinct.internalValue = value;
  }
  public resetApproxCountDistinct() {
    this._approxCountDistinct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approxCountDistinctInput() {
    return this._approxCountDistinct.internalValue;
  }

  // approx_percentile - computed: false, optional: true, required: false
  private _approxPercentile = new FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference(this, "approx_percentile");
  public get approxPercentile() {
    return this._approxPercentile;
  }
  public putApproxPercentile(value: FeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile) {
    this._approxPercentile.internalValue = value;
  }
  public resetApproxPercentile() {
    this._approxPercentile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approxPercentileInput() {
    return this._approxPercentile.internalValue;
  }

  // avg - computed: false, optional: true, required: false
  private _avg = new FeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference(this, "avg");
  public get avg() {
    return this._avg;
  }
  public putAvg(value: FeatureEngineeringFeatureFunctionAggregationFunctionAvg) {
    this._avg.internalValue = value;
  }
  public resetAvg() {
    this._avg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgInput() {
    return this._avg.internalValue;
  }

  // count_function - computed: false, optional: true, required: false
  private _countFunction = new FeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference(this, "count_function");
  public get countFunction() {
    return this._countFunction;
  }
  public putCountFunction(value: FeatureEngineeringFeatureFunctionAggregationFunctionCountFunction) {
    this._countFunction.internalValue = value;
  }
  public resetCountFunction() {
    this._countFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countFunctionInput() {
    return this._countFunction.internalValue;
  }

  // first - computed: false, optional: true, required: false
  private _first = new FeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference(this, "first");
  public get first() {
    return this._first;
  }
  public putFirst(value: FeatureEngineeringFeatureFunctionAggregationFunctionFirst) {
    this._first.internalValue = value;
  }
  public resetFirst() {
    this._first.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first.internalValue;
  }

  // last - computed: false, optional: true, required: false
  private _last = new FeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference(this, "last");
  public get last() {
    return this._last;
  }
  public putLast(value: FeatureEngineeringFeatureFunctionAggregationFunctionLast) {
    this._last.internalValue = value;
  }
  public resetLast() {
    this._last.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last.internalValue;
  }

  // max - computed: false, optional: true, required: false
  private _max = new FeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }
  public putMax(value: FeatureEngineeringFeatureFunctionAggregationFunctionMax) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }

  // min - computed: false, optional: true, required: false
  private _min = new FeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference(this, "min");
  public get min() {
    return this._min;
  }
  public putMin(value: FeatureEngineeringFeatureFunctionAggregationFunctionMin) {
    this._min.internalValue = value;
  }
  public resetMin() {
    this._min.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min.internalValue;
  }

  // stddev_pop - computed: false, optional: true, required: false
  private _stddevPop = new FeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference(this, "stddev_pop");
  public get stddevPop() {
    return this._stddevPop;
  }
  public putStddevPop(value: FeatureEngineeringFeatureFunctionAggregationFunctionStddevPop) {
    this._stddevPop.internalValue = value;
  }
  public resetStddevPop() {
    this._stddevPop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stddevPopInput() {
    return this._stddevPop.internalValue;
  }

  // stddev_samp - computed: false, optional: true, required: false
  private _stddevSamp = new FeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference(this, "stddev_samp");
  public get stddevSamp() {
    return this._stddevSamp;
  }
  public putStddevSamp(value: FeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp) {
    this._stddevSamp.internalValue = value;
  }
  public resetStddevSamp() {
    this._stddevSamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stddevSampInput() {
    return this._stddevSamp.internalValue;
  }

  // sum - computed: false, optional: true, required: false
  private _sum = new FeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference(this, "sum");
  public get sum() {
    return this._sum;
  }
  public putSum(value: FeatureEngineeringFeatureFunctionAggregationFunctionSum) {
    this._sum.internalValue = value;
  }
  public resetSum() {
    this._sum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumInput() {
    return this._sum.internalValue;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow = new FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: FeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  public resetTimeWindow() {
    this._timeWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }

  // var_pop - computed: false, optional: true, required: false
  private _varPop = new FeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference(this, "var_pop");
  public get varPop() {
    return this._varPop;
  }
  public putVarPop(value: FeatureEngineeringFeatureFunctionAggregationFunctionVarPop) {
    this._varPop.internalValue = value;
  }
  public resetVarPop() {
    this._varPop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varPopInput() {
    return this._varPop.internalValue;
  }

  // var_samp - computed: false, optional: true, required: false
  private _varSamp = new FeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference(this, "var_samp");
  public get varSamp() {
    return this._varSamp;
  }
  public putVarSamp(value: FeatureEngineeringFeatureFunctionAggregationFunctionVarSamp) {
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
export interface FeatureEngineeringFeatureFunctionColumnSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#column FeatureEngineeringFeature#column}
  */
  readonly column: string;
}

export function featureEngineeringFeatureFunctionColumnSelectionToTerraform(struct?: FeatureEngineeringFeatureFunctionColumnSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
  }
}


export function featureEngineeringFeatureFunctionColumnSelectionToHclTerraform(struct?: FeatureEngineeringFeatureFunctionColumnSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureFunctionColumnSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunctionColumnSelection | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionColumnSelection | cdktn.IResolvable | undefined) {
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

  // column - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureFunctionExtraParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#key FeatureEngineeringFeature#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#value FeatureEngineeringFeature#value}
  */
  readonly value: string;
}

export function featureEngineeringFeatureFunctionExtraParametersToTerraform(struct?: FeatureEngineeringFeatureFunctionExtraParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function featureEngineeringFeatureFunctionExtraParametersToHclTerraform(struct?: FeatureEngineeringFeatureFunctionExtraParameters | cdktn.IResolvable): any {
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

export class FeatureEngineeringFeatureFunctionExtraParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FeatureEngineeringFeatureFunctionExtraParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureFunctionExtraParameters | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
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

  // value - computed: false, optional: false, required: true
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

export class FeatureEngineeringFeatureFunctionExtraParametersList extends cdktn.ComplexList {
  public internalValue? : FeatureEngineeringFeatureFunctionExtraParameters[] | cdktn.IResolvable

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
  public get(index: number): FeatureEngineeringFeatureFunctionExtraParametersOutputReference {
    return new FeatureEngineeringFeatureFunctionExtraParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureEngineeringFeatureFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#aggregation_function FeatureEngineeringFeature#aggregation_function}
  */
  readonly aggregationFunction?: FeatureEngineeringFeatureFunctionAggregationFunction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#column_selection FeatureEngineeringFeature#column_selection}
  */
  readonly columnSelection?: FeatureEngineeringFeatureFunctionColumnSelection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#extra_parameters FeatureEngineeringFeature#extra_parameters}
  */
  readonly extraParameters?: FeatureEngineeringFeatureFunctionExtraParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#function_type FeatureEngineeringFeature#function_type}
  */
  readonly functionType?: string;
}

export function featureEngineeringFeatureFunctionToTerraform(struct?: FeatureEngineeringFeatureFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_function: featureEngineeringFeatureFunctionAggregationFunctionToTerraform(struct!.aggregationFunction),
    column_selection: featureEngineeringFeatureFunctionColumnSelectionToTerraform(struct!.columnSelection),
    extra_parameters: cdktn.listMapper(featureEngineeringFeatureFunctionExtraParametersToTerraform, false)(struct!.extraParameters),
    function_type: cdktn.stringToTerraform(struct!.functionType),
  }
}


export function featureEngineeringFeatureFunctionToHclTerraform(struct?: FeatureEngineeringFeatureFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_function: {
      value: featureEngineeringFeatureFunctionAggregationFunctionToHclTerraform(struct!.aggregationFunction),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionAggregationFunction",
    },
    column_selection: {
      value: featureEngineeringFeatureFunctionColumnSelectionToHclTerraform(struct!.columnSelection),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureFunctionColumnSelection",
    },
    extra_parameters: {
      value: cdktn.listMapperHcl(featureEngineeringFeatureFunctionExtraParametersToHclTerraform, false)(struct!.extraParameters),
      isBlock: true,
      type: "list",
      storageClassType: "FeatureEngineeringFeatureFunctionExtraParametersList",
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

export class FeatureEngineeringFeatureFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureFunction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: FeatureEngineeringFeatureFunction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregationFunction.internalValue = undefined;
      this._columnSelection.internalValue = undefined;
      this._extraParameters.internalValue = undefined;
      this._functionType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregationFunction.internalValue = value.aggregationFunction;
      this._columnSelection.internalValue = value.columnSelection;
      this._extraParameters.internalValue = value.extraParameters;
      this._functionType = value.functionType;
    }
  }

  // aggregation_function - computed: false, optional: true, required: false
  private _aggregationFunction = new FeatureEngineeringFeatureFunctionAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: FeatureEngineeringFeatureFunctionAggregationFunction) {
    this._aggregationFunction.internalValue = value;
  }
  public resetAggregationFunction() {
    this._aggregationFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFunctionInput() {
    return this._aggregationFunction.internalValue;
  }

  // column_selection - computed: false, optional: true, required: false
  private _columnSelection = new FeatureEngineeringFeatureFunctionColumnSelectionOutputReference(this, "column_selection");
  public get columnSelection() {
    return this._columnSelection;
  }
  public putColumnSelection(value: FeatureEngineeringFeatureFunctionColumnSelection) {
    this._columnSelection.internalValue = value;
  }
  public resetColumnSelection() {
    this._columnSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSelectionInput() {
    return this._columnSelection.internalValue;
  }

  // extra_parameters - computed: false, optional: true, required: false
  private _extraParameters = new FeatureEngineeringFeatureFunctionExtraParametersList(this, "extra_parameters", false);
  public get extraParameters() {
    return this._extraParameters;
  }
  public putExtraParameters(value: FeatureEngineeringFeatureFunctionExtraParameters[] | cdktn.IResolvable) {
    this._extraParameters.internalValue = value;
  }
  public resetExtraParameters() {
    this._extraParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParametersInput() {
    return this._extraParameters.internalValue;
  }

  // function_type - computed: false, optional: true, required: false
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
export interface FeatureEngineeringFeatureLineageContextJobContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#job_id FeatureEngineeringFeature#job_id}
  */
  readonly jobId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#job_run_id FeatureEngineeringFeature#job_run_id}
  */
  readonly jobRunId?: number;
}

export function featureEngineeringFeatureLineageContextJobContextToTerraform(struct?: FeatureEngineeringFeatureLineageContextJobContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_id: cdktn.numberToTerraform(struct!.jobId),
    job_run_id: cdktn.numberToTerraform(struct!.jobRunId),
  }
}


export function featureEngineeringFeatureLineageContextJobContextToHclTerraform(struct?: FeatureEngineeringFeatureLineageContextJobContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureLineageContextJobContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureLineageContextJobContext | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureLineageContextJobContext | cdktn.IResolvable | undefined) {
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

  // job_id - computed: false, optional: true, required: false
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

  // job_run_id - computed: false, optional: true, required: false
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
export interface FeatureEngineeringFeatureLineageContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#job_context FeatureEngineeringFeature#job_context}
  */
  readonly jobContext?: FeatureEngineeringFeatureLineageContextJobContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#notebook_id FeatureEngineeringFeature#notebook_id}
  */
  readonly notebookId?: number;
}

export function featureEngineeringFeatureLineageContextToTerraform(struct?: FeatureEngineeringFeatureLineageContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_context: featureEngineeringFeatureLineageContextJobContextToTerraform(struct!.jobContext),
    notebook_id: cdktn.numberToTerraform(struct!.notebookId),
  }
}


export function featureEngineeringFeatureLineageContextToHclTerraform(struct?: FeatureEngineeringFeatureLineageContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_context: {
      value: featureEngineeringFeatureLineageContextJobContextToHclTerraform(struct!.jobContext),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureLineageContextJobContext",
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

export class FeatureEngineeringFeatureLineageContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureLineageContext | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: FeatureEngineeringFeatureLineageContext | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobContext.internalValue = undefined;
      this._notebookId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobContext.internalValue = value.jobContext;
      this._notebookId = value.notebookId;
    }
  }

  // job_context - computed: false, optional: true, required: false
  private _jobContext = new FeatureEngineeringFeatureLineageContextJobContextOutputReference(this, "job_context");
  public get jobContext() {
    return this._jobContext;
  }
  public putJobContext(value: FeatureEngineeringFeatureLineageContextJobContext) {
    this._jobContext.internalValue = value;
  }
  public resetJobContext() {
    this._jobContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobContextInput() {
    return this._jobContext.internalValue;
  }

  // notebook_id - computed: false, optional: true, required: false
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
export interface FeatureEngineeringFeatureProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#workspace_id FeatureEngineeringFeature#workspace_id}
  */
  readonly workspaceId?: string;
}

export function featureEngineeringFeatureProviderConfigToTerraform(struct?: FeatureEngineeringFeatureProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function featureEngineeringFeatureProviderConfigToHclTerraform(struct?: FeatureEngineeringFeatureProviderConfig | cdktn.IResolvable): any {
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

export class FeatureEngineeringFeatureProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureProviderConfig | cdktn.IResolvable | undefined) {
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
export interface FeatureEngineeringFeatureSourceDeltaTableSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#dataframe_schema FeatureEngineeringFeature#dataframe_schema}
  */
  readonly dataframeSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#entity_columns FeatureEngineeringFeature#entity_columns}
  */
  readonly entityColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}
  */
  readonly timeseriesColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#transformation_sql FeatureEngineeringFeature#transformation_sql}
  */
  readonly transformationSql?: string;
}

export function featureEngineeringFeatureSourceDeltaTableSourceToTerraform(struct?: FeatureEngineeringFeatureSourceDeltaTableSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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


export function featureEngineeringFeatureSourceDeltaTableSourceToHclTerraform(struct?: FeatureEngineeringFeatureSourceDeltaTableSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureSourceDeltaTableSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureSourceDeltaTableSource | cdktn.IResolvable | undefined) {
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

  // dataframe_schema - computed: false, optional: true, required: false
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

  // entity_columns - computed: false, optional: true, required: false
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

  // filter_condition - computed: false, optional: true, required: false
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

  // full_name - computed: false, optional: false, required: true
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

  // timeseries_column - computed: false, optional: true, required: false
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

  // transformation_sql - computed: false, optional: true, required: false
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
export interface FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#variant_expr_path FeatureEngineeringFeature#variant_expr_path}
  */
  readonly variantExprPath: string;
}

export function featureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersToTerraform(struct?: FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variant_expr_path: cdktn.stringToTerraform(struct!.variantExprPath),
  }
}


export function featureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersToHclTerraform(struct?: FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable | undefined) {
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

  // variant_expr_path - computed: false, optional: false, required: true
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

export class FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList extends cdktn.ComplexList {
  public internalValue? : FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[] | cdktn.IResolvable

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
  public get(index: number): FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference {
    return new FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#variant_expr_path FeatureEngineeringFeature#variant_expr_path}
  */
  readonly variantExprPath: string;
}

export function featureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierToTerraform(struct?: FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variant_expr_path: cdktn.stringToTerraform(struct!.variantExprPath),
  }
}


export function featureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierToHclTerraform(struct?: FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable | undefined) {
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

  // variant_expr_path - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureSourceKafkaSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#entity_column_identifiers FeatureEngineeringFeature#entity_column_identifiers}
  */
  readonly entityColumnIdentifiers?: FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#timeseries_column_identifier FeatureEngineeringFeature#timeseries_column_identifier}
  */
  readonly timeseriesColumnIdentifier?: FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier;
}

export function featureEngineeringFeatureSourceKafkaSourceToTerraform(struct?: FeatureEngineeringFeatureSourceKafkaSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_column_identifiers: cdktn.listMapper(featureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersToTerraform, false)(struct!.entityColumnIdentifiers),
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    name: cdktn.stringToTerraform(struct!.name),
    timeseries_column_identifier: featureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierToTerraform(struct!.timeseriesColumnIdentifier),
  }
}


export function featureEngineeringFeatureSourceKafkaSourceToHclTerraform(struct?: FeatureEngineeringFeatureSourceKafkaSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_column_identifiers: {
      value: cdktn.listMapperHcl(featureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersToHclTerraform, false)(struct!.entityColumnIdentifiers),
      isBlock: true,
      type: "list",
      storageClassType: "FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList",
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
      value: featureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierToHclTerraform(struct!.timeseriesColumnIdentifier),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringFeatureSourceKafkaSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureSourceKafkaSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureSourceKafkaSource | cdktn.IResolvable | undefined) {
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

  // entity_column_identifiers - computed: false, optional: true, required: false
  private _entityColumnIdentifiers = new FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList(this, "entity_column_identifiers", false);
  public get entityColumnIdentifiers() {
    return this._entityColumnIdentifiers;
  }
  public putEntityColumnIdentifiers(value: FeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[] | cdktn.IResolvable) {
    this._entityColumnIdentifiers.internalValue = value;
  }
  public resetEntityColumnIdentifiers() {
    this._entityColumnIdentifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityColumnIdentifiersInput() {
    return this._entityColumnIdentifiers.internalValue;
  }

  // filter_condition - computed: false, optional: true, required: false
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

  // timeseries_column_identifier - computed: false, optional: true, required: false
  private _timeseriesColumnIdentifier = new FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference(this, "timeseries_column_identifier");
  public get timeseriesColumnIdentifier() {
    return this._timeseriesColumnIdentifier;
  }
  public putTimeseriesColumnIdentifier(value: FeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier) {
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
export interface FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#data_type FeatureEngineeringFeature#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}
  */
  readonly name: string;
}

export function featureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsToTerraform(struct?: FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function featureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsToHclTerraform(struct?: FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._name = value.name;
    }
  }

  // data_type - computed: false, optional: false, required: true
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
}

export class FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference {
    return new FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FeatureEngineeringFeatureSourceRequestSourceFlatSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#fields FeatureEngineeringFeature#fields}
  */
  readonly fields: FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields[] | cdktn.IResolvable;
}

export function featureEngineeringFeatureSourceRequestSourceFlatSchemaToTerraform(struct?: FeatureEngineeringFeatureSourceRequestSourceFlatSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktn.listMapper(featureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsToTerraform, false)(struct!.fields),
  }
}


export function featureEngineeringFeatureSourceRequestSourceFlatSchemaToHclTerraform(struct?: FeatureEngineeringFeatureSourceRequestSourceFlatSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(featureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureSourceRequestSourceFlatSchema | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureSourceRequestSourceFlatSchema | cdktn.IResolvable | undefined) {
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

  // fields - computed: false, optional: false, required: true
  private _fields = new FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: FeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface FeatureEngineeringFeatureSourceRequestSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#flat_schema FeatureEngineeringFeature#flat_schema}
  */
  readonly flatSchema?: FeatureEngineeringFeatureSourceRequestSourceFlatSchema;
}

export function featureEngineeringFeatureSourceRequestSourceToTerraform(struct?: FeatureEngineeringFeatureSourceRequestSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flat_schema: featureEngineeringFeatureSourceRequestSourceFlatSchemaToTerraform(struct!.flatSchema),
  }
}


export function featureEngineeringFeatureSourceRequestSourceToHclTerraform(struct?: FeatureEngineeringFeatureSourceRequestSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flat_schema: {
      value: featureEngineeringFeatureSourceRequestSourceFlatSchemaToHclTerraform(struct!.flatSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureSourceRequestSourceFlatSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringFeatureSourceRequestSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureSourceRequestSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureSourceRequestSource | cdktn.IResolvable | undefined) {
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

  // flat_schema - computed: false, optional: true, required: false
  private _flatSchema = new FeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference(this, "flat_schema");
  public get flatSchema() {
    return this._flatSchema;
  }
  public putFlatSchema(value: FeatureEngineeringFeatureSourceRequestSourceFlatSchema) {
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
export interface FeatureEngineeringFeatureSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#delta_table_source FeatureEngineeringFeature#delta_table_source}
  */
  readonly deltaTableSource?: FeatureEngineeringFeatureSourceDeltaTableSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#kafka_source FeatureEngineeringFeature#kafka_source}
  */
  readonly kafkaSource?: FeatureEngineeringFeatureSourceKafkaSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#request_source FeatureEngineeringFeature#request_source}
  */
  readonly requestSource?: FeatureEngineeringFeatureSourceRequestSource;
}

export function featureEngineeringFeatureSourceToTerraform(struct?: FeatureEngineeringFeatureSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delta_table_source: featureEngineeringFeatureSourceDeltaTableSourceToTerraform(struct!.deltaTableSource),
    kafka_source: featureEngineeringFeatureSourceKafkaSourceToTerraform(struct!.kafkaSource),
    request_source: featureEngineeringFeatureSourceRequestSourceToTerraform(struct!.requestSource),
  }
}


export function featureEngineeringFeatureSourceToHclTerraform(struct?: FeatureEngineeringFeatureSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delta_table_source: {
      value: featureEngineeringFeatureSourceDeltaTableSourceToHclTerraform(struct!.deltaTableSource),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureSourceDeltaTableSource",
    },
    kafka_source: {
      value: featureEngineeringFeatureSourceKafkaSourceToHclTerraform(struct!.kafkaSource),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureSourceKafkaSource",
    },
    request_source: {
      value: featureEngineeringFeatureSourceRequestSourceToHclTerraform(struct!.requestSource),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureSourceRequestSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringFeatureSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringFeatureSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deltaTableSource.internalValue = undefined;
      this._kafkaSource.internalValue = undefined;
      this._requestSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deltaTableSource.internalValue = value.deltaTableSource;
      this._kafkaSource.internalValue = value.kafkaSource;
      this._requestSource.internalValue = value.requestSource;
    }
  }

  // delta_table_source - computed: false, optional: true, required: false
  private _deltaTableSource = new FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference(this, "delta_table_source");
  public get deltaTableSource() {
    return this._deltaTableSource;
  }
  public putDeltaTableSource(value: FeatureEngineeringFeatureSourceDeltaTableSource) {
    this._deltaTableSource.internalValue = value;
  }
  public resetDeltaTableSource() {
    this._deltaTableSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaTableSourceInput() {
    return this._deltaTableSource.internalValue;
  }

  // kafka_source - computed: false, optional: true, required: false
  private _kafkaSource = new FeatureEngineeringFeatureSourceKafkaSourceOutputReference(this, "kafka_source");
  public get kafkaSource() {
    return this._kafkaSource;
  }
  public putKafkaSource(value: FeatureEngineeringFeatureSourceKafkaSource) {
    this._kafkaSource.internalValue = value;
  }
  public resetKafkaSource() {
    this._kafkaSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSourceInput() {
    return this._kafkaSource.internalValue;
  }

  // request_source - computed: false, optional: true, required: false
  private _requestSource = new FeatureEngineeringFeatureSourceRequestSourceOutputReference(this, "request_source");
  public get requestSource() {
    return this._requestSource;
  }
  public putRequestSource(value: FeatureEngineeringFeatureSourceRequestSource) {
    this._requestSource.internalValue = value;
  }
  public resetRequestSource() {
    this._requestSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSourceInput() {
    return this._requestSource.internalValue;
  }
}
export interface FeatureEngineeringFeatureTimeWindowContinuous {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}
  */
  readonly offset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function featureEngineeringFeatureTimeWindowContinuousToTerraform(struct?: FeatureEngineeringFeatureTimeWindowContinuous | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktn.stringToTerraform(struct!.offset),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function featureEngineeringFeatureTimeWindowContinuousToHclTerraform(struct?: FeatureEngineeringFeatureTimeWindowContinuous | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureTimeWindowContinuousOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureTimeWindowContinuous | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureTimeWindowContinuous | cdktn.IResolvable | undefined) {
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

  // offset - computed: false, optional: true, required: false
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

  // window_duration - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureTimeWindowRolling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#delay FeatureEngineeringFeature#delay}
  */
  readonly delay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function featureEngineeringFeatureTimeWindowRollingToTerraform(struct?: FeatureEngineeringFeatureTimeWindowRolling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktn.stringToTerraform(struct!.delay),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function featureEngineeringFeatureTimeWindowRollingToHclTerraform(struct?: FeatureEngineeringFeatureTimeWindowRolling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureTimeWindowRollingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureTimeWindowRolling | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureTimeWindowRolling | cdktn.IResolvable | undefined) {
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

  // delay - computed: false, optional: true, required: false
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

  // window_duration - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureTimeWindowSliding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#slide_duration FeatureEngineeringFeature#slide_duration}
  */
  readonly slideDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function featureEngineeringFeatureTimeWindowSlidingToTerraform(struct?: FeatureEngineeringFeatureTimeWindowSliding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slide_duration: cdktn.stringToTerraform(struct!.slideDuration),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function featureEngineeringFeatureTimeWindowSlidingToHclTerraform(struct?: FeatureEngineeringFeatureTimeWindowSliding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureTimeWindowSlidingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureTimeWindowSliding | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureTimeWindowSliding | cdktn.IResolvable | undefined) {
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

  // slide_duration - computed: false, optional: false, required: true
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

  // window_duration - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureTimeWindowTumbling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function featureEngineeringFeatureTimeWindowTumblingToTerraform(struct?: FeatureEngineeringFeatureTimeWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function featureEngineeringFeatureTimeWindowTumblingToHclTerraform(struct?: FeatureEngineeringFeatureTimeWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FeatureEngineeringFeatureTimeWindowTumblingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureTimeWindowTumbling | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureTimeWindowTumbling | cdktn.IResolvable | undefined) {
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

  // window_duration - computed: false, optional: false, required: true
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
export interface FeatureEngineeringFeatureTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#continuous FeatureEngineeringFeature#continuous}
  */
  readonly continuous?: FeatureEngineeringFeatureTimeWindowContinuous;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#rolling FeatureEngineeringFeature#rolling}
  */
  readonly rolling?: FeatureEngineeringFeatureTimeWindowRolling;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#sliding FeatureEngineeringFeature#sliding}
  */
  readonly sliding?: FeatureEngineeringFeatureTimeWindowSliding;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#tumbling FeatureEngineeringFeature#tumbling}
  */
  readonly tumbling?: FeatureEngineeringFeatureTimeWindowTumbling;
}

export function featureEngineeringFeatureTimeWindowToTerraform(struct?: FeatureEngineeringFeatureTimeWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuous: featureEngineeringFeatureTimeWindowContinuousToTerraform(struct!.continuous),
    rolling: featureEngineeringFeatureTimeWindowRollingToTerraform(struct!.rolling),
    sliding: featureEngineeringFeatureTimeWindowSlidingToTerraform(struct!.sliding),
    tumbling: featureEngineeringFeatureTimeWindowTumblingToTerraform(struct!.tumbling),
  }
}


export function featureEngineeringFeatureTimeWindowToHclTerraform(struct?: FeatureEngineeringFeatureTimeWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continuous: {
      value: featureEngineeringFeatureTimeWindowContinuousToHclTerraform(struct!.continuous),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureTimeWindowContinuous",
    },
    rolling: {
      value: featureEngineeringFeatureTimeWindowRollingToHclTerraform(struct!.rolling),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureTimeWindowRolling",
    },
    sliding: {
      value: featureEngineeringFeatureTimeWindowSlidingToHclTerraform(struct!.sliding),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureTimeWindowSliding",
    },
    tumbling: {
      value: featureEngineeringFeatureTimeWindowTumblingToHclTerraform(struct!.tumbling),
      isBlock: true,
      type: "struct",
      storageClassType: "FeatureEngineeringFeatureTimeWindowTumbling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringFeatureTimeWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureTimeWindow | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FeatureEngineeringFeatureTimeWindow | cdktn.IResolvable | undefined) {
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

  // continuous - computed: false, optional: true, required: false
  private _continuous = new FeatureEngineeringFeatureTimeWindowContinuousOutputReference(this, "continuous");
  public get continuous() {
    return this._continuous;
  }
  public putContinuous(value: FeatureEngineeringFeatureTimeWindowContinuous) {
    this._continuous.internalValue = value;
  }
  public resetContinuous() {
    this._continuous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous.internalValue;
  }

  // rolling - computed: false, optional: true, required: false
  private _rolling = new FeatureEngineeringFeatureTimeWindowRollingOutputReference(this, "rolling");
  public get rolling() {
    return this._rolling;
  }
  public putRolling(value: FeatureEngineeringFeatureTimeWindowRolling) {
    this._rolling.internalValue = value;
  }
  public resetRolling() {
    this._rolling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingInput() {
    return this._rolling.internalValue;
  }

  // sliding - computed: false, optional: true, required: false
  private _sliding = new FeatureEngineeringFeatureTimeWindowSlidingOutputReference(this, "sliding");
  public get sliding() {
    return this._sliding;
  }
  public putSliding(value: FeatureEngineeringFeatureTimeWindowSliding) {
    this._sliding.internalValue = value;
  }
  public resetSliding() {
    this._sliding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slidingInput() {
    return this._sliding.internalValue;
  }

  // tumbling - computed: false, optional: true, required: false
  private _tumbling = new FeatureEngineeringFeatureTimeWindowTumblingOutputReference(this, "tumbling");
  public get tumbling() {
    return this._tumbling;
  }
  public putTumbling(value: FeatureEngineeringFeatureTimeWindowTumbling) {
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
export interface FeatureEngineeringFeatureTimeseriesColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#name FeatureEngineeringFeature#name}
  */
  readonly name: string;
}

export function featureEngineeringFeatureTimeseriesColumnToTerraform(struct?: FeatureEngineeringFeatureTimeseriesColumn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function featureEngineeringFeatureTimeseriesColumnToHclTerraform(struct?: FeatureEngineeringFeatureTimeseriesColumn | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureEngineeringFeatureTimeseriesColumnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FeatureEngineeringFeatureTimeseriesColumn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureEngineeringFeatureTimeseriesColumn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature databricks_feature_engineering_feature}
*/
export class FeatureEngineeringFeature extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_feature_engineering_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FeatureEngineeringFeature resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureEngineeringFeature to import
  * @param importFromId The id of the existing FeatureEngineeringFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureEngineeringFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_feature_engineering_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/feature_engineering_feature databricks_feature_engineering_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureEngineeringFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: FeatureEngineeringFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_feature_engineering_feature',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.117.0',
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
    this._description = config.description;
    this._entities.internalValue = config.entities;
    this._filterCondition = config.filterCondition;
    this._fullName = config.fullName;
    this._function.internalValue = config.function;
    this._inputs = config.inputs;
    this._lineageContext.internalValue = config.lineageContext;
    this._providerConfig.internalValue = config.providerConfig;
    this._source.internalValue = config.source;
    this._timeWindow.internalValue = config.timeWindow;
    this._timeseriesColumn.internalValue = config.timeseriesColumn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entities - computed: false, optional: true, required: false
  private _entities = new FeatureEngineeringFeatureEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
  }
  public putEntities(value: FeatureEngineeringFeatureEntities[] | cdktn.IResolvable) {
    this._entities.internalValue = value;
  }
  public resetEntities() {
    this._entities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities.internalValue;
  }

  // filter_condition - computed: false, optional: true, required: false
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

  // full_name - computed: false, optional: false, required: true
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

  // function - computed: false, optional: false, required: true
  private _function = new FeatureEngineeringFeatureFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: FeatureEngineeringFeatureFunction) {
    this._function.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  public resetInputs() {
    this._inputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // lineage_context - computed: false, optional: true, required: false
  private _lineageContext = new FeatureEngineeringFeatureLineageContextOutputReference(this, "lineage_context");
  public get lineageContext() {
    return this._lineageContext;
  }
  public putLineageContext(value: FeatureEngineeringFeatureLineageContext) {
    this._lineageContext.internalValue = value;
  }
  public resetLineageContext() {
    this._lineageContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineageContextInput() {
    return this._lineageContext.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new FeatureEngineeringFeatureProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: FeatureEngineeringFeatureProviderConfig) {
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

  // source - computed: false, optional: false, required: true
  private _source = new FeatureEngineeringFeatureSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: FeatureEngineeringFeatureSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow = new FeatureEngineeringFeatureTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: FeatureEngineeringFeatureTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  public resetTimeWindow() {
    this._timeWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }

  // timeseries_column - computed: false, optional: true, required: false
  private _timeseriesColumn = new FeatureEngineeringFeatureTimeseriesColumnOutputReference(this, "timeseries_column");
  public get timeseriesColumn() {
    return this._timeseriesColumn;
  }
  public putTimeseriesColumn(value: FeatureEngineeringFeatureTimeseriesColumn) {
    this._timeseriesColumn.internalValue = value;
  }
  public resetTimeseriesColumn() {
    this._timeseriesColumn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesColumnInput() {
    return this._timeseriesColumn.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      entities: cdktn.listMapper(featureEngineeringFeatureEntitiesToTerraform, false)(this._entities.internalValue),
      filter_condition: cdktn.stringToTerraform(this._filterCondition),
      full_name: cdktn.stringToTerraform(this._fullName),
      function: featureEngineeringFeatureFunctionToTerraform(this._function.internalValue),
      inputs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._inputs),
      lineage_context: featureEngineeringFeatureLineageContextToTerraform(this._lineageContext.internalValue),
      provider_config: featureEngineeringFeatureProviderConfigToTerraform(this._providerConfig.internalValue),
      source: featureEngineeringFeatureSourceToTerraform(this._source.internalValue),
      time_window: featureEngineeringFeatureTimeWindowToTerraform(this._timeWindow.internalValue),
      timeseries_column: featureEngineeringFeatureTimeseriesColumnToTerraform(this._timeseriesColumn.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entities: {
        value: cdktn.listMapperHcl(featureEngineeringFeatureEntitiesToHclTerraform, false)(this._entities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FeatureEngineeringFeatureEntitiesList",
      },
      filter_condition: {
        value: cdktn.stringToHclTerraform(this._filterCondition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_name: {
        value: cdktn.stringToHclTerraform(this._fullName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function: {
        value: featureEngineeringFeatureFunctionToHclTerraform(this._function.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringFeatureFunction",
      },
      inputs: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._inputs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lineage_context: {
        value: featureEngineeringFeatureLineageContextToHclTerraform(this._lineageContext.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringFeatureLineageContext",
      },
      provider_config: {
        value: featureEngineeringFeatureProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringFeatureProviderConfig",
      },
      source: {
        value: featureEngineeringFeatureSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringFeatureSource",
      },
      time_window: {
        value: featureEngineeringFeatureTimeWindowToHclTerraform(this._timeWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringFeatureTimeWindow",
      },
      timeseries_column: {
        value: featureEngineeringFeatureTimeseriesColumnToHclTerraform(this._timeseriesColumn.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FeatureEngineeringFeatureTimeseriesColumn",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
