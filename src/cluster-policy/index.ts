/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ClusterPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#definition ClusterPolicy#definition}
  */
  readonly definition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#description ClusterPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#id ClusterPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}
  */
  readonly maxClustersPerUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#name ClusterPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#policy_family_definition_overrides ClusterPolicy#policy_family_definition_overrides}
  */
  readonly policyFamilyDefinitionOverrides?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#policy_family_id ClusterPolicy#policy_family_id}
  */
  readonly policyFamilyId?: string;
  /**
  * libraries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#libraries ClusterPolicy#libraries}
  */
  readonly libraries?: ClusterPolicyLibraries[] | cdktn.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#provider_config ClusterPolicy#provider_config}
  */
  readonly providerConfig?: ClusterPolicyProviderConfig;
}
export interface ClusterPolicyLibrariesCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#package ClusterPolicy#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}
  */
  readonly repo?: string;
}

export function clusterPolicyLibrariesCranToTerraform(struct?: ClusterPolicyLibrariesCranOutputReference | ClusterPolicyLibrariesCran): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function clusterPolicyLibrariesCranToHclTerraform(struct?: ClusterPolicyLibrariesCranOutputReference | ClusterPolicyLibrariesCran): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package: {
      value: cdktn.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktn.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterPolicyLibrariesCranOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterPolicyLibrariesCran | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPolicyLibrariesCran | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._package = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._package = value.package;
      this._repo = value.repo;
    }
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface ClusterPolicyLibrariesMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#coordinates ClusterPolicy#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#exclusions ClusterPolicy#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}
  */
  readonly repo?: string;
}

export function clusterPolicyLibrariesMavenToTerraform(struct?: ClusterPolicyLibrariesMavenOutputReference | ClusterPolicyLibrariesMaven): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinates: cdktn.stringToTerraform(struct!.coordinates),
    exclusions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusions),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function clusterPolicyLibrariesMavenToHclTerraform(struct?: ClusterPolicyLibrariesMavenOutputReference | ClusterPolicyLibrariesMaven): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinates: {
      value: cdktn.stringToHclTerraform(struct!.coordinates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repo: {
      value: cdktn.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterPolicyLibrariesMavenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterPolicyLibrariesMaven | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinates !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinates = this._coordinates;
    }
    if (this._exclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPolicyLibrariesMaven | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coordinates = undefined;
      this._exclusions = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coordinates = value.coordinates;
      this._exclusions = value.exclusions;
      this._repo = value.repo;
    }
  }

  // coordinates - computed: false, optional: false, required: true
  private _coordinates?: string; 
  public get coordinates() {
    return this.getStringAttribute('coordinates');
  }
  public set coordinates(value: string) {
    this._coordinates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions?: string[]; 
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }
  public set exclusions(value: string[]) {
    this._exclusions = value;
  }
  public resetExclusions() {
    this._exclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface ClusterPolicyLibrariesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#workspace_id ClusterPolicy#workspace_id}
  */
  readonly workspaceId?: string;
}

export function clusterPolicyLibrariesProviderConfigToTerraform(struct?: ClusterPolicyLibrariesProviderConfigOutputReference | ClusterPolicyLibrariesProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function clusterPolicyLibrariesProviderConfigToHclTerraform(struct?: ClusterPolicyLibrariesProviderConfigOutputReference | ClusterPolicyLibrariesProviderConfig): any {
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

export class ClusterPolicyLibrariesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterPolicyLibrariesProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPolicyLibrariesProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ClusterPolicyLibrariesPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#package ClusterPolicy#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}
  */
  readonly repo?: string;
}

export function clusterPolicyLibrariesPypiToTerraform(struct?: ClusterPolicyLibrariesPypiOutputReference | ClusterPolicyLibrariesPypi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function clusterPolicyLibrariesPypiToHclTerraform(struct?: ClusterPolicyLibrariesPypiOutputReference | ClusterPolicyLibrariesPypi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package: {
      value: cdktn.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktn.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterPolicyLibrariesPypiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterPolicyLibrariesPypi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPolicyLibrariesPypi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._package = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._package = value.package;
      this._repo = value.repo;
    }
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}
export interface ClusterPolicyLibraries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#egg ClusterPolicy#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#jar ClusterPolicy#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#requirements ClusterPolicy#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#whl ClusterPolicy#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#cran ClusterPolicy#cran}
  */
  readonly cran?: ClusterPolicyLibrariesCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#maven ClusterPolicy#maven}
  */
  readonly maven?: ClusterPolicyLibrariesMaven;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#provider_config ClusterPolicy#provider_config}
  */
  readonly providerConfig?: ClusterPolicyLibrariesProviderConfig;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#pypi ClusterPolicy#pypi}
  */
  readonly pypi?: ClusterPolicyLibrariesPypi;
}

export function clusterPolicyLibrariesToTerraform(struct?: ClusterPolicyLibraries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktn.stringToTerraform(struct!.egg),
    jar: cdktn.stringToTerraform(struct!.jar),
    requirements: cdktn.stringToTerraform(struct!.requirements),
    whl: cdktn.stringToTerraform(struct!.whl),
    cran: clusterPolicyLibrariesCranToTerraform(struct!.cran),
    maven: clusterPolicyLibrariesMavenToTerraform(struct!.maven),
    provider_config: clusterPolicyLibrariesProviderConfigToTerraform(struct!.providerConfig),
    pypi: clusterPolicyLibrariesPypiToTerraform(struct!.pypi),
  }
}


export function clusterPolicyLibrariesToHclTerraform(struct?: ClusterPolicyLibraries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egg: {
      value: cdktn.stringToHclTerraform(struct!.egg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jar: {
      value: cdktn.stringToHclTerraform(struct!.jar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requirements: {
      value: cdktn.stringToHclTerraform(struct!.requirements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whl: {
      value: cdktn.stringToHclTerraform(struct!.whl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cran: {
      value: clusterPolicyLibrariesCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterPolicyLibrariesCranList",
    },
    maven: {
      value: clusterPolicyLibrariesMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterPolicyLibrariesMavenList",
    },
    provider_config: {
      value: clusterPolicyLibrariesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterPolicyLibrariesProviderConfigList",
    },
    pypi: {
      value: clusterPolicyLibrariesPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterPolicyLibrariesPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterPolicyLibrariesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ClusterPolicyLibraries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egg !== undefined) {
      hasAnyValues = true;
      internalValueResult.egg = this._egg;
    }
    if (this._jar !== undefined) {
      hasAnyValues = true;
      internalValueResult.jar = this._jar;
    }
    if (this._requirements !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirements = this._requirements;
    }
    if (this._whl !== undefined) {
      hasAnyValues = true;
      internalValueResult.whl = this._whl;
    }
    if (this._cran?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cran = this._cran?.internalValue;
    }
    if (this._maven?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maven = this._maven?.internalValue;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    if (this._pypi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pypi = this._pypi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPolicyLibraries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egg = undefined;
      this._jar = undefined;
      this._requirements = undefined;
      this._whl = undefined;
      this._cran.internalValue = undefined;
      this._maven.internalValue = undefined;
      this._providerConfig.internalValue = undefined;
      this._pypi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egg = value.egg;
      this._jar = value.jar;
      this._requirements = value.requirements;
      this._whl = value.whl;
      this._cran.internalValue = value.cran;
      this._maven.internalValue = value.maven;
      this._providerConfig.internalValue = value.providerConfig;
      this._pypi.internalValue = value.pypi;
    }
  }

  // egg - computed: false, optional: true, required: false
  private _egg?: string; 
  public get egg() {
    return this.getStringAttribute('egg');
  }
  public set egg(value: string) {
    this._egg = value;
  }
  public resetEgg() {
    this._egg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eggInput() {
    return this._egg;
  }

  // jar - computed: false, optional: true, required: false
  private _jar?: string; 
  public get jar() {
    return this.getStringAttribute('jar');
  }
  public set jar(value: string) {
    this._jar = value;
  }
  public resetJar() {
    this._jar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarInput() {
    return this._jar;
  }

  // requirements - computed: false, optional: true, required: false
  private _requirements?: string; 
  public get requirements() {
    return this.getStringAttribute('requirements');
  }
  public set requirements(value: string) {
    this._requirements = value;
  }
  public resetRequirements() {
    this._requirements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements;
  }

  // whl - computed: false, optional: true, required: false
  private _whl?: string; 
  public get whl() {
    return this.getStringAttribute('whl');
  }
  public set whl(value: string) {
    this._whl = value;
  }
  public resetWhl() {
    this._whl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whlInput() {
    return this._whl;
  }

  // cran - computed: false, optional: true, required: false
  private _cran = new ClusterPolicyLibrariesCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: ClusterPolicyLibrariesCran) {
    this._cran.internalValue = value;
  }
  public resetCran() {
    this._cran.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cranInput() {
    return this._cran.internalValue;
  }

  // maven - computed: false, optional: true, required: false
  private _maven = new ClusterPolicyLibrariesMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: ClusterPolicyLibrariesMaven) {
    this._maven.internalValue = value;
  }
  public resetMaven() {
    this._maven.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenInput() {
    return this._maven.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new ClusterPolicyLibrariesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: ClusterPolicyLibrariesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // pypi - computed: false, optional: true, required: false
  private _pypi = new ClusterPolicyLibrariesPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: ClusterPolicyLibrariesPypi) {
    this._pypi.internalValue = value;
  }
  public resetPypi() {
    this._pypi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pypiInput() {
    return this._pypi.internalValue;
  }
}

export class ClusterPolicyLibrariesList extends cdktn.ComplexList {
  public internalValue? : ClusterPolicyLibraries[] | cdktn.IResolvable

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
  public get(index: number): ClusterPolicyLibrariesOutputReference {
    return new ClusterPolicyLibrariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterPolicyProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#workspace_id ClusterPolicy#workspace_id}
  */
  readonly workspaceId?: string;
}

export function clusterPolicyProviderConfigToTerraform(struct?: ClusterPolicyProviderConfigOutputReference | ClusterPolicyProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function clusterPolicyProviderConfigToHclTerraform(struct?: ClusterPolicyProviderConfigOutputReference | ClusterPolicyProviderConfig): any {
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

export class ClusterPolicyProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterPolicyProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPolicyProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy databricks_cluster_policy}
*/
export class ClusterPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_cluster_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ClusterPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterPolicy to import
  * @param importFromId The id of the existing ClusterPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_cluster_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/cluster_policy databricks_cluster_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClusterPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_cluster_policy',
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
    this._definition = config.definition;
    this._description = config.description;
    this._id = config.id;
    this._maxClustersPerUser = config.maxClustersPerUser;
    this._name = config.name;
    this._policyFamilyDefinitionOverrides = config.policyFamilyDefinitionOverrides;
    this._policyFamilyId = config.policyFamilyId;
    this._libraries.internalValue = config.libraries;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
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

  // max_clusters_per_user - computed: false, optional: true, required: false
  private _maxClustersPerUser?: number; 
  public get maxClustersPerUser() {
    return this.getNumberAttribute('max_clusters_per_user');
  }
  public set maxClustersPerUser(value: number) {
    this._maxClustersPerUser = value;
  }
  public resetMaxClustersPerUser() {
    this._maxClustersPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClustersPerUserInput() {
    return this._maxClustersPerUser;
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

  // policy_family_definition_overrides - computed: false, optional: true, required: false
  private _policyFamilyDefinitionOverrides?: string; 
  public get policyFamilyDefinitionOverrides() {
    return this.getStringAttribute('policy_family_definition_overrides');
  }
  public set policyFamilyDefinitionOverrides(value: string) {
    this._policyFamilyDefinitionOverrides = value;
  }
  public resetPolicyFamilyDefinitionOverrides() {
    this._policyFamilyDefinitionOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyFamilyDefinitionOverridesInput() {
    return this._policyFamilyDefinitionOverrides;
  }

  // policy_family_id - computed: false, optional: true, required: false
  private _policyFamilyId?: string; 
  public get policyFamilyId() {
    return this.getStringAttribute('policy_family_id');
  }
  public set policyFamilyId(value: string) {
    this._policyFamilyId = value;
  }
  public resetPolicyFamilyId() {
    this._policyFamilyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyFamilyIdInput() {
    return this._policyFamilyId;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // libraries - computed: false, optional: true, required: false
  private _libraries = new ClusterPolicyLibrariesList(this, "libraries", false);
  public get libraries() {
    return this._libraries;
  }
  public putLibraries(value: ClusterPolicyLibraries[] | cdktn.IResolvable) {
    this._libraries.internalValue = value;
  }
  public resetLibraries() {
    this._libraries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get librariesInput() {
    return this._libraries.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new ClusterPolicyProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: ClusterPolicyProviderConfig) {
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
      definition: cdktn.stringToTerraform(this._definition),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      max_clusters_per_user: cdktn.numberToTerraform(this._maxClustersPerUser),
      name: cdktn.stringToTerraform(this._name),
      policy_family_definition_overrides: cdktn.stringToTerraform(this._policyFamilyDefinitionOverrides),
      policy_family_id: cdktn.stringToTerraform(this._policyFamilyId),
      libraries: cdktn.listMapper(clusterPolicyLibrariesToTerraform, true)(this._libraries.internalValue),
      provider_config: clusterPolicyProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      definition: {
        value: cdktn.stringToHclTerraform(this._definition),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_clusters_per_user: {
        value: cdktn.numberToHclTerraform(this._maxClustersPerUser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_family_definition_overrides: {
        value: cdktn.stringToHclTerraform(this._policyFamilyDefinitionOverrides),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_family_id: {
        value: cdktn.stringToHclTerraform(this._policyFamilyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      libraries: {
        value: cdktn.listMapperHcl(clusterPolicyLibrariesToHclTerraform, true)(this._libraries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterPolicyLibrariesList",
      },
      provider_config: {
        value: clusterPolicyProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterPolicyProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
