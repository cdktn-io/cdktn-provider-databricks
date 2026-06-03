/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksPolicyInfosConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#include_inherited DataDatabricksPolicyInfos#include_inherited}
  */
  readonly includeInherited?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#max_results DataDatabricksPolicyInfos#max_results}
  */
  readonly maxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}
  */
  readonly onSecurableFullname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}
  */
  readonly onSecurableType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#provider_config DataDatabricksPolicyInfos#provider_config}
  */
  readonly providerConfig?: DataDatabricksPolicyInfosProviderConfig;
}
export interface DataDatabricksPolicyInfosPoliciesColumnMaskUsing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}
  */
  readonly constant?: string;
}

export function dataDatabricksPolicyInfosPoliciesColumnMaskUsingToTerraform(struct?: DataDatabricksPolicyInfosPoliciesColumnMaskUsing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    constant: cdktn.stringToTerraform(struct!.constant),
  }
}


export function dataDatabricksPolicyInfosPoliciesColumnMaskUsingToHclTerraform(struct?: DataDatabricksPolicyInfosPoliciesColumnMaskUsing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfosPoliciesColumnMaskUsing | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfosPoliciesColumnMaskUsing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._constant = undefined;
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
}

export class DataDatabricksPolicyInfosPoliciesColumnMaskUsingList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPolicyInfosPoliciesColumnMaskUsing[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference {
    return new DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfosPoliciesColumnMask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#on_column DataDatabricksPolicyInfos#on_column}
  */
  readonly onColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}
  */
  readonly using?: DataDatabricksPolicyInfosPoliciesColumnMaskUsing[] | cdktn.IResolvable;
}

export function dataDatabricksPolicyInfosPoliciesColumnMaskToTerraform(struct?: DataDatabricksPolicyInfosPoliciesColumnMask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktn.stringToTerraform(struct!.functionName),
    on_column: cdktn.stringToTerraform(struct!.onColumn),
    using: cdktn.listMapper(dataDatabricksPolicyInfosPoliciesColumnMaskUsingToTerraform, false)(struct!.using),
  }
}


export function dataDatabricksPolicyInfosPoliciesColumnMaskToHclTerraform(struct?: DataDatabricksPolicyInfosPoliciesColumnMask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(dataDatabricksPolicyInfosPoliciesColumnMaskUsingToHclTerraform, false)(struct!.using),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPolicyInfosPoliciesColumnMaskUsingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfosPoliciesColumnMask | undefined {
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

  public set internalValue(value: DataDatabricksPolicyInfosPoliciesColumnMask | undefined) {
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
  private _using = new DataDatabricksPolicyInfosPoliciesColumnMaskUsingList(this, "using", false);
  public get using() {
    return this._using;
  }
  public putUsing(value: DataDatabricksPolicyInfosPoliciesColumnMaskUsing[] | cdktn.IResolvable) {
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
export interface DataDatabricksPolicyInfosPoliciesMatchColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#condition DataDatabricksPolicyInfos#condition}
  */
  readonly condition?: string;
}

export function dataDatabricksPolicyInfosPoliciesMatchColumnsToTerraform(struct?: DataDatabricksPolicyInfosPoliciesMatchColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    condition: cdktn.stringToTerraform(struct!.condition),
  }
}


export function dataDatabricksPolicyInfosPoliciesMatchColumnsToHclTerraform(struct?: DataDatabricksPolicyInfosPoliciesMatchColumns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfosPoliciesMatchColumns | undefined {
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

  public set internalValue(value: DataDatabricksPolicyInfosPoliciesMatchColumns | undefined) {
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

export class DataDatabricksPolicyInfosPoliciesMatchColumnsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPolicyInfosPoliciesMatchColumns[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference {
    return new DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfosPoliciesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#workspace_id DataDatabricksPolicyInfos#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPolicyInfosPoliciesProviderConfigToTerraform(struct?: DataDatabricksPolicyInfosPoliciesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPolicyInfosPoliciesProviderConfigToHclTerraform(struct?: DataDatabricksPolicyInfosPoliciesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfosPoliciesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPolicyInfosPoliciesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPolicyInfosPoliciesRowFilterUsing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}
  */
  readonly constant?: string;
}

export function dataDatabricksPolicyInfosPoliciesRowFilterUsingToTerraform(struct?: DataDatabricksPolicyInfosPoliciesRowFilterUsing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    constant: cdktn.stringToTerraform(struct!.constant),
  }
}


export function dataDatabricksPolicyInfosPoliciesRowFilterUsingToHclTerraform(struct?: DataDatabricksPolicyInfosPoliciesRowFilterUsing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfosPoliciesRowFilterUsing | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfosPoliciesRowFilterUsing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._constant = undefined;
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
}

export class DataDatabricksPolicyInfosPoliciesRowFilterUsingList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPolicyInfosPoliciesRowFilterUsing[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference {
    return new DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfosPoliciesRowFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}
  */
  readonly using?: DataDatabricksPolicyInfosPoliciesRowFilterUsing[] | cdktn.IResolvable;
}

export function dataDatabricksPolicyInfosPoliciesRowFilterToTerraform(struct?: DataDatabricksPolicyInfosPoliciesRowFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktn.stringToTerraform(struct!.functionName),
    using: cdktn.listMapper(dataDatabricksPolicyInfosPoliciesRowFilterUsingToTerraform, false)(struct!.using),
  }
}


export function dataDatabricksPolicyInfosPoliciesRowFilterToHclTerraform(struct?: DataDatabricksPolicyInfosPoliciesRowFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktn.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using: {
      value: cdktn.listMapperHcl(dataDatabricksPolicyInfosPoliciesRowFilterUsingToHclTerraform, false)(struct!.using),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksPolicyInfosPoliciesRowFilterUsingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfosPoliciesRowFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfosPoliciesRowFilter | undefined {
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

  public set internalValue(value: DataDatabricksPolicyInfosPoliciesRowFilter | undefined) {
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
  private _using = new DataDatabricksPolicyInfosPoliciesRowFilterUsingList(this, "using", false);
  public get using() {
    return this._using;
  }
  public putUsing(value: DataDatabricksPolicyInfosPoliciesRowFilterUsing[] | cdktn.IResolvable) {
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
export interface DataDatabricksPolicyInfosPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#name DataDatabricksPolicyInfos#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}
  */
  readonly onSecurableFullname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}
  */
  readonly onSecurableType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#provider_config DataDatabricksPolicyInfos#provider_config}
  */
  readonly providerConfig?: DataDatabricksPolicyInfosPoliciesProviderConfig;
}

export function dataDatabricksPolicyInfosPoliciesToTerraform(struct?: DataDatabricksPolicyInfosPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    on_securable_fullname: cdktn.stringToTerraform(struct!.onSecurableFullname),
    on_securable_type: cdktn.stringToTerraform(struct!.onSecurableType),
    provider_config: dataDatabricksPolicyInfosPoliciesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksPolicyInfosPoliciesToHclTerraform(struct?: DataDatabricksPolicyInfosPolicies): any {
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
    on_securable_fullname: {
      value: cdktn.stringToHclTerraform(struct!.onSecurableFullname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_securable_type: {
      value: cdktn.stringToHclTerraform(struct!.onSecurableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_config: {
      value: dataDatabricksPolicyInfosPoliciesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPolicyInfosPoliciesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPolicyInfosPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPolicyInfosPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onSecurableFullname !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSecurableFullname = this._onSecurableFullname;
    }
    if (this._onSecurableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSecurableType = this._onSecurableType;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPolicyInfosPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._onSecurableFullname = undefined;
      this._onSecurableType = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._onSecurableFullname = value.onSecurableFullname;
      this._onSecurableType = value.onSecurableType;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // column_mask - computed: true, optional: false, required: false
  private _columnMask = new DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference(this, "column_mask");
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

  // except_principals - computed: true, optional: false, required: false
  public get exceptPrincipals() {
    return this.getListAttribute('except_principals');
  }

  // for_securable_type - computed: true, optional: false, required: false
  public get forSecurableType() {
    return this.getStringAttribute('for_securable_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_columns - computed: true, optional: false, required: false
  private _matchColumns = new DataDatabricksPolicyInfosPoliciesMatchColumnsList(this, "match_columns", false);
  public get matchColumns() {
    return this._matchColumns;
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

  // on_securable_fullname - computed: true, optional: false, required: true
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

  // on_securable_type - computed: true, optional: false, required: true
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

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksPolicyInfosPoliciesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPolicyInfosPoliciesProviderConfig) {
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
  private _rowFilter = new DataDatabricksPolicyInfosPoliciesRowFilterOutputReference(this, "row_filter");
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
}

export class DataDatabricksPolicyInfosPoliciesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPolicyInfosPolicies[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPolicyInfosPoliciesOutputReference {
    return new DataDatabricksPolicyInfosPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPolicyInfosProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#workspace_id DataDatabricksPolicyInfos#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPolicyInfosProviderConfigToTerraform(struct?: DataDatabricksPolicyInfosProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPolicyInfosProviderConfigToHclTerraform(struct?: DataDatabricksPolicyInfosProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPolicyInfosProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPolicyInfosProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPolicyInfosProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos databricks_policy_infos}
*/
export class DataDatabricksPolicyInfos extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_policy_infos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksPolicyInfos resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPolicyInfos to import
  * @param importFromId The id of the existing DataDatabricksPolicyInfos that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPolicyInfos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_policy_infos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/policy_infos databricks_policy_infos} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPolicyInfosConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPolicyInfosConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_policy_infos',
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
    this._includeInherited = config.includeInherited;
    this._maxResults = config.maxResults;
    this._onSecurableFullname = config.onSecurableFullname;
    this._onSecurableType = config.onSecurableType;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // include_inherited - computed: false, optional: true, required: false
  private _includeInherited?: boolean | cdktn.IResolvable; 
  public get includeInherited() {
    return this.getBooleanAttribute('include_inherited');
  }
  public set includeInherited(value: boolean | cdktn.IResolvable) {
    this._includeInherited = value;
  }
  public resetIncludeInherited() {
    this._includeInherited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInheritedInput() {
    return this._includeInherited;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
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

  // policies - computed: true, optional: false, required: false
  private _policies = new DataDatabricksPolicyInfosPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksPolicyInfosProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPolicyInfosProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_inherited: cdktn.booleanToTerraform(this._includeInherited),
      max_results: cdktn.numberToTerraform(this._maxResults),
      on_securable_fullname: cdktn.stringToTerraform(this._onSecurableFullname),
      on_securable_type: cdktn.stringToTerraform(this._onSecurableType),
      provider_config: dataDatabricksPolicyInfosProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      include_inherited: {
        value: cdktn.booleanToHclTerraform(this._includeInherited),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_results: {
        value: cdktn.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: dataDatabricksPolicyInfosProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksPolicyInfosProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
