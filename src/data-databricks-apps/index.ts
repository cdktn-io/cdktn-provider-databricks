/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAppsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#provider_config DataDatabricksApps#provider_config}
  */
  readonly providerConfig?: DataDatabricksAppsProviderConfig;
}
export interface DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function dataDatabricksAppsAppActiveDeploymentDeploymentArtifactsToTerraform(struct?: DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
  }
}


export function dataDatabricksAppsAppActiveDeploymentDeploymentArtifactsToHclTerraform(struct?: DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts | undefined) {
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
export interface DataDatabricksAppsAppActiveDeploymentEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#name DataDatabricksApps#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#value DataDatabricksApps#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}
  */
  readonly valueFrom?: string;
}

export function dataDatabricksAppsAppActiveDeploymentEnvVarsToTerraform(struct?: DataDatabricksAppsAppActiveDeploymentEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
    value_from: cdktn.stringToTerraform(struct!.valueFrom),
  }
}


export function dataDatabricksAppsAppActiveDeploymentEnvVarsToHclTerraform(struct?: DataDatabricksAppsAppActiveDeploymentEnvVars | cdktn.IResolvable): any {
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

export class DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAppsAppActiveDeploymentEnvVars | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppActiveDeploymentEnvVars | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAppsAppActiveDeploymentEnvVarsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAppsAppActiveDeploymentEnvVars[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference {
    return new DataDatabricksAppsAppActiveDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#provider DataDatabricksApps#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#url DataDatabricksApps#url}
  */
  readonly url: string;
}

export function dataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryToTerraform(struct?: DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provider: cdktn.stringToTerraform(struct!.provider),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function dataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryToHclTerraform(struct?: DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppActiveDeploymentGitSourceGitRepository | undefined) {
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
export interface DataDatabricksAppsAppActiveDeploymentGitSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#branch DataDatabricksApps#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#commit DataDatabricksApps#commit}
  */
  readonly commit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}
  */
  readonly sourceCodePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#tag DataDatabricksApps#tag}
  */
  readonly tag?: string;
}

export function dataDatabricksAppsAppActiveDeploymentGitSourceToTerraform(struct?: DataDatabricksAppsAppActiveDeploymentGitSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    branch: cdktn.stringToTerraform(struct!.branch),
    commit: cdktn.stringToTerraform(struct!.commit),
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
    tag: cdktn.stringToTerraform(struct!.tag),
  }
}


export function dataDatabricksAppsAppActiveDeploymentGitSourceToHclTerraform(struct?: DataDatabricksAppsAppActiveDeploymentGitSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppActiveDeploymentGitSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppActiveDeploymentGitSource | cdktn.IResolvable | undefined) {
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
  private _gitRepository = new DataDatabricksAppsAppActiveDeploymentGitSourceGitRepositoryOutputReference(this, "git_repository");
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
export interface DataDatabricksAppsAppActiveDeploymentStatus {
}

export function dataDatabricksAppsAppActiveDeploymentStatusToTerraform(struct?: DataDatabricksAppsAppActiveDeploymentStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksAppsAppActiveDeploymentStatusToHclTerraform(struct?: DataDatabricksAppsAppActiveDeploymentStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAppsAppActiveDeploymentStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppActiveDeploymentStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsAppActiveDeploymentStatus | undefined) {
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
export interface DataDatabricksAppsAppActiveDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#command DataDatabricksApps#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}
  */
  readonly envVars?: DataDatabricksAppsAppActiveDeploymentEnvVars[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}
  */
  readonly gitSource?: DataDatabricksAppsAppActiveDeploymentGitSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#mode DataDatabricksApps#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function dataDatabricksAppsAppActiveDeploymentToTerraform(struct?: DataDatabricksAppsAppActiveDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    deployment_id: cdktn.stringToTerraform(struct!.deploymentId),
    env_vars: cdktn.listMapper(dataDatabricksAppsAppActiveDeploymentEnvVarsToTerraform, false)(struct!.envVars),
    git_source: dataDatabricksAppsAppActiveDeploymentGitSourceToTerraform(struct!.gitSource),
    mode: cdktn.stringToTerraform(struct!.mode),
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
  }
}


export function dataDatabricksAppsAppActiveDeploymentToHclTerraform(struct?: DataDatabricksAppsAppActiveDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(dataDatabricksAppsAppActiveDeploymentEnvVarsToHclTerraform, false)(struct!.envVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAppsAppActiveDeploymentEnvVarsList",
    },
    git_source: {
      value: dataDatabricksAppsAppActiveDeploymentGitSourceToHclTerraform(struct!.gitSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppActiveDeploymentGitSource",
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

export class DataDatabricksAppsAppActiveDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppActiveDeployment | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppActiveDeployment | undefined) {
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
  private _deploymentArtifacts = new DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference(this, "deployment_artifacts");
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
  private _envVars = new DataDatabricksAppsAppActiveDeploymentEnvVarsList(this, "env_vars", false);
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: DataDatabricksAppsAppActiveDeploymentEnvVars[] | cdktn.IResolvable) {
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
  private _gitSource = new DataDatabricksAppsAppActiveDeploymentGitSourceOutputReference(this, "git_source");
  public get gitSource() {
    return this._gitSource;
  }
  public putGitSource(value: DataDatabricksAppsAppActiveDeploymentGitSource) {
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
  private _status = new DataDatabricksAppsAppActiveDeploymentStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}
export interface DataDatabricksAppsAppAppStatus {
}

export function dataDatabricksAppsAppAppStatusToTerraform(struct?: DataDatabricksAppsAppAppStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksAppsAppAppStatusToHclTerraform(struct?: DataDatabricksAppsAppAppStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAppsAppAppStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppAppStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsAppAppStatus | undefined) {
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

  // running_instances - computed: true, optional: false, required: false
  public get runningInstances() {
    return this.getNumberAttribute('running_instances');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataDatabricksAppsAppComputeStatus {
}

export function dataDatabricksAppsAppComputeStatusToTerraform(struct?: DataDatabricksAppsAppComputeStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksAppsAppComputeStatusToHclTerraform(struct?: DataDatabricksAppsAppComputeStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAppsAppComputeStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppComputeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsAppComputeStatus | undefined) {
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
export interface DataDatabricksAppsAppGitRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#provider DataDatabricksApps#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#url DataDatabricksApps#url}
  */
  readonly url: string;
}

export function dataDatabricksAppsAppGitRepositoryToTerraform(struct?: DataDatabricksAppsAppGitRepository | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provider: cdktn.stringToTerraform(struct!.provider),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function dataDatabricksAppsAppGitRepositoryToHclTerraform(struct?: DataDatabricksAppsAppGitRepository | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppGitRepositoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppGitRepository | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppGitRepository | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function dataDatabricksAppsAppPendingDeploymentDeploymentArtifactsToTerraform(struct?: DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
  }
}


export function dataDatabricksAppsAppPendingDeploymentDeploymentArtifactsToHclTerraform(struct?: DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceCodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodePath = this._sourceCodePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts | undefined) {
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
export interface DataDatabricksAppsAppPendingDeploymentEnvVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#name DataDatabricksApps#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#value DataDatabricksApps#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#value_from DataDatabricksApps#value_from}
  */
  readonly valueFrom?: string;
}

export function dataDatabricksAppsAppPendingDeploymentEnvVarsToTerraform(struct?: DataDatabricksAppsAppPendingDeploymentEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
    value_from: cdktn.stringToTerraform(struct!.valueFrom),
  }
}


export function dataDatabricksAppsAppPendingDeploymentEnvVarsToHclTerraform(struct?: DataDatabricksAppsAppPendingDeploymentEnvVars | cdktn.IResolvable): any {
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

export class DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAppsAppPendingDeploymentEnvVars | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppPendingDeploymentEnvVars | cdktn.IResolvable | undefined) {
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

export class DataDatabricksAppsAppPendingDeploymentEnvVarsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAppsAppPendingDeploymentEnvVars[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference {
    return new DataDatabricksAppsAppPendingDeploymentEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#provider DataDatabricksApps#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#url DataDatabricksApps#url}
  */
  readonly url: string;
}

export function dataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryToTerraform(struct?: DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provider: cdktn.stringToTerraform(struct!.provider),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function dataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryToHclTerraform(struct?: DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppPendingDeploymentGitSourceGitRepository | undefined) {
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
export interface DataDatabricksAppsAppPendingDeploymentGitSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#branch DataDatabricksApps#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#commit DataDatabricksApps#commit}
  */
  readonly commit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}
  */
  readonly sourceCodePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#tag DataDatabricksApps#tag}
  */
  readonly tag?: string;
}

export function dataDatabricksAppsAppPendingDeploymentGitSourceToTerraform(struct?: DataDatabricksAppsAppPendingDeploymentGitSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    branch: cdktn.stringToTerraform(struct!.branch),
    commit: cdktn.stringToTerraform(struct!.commit),
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
    tag: cdktn.stringToTerraform(struct!.tag),
  }
}


export function dataDatabricksAppsAppPendingDeploymentGitSourceToHclTerraform(struct?: DataDatabricksAppsAppPendingDeploymentGitSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppPendingDeploymentGitSource | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppPendingDeploymentGitSource | cdktn.IResolvable | undefined) {
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
  private _gitRepository = new DataDatabricksAppsAppPendingDeploymentGitSourceGitRepositoryOutputReference(this, "git_repository");
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
export interface DataDatabricksAppsAppPendingDeploymentStatus {
}

export function dataDatabricksAppsAppPendingDeploymentStatusToTerraform(struct?: DataDatabricksAppsAppPendingDeploymentStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksAppsAppPendingDeploymentStatusToHclTerraform(struct?: DataDatabricksAppsAppPendingDeploymentStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAppsAppPendingDeploymentStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppPendingDeploymentStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsAppPendingDeploymentStatus | undefined) {
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
export interface DataDatabricksAppsAppPendingDeployment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#command DataDatabricksApps#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#env_vars DataDatabricksApps#env_vars}
  */
  readonly envVars?: DataDatabricksAppsAppPendingDeploymentEnvVars[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#git_source DataDatabricksApps#git_source}
  */
  readonly gitSource?: DataDatabricksAppsAppPendingDeploymentGitSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#mode DataDatabricksApps#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}
  */
  readonly sourceCodePath?: string;
}

export function dataDatabricksAppsAppPendingDeploymentToTerraform(struct?: DataDatabricksAppsAppPendingDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    deployment_id: cdktn.stringToTerraform(struct!.deploymentId),
    env_vars: cdktn.listMapper(dataDatabricksAppsAppPendingDeploymentEnvVarsToTerraform, false)(struct!.envVars),
    git_source: dataDatabricksAppsAppPendingDeploymentGitSourceToTerraform(struct!.gitSource),
    mode: cdktn.stringToTerraform(struct!.mode),
    source_code_path: cdktn.stringToTerraform(struct!.sourceCodePath),
  }
}


export function dataDatabricksAppsAppPendingDeploymentToHclTerraform(struct?: DataDatabricksAppsAppPendingDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
      value: cdktn.listMapperHcl(dataDatabricksAppsAppPendingDeploymentEnvVarsToHclTerraform, false)(struct!.envVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAppsAppPendingDeploymentEnvVarsList",
    },
    git_source: {
      value: dataDatabricksAppsAppPendingDeploymentGitSourceToHclTerraform(struct!.gitSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppPendingDeploymentGitSource",
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

export class DataDatabricksAppsAppPendingDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppPendingDeployment | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppPendingDeployment | undefined) {
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
  private _deploymentArtifacts = new DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference(this, "deployment_artifacts");
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
  private _envVars = new DataDatabricksAppsAppPendingDeploymentEnvVarsList(this, "env_vars", false);
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: DataDatabricksAppsAppPendingDeploymentEnvVars[] | cdktn.IResolvable) {
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
  private _gitSource = new DataDatabricksAppsAppPendingDeploymentGitSourceOutputReference(this, "git_source");
  public get gitSource() {
    return this._gitSource;
  }
  public putGitSource(value: DataDatabricksAppsAppPendingDeploymentGitSource) {
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
  private _status = new DataDatabricksAppsAppPendingDeploymentStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}
export interface DataDatabricksAppsAppResourcesApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#name DataDatabricksApps#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#permission DataDatabricksApps#permission}
  */
  readonly permission?: string;
}

export function dataDatabricksAppsAppResourcesAppToTerraform(struct?: DataDatabricksAppsAppResourcesApp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsAppResourcesAppToHclTerraform(struct?: DataDatabricksAppsAppResourcesApp | cdktn.IResolvable): any {
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

export class DataDatabricksAppsAppResourcesAppOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppResourcesApp | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppResourcesApp | cdktn.IResolvable | undefined) {
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

  // permission - computed: true, optional: true, required: false
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
export interface DataDatabricksAppsAppResourcesDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#database_name DataDatabricksApps#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#instance_name DataDatabricksApps#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#permission DataDatabricksApps#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsAppResourcesDatabaseToTerraform(struct?: DataDatabricksAppsAppResourcesDatabase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    instance_name: cdktn.stringToTerraform(struct!.instanceName),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsAppResourcesDatabaseToHclTerraform(struct?: DataDatabricksAppsAppResourcesDatabase | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppResourcesDatabaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppResourcesDatabase | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppResourcesDatabase | cdktn.IResolvable | undefined) {
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

  // database_name - computed: true, optional: false, required: true
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

  // instance_name - computed: true, optional: false, required: true
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

  // permission - computed: true, optional: false, required: true
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
export interface DataDatabricksAppsAppResourcesExperiment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#experiment_id DataDatabricksApps#experiment_id}
  */
  readonly experimentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#permission DataDatabricksApps#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsAppResourcesExperimentToTerraform(struct?: DataDatabricksAppsAppResourcesExperiment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    experiment_id: cdktn.stringToTerraform(struct!.experimentId),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsAppResourcesExperimentToHclTerraform(struct?: DataDatabricksAppsAppResourcesExperiment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppResourcesExperimentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppResourcesExperiment | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppResourcesExperiment | cdktn.IResolvable | undefined) {
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

  // experiment_id - computed: true, optional: false, required: true
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

  // permission - computed: true, optional: false, required: true
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
export interface DataDatabricksAppsAppResourcesGenieSpace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#name DataDatabricksApps#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#permission DataDatabricksApps#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#space_id DataDatabricksApps#space_id}
  */
  readonly spaceId: string;
}

export function dataDatabricksAppsAppResourcesGenieSpaceToTerraform(struct?: DataDatabricksAppsAppResourcesGenieSpace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    permission: cdktn.stringToTerraform(struct!.permission),
    space_id: cdktn.stringToTerraform(struct!.spaceId),
  }
}


export function dataDatabricksAppsAppResourcesGenieSpaceToHclTerraform(struct?: DataDatabricksAppsAppResourcesGenieSpace | cdktn.IResolvable): any {
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

export class DataDatabricksAppsAppResourcesGenieSpaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppResourcesGenieSpace | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppResourcesGenieSpace | cdktn.IResolvable | undefined) {
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

  // permission - computed: true, optional: false, required: true
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

  // space_id - computed: true, optional: false, required: true
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
export interface DataDatabricksAppsAppResourcesJob {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#id DataDatabricksApps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#permission DataDatabricksApps#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsAppResourcesJobToTerraform(struct?: DataDatabricksAppsAppResourcesJob | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsAppResourcesJobToHclTerraform(struct?: DataDatabricksAppsAppResourcesJob | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppResourcesJobOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppResourcesJob | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppResourcesJob | cdktn.IResolvable | undefined) {
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

  // id - computed: true, optional: false, required: true
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

  // permission - computed: true, optional: false, required: true
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
export interface DataDatabricksAppsAppResourcesPostgres {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#branch DataDatabricksApps#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#database DataDatabricksApps#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#permission DataDatabricksApps#permission}
  */
  readonly permission?: string;
}

export function dataDatabricksAppsAppResourcesPostgresToTerraform(struct?: DataDatabricksAppsAppResourcesPostgres | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    branch: cdktn.stringToTerraform(struct!.branch),
    database: cdktn.stringToTerraform(struct!.database),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsAppResourcesPostgresToHclTerraform(struct?: DataDatabricksAppsAppResourcesPostgres | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppResourcesPostgresOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppResourcesPostgres | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppResourcesPostgres | cdktn.IResolvable | undefined) {
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

  // database - computed: true, optional: true, required: false
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

  // permission - computed: true, optional: true, required: false
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
export interface DataDatabricksAppsAppResourcesSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#key DataDatabricksApps#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#permission DataDatabricksApps#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#scope DataDatabricksApps#scope}
  */
  readonly scope: string;
}

export function dataDatabricksAppsAppResourcesSecretToTerraform(struct?: DataDatabricksAppsAppResourcesSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    permission: cdktn.stringToTerraform(struct!.permission),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function dataDatabricksAppsAppResourcesSecretToHclTerraform(struct?: DataDatabricksAppsAppResourcesSecret | cdktn.IResolvable): any {
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

export class DataDatabricksAppsAppResourcesSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppResourcesSecret | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppResourcesSecret | cdktn.IResolvable | undefined) {
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

  // permission - computed: true, optional: false, required: true
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

  // scope - computed: true, optional: false, required: true
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
export interface DataDatabricksAppsAppResourcesServingEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#name DataDatabricksApps#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#permission DataDatabricksApps#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsAppResourcesServingEndpointToTerraform(struct?: DataDatabricksAppsAppResourcesServingEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsAppResourcesServingEndpointToHclTerraform(struct?: DataDatabricksAppsAppResourcesServingEndpoint | cdktn.IResolvable): any {
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

export class DataDatabricksAppsAppResourcesServingEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppResourcesServingEndpoint | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppResourcesServingEndpoint | cdktn.IResolvable | undefined) {
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

  // permission - computed: true, optional: false, required: true
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
export interface DataDatabricksAppsAppResourcesSqlWarehouse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#id DataDatabricksApps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#permission DataDatabricksApps#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsAppResourcesSqlWarehouseToTerraform(struct?: DataDatabricksAppsAppResourcesSqlWarehouse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsAppResourcesSqlWarehouseToHclTerraform(struct?: DataDatabricksAppsAppResourcesSqlWarehouse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppResourcesSqlWarehouseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppResourcesSqlWarehouse | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppResourcesSqlWarehouse | cdktn.IResolvable | undefined) {
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

  // id - computed: true, optional: false, required: true
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

  // permission - computed: true, optional: false, required: true
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
export interface DataDatabricksAppsAppResourcesUcSecurable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#permission DataDatabricksApps#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#securable_full_name DataDatabricksApps#securable_full_name}
  */
  readonly securableFullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#securable_type DataDatabricksApps#securable_type}
  */
  readonly securableType: string;
}

export function dataDatabricksAppsAppResourcesUcSecurableToTerraform(struct?: DataDatabricksAppsAppResourcesUcSecurable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    permission: cdktn.stringToTerraform(struct!.permission),
    securable_full_name: cdktn.stringToTerraform(struct!.securableFullName),
    securable_type: cdktn.stringToTerraform(struct!.securableType),
  }
}


export function dataDatabricksAppsAppResourcesUcSecurableToHclTerraform(struct?: DataDatabricksAppsAppResourcesUcSecurable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppResourcesUcSecurableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppResourcesUcSecurable | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppResourcesUcSecurable | cdktn.IResolvable | undefined) {
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

  // permission - computed: true, optional: false, required: true
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

  // securable_full_name - computed: true, optional: false, required: true
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

  // securable_type - computed: true, optional: false, required: true
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
export interface DataDatabricksAppsAppResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#app DataDatabricksApps#app}
  */
  readonly app?: DataDatabricksAppsAppResourcesApp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#database DataDatabricksApps#database}
  */
  readonly database?: DataDatabricksAppsAppResourcesDatabase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#description DataDatabricksApps#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#experiment DataDatabricksApps#experiment}
  */
  readonly experiment?: DataDatabricksAppsAppResourcesExperiment;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#genie_space DataDatabricksApps#genie_space}
  */
  readonly genieSpace?: DataDatabricksAppsAppResourcesGenieSpace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#job DataDatabricksApps#job}
  */
  readonly job?: DataDatabricksAppsAppResourcesJob;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#name DataDatabricksApps#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#postgres DataDatabricksApps#postgres}
  */
  readonly postgres?: DataDatabricksAppsAppResourcesPostgres;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#secret DataDatabricksApps#secret}
  */
  readonly secret?: DataDatabricksAppsAppResourcesSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#serving_endpoint DataDatabricksApps#serving_endpoint}
  */
  readonly servingEndpoint?: DataDatabricksAppsAppResourcesServingEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#sql_warehouse DataDatabricksApps#sql_warehouse}
  */
  readonly sqlWarehouse?: DataDatabricksAppsAppResourcesSqlWarehouse;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#uc_securable DataDatabricksApps#uc_securable}
  */
  readonly ucSecurable?: DataDatabricksAppsAppResourcesUcSecurable;
}

export function dataDatabricksAppsAppResourcesToTerraform(struct?: DataDatabricksAppsAppResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app: dataDatabricksAppsAppResourcesAppToTerraform(struct!.app),
    database: dataDatabricksAppsAppResourcesDatabaseToTerraform(struct!.database),
    description: cdktn.stringToTerraform(struct!.description),
    experiment: dataDatabricksAppsAppResourcesExperimentToTerraform(struct!.experiment),
    genie_space: dataDatabricksAppsAppResourcesGenieSpaceToTerraform(struct!.genieSpace),
    job: dataDatabricksAppsAppResourcesJobToTerraform(struct!.job),
    name: cdktn.stringToTerraform(struct!.name),
    postgres: dataDatabricksAppsAppResourcesPostgresToTerraform(struct!.postgres),
    secret: dataDatabricksAppsAppResourcesSecretToTerraform(struct!.secret),
    serving_endpoint: dataDatabricksAppsAppResourcesServingEndpointToTerraform(struct!.servingEndpoint),
    sql_warehouse: dataDatabricksAppsAppResourcesSqlWarehouseToTerraform(struct!.sqlWarehouse),
    uc_securable: dataDatabricksAppsAppResourcesUcSecurableToTerraform(struct!.ucSecurable),
  }
}


export function dataDatabricksAppsAppResourcesToHclTerraform(struct?: DataDatabricksAppsAppResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app: {
      value: dataDatabricksAppsAppResourcesAppToHclTerraform(struct!.app),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppResourcesApp",
    },
    database: {
      value: dataDatabricksAppsAppResourcesDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppResourcesDatabase",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    experiment: {
      value: dataDatabricksAppsAppResourcesExperimentToHclTerraform(struct!.experiment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppResourcesExperiment",
    },
    genie_space: {
      value: dataDatabricksAppsAppResourcesGenieSpaceToHclTerraform(struct!.genieSpace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppResourcesGenieSpace",
    },
    job: {
      value: dataDatabricksAppsAppResourcesJobToHclTerraform(struct!.job),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppResourcesJob",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres: {
      value: dataDatabricksAppsAppResourcesPostgresToHclTerraform(struct!.postgres),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppResourcesPostgres",
    },
    secret: {
      value: dataDatabricksAppsAppResourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppResourcesSecret",
    },
    serving_endpoint: {
      value: dataDatabricksAppsAppResourcesServingEndpointToHclTerraform(struct!.servingEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppResourcesServingEndpoint",
    },
    sql_warehouse: {
      value: dataDatabricksAppsAppResourcesSqlWarehouseToHclTerraform(struct!.sqlWarehouse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppResourcesSqlWarehouse",
    },
    uc_securable: {
      value: dataDatabricksAppsAppResourcesUcSecurableToHclTerraform(struct!.ucSecurable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppResourcesUcSecurable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsAppResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAppsAppResources | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppResources | cdktn.IResolvable | undefined) {
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

  // app - computed: true, optional: true, required: false
  private _app = new DataDatabricksAppsAppResourcesAppOutputReference(this, "app");
  public get app() {
    return this._app;
  }
  public putApp(value: DataDatabricksAppsAppResourcesApp) {
    this._app.internalValue = value;
  }
  public resetApp() {
    this._app.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app.internalValue;
  }

  // database - computed: true, optional: true, required: false
  private _database = new DataDatabricksAppsAppResourcesDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: DataDatabricksAppsAppResourcesDatabase) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // experiment - computed: true, optional: true, required: false
  private _experiment = new DataDatabricksAppsAppResourcesExperimentOutputReference(this, "experiment");
  public get experiment() {
    return this._experiment;
  }
  public putExperiment(value: DataDatabricksAppsAppResourcesExperiment) {
    this._experiment.internalValue = value;
  }
  public resetExperiment() {
    this._experiment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentInput() {
    return this._experiment.internalValue;
  }

  // genie_space - computed: true, optional: true, required: false
  private _genieSpace = new DataDatabricksAppsAppResourcesGenieSpaceOutputReference(this, "genie_space");
  public get genieSpace() {
    return this._genieSpace;
  }
  public putGenieSpace(value: DataDatabricksAppsAppResourcesGenieSpace) {
    this._genieSpace.internalValue = value;
  }
  public resetGenieSpace() {
    this._genieSpace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genieSpaceInput() {
    return this._genieSpace.internalValue;
  }

  // job - computed: true, optional: true, required: false
  private _job = new DataDatabricksAppsAppResourcesJobOutputReference(this, "job");
  public get job() {
    return this._job;
  }
  public putJob(value: DataDatabricksAppsAppResourcesJob) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
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

  // postgres - computed: true, optional: true, required: false
  private _postgres = new DataDatabricksAppsAppResourcesPostgresOutputReference(this, "postgres");
  public get postgres() {
    return this._postgres;
  }
  public putPostgres(value: DataDatabricksAppsAppResourcesPostgres) {
    this._postgres.internalValue = value;
  }
  public resetPostgres() {
    this._postgres.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInput() {
    return this._postgres.internalValue;
  }

  // secret - computed: true, optional: true, required: false
  private _secret = new DataDatabricksAppsAppResourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataDatabricksAppsAppResourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // serving_endpoint - computed: true, optional: true, required: false
  private _servingEndpoint = new DataDatabricksAppsAppResourcesServingEndpointOutputReference(this, "serving_endpoint");
  public get servingEndpoint() {
    return this._servingEndpoint;
  }
  public putServingEndpoint(value: DataDatabricksAppsAppResourcesServingEndpoint) {
    this._servingEndpoint.internalValue = value;
  }
  public resetServingEndpoint() {
    this._servingEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingEndpointInput() {
    return this._servingEndpoint.internalValue;
  }

  // sql_warehouse - computed: true, optional: true, required: false
  private _sqlWarehouse = new DataDatabricksAppsAppResourcesSqlWarehouseOutputReference(this, "sql_warehouse");
  public get sqlWarehouse() {
    return this._sqlWarehouse;
  }
  public putSqlWarehouse(value: DataDatabricksAppsAppResourcesSqlWarehouse) {
    this._sqlWarehouse.internalValue = value;
  }
  public resetSqlWarehouse() {
    this._sqlWarehouse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlWarehouseInput() {
    return this._sqlWarehouse.internalValue;
  }

  // uc_securable - computed: true, optional: true, required: false
  private _ucSecurable = new DataDatabricksAppsAppResourcesUcSecurableOutputReference(this, "uc_securable");
  public get ucSecurable() {
    return this._ucSecurable;
  }
  public putUcSecurable(value: DataDatabricksAppsAppResourcesUcSecurable) {
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

export class DataDatabricksAppsAppResourcesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAppsAppResources[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAppsAppResourcesOutputReference {
    return new DataDatabricksAppsAppResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#logs_table DataDatabricksApps#logs_table}
  */
  readonly logsTable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#metrics_table DataDatabricksApps#metrics_table}
  */
  readonly metricsTable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#traces_table DataDatabricksApps#traces_table}
  */
  readonly tracesTable: string;
}

export function dataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogToTerraform(struct?: DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    logs_table: cdktn.stringToTerraform(struct!.logsTable),
    metrics_table: cdktn.stringToTerraform(struct!.metricsTable),
    traces_table: cdktn.stringToTerraform(struct!.tracesTable),
  }
}


export function dataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogToHclTerraform(struct?: DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog | cdktn.IResolvable | undefined) {
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

  // logs_table - computed: true, optional: false, required: true
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

  // metrics_table - computed: true, optional: false, required: true
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

  // traces_table - computed: true, optional: false, required: true
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
export interface DataDatabricksAppsAppTelemetryExportDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#unity_catalog DataDatabricksApps#unity_catalog}
  */
  readonly unityCatalog?: DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog;
}

export function dataDatabricksAppsAppTelemetryExportDestinationsToTerraform(struct?: DataDatabricksAppsAppTelemetryExportDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unity_catalog: dataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogToTerraform(struct!.unityCatalog),
  }
}


export function dataDatabricksAppsAppTelemetryExportDestinationsToHclTerraform(struct?: DataDatabricksAppsAppTelemetryExportDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unity_catalog: {
      value: dataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogToHclTerraform(struct!.unityCatalog),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsAppTelemetryExportDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAppsAppTelemetryExportDestinations | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsAppTelemetryExportDestinations | cdktn.IResolvable | undefined) {
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

  // unity_catalog - computed: true, optional: true, required: false
  private _unityCatalog = new DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalogOutputReference(this, "unity_catalog");
  public get unityCatalog() {
    return this._unityCatalog;
  }
  public putUnityCatalog(value: DataDatabricksAppsAppTelemetryExportDestinationsUnityCatalog) {
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

export class DataDatabricksAppsAppTelemetryExportDestinationsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAppsAppTelemetryExportDestinations[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAppsAppTelemetryExportDestinationsOutputReference {
    return new DataDatabricksAppsAppTelemetryExportDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAppsApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#budget_policy_id DataDatabricksApps#budget_policy_id}
  */
  readonly budgetPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#compute_max_instances DataDatabricksApps#compute_max_instances}
  */
  readonly computeMaxInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#compute_min_instances DataDatabricksApps#compute_min_instances}
  */
  readonly computeMinInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#compute_size DataDatabricksApps#compute_size}
  */
  readonly computeSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#description DataDatabricksApps#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#git_repository DataDatabricksApps#git_repository}
  */
  readonly gitRepository?: DataDatabricksAppsAppGitRepository;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#name DataDatabricksApps#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#resources DataDatabricksApps#resources}
  */
  readonly resources?: DataDatabricksAppsAppResources[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#space DataDatabricksApps#space}
  */
  readonly space?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#telemetry_export_destinations DataDatabricksApps#telemetry_export_destinations}
  */
  readonly telemetryExportDestinations?: DataDatabricksAppsAppTelemetryExportDestinations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#usage_policy_id DataDatabricksApps#usage_policy_id}
  */
  readonly usagePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#user_api_scopes DataDatabricksApps#user_api_scopes}
  */
  readonly userApiScopes?: string[];
}

export function dataDatabricksAppsAppToTerraform(struct?: DataDatabricksAppsApp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    budget_policy_id: cdktn.stringToTerraform(struct!.budgetPolicyId),
    compute_max_instances: cdktn.numberToTerraform(struct!.computeMaxInstances),
    compute_min_instances: cdktn.numberToTerraform(struct!.computeMinInstances),
    compute_size: cdktn.stringToTerraform(struct!.computeSize),
    description: cdktn.stringToTerraform(struct!.description),
    git_repository: dataDatabricksAppsAppGitRepositoryToTerraform(struct!.gitRepository),
    name: cdktn.stringToTerraform(struct!.name),
    resources: cdktn.listMapper(dataDatabricksAppsAppResourcesToTerraform, false)(struct!.resources),
    space: cdktn.stringToTerraform(struct!.space),
    telemetry_export_destinations: cdktn.listMapper(dataDatabricksAppsAppTelemetryExportDestinationsToTerraform, false)(struct!.telemetryExportDestinations),
    usage_policy_id: cdktn.stringToTerraform(struct!.usagePolicyId),
    user_api_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.userApiScopes),
  }
}


export function dataDatabricksAppsAppToHclTerraform(struct?: DataDatabricksAppsApp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    budget_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.budgetPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_max_instances: {
      value: cdktn.numberToHclTerraform(struct!.computeMaxInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compute_min_instances: {
      value: cdktn.numberToHclTerraform(struct!.computeMinInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compute_size: {
      value: cdktn.stringToHclTerraform(struct!.computeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_repository: {
      value: dataDatabricksAppsAppGitRepositoryToHclTerraform(struct!.gitRepository),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsAppGitRepository",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktn.listMapperHcl(dataDatabricksAppsAppResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAppsAppResourcesList",
    },
    space: {
      value: cdktn.stringToHclTerraform(struct!.space),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telemetry_export_destinations: {
      value: cdktn.listMapperHcl(dataDatabricksAppsAppTelemetryExportDestinationsToHclTerraform, false)(struct!.telemetryExportDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAppsAppTelemetryExportDestinationsList",
    },
    usage_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.usagePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_api_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.userApiScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsAppOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAppsApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._budgetPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.budgetPolicyId = this._budgetPolicyId;
    }
    if (this._computeMaxInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeMaxInstances = this._computeMaxInstances;
    }
    if (this._computeMinInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeMinInstances = this._computeMinInstances;
    }
    if (this._computeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeSize = this._computeSize;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._gitRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepository = this._gitRepository?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._space !== undefined) {
      hasAnyValues = true;
      internalValueResult.space = this._space;
    }
    if (this._telemetryExportDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetryExportDestinations = this._telemetryExportDestinations?.internalValue;
    }
    if (this._usagePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.usagePolicyId = this._usagePolicyId;
    }
    if (this._userApiScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.userApiScopes = this._userApiScopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._budgetPolicyId = undefined;
      this._computeMaxInstances = undefined;
      this._computeMinInstances = undefined;
      this._computeSize = undefined;
      this._description = undefined;
      this._gitRepository.internalValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
      this._space = undefined;
      this._telemetryExportDestinations.internalValue = undefined;
      this._usagePolicyId = undefined;
      this._userApiScopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._budgetPolicyId = value.budgetPolicyId;
      this._computeMaxInstances = value.computeMaxInstances;
      this._computeMinInstances = value.computeMinInstances;
      this._computeSize = value.computeSize;
      this._description = value.description;
      this._gitRepository.internalValue = value.gitRepository;
      this._name = value.name;
      this._resources.internalValue = value.resources;
      this._space = value.space;
      this._telemetryExportDestinations.internalValue = value.telemetryExportDestinations;
      this._usagePolicyId = value.usagePolicyId;
      this._userApiScopes = value.userApiScopes;
    }
  }

  // active_deployment - computed: true, optional: false, required: false
  private _activeDeployment = new DataDatabricksAppsAppActiveDeploymentOutputReference(this, "active_deployment");
  public get activeDeployment() {
    return this._activeDeployment;
  }

  // app_status - computed: true, optional: false, required: false
  private _appStatus = new DataDatabricksAppsAppAppStatusOutputReference(this, "app_status");
  public get appStatus() {
    return this._appStatus;
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

  // compute_max_instances - computed: true, optional: true, required: false
  private _computeMaxInstances?: number; 
  public get computeMaxInstances() {
    return this.getNumberAttribute('compute_max_instances');
  }
  public set computeMaxInstances(value: number) {
    this._computeMaxInstances = value;
  }
  public resetComputeMaxInstances() {
    this._computeMaxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMaxInstancesInput() {
    return this._computeMaxInstances;
  }

  // compute_min_instances - computed: true, optional: true, required: false
  private _computeMinInstances?: number; 
  public get computeMinInstances() {
    return this.getNumberAttribute('compute_min_instances');
  }
  public set computeMinInstances(value: number) {
    this._computeMinInstances = value;
  }
  public resetComputeMinInstances() {
    this._computeMinInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeMinInstancesInput() {
    return this._computeMinInstances;
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
  private _computeStatus = new DataDatabricksAppsAppComputeStatusOutputReference(this, "compute_status");
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

  // description - computed: true, optional: true, required: false
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

  // git_repository - computed: true, optional: true, required: false
  private _gitRepository = new DataDatabricksAppsAppGitRepositoryOutputReference(this, "git_repository");
  public get gitRepository() {
    return this._gitRepository;
  }
  public putGitRepository(value: DataDatabricksAppsAppGitRepository) {
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

  // oauth2_app_client_id - computed: true, optional: false, required: false
  public get oauth2AppClientId() {
    return this.getStringAttribute('oauth2_app_client_id');
  }

  // oauth2_app_integration_id - computed: true, optional: false, required: false
  public get oauth2AppIntegrationId() {
    return this.getStringAttribute('oauth2_app_integration_id');
  }

  // pending_deployment - computed: true, optional: false, required: false
  private _pendingDeployment = new DataDatabricksAppsAppPendingDeploymentOutputReference(this, "pending_deployment");
  public get pendingDeployment() {
    return this._pendingDeployment;
  }

  // resources - computed: true, optional: true, required: false
  private _resources = new DataDatabricksAppsAppResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataDatabricksAppsAppResources[] | cdktn.IResolvable) {
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

  // space - computed: true, optional: true, required: false
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

  // telemetry_export_destinations - computed: true, optional: true, required: false
  private _telemetryExportDestinations = new DataDatabricksAppsAppTelemetryExportDestinationsList(this, "telemetry_export_destinations", false);
  public get telemetryExportDestinations() {
    return this._telemetryExportDestinations;
  }
  public putTelemetryExportDestinations(value: DataDatabricksAppsAppTelemetryExportDestinations[] | cdktn.IResolvable) {
    this._telemetryExportDestinations.internalValue = value;
  }
  public resetTelemetryExportDestinations() {
    this._telemetryExportDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryExportDestinationsInput() {
    return this._telemetryExportDestinations.internalValue;
  }

  // thumbnail_url - computed: true, optional: false, required: false
  public get thumbnailUrl() {
    return this.getStringAttribute('thumbnail_url');
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

  // usage_policy_id - computed: true, optional: true, required: false
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

  // user_api_scopes - computed: true, optional: true, required: false
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
}

export class DataDatabricksAppsAppList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAppsApp[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAppsAppOutputReference {
    return new DataDatabricksAppsAppOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAppsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#workspace_id DataDatabricksApps#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAppsProviderConfigToTerraform(struct?: DataDatabricksAppsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAppsProviderConfigToHclTerraform(struct?: DataDatabricksAppsProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAppsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps databricks_apps}
*/
export class DataDatabricksApps extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_apps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksApps resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksApps to import
  * @param importFromId The id of the existing DataDatabricksApps that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksApps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_apps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/apps databricks_apps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAppsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAppsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_apps',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.122.0',
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
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: true, optional: false, required: false
  private _app = new DataDatabricksAppsAppList(this, "app", false);
  public get app() {
    return this._app;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksAppsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAppsProviderConfig) {
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
      provider_config: dataDatabricksAppsProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      provider_config: {
        value: dataDatabricksAppsProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAppsProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
