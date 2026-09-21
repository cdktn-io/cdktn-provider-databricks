/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksPolicyInfoConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}
  */
  readonly onSecurableFullname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}
  */
  readonly onSecurableType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#provider_config DataDatabricksPolicyInfo#provider_config}
  */
  readonly providerConfig?: DataDatabricksPolicyInfoProviderConfig;
}
export interface DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}
  */
  readonly columnAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}
  */
  readonly tagKey: string;
}

export function dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueToTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_alias: cdktn.stringToTerraform(struct!.columnAlias),
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
  }
}


export function dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueToHclTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_alias: {
      value: cdktn.stringToHclTerraform(struct!.columnAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnAlias = this._columnAlias;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnAlias = undefined;
      this._tagKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnAlias = value.columnAlias;
      this._tagKey = value.tagKey;
    }
  }

  // column_alias - computed: true, optional: false, required: true
  private _columnAlias?: string; 
  public get columnAlias() {
    return this.getStringAttribute('column_alias');
  }
  public set columnAlias(value: string) {
    this._columnAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnAliasInput() {
    return this._columnAlias;
  }

  // tag_key - computed: true, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }
}
export interface DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}
  */
  readonly tagKey: string;
}

export function dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueToTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
  }
}


export function dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueToHclTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
    }
  }

  // tag_key - computed: true, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }
}
export interface DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}
  */
  readonly columnTagValue?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}
  */
  readonly tagValue?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue;
}

export function dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionToTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_tag_value: dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueToTerraform(struct!.columnTagValue),
    tag_value: dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueToTerraform(struct!.tagValue),
  }
}


export function dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionToHclTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_tag_value: {
      value: dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueToHclTerraform(struct!.columnTagValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue",
    },
    tag_value: {
      value: dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueToHclTerraform(struct!.tagValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnTagValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnTagValue = this._columnTagValue?.internalValue;
    }
    if (this._tagValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnTagValue.internalValue = undefined;
      this._tagValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnTagValue.internalValue = value.columnTagValue;
      this._tagValue.internalValue = value.tagValue;
    }
  }

  // column_tag_value - computed: true, optional: true, required: false
  private _columnTagValue = new DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(this, "column_tag_value");
  public get columnTagValue() {
    return this._columnTagValue;
  }
  public putColumnTagValue(value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue) {
    this._columnTagValue.internalValue = value;
  }
  public resetColumnTagValue() {
    this._columnTagValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTagValueInput() {
    return this._columnTagValue.internalValue;
  }

  // tag_value - computed: true, optional: true, required: false
  private _tagValue = new DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(this, "tag_value");
  public get tagValue() {
    return this._tagValue;
  }
  public putTagValue(value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue) {
    this._tagValue.internalValue = value;
  }
  public resetTagValue() {
    this._tagValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue.internalValue;
  }
}
export interface DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}
  */
  readonly tagIntrospection?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection;
}

export function dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionToTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tag_introspection: dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionToTerraform(struct!.tagIntrospection),
  }
}


export function dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionToHclTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tag_introspection: {
      value: dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionToHclTerraform(struct!.tagIntrospection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagIntrospection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIntrospection = this._tagIntrospection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagIntrospection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagIntrospection.internalValue = value.tagIntrospection;
    }
  }

  // tag_introspection - computed: true, optional: true, required: false
  private _tagIntrospection = new DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference(this, "tag_introspection");
  public get tagIntrospection() {
    return this._tagIntrospection;
  }
  public putTagIntrospection(value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection) {
    this._tagIntrospection.internalValue = value;
  }
  public resetTagIntrospection() {
    this._tagIntrospection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIntrospectionInput() {
    return this._tagIntrospection.internalValue;
  }
}
export interface DataDatabricksPolicyInfoColumnMaskUsing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}
  */
  readonly constant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}
  */
  readonly functionArgExpression?: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression;
}

export function dataDatabricksPolicyInfoColumnMaskUsingToTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    constant: cdktn.stringToTerraform(struct!.constant),
    function_arg_expression: dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionToTerraform(struct!.functionArgExpression),
  }
}


export function dataDatabricksPolicyInfoColumnMaskUsingToHclTerraform(struct?: DataDatabricksPolicyInfoColumnMaskUsing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constant: {
      value: cdktn.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arg_expression: {
      value: dataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionToHclTerraform(struct!.functionArgExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoColumnMaskUsingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfoColumnMaskUsing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._functionArgExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArgExpression = this._functionArgExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoColumnMaskUsing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._constant = undefined;
      this._functionArgExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._constant = value.constant;
      this._functionArgExpression.internalValue = value.functionArgExpression;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // constant - computed: true, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // function_arg_expression - computed: true, optional: true, required: false
  private _functionArgExpression = new DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference(this, "function_arg_expression");
  public get functionArgExpression() {
    return this._functionArgExpression;
  }
  public putFunctionArgExpression(value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression) {
    this._functionArgExpression.internalValue = value;
  }
  public resetFunctionArgExpression() {
    this._functionArgExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArgExpressionInput() {
    return this._functionArgExpression.internalValue;
  }
}

export class DataDatabricksPolicyInfoColumnMaskUsingList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPolicyInfoColumnMaskUsing[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfoColumnMaskUsingOutputReference {
    return new DataDatabricksPolicyInfoColumnMaskUsingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfoColumnMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}
  */
  readonly onColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}
  */
  readonly using?: DataDatabricksPolicyInfoColumnMaskUsing[] | cdktn.IResolvable;
}

export function dataDatabricksPolicyInfoColumnMaskToTerraform(struct?: DataDatabricksPolicyInfoColumnMask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_name: cdktn.stringToTerraform(struct!.functionName),
    on_column: cdktn.stringToTerraform(struct!.onColumn),
    using: cdktn.listMapper(dataDatabricksPolicyInfoColumnMaskUsingToTerraform, false)(struct!.using),
  }
}


export function dataDatabricksPolicyInfoColumnMaskToHclTerraform(struct?: DataDatabricksPolicyInfoColumnMask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    function_name: {
      value: cdktn.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_column: {
      value: cdktn.stringToHclTerraform(struct!.onColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using: {
      value: cdktn.listMapperHcl(dataDatabricksPolicyInfoColumnMaskUsingToHclTerraform, false)(struct!.using),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPolicyInfoColumnMaskUsingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoColumnMaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoColumnMask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._onColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.onColumn = this._onColumn;
    }
    if (this._using?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.using = this._using?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoColumnMask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionName = undefined;
      this._onColumn = undefined;
      this._using.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionName = value.functionName;
      this._onColumn = value.onColumn;
      this._using.internalValue = value.using;
    }
  }

  // function_name - computed: true, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // on_column - computed: true, optional: false, required: true
  private _onColumn?: string; 
  public get onColumn() {
    return this.getStringAttribute('on_column');
  }
  public set onColumn(value: string) {
    this._onColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onColumnInput() {
    return this._onColumn;
  }

  // using - computed: true, optional: true, required: false
  private _using = new DataDatabricksPolicyInfoColumnMaskUsingList(this, "using", false);
  public get using() {
    return this._using;
  }
  public putUsing(value: DataDatabricksPolicyInfoColumnMaskUsing[] | cdktn.IResolvable) {
    this._using.internalValue = value;
  }
  public resetUsing() {
    this._using.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingInput() {
    return this._using.internalValue;
  }
}
export interface DataDatabricksPolicyInfoDeny {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}
  */
  readonly privileges: string[];
}

export function dataDatabricksPolicyInfoDenyToTerraform(struct?: DataDatabricksPolicyInfoDeny): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    privileges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.privileges),
  }
}


export function dataDatabricksPolicyInfoDenyToHclTerraform(struct?: DataDatabricksPolicyInfoDeny): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    privileges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoDenyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoDeny | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoDeny | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privileges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privileges = value.privileges;
    }
  }

  // privileges - computed: true, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return this.getListAttribute('privileges');
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }
}
export interface DataDatabricksPolicyInfoGrant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}
  */
  readonly privileges: string[];
}

export function dataDatabricksPolicyInfoGrantToTerraform(struct?: DataDatabricksPolicyInfoGrant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    privileges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.privileges),
  }
}


export function dataDatabricksPolicyInfoGrantToHclTerraform(struct?: DataDatabricksPolicyInfoGrant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    privileges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoGrantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoGrant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoGrant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privileges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privileges = value.privileges;
    }
  }

  // privileges - computed: true, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return this.getListAttribute('privileges');
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }
}
export interface DataDatabricksPolicyInfoMatchColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}
  */
  readonly condition?: string;
}

export function dataDatabricksPolicyInfoMatchColumnsToTerraform(struct?: DataDatabricksPolicyInfoMatchColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    condition: cdktn.stringToTerraform(struct!.condition),
  }
}


export function dataDatabricksPolicyInfoMatchColumnsToHclTerraform(struct?: DataDatabricksPolicyInfoMatchColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoMatchColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfoMatchColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoMatchColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._condition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._condition = value.condition;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // condition - computed: true, optional: true, required: false
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
}

export class DataDatabricksPolicyInfoMatchColumnsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPolicyInfoMatchColumns[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfoMatchColumnsOutputReference {
    return new DataDatabricksPolicyInfoMatchColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfoProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#workspace_id DataDatabricksPolicyInfo#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPolicyInfoProviderConfigToTerraform(struct?: DataDatabricksPolicyInfoProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPolicyInfoProviderConfigToHclTerraform(struct?: DataDatabricksPolicyInfoProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPolicyInfoProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPolicyInfoProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}
  */
  readonly columnAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}
  */
  readonly tagKey: string;
}

export function dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueToTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_alias: cdktn.stringToTerraform(struct!.columnAlias),
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
  }
}


export function dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueToHclTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_alias: {
      value: cdktn.stringToHclTerraform(struct!.columnAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnAlias = this._columnAlias;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnAlias = undefined;
      this._tagKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnAlias = value.columnAlias;
      this._tagKey = value.tagKey;
    }
  }

  // column_alias - computed: true, optional: false, required: true
  private _columnAlias?: string; 
  public get columnAlias() {
    return this.getStringAttribute('column_alias');
  }
  public set columnAlias(value: string) {
    this._columnAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnAliasInput() {
    return this._columnAlias;
  }

  // tag_key - computed: true, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }
}
export interface DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}
  */
  readonly tagKey: string;
}

export function dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueToTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
  }
}


export function dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueToHclTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
    }
  }

  // tag_key - computed: true, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }
}
export interface DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}
  */
  readonly columnTagValue?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}
  */
  readonly tagValue?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue;
}

export function dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionToTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_tag_value: dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueToTerraform(struct!.columnTagValue),
    tag_value: dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueToTerraform(struct!.tagValue),
  }
}


export function dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionToHclTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_tag_value: {
      value: dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueToHclTerraform(struct!.columnTagValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue",
    },
    tag_value: {
      value: dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueToHclTerraform(struct!.tagValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnTagValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnTagValue = this._columnTagValue?.internalValue;
    }
    if (this._tagValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnTagValue.internalValue = undefined;
      this._tagValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnTagValue.internalValue = value.columnTagValue;
      this._tagValue.internalValue = value.tagValue;
    }
  }

  // column_tag_value - computed: true, optional: true, required: false
  private _columnTagValue = new DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(this, "column_tag_value");
  public get columnTagValue() {
    return this._columnTagValue;
  }
  public putColumnTagValue(value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue) {
    this._columnTagValue.internalValue = value;
  }
  public resetColumnTagValue() {
    this._columnTagValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTagValueInput() {
    return this._columnTagValue.internalValue;
  }

  // tag_value - computed: true, optional: true, required: false
  private _tagValue = new DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(this, "tag_value");
  public get tagValue() {
    return this._tagValue;
  }
  public putTagValue(value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue) {
    this._tagValue.internalValue = value;
  }
  public resetTagValue() {
    this._tagValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue.internalValue;
  }
}
export interface DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}
  */
  readonly tagIntrospection?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection;
}

export function dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionToTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tag_introspection: dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionToTerraform(struct!.tagIntrospection),
  }
}


export function dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionToHclTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tag_introspection: {
      value: dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionToHclTerraform(struct!.tagIntrospection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagIntrospection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIntrospection = this._tagIntrospection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagIntrospection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagIntrospection.internalValue = value.tagIntrospection;
    }
  }

  // tag_introspection - computed: true, optional: true, required: false
  private _tagIntrospection = new DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference(this, "tag_introspection");
  public get tagIntrospection() {
    return this._tagIntrospection;
  }
  public putTagIntrospection(value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection) {
    this._tagIntrospection.internalValue = value;
  }
  public resetTagIntrospection() {
    this._tagIntrospection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIntrospectionInput() {
    return this._tagIntrospection.internalValue;
  }
}
export interface DataDatabricksPolicyInfoRowFilterUsing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}
  */
  readonly constant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}
  */
  readonly functionArgExpression?: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression;
}

export function dataDatabricksPolicyInfoRowFilterUsingToTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    constant: cdktn.stringToTerraform(struct!.constant),
    function_arg_expression: dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionToTerraform(struct!.functionArgExpression),
  }
}


export function dataDatabricksPolicyInfoRowFilterUsingToHclTerraform(struct?: DataDatabricksPolicyInfoRowFilterUsing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constant: {
      value: cdktn.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arg_expression: {
      value: dataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionToHclTerraform(struct!.functionArgExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoRowFilterUsingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfoRowFilterUsing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._functionArgExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArgExpression = this._functionArgExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoRowFilterUsing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._constant = undefined;
      this._functionArgExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._constant = value.constant;
      this._functionArgExpression.internalValue = value.functionArgExpression;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // constant - computed: true, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // function_arg_expression - computed: true, optional: true, required: false
  private _functionArgExpression = new DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference(this, "function_arg_expression");
  public get functionArgExpression() {
    return this._functionArgExpression;
  }
  public putFunctionArgExpression(value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression) {
    this._functionArgExpression.internalValue = value;
  }
  public resetFunctionArgExpression() {
    this._functionArgExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArgExpressionInput() {
    return this._functionArgExpression.internalValue;
  }
}

export class DataDatabricksPolicyInfoRowFilterUsingList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPolicyInfoRowFilterUsing[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfoRowFilterUsingOutputReference {
    return new DataDatabricksPolicyInfoRowFilterUsingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfoRowFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}
  */
  readonly using?: DataDatabricksPolicyInfoRowFilterUsing[] | cdktn.IResolvable;
}

export function dataDatabricksPolicyInfoRowFilterToTerraform(struct?: DataDatabricksPolicyInfoRowFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_name: cdktn.stringToTerraform(struct!.functionName),
    using: cdktn.listMapper(dataDatabricksPolicyInfoRowFilterUsingToTerraform, false)(struct!.using),
  }
}


export function dataDatabricksPolicyInfoRowFilterToHclTerraform(struct?: DataDatabricksPolicyInfoRowFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    function_name: {
      value: cdktn.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using: {
      value: cdktn.listMapperHcl(dataDatabricksPolicyInfoRowFilterUsingToHclTerraform, false)(struct!.using),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPolicyInfoRowFilterUsingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfoRowFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfoRowFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._using?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.using = this._using?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfoRowFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionName = undefined;
      this._using.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionName = value.functionName;
      this._using.internalValue = value.using;
    }
  }

  // function_name - computed: true, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // using - computed: true, optional: true, required: false
  private _using = new DataDatabricksPolicyInfoRowFilterUsingList(this, "using", false);
  public get using() {
    return this._using;
  }
  public putUsing(value: DataDatabricksPolicyInfoRowFilterUsing[] | cdktn.IResolvable) {
    this._using.internalValue = value;
  }
  public resetUsing() {
    this._using.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingInput() {
    return this._using.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info databricks_policy_info}
*/
export class DataDatabricksPolicyInfo extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_policy_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksPolicyInfo resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPolicyInfo to import
  * @param importFromId The id of the existing DataDatabricksPolicyInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPolicyInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_policy_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/policy_info databricks_policy_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPolicyInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPolicyInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_policy_info',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.133.0',
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
    this._onSecurableFullname = config.onSecurableFullname;
    this._onSecurableType = config.onSecurableType;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column_mask - computed: true, optional: false, required: false
  private _columnMask = new DataDatabricksPolicyInfoColumnMaskOutputReference(this, "column_mask");
  public get columnMask() {
    return this._columnMask;
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // deny - computed: true, optional: false, required: false
  private _deny = new DataDatabricksPolicyInfoDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }

  // except_principals - computed: true, optional: false, required: false
  public get exceptPrincipals() {
    return this.getListAttribute('except_principals');
  }

  // for_securable_type - computed: true, optional: false, required: false
  public get forSecurableType() {
    return this.getStringAttribute('for_securable_type');
  }

  // grant - computed: true, optional: false, required: false
  private _grant = new DataDatabricksPolicyInfoGrantOutputReference(this, "grant");
  public get grant() {
    return this._grant;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_columns - computed: true, optional: false, required: false
  private _matchColumns = new DataDatabricksPolicyInfoMatchColumnsList(this, "match_columns", false);
  public get matchColumns() {
    return this._matchColumns;
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

  // on_securable_fullname - computed: false, optional: false, required: true
  private _onSecurableFullname?: string; 
  public get onSecurableFullname() {
    return this.getStringAttribute('on_securable_fullname');
  }
  public set onSecurableFullname(value: string) {
    this._onSecurableFullname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onSecurableFullnameInput() {
    return this._onSecurableFullname;
  }

  // on_securable_type - computed: false, optional: false, required: true
  private _onSecurableType?: string; 
  public get onSecurableType() {
    return this.getStringAttribute('on_securable_type');
  }
  public set onSecurableType(value: string) {
    this._onSecurableType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onSecurableTypeInput() {
    return this._onSecurableType;
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksPolicyInfoProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPolicyInfoProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // row_filter - computed: true, optional: false, required: false
  private _rowFilter = new DataDatabricksPolicyInfoRowFilterOutputReference(this, "row_filter");
  public get rowFilter() {
    return this._rowFilter;
  }

  // to_principals - computed: true, optional: false, required: false
  public get toPrincipals() {
    return this.getListAttribute('to_principals');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // when_condition - computed: true, optional: false, required: false
  public get whenCondition() {
    return this.getStringAttribute('when_condition');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      on_securable_fullname: cdktn.stringToTerraform(this._onSecurableFullname),
      on_securable_type: cdktn.stringToTerraform(this._onSecurableType),
      provider_config: dataDatabricksPolicyInfoProviderConfigToTerraform(this._providerConfig.internalValue),
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
      on_securable_fullname: {
        value: cdktn.stringToHclTerraform(this._onSecurableFullname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_securable_type: {
        value: cdktn.stringToHclTerraform(this._onSecurableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksPolicyInfoProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksPolicyInfoProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
