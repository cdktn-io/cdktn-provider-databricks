/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksFeatureEngineeringFeatureConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#full_name DataDatabricksFeatureEngineeringFeature#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#provider_config DataDatabricksFeatureEngineeringFeature#provider_config}
  */
  readonly providerConfig?: DataDatabricksFeatureEngineeringFeatureProviderConfig;
}
export interface DataDatabricksFeatureEngineeringFeatureEntities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}
  */
  readonly name: string;
}

export function dataDatabricksFeatureEngineeringFeatureEntitiesToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureEntities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksFeatureEngineeringFeatureEntitiesToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureEntities): any {
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

export class DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureEntities | undefined) {
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

export class DataDatabricksFeatureEngineeringFeatureEntitiesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeatureEntities[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference {
    return new DataDatabricksFeatureEngineeringFeatureEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#relative_sd DataDatabricksFeatureEngineeringFeature#relative_sd}
  */
  readonly relativeSd?: number;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
    relative_sd: cdktn.numberToTerraform(struct!.relativeSd),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#accuracy DataDatabricksFeatureEngineeringFeature#accuracy}
  */
  readonly accuracy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#percentile DataDatabricksFeatureEngineeringFeature#percentile}
  */
  readonly percentile: number;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable): any {
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


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#offset DataDatabricksFeatureEngineeringFeature#offset}
  */
  readonly offset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktn.stringToTerraform(struct!.offset),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#slide_duration DataDatabricksFeatureEngineeringFeature#slide_duration}
  */
  readonly slideDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slide_duration: cdktn.stringToTerraform(struct!.slideDuration),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#continuous DataDatabricksFeatureEngineeringFeature#continuous}
  */
  readonly continuous?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#sliding DataDatabricksFeatureEngineeringFeature#sliding}
  */
  readonly sliding?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#tumbling DataDatabricksFeatureEngineeringFeature#tumbling}
  */
  readonly tumbling?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuous: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousToTerraform(struct!.continuous),
    sliding: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingToTerraform(struct!.sliding),
    tumbling: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingToTerraform(struct!.tumbling),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continuous: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousToHclTerraform(struct!.continuous),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous",
    },
    sliding: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingToHclTerraform(struct!.sliding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding",
    },
    tumbling: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingToHclTerraform(struct!.tumbling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuous = this._continuous?.internalValue;
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._continuous.internalValue = undefined;
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
      this._sliding.internalValue = value.sliding;
      this._tumbling.internalValue = value.tumbling;
    }
  }

  // continuous - computed: true, optional: true, required: false
  private _continuous = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuousOutputReference(this, "continuous");
  public get continuous() {
    return this._continuous;
  }
  public putContinuous(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowContinuous) {
    this._continuous.internalValue = value;
  }
  public resetContinuous() {
    this._continuous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous.internalValue;
  }

  // sliding - computed: true, optional: true, required: false
  private _sliding = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSlidingOutputReference(this, "sliding");
  public get sliding() {
    return this._sliding;
  }
  public putSliding(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowSliding) {
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
  private _tumbling = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumblingOutputReference(this, "tumbling");
  public get tumbling() {
    return this._tumbling;
  }
  public putTumbling(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowTumbling) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#input DataDatabricksFeatureEngineeringFeature#input}
  */
  readonly input: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktn.stringToTerraform(struct!.input),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#approx_count_distinct DataDatabricksFeatureEngineeringFeature#approx_count_distinct}
  */
  readonly approxCountDistinct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#approx_percentile DataDatabricksFeatureEngineeringFeature#approx_percentile}
  */
  readonly approxPercentile?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#avg DataDatabricksFeatureEngineeringFeature#avg}
  */
  readonly avg?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#count_function DataDatabricksFeatureEngineeringFeature#count_function}
  */
  readonly countFunction?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#first DataDatabricksFeatureEngineeringFeature#first}
  */
  readonly first?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#last DataDatabricksFeatureEngineeringFeature#last}
  */
  readonly last?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#max DataDatabricksFeatureEngineeringFeature#max}
  */
  readonly max?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#min DataDatabricksFeatureEngineeringFeature#min}
  */
  readonly min?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#stddev_pop DataDatabricksFeatureEngineeringFeature#stddev_pop}
  */
  readonly stddevPop?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#stddev_samp DataDatabricksFeatureEngineeringFeature#stddev_samp}
  */
  readonly stddevSamp?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#sum DataDatabricksFeatureEngineeringFeature#sum}
  */
  readonly sum?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#time_window DataDatabricksFeatureEngineeringFeature#time_window}
  */
  readonly timeWindow?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#var_pop DataDatabricksFeatureEngineeringFeature#var_pop}
  */
  readonly varPop?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#var_samp DataDatabricksFeatureEngineeringFeature#var_samp}
  */
  readonly varSamp?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approx_count_distinct: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctToTerraform(struct!.approxCountDistinct),
    approx_percentile: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileToTerraform(struct!.approxPercentile),
    avg: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgToTerraform(struct!.avg),
    count_function: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionToTerraform(struct!.countFunction),
    first: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstToTerraform(struct!.first),
    last: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastToTerraform(struct!.last),
    max: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxToTerraform(struct!.max),
    min: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinToTerraform(struct!.min),
    stddev_pop: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopToTerraform(struct!.stddevPop),
    stddev_samp: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampToTerraform(struct!.stddevSamp),
    sum: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumToTerraform(struct!.sum),
    time_window: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowToTerraform(struct!.timeWindow),
    var_pop: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopToTerraform(struct!.varPop),
    var_samp: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampToTerraform(struct!.varSamp),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approx_count_distinct: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctToHclTerraform(struct!.approxCountDistinct),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct",
    },
    approx_percentile: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileToHclTerraform(struct!.approxPercentile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile",
    },
    avg: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgToHclTerraform(struct!.avg),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg",
    },
    count_function: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionToHclTerraform(struct!.countFunction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction",
    },
    first: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstToHclTerraform(struct!.first),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst",
    },
    last: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastToHclTerraform(struct!.last),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast",
    },
    max: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxToHclTerraform(struct!.max),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax",
    },
    min: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinToHclTerraform(struct!.min),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin",
    },
    stddev_pop: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopToHclTerraform(struct!.stddevPop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop",
    },
    stddev_samp: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampToHclTerraform(struct!.stddevSamp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp",
    },
    sum: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumToHclTerraform(struct!.sum),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum",
    },
    time_window: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowToHclTerraform(struct!.timeWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow",
    },
    var_pop: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopToHclTerraform(struct!.varPop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop",
    },
    var_samp: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampToHclTerraform(struct!.varSamp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction | cdktn.IResolvable | undefined) {
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
  private _approxCountDistinct = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinctOutputReference(this, "approx_count_distinct");
  public get approxCountDistinct() {
    return this._approxCountDistinct;
  }
  public putApproxCountDistinct(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxCountDistinct) {
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
  private _approxPercentile = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentileOutputReference(this, "approx_percentile");
  public get approxPercentile() {
    return this._approxPercentile;
  }
  public putApproxPercentile(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionApproxPercentile) {
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
  private _avg = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvgOutputReference(this, "avg");
  public get avg() {
    return this._avg;
  }
  public putAvg(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionAvg) {
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
  private _countFunction = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunctionOutputReference(this, "count_function");
  public get countFunction() {
    return this._countFunction;
  }
  public putCountFunction(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionCountFunction) {
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
  private _first = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirstOutputReference(this, "first");
  public get first() {
    return this._first;
  }
  public putFirst(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionFirst) {
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
  private _last = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLastOutputReference(this, "last");
  public get last() {
    return this._last;
  }
  public putLast(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionLast) {
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
  private _max = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }
  public putMax(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMax) {
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
  private _min = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMinOutputReference(this, "min");
  public get min() {
    return this._min;
  }
  public putMin(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionMin) {
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
  private _stddevPop = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPopOutputReference(this, "stddev_pop");
  public get stddevPop() {
    return this._stddevPop;
  }
  public putStddevPop(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevPop) {
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
  private _stddevSamp = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSampOutputReference(this, "stddev_samp");
  public get stddevSamp() {
    return this._stddevSamp;
  }
  public putStddevSamp(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionStddevSamp) {
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
  private _sum = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSumOutputReference(this, "sum");
  public get sum() {
    return this._sum;
  }
  public putSum(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionSum) {
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
  private _timeWindow = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionTimeWindow) {
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
  private _varPop = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPopOutputReference(this, "var_pop");
  public get varPop() {
    return this._varPop;
  }
  public putVarPop(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarPop) {
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
  private _varSamp = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSampOutputReference(this, "var_samp");
  public get varSamp() {
    return this._varSamp;
  }
  public putVarSamp(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionVarSamp) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#column DataDatabricksFeatureEngineeringFeature#column}
  */
  readonly column: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#key DataDatabricksFeatureEngineeringFeature#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#value DataDatabricksFeatureEngineeringFeature#value}
  */
  readonly value: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionExtraParametersToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionExtraParametersToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters | cdktn.IResolvable | undefined) {
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

export class DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference {
    return new DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringFeatureFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#aggregation_function DataDatabricksFeatureEngineeringFeature#aggregation_function}
  */
  readonly aggregationFunction?: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#column_selection DataDatabricksFeatureEngineeringFeature#column_selection}
  */
  readonly columnSelection?: DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#extra_parameters DataDatabricksFeatureEngineeringFeature#extra_parameters}
  */
  readonly extraParameters?: DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#function_type DataDatabricksFeatureEngineeringFeature#function_type}
  */
  readonly functionType?: string;
}

export function dataDatabricksFeatureEngineeringFeatureFunctionToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_function: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionToTerraform(struct!.aggregationFunction),
    column_selection: dataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionToTerraform(struct!.columnSelection),
    extra_parameters: cdktn.listMapper(dataDatabricksFeatureEngineeringFeatureFunctionExtraParametersToTerraform, false)(struct!.extraParameters),
    function_type: cdktn.stringToTerraform(struct!.functionType),
  }
}


export function dataDatabricksFeatureEngineeringFeatureFunctionToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_function: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionToHclTerraform(struct!.aggregationFunction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction",
    },
    column_selection: {
      value: dataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionToHclTerraform(struct!.columnSelection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection",
    },
    extra_parameters: {
      value: cdktn.listMapperHcl(dataDatabricksFeatureEngineeringFeatureFunctionExtraParametersToHclTerraform, false)(struct!.extraParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList",
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

export class DataDatabricksFeatureEngineeringFeatureFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureFunction | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureFunction | undefined) {
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
  private _aggregationFunction = new DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunctionOutputReference(this, "aggregation_function");
  public get aggregationFunction() {
    return this._aggregationFunction;
  }
  public putAggregationFunction(value: DataDatabricksFeatureEngineeringFeatureFunctionAggregationFunction) {
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
  private _columnSelection = new DataDatabricksFeatureEngineeringFeatureFunctionColumnSelectionOutputReference(this, "column_selection");
  public get columnSelection() {
    return this._columnSelection;
  }
  public putColumnSelection(value: DataDatabricksFeatureEngineeringFeatureFunctionColumnSelection) {
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
  private _extraParameters = new DataDatabricksFeatureEngineeringFeatureFunctionExtraParametersList(this, "extra_parameters", false);
  public get extraParameters() {
    return this._extraParameters;
  }
  public putExtraParameters(value: DataDatabricksFeatureEngineeringFeatureFunctionExtraParameters[] | cdktn.IResolvable) {
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
export interface DataDatabricksFeatureEngineeringFeatureLineageContextJobContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#job_id DataDatabricksFeatureEngineeringFeature#job_id}
  */
  readonly jobId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#job_run_id DataDatabricksFeatureEngineeringFeature#job_run_id}
  */
  readonly jobRunId?: number;
}

export function dataDatabricksFeatureEngineeringFeatureLineageContextJobContextToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureLineageContextJobContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_id: cdktn.numberToTerraform(struct!.jobId),
    job_run_id: cdktn.numberToTerraform(struct!.jobRunId),
  }
}


export function dataDatabricksFeatureEngineeringFeatureLineageContextJobContextToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureLineageContextJobContext | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureLineageContextJobContext | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureLineageContextJobContext | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureLineageContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#job_context DataDatabricksFeatureEngineeringFeature#job_context}
  */
  readonly jobContext?: DataDatabricksFeatureEngineeringFeatureLineageContextJobContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#notebook_id DataDatabricksFeatureEngineeringFeature#notebook_id}
  */
  readonly notebookId?: number;
}

export function dataDatabricksFeatureEngineeringFeatureLineageContextToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureLineageContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_context: dataDatabricksFeatureEngineeringFeatureLineageContextJobContextToTerraform(struct!.jobContext),
    notebook_id: cdktn.numberToTerraform(struct!.notebookId),
  }
}


export function dataDatabricksFeatureEngineeringFeatureLineageContextToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureLineageContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_context: {
      value: dataDatabricksFeatureEngineeringFeatureLineageContextJobContextToHclTerraform(struct!.jobContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureLineageContextJobContext",
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

export class DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureLineageContext | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureLineageContext | undefined) {
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
  private _jobContext = new DataDatabricksFeatureEngineeringFeatureLineageContextJobContextOutputReference(this, "job_context");
  public get jobContext() {
    return this._jobContext;
  }
  public putJobContext(value: DataDatabricksFeatureEngineeringFeatureLineageContextJobContext) {
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
export interface DataDatabricksFeatureEngineeringFeatureProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#workspace_id DataDatabricksFeatureEngineeringFeature#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksFeatureEngineeringFeatureProviderConfigToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksFeatureEngineeringFeatureProviderConfigToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#dataframe_schema DataDatabricksFeatureEngineeringFeature#dataframe_schema}
  */
  readonly dataframeSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#entity_columns DataDatabricksFeatureEngineeringFeature#entity_columns}
  */
  readonly entityColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#filter_condition DataDatabricksFeatureEngineeringFeature#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#full_name DataDatabricksFeatureEngineeringFeature#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#timeseries_column DataDatabricksFeatureEngineeringFeature#timeseries_column}
  */
  readonly timeseriesColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#transformation_sql DataDatabricksFeatureEngineeringFeature#transformation_sql}
  */
  readonly transformationSql?: string;
}

export function dataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource | cdktn.IResolvable): any {
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


export function dataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#variant_expr_path DataDatabricksFeatureEngineeringFeature#variant_expr_path}
  */
  readonly variantExprPath: string;
}

export function dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variant_expr_path: cdktn.stringToTerraform(struct!.variantExprPath),
  }
}


export function dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers | cdktn.IResolvable | undefined) {
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

export class DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference {
    return new DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#variant_expr_path DataDatabricksFeatureEngineeringFeature#variant_expr_path}
  */
  readonly variantExprPath: string;
}

export function dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variant_expr_path: cdktn.stringToTerraform(struct!.variantExprPath),
  }
}


export function dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureSourceKafkaSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#entity_column_identifiers DataDatabricksFeatureEngineeringFeature#entity_column_identifiers}
  */
  readonly entityColumnIdentifiers?: DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#filter_condition DataDatabricksFeatureEngineeringFeature#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#timeseries_column_identifier DataDatabricksFeatureEngineeringFeature#timeseries_column_identifier}
  */
  readonly timeseriesColumnIdentifier?: DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier;
}

export function dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceKafkaSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_column_identifiers: cdktn.listMapper(dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersToTerraform, false)(struct!.entityColumnIdentifiers),
    filter_condition: cdktn.stringToTerraform(struct!.filterCondition),
    name: cdktn.stringToTerraform(struct!.name),
    timeseries_column_identifier: dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierToTerraform(struct!.timeseriesColumnIdentifier),
  }
}


export function dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceKafkaSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_column_identifiers: {
      value: cdktn.listMapperHcl(dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersToHclTerraform, false)(struct!.entityColumnIdentifiers),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList",
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
      value: dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierToHclTerraform(struct!.timeseriesColumnIdentifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureSourceKafkaSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureSourceKafkaSource | cdktn.IResolvable | undefined) {
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
  private _entityColumnIdentifiers = new DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiersList(this, "entity_column_identifiers", false);
  public get entityColumnIdentifiers() {
    return this._entityColumnIdentifiers;
  }
  public putEntityColumnIdentifiers(value: DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceEntityColumnIdentifiers[] | cdktn.IResolvable) {
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
  private _timeseriesColumnIdentifier = new DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifierOutputReference(this, "timeseries_column_identifier");
  public get timeseriesColumnIdentifier() {
    return this._timeseriesColumnIdentifier;
  }
  public putTimeseriesColumnIdentifier(value: DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceTimeseriesColumnIdentifier) {
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
export interface DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#data_type DataDatabricksFeatureEngineeringFeature#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}
  */
  readonly name: string;
}

export function dataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktn.stringToTerraform(struct!.dataType),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields): any {
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

export class DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields | undefined) {
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

export class DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference {
    return new DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#fields DataDatabricksFeatureEngineeringFeature#fields}
  */
  readonly fields: DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields[] | cdktn.IResolvable;
}

export function dataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktn.listMapper(dataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(dataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema | cdktn.IResolvable | undefined) {
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
  private _fields = new DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaFields[] | cdktn.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface DataDatabricksFeatureEngineeringFeatureSourceRequestSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#flat_schema DataDatabricksFeatureEngineeringFeature#flat_schema}
  */
  readonly flatSchema?: DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema;
}

export function dataDatabricksFeatureEngineeringFeatureSourceRequestSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceRequestSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flat_schema: dataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaToTerraform(struct!.flatSchema),
  }
}


export function dataDatabricksFeatureEngineeringFeatureSourceRequestSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSourceRequestSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flat_schema: {
      value: dataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaToHclTerraform(struct!.flatSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureSourceRequestSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureSourceRequestSource | cdktn.IResolvable | undefined) {
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
  private _flatSchema = new DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchemaOutputReference(this, "flat_schema");
  public get flatSchema() {
    return this._flatSchema;
  }
  public putFlatSchema(value: DataDatabricksFeatureEngineeringFeatureSourceRequestSourceFlatSchema) {
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
export interface DataDatabricksFeatureEngineeringFeatureSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#delta_table_source DataDatabricksFeatureEngineeringFeature#delta_table_source}
  */
  readonly deltaTableSource?: DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#kafka_source DataDatabricksFeatureEngineeringFeature#kafka_source}
  */
  readonly kafkaSource?: DataDatabricksFeatureEngineeringFeatureSourceKafkaSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#request_source DataDatabricksFeatureEngineeringFeature#request_source}
  */
  readonly requestSource?: DataDatabricksFeatureEngineeringFeatureSourceRequestSource;
}

export function dataDatabricksFeatureEngineeringFeatureSourceToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delta_table_source: dataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceToTerraform(struct!.deltaTableSource),
    kafka_source: dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceToTerraform(struct!.kafkaSource),
    request_source: dataDatabricksFeatureEngineeringFeatureSourceRequestSourceToTerraform(struct!.requestSource),
  }
}


export function dataDatabricksFeatureEngineeringFeatureSourceToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delta_table_source: {
      value: dataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceToHclTerraform(struct!.deltaTableSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource",
    },
    kafka_source: {
      value: dataDatabricksFeatureEngineeringFeatureSourceKafkaSourceToHclTerraform(struct!.kafkaSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureSourceKafkaSource",
    },
    request_source: {
      value: dataDatabricksFeatureEngineeringFeatureSourceRequestSourceToHclTerraform(struct!.requestSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureSourceRequestSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeatureSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureSource | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deltaTableSource.internalValue = undefined;
      this._kafkaSource.internalValue = undefined;
      this._requestSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deltaTableSource.internalValue = value.deltaTableSource;
      this._kafkaSource.internalValue = value.kafkaSource;
      this._requestSource.internalValue = value.requestSource;
    }
  }

  // delta_table_source - computed: true, optional: true, required: false
  private _deltaTableSource = new DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSourceOutputReference(this, "delta_table_source");
  public get deltaTableSource() {
    return this._deltaTableSource;
  }
  public putDeltaTableSource(value: DataDatabricksFeatureEngineeringFeatureSourceDeltaTableSource) {
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
  private _kafkaSource = new DataDatabricksFeatureEngineeringFeatureSourceKafkaSourceOutputReference(this, "kafka_source");
  public get kafkaSource() {
    return this._kafkaSource;
  }
  public putKafkaSource(value: DataDatabricksFeatureEngineeringFeatureSourceKafkaSource) {
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
  private _requestSource = new DataDatabricksFeatureEngineeringFeatureSourceRequestSourceOutputReference(this, "request_source");
  public get requestSource() {
    return this._requestSource;
  }
  public putRequestSource(value: DataDatabricksFeatureEngineeringFeatureSourceRequestSource) {
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
export interface DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#offset DataDatabricksFeatureEngineeringFeature#offset}
  */
  readonly offset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeatureTimeWindowContinuousToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktn.stringToTerraform(struct!.offset),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeatureTimeWindowContinuousToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureTimeWindowSliding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#slide_duration DataDatabricksFeatureEngineeringFeature#slide_duration}
  */
  readonly slideDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeatureTimeWindowSlidingToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureTimeWindowSliding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slide_duration: cdktn.stringToTerraform(struct!.slideDuration),
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeatureTimeWindowSlidingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureTimeWindowSliding | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureTimeWindowSliding | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureTimeWindowSliding | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#window_duration DataDatabricksFeatureEngineeringFeature#window_duration}
  */
  readonly windowDuration: string;
}

export function dataDatabricksFeatureEngineeringFeatureTimeWindowTumblingToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_duration: cdktn.stringToTerraform(struct!.windowDuration),
  }
}


export function dataDatabricksFeatureEngineeringFeatureTimeWindowTumblingToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling | cdktn.IResolvable): any {
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

export class DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksFeatureEngineeringFeatureTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#continuous DataDatabricksFeatureEngineeringFeature#continuous}
  */
  readonly continuous?: DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#sliding DataDatabricksFeatureEngineeringFeature#sliding}
  */
  readonly sliding?: DataDatabricksFeatureEngineeringFeatureTimeWindowSliding;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#tumbling DataDatabricksFeatureEngineeringFeature#tumbling}
  */
  readonly tumbling?: DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling;
}

export function dataDatabricksFeatureEngineeringFeatureTimeWindowToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continuous: dataDatabricksFeatureEngineeringFeatureTimeWindowContinuousToTerraform(struct!.continuous),
    sliding: dataDatabricksFeatureEngineeringFeatureTimeWindowSlidingToTerraform(struct!.sliding),
    tumbling: dataDatabricksFeatureEngineeringFeatureTimeWindowTumblingToTerraform(struct!.tumbling),
  }
}


export function dataDatabricksFeatureEngineeringFeatureTimeWindowToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureTimeWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continuous: {
      value: dataDatabricksFeatureEngineeringFeatureTimeWindowContinuousToHclTerraform(struct!.continuous),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous",
    },
    sliding: {
      value: dataDatabricksFeatureEngineeringFeatureTimeWindowSlidingToHclTerraform(struct!.sliding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureTimeWindowSliding",
    },
    tumbling: {
      value: dataDatabricksFeatureEngineeringFeatureTimeWindowTumblingToHclTerraform(struct!.tumbling),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continuous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuous = this._continuous?.internalValue;
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

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continuous.internalValue = undefined;
      this._sliding.internalValue = undefined;
      this._tumbling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continuous.internalValue = value.continuous;
      this._sliding.internalValue = value.sliding;
      this._tumbling.internalValue = value.tumbling;
    }
  }

  // continuous - computed: true, optional: true, required: false
  private _continuous = new DataDatabricksFeatureEngineeringFeatureTimeWindowContinuousOutputReference(this, "continuous");
  public get continuous() {
    return this._continuous;
  }
  public putContinuous(value: DataDatabricksFeatureEngineeringFeatureTimeWindowContinuous) {
    this._continuous.internalValue = value;
  }
  public resetContinuous() {
    this._continuous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousInput() {
    return this._continuous.internalValue;
  }

  // sliding - computed: true, optional: true, required: false
  private _sliding = new DataDatabricksFeatureEngineeringFeatureTimeWindowSlidingOutputReference(this, "sliding");
  public get sliding() {
    return this._sliding;
  }
  public putSliding(value: DataDatabricksFeatureEngineeringFeatureTimeWindowSliding) {
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
  private _tumbling = new DataDatabricksFeatureEngineeringFeatureTimeWindowTumblingOutputReference(this, "tumbling");
  public get tumbling() {
    return this._tumbling;
  }
  public putTumbling(value: DataDatabricksFeatureEngineeringFeatureTimeWindowTumbling) {
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
export interface DataDatabricksFeatureEngineeringFeatureTimeseriesColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#name DataDatabricksFeatureEngineeringFeature#name}
  */
  readonly name: string;
}

export function dataDatabricksFeatureEngineeringFeatureTimeseriesColumnToTerraform(struct?: DataDatabricksFeatureEngineeringFeatureTimeseriesColumn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksFeatureEngineeringFeatureTimeseriesColumnToHclTerraform(struct?: DataDatabricksFeatureEngineeringFeatureTimeseriesColumn): any {
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

export class DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksFeatureEngineeringFeatureTimeseriesColumn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksFeatureEngineeringFeatureTimeseriesColumn | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature databricks_feature_engineering_feature}
*/
export class DataDatabricksFeatureEngineeringFeature extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_feature_engineering_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksFeatureEngineeringFeature resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksFeatureEngineeringFeature to import
  * @param importFromId The id of the existing DataDatabricksFeatureEngineeringFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksFeatureEngineeringFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_feature_engineering_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/feature_engineering_feature databricks_feature_engineering_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksFeatureEngineeringFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksFeatureEngineeringFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_feature_engineering_feature',
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
    this._fullName = config.fullName;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entities - computed: true, optional: false, required: false
  private _entities = new DataDatabricksFeatureEngineeringFeatureEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
  }

  // filter_condition - computed: true, optional: false, required: false
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
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

  // function - computed: true, optional: false, required: false
  private _function = new DataDatabricksFeatureEngineeringFeatureFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }

  // inputs - computed: true, optional: false, required: false
  public get inputs() {
    return this.getListAttribute('inputs');
  }

  // lineage_context - computed: true, optional: false, required: false
  private _lineageContext = new DataDatabricksFeatureEngineeringFeatureLineageContextOutputReference(this, "lineage_context");
  public get lineageContext() {
    return this._lineageContext;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksFeatureEngineeringFeatureProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksFeatureEngineeringFeatureProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataDatabricksFeatureEngineeringFeatureSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // time_window - computed: true, optional: false, required: false
  private _timeWindow = new DataDatabricksFeatureEngineeringFeatureTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }

  // timeseries_column - computed: true, optional: false, required: false
  private _timeseriesColumn = new DataDatabricksFeatureEngineeringFeatureTimeseriesColumnOutputReference(this, "timeseries_column");
  public get timeseriesColumn() {
    return this._timeseriesColumn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_name: cdktn.stringToTerraform(this._fullName),
      provider_config: dataDatabricksFeatureEngineeringFeatureProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      full_name: {
        value: cdktn.stringToHclTerraform(this._fullName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksFeatureEngineeringFeatureProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksFeatureEngineeringFeatureProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
