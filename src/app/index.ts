/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#budget_policy_id App#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#compute_size App#compute_size}
  */
  readonly computeSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#description App#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#git_repository App#git_repository}
  */
  readonly gitRepository?: AppGitRepository;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#name App#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#no_compute App#no_compute}
  */
  readonly noCompute?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#provider_config App#provider_config}
  */
  readonly providerConfig?: AppProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#resources App#resources}
  */
  readonly resources?: AppResources[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#space App#space}
  */
  readonly space?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#telemetry_export_destinations App#telemetry_export_destinations}
  */
  readonly telemetryExportDestinations?: AppTelemetryExportDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#usage_policy_id App#usage_policy_id}
  */
  readonly usagePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#user_api_scopes App#user_api_scopes}
  */
  readonly userApiScopes?: string[];
}
export interface AppActiveDeploymentDeploymentArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#source_code_path App#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function appActiveDeploymentDeploymentArtifactsToTerraform(struct?: AppActiveDeploymentDeploymentArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
  }
}


export function appActiveDeploymentDeploymentArtifactsToHclTerraform(struct?: AppActiveDeploymentDeploymentArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_code_path: {
      value: cdktn.stringToHclTerraform(struct!.sourceCodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppActiveDeploymentDeploymentArtifactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppActiveDeploymentDeploymentArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppActiveDeploymentDeploymentArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceCodePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceCodePath = value.sourceCodePath;
    }
  }

  // source_code_path - computed: true, optional: true, required: false
  private _sourceCodePath?: string; 
  public get sourceCodePath() {
    return this.getStringAttribute('source_code_path');
  }
  public set sourceCodePath(value: string) {
    this._sourceCodePath = value;
  }
  public resetSourceCodePath() {
    this._sourceCodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodePathInput() {
    return this._sourceCodePath;
  }
}
export interface AppActiveDeploymentEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#name App#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#value App#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#value_from App#value_from}
  */
  readonly valueFrom?: string;
}

export function appActiveDeploymentEnvVarsToTerraform(struct?: AppActiveDeploymentEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
    value_from: cdktn.stringToTerraform(struct!.valueFrom),
  }
}


export function appActiveDeploymentEnvVarsToHclTerraform(struct?: AppActiveDeploymentEnvVars | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: cdktn.stringToHclTerraform(struct!.valueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppActiveDeploymentEnvVarsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppActiveDeploymentEnvVars | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppActiveDeploymentEnvVars | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueFrom = value.valueFrom;
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

  // value_from - computed: true, optional: true, required: false
  private _valueFrom?: string; 
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
  public set valueFrom(value: string) {
    this._valueFrom = value;
  }
  public resetValueFrom() {
    this._valueFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom;
  }
}

export class AppActiveDeploymentEnvVarsList extends cdktn.ComplexList {
  public internalValue? : AppActiveDeploymentEnvVars[] | cdktn.IResolvable

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
  public get(index: number): AppActiveDeploymentEnvVarsOutputReference {
    return new AppActiveDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppActiveDeploymentGitSourceGitRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#provider App#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#url App#url}
  */
  readonly url: string;
}

export function appActiveDeploymentGitSourceGitRepositoryToTerraform(struct?: AppActiveDeploymentGitSourceGitRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktn.stringToTerraform(struct!.provider),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function appActiveDeploymentGitSourceGitRepositoryToHclTerraform(struct?: AppActiveDeploymentGitSourceGitRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppActiveDeploymentGitSourceGitRepositoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppActiveDeploymentGitSourceGitRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppActiveDeploymentGitSourceGitRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: true, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: true, optional: false, required: true
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
}
export interface AppActiveDeploymentGitSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#commit App#commit}
  */
  readonly commit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#source_code_path App#source_code_path}
  */
  readonly sourceCodePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#tag App#tag}
  */
  readonly tag?: string;
}

export function appActiveDeploymentGitSourceToTerraform(struct?: AppActiveDeploymentGitSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktn.stringToTerraform(struct!.branch),
    commit: cdktn.stringToTerraform(struct!.commit),
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
    tag: cdktn.stringToTerraform(struct!.tag),
  }
}


export function appActiveDeploymentGitSourceToHclTerraform(struct?: AppActiveDeploymentGitSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktn.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit: {
      value: cdktn.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_code_path: {
      value: cdktn.stringToHclTerraform(struct!.sourceCodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktn.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppActiveDeploymentGitSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppActiveDeploymentGitSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppActiveDeploymentGitSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._commit = undefined;
      this._sourceCodePath = undefined;
      this._tag = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._commit = value.commit;
      this._sourceCodePath = value.sourceCodePath;
      this._tag = value.tag;
    }
  }

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // commit - computed: true, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // git_repository - computed: true, optional: false, required: false
  private _gitRepository = new AppActiveDeploymentGitSourceGitRepositoryOutputReference(this, "git_repository");
  public get gitRepository() {
    return this._gitRepository;
  }

  // resolved_commit - computed: true, optional: false, required: false
  public get resolvedCommit() {
    return this.getStringAttribute('resolved_commit');
  }

  // source_code_path - computed: true, optional: true, required: false
  private _sourceCodePath?: string; 
  public get sourceCodePath() {
    return this.getStringAttribute('source_code_path');
  }
  public set sourceCodePath(value: string) {
    this._sourceCodePath = value;
  }
  public resetSourceCodePath() {
    this._sourceCodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodePathInput() {
    return this._sourceCodePath;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface AppActiveDeploymentStatus {
}

export function appActiveDeploymentStatusToTerraform(struct?: AppActiveDeploymentStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appActiveDeploymentStatusToHclTerraform(struct?: AppActiveDeploymentStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppActiveDeploymentStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppActiveDeploymentStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppActiveDeploymentStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface AppActiveDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#command App#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#deployment_id App#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#env_vars App#env_vars}
  */
  readonly envVars?: AppActiveDeploymentEnvVars[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#git_source App#git_source}
  */
  readonly gitSource?: AppActiveDeploymentGitSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#mode App#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#source_code_path App#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function appActiveDeploymentToTerraform(struct?: AppActiveDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    deployment_id: cdktn.stringToTerraform(struct!.deploymentId),
    env_vars: cdktn.listMapper(appActiveDeploymentEnvVarsToTerraform, false)(struct!.envVars),
    git_source: appActiveDeploymentGitSourceToTerraform(struct!.gitSource),
    mode: cdktn.stringToTerraform(struct!.mode),
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
  }
}


export function appActiveDeploymentToHclTerraform(struct?: AppActiveDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deployment_id: {
      value: cdktn.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_vars: {
      value: cdktn.listMapperHcl(appActiveDeploymentEnvVarsToHclTerraform, false)(struct!.envVars),
      isBlock: true,
      type: "list",
      storageClassType: "AppActiveDeploymentEnvVarsList",
    },
    git_source: {
      value: appActiveDeploymentGitSourceToHclTerraform(struct!.gitSource),
      isBlock: true,
      type: "struct",
      storageClassType: "AppActiveDeploymentGitSource",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_code_path: {
      value: cdktn.stringToHclTerraform(struct!.sourceCodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppActiveDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppActiveDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._envVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars?.internalValue;
    }
    if (this._gitSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSource = this._gitSource?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppActiveDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._deploymentId = undefined;
      this._envVars.internalValue = undefined;
      this._gitSource.internalValue = undefined;
      this._mode = undefined;
      this._sourceCodePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._deploymentId = value.deploymentId;
      this._envVars.internalValue = value.envVars;
      this._gitSource.internalValue = value.gitSource;
      this._mode = value.mode;
      this._sourceCodePath = value.sourceCodePath;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // deployment_artifacts - computed: true, optional: false, required: false
  private _deploymentArtifacts = new AppActiveDeploymentDeploymentArtifactsOutputReference(this, "deployment_artifacts");
  public get deploymentArtifacts() {
    return this._deploymentArtifacts;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // env_vars - computed: true, optional: true, required: false
  private _envVars = new AppActiveDeploymentEnvVarsList(this, "env_vars", false);
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: AppActiveDeploymentEnvVars[] | cdktn.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // git_source - computed: true, optional: true, required: false
  private _gitSource = new AppActiveDeploymentGitSourceOutputReference(this, "git_source");
  public get gitSource() {
    return this._gitSource;
  }
  public putGitSource(value: AppActiveDeploymentGitSource) {
    this._gitSource.internalValue = value;
  }
  public resetGitSource() {
    this._gitSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSourceInput() {
    return this._gitSource.internalValue;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // source_code_path - computed: true, optional: true, required: false
  private _sourceCodePath?: string; 
  public get sourceCodePath() {
    return this.getStringAttribute('source_code_path');
  }
  public set sourceCodePath(value: string) {
    this._sourceCodePath = value;
  }
  public resetSourceCodePath() {
    this._sourceCodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodePathInput() {
    return this._sourceCodePath;
  }

  // status - computed: true, optional: false, required: false
  private _status = new AppActiveDeploymentStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}
export interface AppAppStatus {
}

export function appAppStatusToTerraform(struct?: AppAppStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appAppStatusToHclTerraform(struct?: AppAppStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppAppStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppAppStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppAppStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface AppComputeStatus {
}

export function appComputeStatusToTerraform(struct?: AppComputeStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appComputeStatusToHclTerraform(struct?: AppComputeStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppComputeStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppComputeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppComputeStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_instances - computed: true, optional: false, required: false
  public get activeInstances() {
    return this.getNumberAttribute('active_instances');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface AppGitRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#provider App#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#url App#url}
  */
  readonly url: string;
}

export function appGitRepositoryToTerraform(struct?: AppGitRepository | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktn.stringToTerraform(struct!.provider),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function appGitRepositoryToHclTerraform(struct?: AppGitRepository | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppGitRepositoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppGitRepository | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppGitRepository | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provider = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
}
export interface AppPendingDeploymentDeploymentArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#source_code_path App#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function appPendingDeploymentDeploymentArtifactsToTerraform(struct?: AppPendingDeploymentDeploymentArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
  }
}


export function appPendingDeploymentDeploymentArtifactsToHclTerraform(struct?: AppPendingDeploymentDeploymentArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_code_path: {
      value: cdktn.stringToHclTerraform(struct!.sourceCodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPendingDeploymentDeploymentArtifactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppPendingDeploymentDeploymentArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPendingDeploymentDeploymentArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceCodePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceCodePath = value.sourceCodePath;
    }
  }

  // source_code_path - computed: true, optional: true, required: false
  private _sourceCodePath?: string; 
  public get sourceCodePath() {
    return this.getStringAttribute('source_code_path');
  }
  public set sourceCodePath(value: string) {
    this._sourceCodePath = value;
  }
  public resetSourceCodePath() {
    this._sourceCodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodePathInput() {
    return this._sourceCodePath;
  }
}
export interface AppPendingDeploymentEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#name App#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#value App#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#value_from App#value_from}
  */
  readonly valueFrom?: string;
}

export function appPendingDeploymentEnvVarsToTerraform(struct?: AppPendingDeploymentEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
    value_from: cdktn.stringToTerraform(struct!.valueFrom),
  }
}


export function appPendingDeploymentEnvVarsToHclTerraform(struct?: AppPendingDeploymentEnvVars | cdktn.IResolvable): any {
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
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: cdktn.stringToHclTerraform(struct!.valueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPendingDeploymentEnvVarsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppPendingDeploymentEnvVars | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPendingDeploymentEnvVars | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueFrom = value.valueFrom;
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

  // value_from - computed: true, optional: true, required: false
  private _valueFrom?: string; 
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
  public set valueFrom(value: string) {
    this._valueFrom = value;
  }
  public resetValueFrom() {
    this._valueFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom;
  }
}

export class AppPendingDeploymentEnvVarsList extends cdktn.ComplexList {
  public internalValue? : AppPendingDeploymentEnvVars[] | cdktn.IResolvable

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
  public get(index: number): AppPendingDeploymentEnvVarsOutputReference {
    return new AppPendingDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPendingDeploymentGitSourceGitRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#provider App#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#url App#url}
  */
  readonly url: string;
}

export function appPendingDeploymentGitSourceGitRepositoryToTerraform(struct?: AppPendingDeploymentGitSourceGitRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktn.stringToTerraform(struct!.provider),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function appPendingDeploymentGitSourceGitRepositoryToHclTerraform(struct?: AppPendingDeploymentGitSourceGitRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktn.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPendingDeploymentGitSourceGitRepositoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppPendingDeploymentGitSourceGitRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPendingDeploymentGitSourceGitRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: true, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: true, optional: false, required: true
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
}
export interface AppPendingDeploymentGitSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#commit App#commit}
  */
  readonly commit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#source_code_path App#source_code_path}
  */
  readonly sourceCodePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#tag App#tag}
  */
  readonly tag?: string;
}

export function appPendingDeploymentGitSourceToTerraform(struct?: AppPendingDeploymentGitSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktn.stringToTerraform(struct!.branch),
    commit: cdktn.stringToTerraform(struct!.commit),
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
    tag: cdktn.stringToTerraform(struct!.tag),
  }
}


export function appPendingDeploymentGitSourceToHclTerraform(struct?: AppPendingDeploymentGitSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktn.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit: {
      value: cdktn.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_code_path: {
      value: cdktn.stringToHclTerraform(struct!.sourceCodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktn.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPendingDeploymentGitSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppPendingDeploymentGitSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPendingDeploymentGitSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._commit = undefined;
      this._sourceCodePath = undefined;
      this._tag = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._commit = value.commit;
      this._sourceCodePath = value.sourceCodePath;
      this._tag = value.tag;
    }
  }

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // commit - computed: true, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // git_repository - computed: true, optional: false, required: false
  private _gitRepository = new AppPendingDeploymentGitSourceGitRepositoryOutputReference(this, "git_repository");
  public get gitRepository() {
    return this._gitRepository;
  }

  // resolved_commit - computed: true, optional: false, required: false
  public get resolvedCommit() {
    return this.getStringAttribute('resolved_commit');
  }

  // source_code_path - computed: true, optional: true, required: false
  private _sourceCodePath?: string; 
  public get sourceCodePath() {
    return this.getStringAttribute('source_code_path');
  }
  public set sourceCodePath(value: string) {
    this._sourceCodePath = value;
  }
  public resetSourceCodePath() {
    this._sourceCodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodePathInput() {
    return this._sourceCodePath;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface AppPendingDeploymentStatus {
}

export function appPendingDeploymentStatusToTerraform(struct?: AppPendingDeploymentStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appPendingDeploymentStatusToHclTerraform(struct?: AppPendingDeploymentStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppPendingDeploymentStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppPendingDeploymentStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPendingDeploymentStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface AppPendingDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#command App#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#deployment_id App#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#env_vars App#env_vars}
  */
  readonly envVars?: AppPendingDeploymentEnvVars[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#git_source App#git_source}
  */
  readonly gitSource?: AppPendingDeploymentGitSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#mode App#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#source_code_path App#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function appPendingDeploymentToTerraform(struct?: AppPendingDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    deployment_id: cdktn.stringToTerraform(struct!.deploymentId),
    env_vars: cdktn.listMapper(appPendingDeploymentEnvVarsToTerraform, false)(struct!.envVars),
    git_source: appPendingDeploymentGitSourceToTerraform(struct!.gitSource),
    mode: cdktn.stringToTerraform(struct!.mode),
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
  }
}


export function appPendingDeploymentToHclTerraform(struct?: AppPendingDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deployment_id: {
      value: cdktn.stringToHclTerraform(struct!.deploymentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_vars: {
      value: cdktn.listMapperHcl(appPendingDeploymentEnvVarsToHclTerraform, false)(struct!.envVars),
      isBlock: true,
      type: "list",
      storageClassType: "AppPendingDeploymentEnvVarsList",
    },
    git_source: {
      value: appPendingDeploymentGitSourceToHclTerraform(struct!.gitSource),
      isBlock: true,
      type: "struct",
      storageClassType: "AppPendingDeploymentGitSource",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_code_path: {
      value: cdktn.stringToHclTerraform(struct!.sourceCodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPendingDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppPendingDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._deploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentId = this._deploymentId;
    }
    if (this._envVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars?.internalValue;
    }
    if (this._gitSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitSource = this._gitSource?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPendingDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._deploymentId = undefined;
      this._envVars.internalValue = undefined;
      this._gitSource.internalValue = undefined;
      this._mode = undefined;
      this._sourceCodePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._deploymentId = value.deploymentId;
      this._envVars.internalValue = value.envVars;
      this._gitSource.internalValue = value.gitSource;
      this._mode = value.mode;
      this._sourceCodePath = value.sourceCodePath;
    }
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // deployment_artifacts - computed: true, optional: false, required: false
  private _deploymentArtifacts = new AppPendingDeploymentDeploymentArtifactsOutputReference(this, "deployment_artifacts");
  public get deploymentArtifacts() {
    return this._deploymentArtifacts;
  }

  // deployment_id - computed: true, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // env_vars - computed: true, optional: true, required: false
  private _envVars = new AppPendingDeploymentEnvVarsList(this, "env_vars", false);
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: AppPendingDeploymentEnvVars[] | cdktn.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // git_source - computed: true, optional: true, required: false
  private _gitSource = new AppPendingDeploymentGitSourceOutputReference(this, "git_source");
  public get gitSource() {
    return this._gitSource;
  }
  public putGitSource(value: AppPendingDeploymentGitSource) {
    this._gitSource.internalValue = value;
  }
  public resetGitSource() {
    this._gitSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitSourceInput() {
    return this._gitSource.internalValue;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // source_code_path - computed: true, optional: true, required: false
  private _sourceCodePath?: string; 
  public get sourceCodePath() {
    return this.getStringAttribute('source_code_path');
  }
  public set sourceCodePath(value: string) {
    this._sourceCodePath = value;
  }
  public resetSourceCodePath() {
    this._sourceCodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodePathInput() {
    return this._sourceCodePath;
  }

  // status - computed: true, optional: false, required: false
  private _status = new AppPendingDeploymentStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}
export interface AppProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#workspace_id App#workspace_id}
  */
  readonly workspaceId?: string;
}

export function appProviderConfigToTerraform(struct?: AppProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function appProviderConfigToHclTerraform(struct?: AppProviderConfig | cdktn.IResolvable): any {
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

export class AppProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AppProviderConfig | cdktn.IResolvable | undefined) {
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
export interface AppResourcesApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#name App#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#permission App#permission}
  */
  readonly permission?: string;
}

export function appResourcesAppToTerraform(struct?: AppResourcesApp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function appResourcesAppToHclTerraform(struct?: AppResourcesApp | cdktn.IResolvable): any {
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
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppResourcesAppOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppResourcesApp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppResourcesApp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permission = value.permission;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface AppResourcesDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#database_name App#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#instance_name App#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#permission App#permission}
  */
  readonly permission: string;
}

export function appResourcesDatabaseToTerraform(struct?: AppResourcesDatabase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    instance_name: cdktn.stringToTerraform(struct!.instanceName),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function appResourcesDatabaseToHclTerraform(struct?: AppResourcesDatabase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktn.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppResourcesDatabaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppResourcesDatabase | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppResourcesDatabase | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._instanceName = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._instanceName = value.instanceName;
      this._permission = value.permission;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface AppResourcesExperiment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#experiment_id App#experiment_id}
  */
  readonly experimentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#permission App#permission}
  */
  readonly permission: string;
}

export function appResourcesExperimentToTerraform(struct?: AppResourcesExperiment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    experiment_id: cdktn.stringToTerraform(struct!.experimentId),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function appResourcesExperimentToHclTerraform(struct?: AppResourcesExperiment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    experiment_id: {
      value: cdktn.stringToHclTerraform(struct!.experimentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppResourcesExperimentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppResourcesExperiment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._experimentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentId = this._experimentId;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppResourcesExperiment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._experimentId = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._experimentId = value.experimentId;
      this._permission = value.permission;
    }
  }

  // experiment_id - computed: false, optional: false, required: true
  private _experimentId?: string; 
  public get experimentId() {
    return this.getStringAttribute('experiment_id');
  }
  public set experimentId(value: string) {
    this._experimentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentIdInput() {
    return this._experimentId;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface AppResourcesGenieSpace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#name App#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#permission App#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#space_id App#space_id}
  */
  readonly spaceId: string;
}

export function appResourcesGenieSpaceToTerraform(struct?: AppResourcesGenieSpace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    permission: cdktn.stringToTerraform(struct!.permission),
    space_id: cdktn.stringToTerraform(struct!.spaceId),
  }
}


export function appResourcesGenieSpaceToHclTerraform(struct?: AppResourcesGenieSpace | cdktn.IResolvable): any {
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
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_id: {
      value: cdktn.stringToHclTerraform(struct!.spaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppResourcesGenieSpaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppResourcesGenieSpace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._spaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceId = this._spaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppResourcesGenieSpace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permission = undefined;
      this._spaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permission = value.permission;
      this._spaceId = value.spaceId;
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

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }
}
export interface AppResourcesJob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#id App#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#permission App#permission}
  */
  readonly permission: string;
}

export function appResourcesJobToTerraform(struct?: AppResourcesJob | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function appResourcesJobToHclTerraform(struct?: AppResourcesJob | cdktn.IResolvable): any {
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
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppResourcesJobOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppResourcesJob | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppResourcesJob | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permission = value.permission;
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

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface AppResourcesPostgres {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#branch App#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#database App#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#permission App#permission}
  */
  readonly permission?: string;
}

export function appResourcesPostgresToTerraform(struct?: AppResourcesPostgres | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktn.stringToTerraform(struct!.branch),
    database: cdktn.stringToTerraform(struct!.database),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function appResourcesPostgresToHclTerraform(struct?: AppResourcesPostgres | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktn.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppResourcesPostgresOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppResourcesPostgres | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppResourcesPostgres | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._database = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._database = value.database;
      this._permission = value.permission;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface AppResourcesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#key App#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#permission App#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#scope App#scope}
  */
  readonly scope: string;
}

export function appResourcesSecretToTerraform(struct?: AppResourcesSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    permission: cdktn.stringToTerraform(struct!.permission),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function appResourcesSecretToHclTerraform(struct?: AppResourcesSecret | cdktn.IResolvable): any {
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
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppResourcesSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppResourcesSecret | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppResourcesSecret | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._permission = undefined;
      this._scope = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._permission = value.permission;
      this._scope = value.scope;
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

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface AppResourcesServingEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#name App#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#permission App#permission}
  */
  readonly permission: string;
}

export function appResourcesServingEndpointToTerraform(struct?: AppResourcesServingEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function appResourcesServingEndpointToHclTerraform(struct?: AppResourcesServingEndpoint | cdktn.IResolvable): any {
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
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppResourcesServingEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppResourcesServingEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppResourcesServingEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permission = value.permission;
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

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface AppResourcesSqlWarehouse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#id App#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#permission App#permission}
  */
  readonly permission: string;
}

export function appResourcesSqlWarehouseToTerraform(struct?: AppResourcesSqlWarehouse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function appResourcesSqlWarehouseToHclTerraform(struct?: AppResourcesSqlWarehouse | cdktn.IResolvable): any {
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
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppResourcesSqlWarehouseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppResourcesSqlWarehouse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppResourcesSqlWarehouse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permission = value.permission;
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

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}
export interface AppResourcesUcSecurable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#permission App#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#securable_full_name App#securable_full_name}
  */
  readonly securableFullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#securable_type App#securable_type}
  */
  readonly securableType: string;
}

export function appResourcesUcSecurableToTerraform(struct?: AppResourcesUcSecurable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktn.stringToTerraform(struct!.permission),
    securable_full_name: cdktn.stringToTerraform(struct!.securableFullName),
    securable_type: cdktn.stringToTerraform(struct!.securableType),
  }
}


export function appResourcesUcSecurableToHclTerraform(struct?: AppResourcesUcSecurable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission: {
      value: cdktn.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    securable_full_name: {
      value: cdktn.stringToHclTerraform(struct!.securableFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    securable_type: {
      value: cdktn.stringToHclTerraform(struct!.securableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppResourcesUcSecurableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppResourcesUcSecurable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._securableFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securableFullName = this._securableFullName;
    }
    if (this._securableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.securableType = this._securableType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppResourcesUcSecurable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
      this._securableFullName = undefined;
      this._securableType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
      this._securableFullName = value.securableFullName;
      this._securableType = value.securableType;
    }
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // securable_full_name - computed: false, optional: false, required: true
  private _securableFullName?: string; 
  public get securableFullName() {
    return this.getStringAttribute('securable_full_name');
  }
  public set securableFullName(value: string) {
    this._securableFullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securableFullNameInput() {
    return this._securableFullName;
  }

  // securable_kind - computed: true, optional: false, required: false
  public get securableKind() {
    return this.getStringAttribute('securable_kind');
  }

  // securable_type - computed: false, optional: false, required: true
  private _securableType?: string; 
  public get securableType() {
    return this.getStringAttribute('securable_type');
  }
  public set securableType(value: string) {
    this._securableType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securableTypeInput() {
    return this._securableType;
  }
}
export interface AppResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#app App#app}
  */
  readonly app?: AppResourcesApp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#database App#database}
  */
  readonly database?: AppResourcesDatabase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#description App#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#experiment App#experiment}
  */
  readonly experiment?: AppResourcesExperiment;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#genie_space App#genie_space}
  */
  readonly genieSpace?: AppResourcesGenieSpace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#job App#job}
  */
  readonly job?: AppResourcesJob;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#name App#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#postgres App#postgres}
  */
  readonly postgres?: AppResourcesPostgres;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#secret App#secret}
  */
  readonly secret?: AppResourcesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#serving_endpoint App#serving_endpoint}
  */
  readonly servingEndpoint?: AppResourcesServingEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#sql_warehouse App#sql_warehouse}
  */
  readonly sqlWarehouse?: AppResourcesSqlWarehouse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#uc_securable App#uc_securable}
  */
  readonly ucSecurable?: AppResourcesUcSecurable;
}

export function appResourcesToTerraform(struct?: AppResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app: appResourcesAppToTerraform(struct!.app),
    database: appResourcesDatabaseToTerraform(struct!.database),
    description: cdktn.stringToTerraform(struct!.description),
    experiment: appResourcesExperimentToTerraform(struct!.experiment),
    genie_space: appResourcesGenieSpaceToTerraform(struct!.genieSpace),
    job: appResourcesJobToTerraform(struct!.job),
    name: cdktn.stringToTerraform(struct!.name),
    postgres: appResourcesPostgresToTerraform(struct!.postgres),
    secret: appResourcesSecretToTerraform(struct!.secret),
    serving_endpoint: appResourcesServingEndpointToTerraform(struct!.servingEndpoint),
    sql_warehouse: appResourcesSqlWarehouseToTerraform(struct!.sqlWarehouse),
    uc_securable: appResourcesUcSecurableToTerraform(struct!.ucSecurable),
  }
}


export function appResourcesToHclTerraform(struct?: AppResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app: {
      value: appResourcesAppToHclTerraform(struct!.app),
      isBlock: true,
      type: "struct",
      storageClassType: "AppResourcesApp",
    },
    database: {
      value: appResourcesDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "struct",
      storageClassType: "AppResourcesDatabase",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    experiment: {
      value: appResourcesExperimentToHclTerraform(struct!.experiment),
      isBlock: true,
      type: "struct",
      storageClassType: "AppResourcesExperiment",
    },
    genie_space: {
      value: appResourcesGenieSpaceToHclTerraform(struct!.genieSpace),
      isBlock: true,
      type: "struct",
      storageClassType: "AppResourcesGenieSpace",
    },
    job: {
      value: appResourcesJobToHclTerraform(struct!.job),
      isBlock: true,
      type: "struct",
      storageClassType: "AppResourcesJob",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres: {
      value: appResourcesPostgresToHclTerraform(struct!.postgres),
      isBlock: true,
      type: "struct",
      storageClassType: "AppResourcesPostgres",
    },
    secret: {
      value: appResourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "AppResourcesSecret",
    },
    serving_endpoint: {
      value: appResourcesServingEndpointToHclTerraform(struct!.servingEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "AppResourcesServingEndpoint",
    },
    sql_warehouse: {
      value: appResourcesSqlWarehouseToHclTerraform(struct!.sqlWarehouse),
      isBlock: true,
      type: "struct",
      storageClassType: "AppResourcesSqlWarehouse",
    },
    uc_securable: {
      value: appResourcesUcSecurableToHclTerraform(struct!.ucSecurable),
      isBlock: true,
      type: "struct",
      storageClassType: "AppResourcesUcSecurable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._app?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.app = this._app?.internalValue;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._experiment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.experiment = this._experiment?.internalValue;
    }
    if (this._genieSpace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genieSpace = this._genieSpace?.internalValue;
    }
    if (this._job?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.job = this._job?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._postgres?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgres = this._postgres?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._servingEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servingEndpoint = this._servingEndpoint?.internalValue;
    }
    if (this._sqlWarehouse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlWarehouse = this._sqlWarehouse?.internalValue;
    }
    if (this._ucSecurable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucSecurable = this._ucSecurable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._app.internalValue = undefined;
      this._database.internalValue = undefined;
      this._description = undefined;
      this._experiment.internalValue = undefined;
      this._genieSpace.internalValue = undefined;
      this._job.internalValue = undefined;
      this._name = undefined;
      this._postgres.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._servingEndpoint.internalValue = undefined;
      this._sqlWarehouse.internalValue = undefined;
      this._ucSecurable.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._app.internalValue = value.app;
      this._database.internalValue = value.database;
      this._description = value.description;
      this._experiment.internalValue = value.experiment;
      this._genieSpace.internalValue = value.genieSpace;
      this._job.internalValue = value.job;
      this._name = value.name;
      this._postgres.internalValue = value.postgres;
      this._secret.internalValue = value.secret;
      this._servingEndpoint.internalValue = value.servingEndpoint;
      this._sqlWarehouse.internalValue = value.sqlWarehouse;
      this._ucSecurable.internalValue = value.ucSecurable;
    }
  }

  // app - computed: false, optional: true, required: false
  private _app = new AppResourcesAppOutputReference(this, "app");
  public get app() {
    return this._app;
  }
  public putApp(value: AppResourcesApp) {
    this._app.internalValue = value;
  }
  public resetApp() {
    this._app.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new AppResourcesDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: AppResourcesDatabase) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
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

  // experiment - computed: false, optional: true, required: false
  private _experiment = new AppResourcesExperimentOutputReference(this, "experiment");
  public get experiment() {
    return this._experiment;
  }
  public putExperiment(value: AppResourcesExperiment) {
    this._experiment.internalValue = value;
  }
  public resetExperiment() {
    this._experiment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentInput() {
    return this._experiment.internalValue;
  }

  // genie_space - computed: false, optional: true, required: false
  private _genieSpace = new AppResourcesGenieSpaceOutputReference(this, "genie_space");
  public get genieSpace() {
    return this._genieSpace;
  }
  public putGenieSpace(value: AppResourcesGenieSpace) {
    this._genieSpace.internalValue = value;
  }
  public resetGenieSpace() {
    this._genieSpace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genieSpaceInput() {
    return this._genieSpace.internalValue;
  }

  // job - computed: false, optional: true, required: false
  private _job = new AppResourcesJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }
  public putJob(value: AppResourcesJob) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
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

  // postgres - computed: false, optional: true, required: false
  private _postgres = new AppResourcesPostgresOutputReference(this, "postgres");
  public get postgres() {
    return this._postgres;
  }
  public putPostgres(value: AppResourcesPostgres) {
    this._postgres.internalValue = value;
  }
  public resetPostgres() {
    this._postgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInput() {
    return this._postgres.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new AppResourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: AppResourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // serving_endpoint - computed: false, optional: true, required: false
  private _servingEndpoint = new AppResourcesServingEndpointOutputReference(this, "serving_endpoint");
  public get servingEndpoint() {
    return this._servingEndpoint;
  }
  public putServingEndpoint(value: AppResourcesServingEndpoint) {
    this._servingEndpoint.internalValue = value;
  }
  public resetServingEndpoint() {
    this._servingEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingEndpointInput() {
    return this._servingEndpoint.internalValue;
  }

  // sql_warehouse - computed: false, optional: true, required: false
  private _sqlWarehouse = new AppResourcesSqlWarehouseOutputReference(this, "sql_warehouse");
  public get sqlWarehouse() {
    return this._sqlWarehouse;
  }
  public putSqlWarehouse(value: AppResourcesSqlWarehouse) {
    this._sqlWarehouse.internalValue = value;
  }
  public resetSqlWarehouse() {
    this._sqlWarehouse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlWarehouseInput() {
    return this._sqlWarehouse.internalValue;
  }

  // uc_securable - computed: false, optional: true, required: false
  private _ucSecurable = new AppResourcesUcSecurableOutputReference(this, "uc_securable");
  public get ucSecurable() {
    return this._ucSecurable;
  }
  public putUcSecurable(value: AppResourcesUcSecurable) {
    this._ucSecurable.internalValue = value;
  }
  public resetUcSecurable() {
    this._ucSecurable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucSecurableInput() {
    return this._ucSecurable.internalValue;
  }
}

export class AppResourcesList extends cdktn.ComplexList {
  public internalValue? : AppResources[] | cdktn.IResolvable

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
  public get(index: number): AppResourcesOutputReference {
    return new AppResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppTelemetryExportDestinationsUnityCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#logs_table App#logs_table}
  */
  readonly logsTable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#metrics_table App#metrics_table}
  */
  readonly metricsTable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#traces_table App#traces_table}
  */
  readonly tracesTable: string;
}

export function appTelemetryExportDestinationsUnityCatalogToTerraform(struct?: AppTelemetryExportDestinationsUnityCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logs_table: cdktn.stringToTerraform(struct!.logsTable),
    metrics_table: cdktn.stringToTerraform(struct!.metricsTable),
    traces_table: cdktn.stringToTerraform(struct!.tracesTable),
  }
}


export function appTelemetryExportDestinationsUnityCatalogToHclTerraform(struct?: AppTelemetryExportDestinationsUnityCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logs_table: {
      value: cdktn.stringToHclTerraform(struct!.logsTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_table: {
      value: cdktn.stringToHclTerraform(struct!.metricsTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traces_table: {
      value: cdktn.stringToHclTerraform(struct!.tracesTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTelemetryExportDestinationsUnityCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppTelemetryExportDestinationsUnityCatalog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logsTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsTable = this._logsTable;
    }
    if (this._metricsTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsTable = this._metricsTable;
    }
    if (this._tracesTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracesTable = this._tracesTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppTelemetryExportDestinationsUnityCatalog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logsTable = undefined;
      this._metricsTable = undefined;
      this._tracesTable = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logsTable = value.logsTable;
      this._metricsTable = value.metricsTable;
      this._tracesTable = value.tracesTable;
    }
  }

  // logs_table - computed: false, optional: false, required: true
  private _logsTable?: string; 
  public get logsTable() {
    return this.getStringAttribute('logs_table');
  }
  public set logsTable(value: string) {
    this._logsTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logsTableInput() {
    return this._logsTable;
  }

  // metrics_table - computed: false, optional: false, required: true
  private _metricsTable?: string; 
  public get metricsTable() {
    return this.getStringAttribute('metrics_table');
  }
  public set metricsTable(value: string) {
    this._metricsTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsTableInput() {
    return this._metricsTable;
  }

  // traces_table - computed: false, optional: false, required: true
  private _tracesTable?: string; 
  public get tracesTable() {
    return this.getStringAttribute('traces_table');
  }
  public set tracesTable(value: string) {
    this._tracesTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tracesTableInput() {
    return this._tracesTable;
  }
}
export interface AppTelemetryExportDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#unity_catalog App#unity_catalog}
  */
  readonly unityCatalog?: AppTelemetryExportDestinationsUnityCatalog;
}

export function appTelemetryExportDestinationsToTerraform(struct?: AppTelemetryExportDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unity_catalog: appTelemetryExportDestinationsUnityCatalogToTerraform(struct!.unityCatalog),
  }
}


export function appTelemetryExportDestinationsToHclTerraform(struct?: AppTelemetryExportDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unity_catalog: {
      value: appTelemetryExportDestinationsUnityCatalogToHclTerraform(struct!.unityCatalog),
      isBlock: true,
      type: "struct",
      storageClassType: "AppTelemetryExportDestinationsUnityCatalog",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppTelemetryExportDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AppTelemetryExportDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unityCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unityCatalog = this._unityCatalog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppTelemetryExportDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unityCatalog.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unityCatalog.internalValue = value.unityCatalog;
    }
  }

  // unity_catalog - computed: false, optional: true, required: false
  private _unityCatalog = new AppTelemetryExportDestinationsUnityCatalogOutputReference(this, "unity_catalog");
  public get unityCatalog() {
    return this._unityCatalog;
  }
  public putUnityCatalog(value: AppTelemetryExportDestinationsUnityCatalog) {
    this._unityCatalog.internalValue = value;
  }
  public resetUnityCatalog() {
    this._unityCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unityCatalogInput() {
    return this._unityCatalog.internalValue;
  }
}

export class AppTelemetryExportDestinationsList extends cdktn.ComplexList {
  public internalValue? : AppTelemetryExportDestinations[] | cdktn.IResolvable

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
  public get(index: number): AppTelemetryExportDestinationsOutputReference {
    return new AppTelemetryExportDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app databricks_app}
*/
export class App extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a App resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the App to import
  * @param importFromId The id of the existing App that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the App to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/resources/app databricks_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfig
  */
  public constructor(scope: Construct, id: string, config: AppConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_app',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.113.0',
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
    this._budgetPolicyId = config.budgetPolicyId;
    this._computeSize = config.computeSize;
    this._description = config.description;
    this._gitRepository.internalValue = config.gitRepository;
    this._name = config.name;
    this._noCompute = config.noCompute;
    this._providerConfig.internalValue = config.providerConfig;
    this._resources.internalValue = config.resources;
    this._space = config.space;
    this._telemetryExportDestinations.internalValue = config.telemetryExportDestinations;
    this._usagePolicyId = config.usagePolicyId;
    this._userApiScopes = config.userApiScopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_deployment - computed: true, optional: false, required: false
  private _activeDeployment = new AppActiveDeploymentOutputReference(this, "active_deployment");
  public get activeDeployment() {
    return this._activeDeployment;
  }

  // app_status - computed: true, optional: false, required: false
  private _appStatus = new AppAppStatusOutputReference(this, "app_status");
  public get appStatus() {
    return this._appStatus;
  }

  // budget_policy_id - computed: false, optional: true, required: false
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

  // compute_size - computed: true, optional: true, required: false
  private _computeSize?: string; 
  public get computeSize() {
    return this.getStringAttribute('compute_size');
  }
  public set computeSize(value: string) {
    this._computeSize = value;
  }
  public resetComputeSize() {
    this._computeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeSizeInput() {
    return this._computeSize;
  }

  // compute_status - computed: true, optional: false, required: false
  private _computeStatus = new AppComputeStatusOutputReference(this, "compute_status");
  public get computeStatus() {
    return this._computeStatus;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // default_source_code_path - computed: true, optional: false, required: false
  public get defaultSourceCodePath() {
    return this.getStringAttribute('default_source_code_path');
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

  // effective_budget_policy_id - computed: true, optional: false, required: false
  public get effectiveBudgetPolicyId() {
    return this.getStringAttribute('effective_budget_policy_id');
  }

  // effective_usage_policy_id - computed: true, optional: false, required: false
  public get effectiveUsagePolicyId() {
    return this.getStringAttribute('effective_usage_policy_id');
  }

  // effective_user_api_scopes - computed: true, optional: false, required: false
  public get effectiveUserApiScopes() {
    return this.getListAttribute('effective_user_api_scopes');
  }

  // git_repository - computed: false, optional: true, required: false
  private _gitRepository = new AppGitRepositoryOutputReference(this, "git_repository");
  public get gitRepository() {
    return this._gitRepository;
  }
  public putGitRepository(value: AppGitRepository) {
    this._gitRepository.internalValue = value;
  }
  public resetGitRepository() {
    this._gitRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryInput() {
    return this._gitRepository.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // no_compute - computed: false, optional: true, required: false
  private _noCompute?: boolean | cdktn.IResolvable; 
  public get noCompute() {
    return this.getBooleanAttribute('no_compute');
  }
  public set noCompute(value: boolean | cdktn.IResolvable) {
    this._noCompute = value;
  }
  public resetNoCompute() {
    this._noCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noComputeInput() {
    return this._noCompute;
  }

  // oauth2_app_client_id - computed: true, optional: false, required: false
  public get oauth2AppClientId() {
    return this.getStringAttribute('oauth2_app_client_id');
  }

  // oauth2_app_integration_id - computed: true, optional: false, required: false
  public get oauth2AppIntegrationId() {
    return this.getStringAttribute('oauth2_app_integration_id');
  }

  // pending_deployment - computed: true, optional: false, required: false
  private _pendingDeployment = new AppPendingDeploymentOutputReference(this, "pending_deployment");
  public get pendingDeployment() {
    return this._pendingDeployment;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new AppProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: AppProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new AppResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: AppResources[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // service_principal_client_id - computed: true, optional: false, required: false
  public get servicePrincipalClientId() {
    return this.getStringAttribute('service_principal_client_id');
  }

  // service_principal_id - computed: true, optional: false, required: false
  public get servicePrincipalId() {
    return this.getNumberAttribute('service_principal_id');
  }

  // service_principal_name - computed: true, optional: false, required: false
  public get servicePrincipalName() {
    return this.getStringAttribute('service_principal_name');
  }

  // space - computed: false, optional: true, required: false
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  public resetSpace() {
    this._space = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // telemetry_export_destinations - computed: false, optional: true, required: false
  private _telemetryExportDestinations = new AppTelemetryExportDestinationsList(this, "telemetry_export_destinations", false);
  public get telemetryExportDestinations() {
    return this._telemetryExportDestinations;
  }
  public putTelemetryExportDestinations(value: AppTelemetryExportDestinations[] | cdktn.IResolvable) {
    this._telemetryExportDestinations.internalValue = value;
  }
  public resetTelemetryExportDestinations() {
    this._telemetryExportDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryExportDestinationsInput() {
    return this._telemetryExportDestinations.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updater - computed: true, optional: false, required: false
  public get updater() {
    return this.getStringAttribute('updater');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // usage_policy_id - computed: false, optional: true, required: false
  private _usagePolicyId?: string; 
  public get usagePolicyId() {
    return this.getStringAttribute('usage_policy_id');
  }
  public set usagePolicyId(value: string) {
    this._usagePolicyId = value;
  }
  public resetUsagePolicyId() {
    this._usagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePolicyIdInput() {
    return this._usagePolicyId;
  }

  // user_api_scopes - computed: false, optional: true, required: false
  private _userApiScopes?: string[]; 
  public get userApiScopes() {
    return this.getListAttribute('user_api_scopes');
  }
  public set userApiScopes(value: string[]) {
    this._userApiScopes = value;
  }
  public resetUserApiScopes() {
    this._userApiScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userApiScopesInput() {
    return this._userApiScopes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      budget_policy_id: cdktn.stringToTerraform(this._budgetPolicyId),
      compute_size: cdktn.stringToTerraform(this._computeSize),
      description: cdktn.stringToTerraform(this._description),
      git_repository: appGitRepositoryToTerraform(this._gitRepository.internalValue),
      name: cdktn.stringToTerraform(this._name),
      no_compute: cdktn.booleanToTerraform(this._noCompute),
      provider_config: appProviderConfigToTerraform(this._providerConfig.internalValue),
      resources: cdktn.listMapper(appResourcesToTerraform, false)(this._resources.internalValue),
      space: cdktn.stringToTerraform(this._space),
      telemetry_export_destinations: cdktn.listMapper(appTelemetryExportDestinationsToTerraform, false)(this._telemetryExportDestinations.internalValue),
      usage_policy_id: cdktn.stringToTerraform(this._usagePolicyId),
      user_api_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._userApiScopes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      budget_policy_id: {
        value: cdktn.stringToHclTerraform(this._budgetPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_size: {
        value: cdktn.stringToHclTerraform(this._computeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      git_repository: {
        value: appGitRepositoryToHclTerraform(this._gitRepository.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppGitRepository",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_compute: {
        value: cdktn.booleanToHclTerraform(this._noCompute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      provider_config: {
        value: appProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppProviderConfig",
      },
      resources: {
        value: cdktn.listMapperHcl(appResourcesToHclTerraform, false)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppResourcesList",
      },
      space: {
        value: cdktn.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      telemetry_export_destinations: {
        value: cdktn.listMapperHcl(appTelemetryExportDestinationsToHclTerraform, false)(this._telemetryExportDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppTelemetryExportDestinationsList",
      },
      usage_policy_id: {
        value: cdktn.stringToHclTerraform(this._usagePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_api_scopes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._userApiScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
