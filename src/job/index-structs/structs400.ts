/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { JobTaskForEachTaskTaskLibraryCran,
jobTaskForEachTaskTaskLibraryCranToTerraform,
jobTaskForEachTaskTaskLibraryCranToHclTerraform,
JobTaskForEachTaskTaskLibraryCranOutputReference,
JobTaskForEachTaskTaskLibraryMaven,
jobTaskForEachTaskTaskLibraryMavenToTerraform,
jobTaskForEachTaskTaskLibraryMavenToHclTerraform,
JobTaskForEachTaskTaskLibraryMavenOutputReference,
JobTaskForEachTaskTaskAlertTask,
jobTaskForEachTaskTaskAlertTaskToTerraform,
jobTaskForEachTaskTaskAlertTaskToHclTerraform,
JobTaskForEachTaskTaskAlertTaskOutputReference,
JobTaskForEachTaskTaskCleanRoomsNotebookTask,
jobTaskForEachTaskTaskCleanRoomsNotebookTaskToTerraform,
jobTaskForEachTaskTaskCleanRoomsNotebookTaskToHclTerraform,
JobTaskForEachTaskTaskCleanRoomsNotebookTaskOutputReference,
JobTaskForEachTaskTaskCompute,
jobTaskForEachTaskTaskComputeToTerraform,
jobTaskForEachTaskTaskComputeToHclTerraform,
JobTaskForEachTaskTaskComputeOutputReference,
JobTaskForEachTaskTaskConditionTask,
jobTaskForEachTaskTaskConditionTaskToTerraform,
jobTaskForEachTaskTaskConditionTaskToHclTerraform,
JobTaskForEachTaskTaskConditionTaskOutputReference,
JobTaskForEachTaskTaskDashboardTask,
jobTaskForEachTaskTaskDashboardTaskToTerraform,
jobTaskForEachTaskTaskDashboardTaskToHclTerraform,
JobTaskForEachTaskTaskDashboardTaskOutputReference,
JobTaskForEachTaskTaskDbtCloudTask,
jobTaskForEachTaskTaskDbtCloudTaskToTerraform,
jobTaskForEachTaskTaskDbtCloudTaskToHclTerraform,
JobTaskForEachTaskTaskDbtCloudTaskOutputReference,
JobTaskForEachTaskTaskDbtPlatformTask,
jobTaskForEachTaskTaskDbtPlatformTaskToTerraform,
jobTaskForEachTaskTaskDbtPlatformTaskToHclTerraform,
JobTaskForEachTaskTaskDbtPlatformTaskOutputReference,
JobTaskForEachTaskTaskDbtTask,
jobTaskForEachTaskTaskDbtTaskToTerraform,
jobTaskForEachTaskTaskDbtTaskToHclTerraform,
JobTaskForEachTaskTaskDbtTaskOutputReference,
JobTaskForEachTaskTaskDependsOn,
jobTaskForEachTaskTaskDependsOnToTerraform,
jobTaskForEachTaskTaskDependsOnToHclTerraform,
JobTaskForEachTaskTaskDependsOnList,
JobTaskForEachTaskTaskEmailNotifications,
jobTaskForEachTaskTaskEmailNotificationsToTerraform,
jobTaskForEachTaskTaskEmailNotificationsToHclTerraform,
JobTaskForEachTaskTaskEmailNotificationsOutputReference,
JobTaskForEachTaskTaskGenAiComputeTask,
jobTaskForEachTaskTaskGenAiComputeTaskToTerraform,
jobTaskForEachTaskTaskGenAiComputeTaskToHclTerraform,
JobTaskForEachTaskTaskGenAiComputeTaskOutputReference,
JobTaskForEachTaskTaskHealth,
jobTaskForEachTaskTaskHealthToTerraform,
jobTaskForEachTaskTaskHealthToHclTerraform,
JobTaskForEachTaskTaskHealthOutputReference } from './structs0'
export interface JobTaskForEachTaskTaskLibraryProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workspace_id Job#workspace_id}
  */
  readonly workspaceId?: string;
}

export function jobTaskForEachTaskTaskLibraryProviderConfigToTerraform(struct?: JobTaskForEachTaskTaskLibraryProviderConfigOutputReference | JobTaskForEachTaskTaskLibraryProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function jobTaskForEachTaskTaskLibraryProviderConfigToHclTerraform(struct?: JobTaskForEachTaskTaskLibraryProviderConfigOutputReference | JobTaskForEachTaskTaskLibraryProviderConfig): any {
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

export class JobTaskForEachTaskTaskLibraryProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskLibraryProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskLibraryProviderConfig | undefined) {
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
export interface JobTaskForEachTaskTaskLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskForEachTaskTaskLibraryPypiToTerraform(struct?: JobTaskForEachTaskTaskLibraryPypiOutputReference | JobTaskForEachTaskTaskLibraryPypi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function jobTaskForEachTaskTaskLibraryPypiToHclTerraform(struct?: JobTaskForEachTaskTaskLibraryPypiOutputReference | JobTaskForEachTaskTaskLibraryPypi): any {
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

export class JobTaskForEachTaskTaskLibraryPypiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskLibraryPypi | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskLibraryPypi | undefined) {
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
export interface JobTaskForEachTaskTaskLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobTaskForEachTaskTaskLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobTaskForEachTaskTaskLibraryMaven;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#provider_config Job#provider_config}
  */
  readonly providerConfig?: JobTaskForEachTaskTaskLibraryProviderConfig;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobTaskForEachTaskTaskLibraryPypi;
}

export function jobTaskForEachTaskTaskLibraryToTerraform(struct?: JobTaskForEachTaskTaskLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktn.stringToTerraform(struct!.egg),
    jar: cdktn.stringToTerraform(struct!.jar),
    requirements: cdktn.stringToTerraform(struct!.requirements),
    whl: cdktn.stringToTerraform(struct!.whl),
    cran: jobTaskForEachTaskTaskLibraryCranToTerraform(struct!.cran),
    maven: jobTaskForEachTaskTaskLibraryMavenToTerraform(struct!.maven),
    provider_config: jobTaskForEachTaskTaskLibraryProviderConfigToTerraform(struct!.providerConfig),
    pypi: jobTaskForEachTaskTaskLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobTaskForEachTaskTaskLibraryToHclTerraform(struct?: JobTaskForEachTaskTaskLibrary | cdktn.IResolvable): any {
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
      value: jobTaskForEachTaskTaskLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskLibraryCranList",
    },
    maven: {
      value: jobTaskForEachTaskTaskLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskLibraryMavenList",
    },
    provider_config: {
      value: jobTaskForEachTaskTaskLibraryProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskLibraryProviderConfigList",
    },
    pypi: {
      value: jobTaskForEachTaskTaskLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskLibraryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskLibrary | cdktn.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskLibrary | cdktn.IResolvable | undefined) {
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
  private _cran = new JobTaskForEachTaskTaskLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobTaskForEachTaskTaskLibraryCran) {
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
  private _maven = new JobTaskForEachTaskTaskLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobTaskForEachTaskTaskLibraryMaven) {
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
  private _providerConfig = new JobTaskForEachTaskTaskLibraryProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: JobTaskForEachTaskTaskLibraryProviderConfig) {
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
  private _pypi = new JobTaskForEachTaskTaskLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobTaskForEachTaskTaskLibraryPypi) {
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

export class JobTaskForEachTaskTaskLibraryList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskLibrary[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskLibraryOutputReference {
    return new JobTaskForEachTaskTaskLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskNewClusterAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#max_workers Job#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#min_workers Job#min_workers}
  */
  readonly minWorkers?: number;
}

export function jobTaskForEachTaskTaskNewClusterAutoscaleToTerraform(struct?: JobTaskForEachTaskTaskNewClusterAutoscaleOutputReference | JobTaskForEachTaskTaskNewClusterAutoscale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktn.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktn.numberToTerraform(struct!.minWorkers),
  }
}


export function jobTaskForEachTaskTaskNewClusterAutoscaleToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterAutoscaleOutputReference | JobTaskForEachTaskTaskNewClusterAutoscale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_workers: {
      value: cdktn.numberToHclTerraform(struct!.maxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_workers: {
      value: cdktn.numberToHclTerraform(struct!.minWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterAutoscaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterAutoscale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkers = this._maxWorkers;
    }
    if (this._minWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkers = this._minWorkers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterAutoscale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxWorkers = undefined;
      this._minWorkers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxWorkers = value.maxWorkers;
      this._minWorkers = value.minWorkers;
    }
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_workers - computed: false, optional: true, required: false
  private _minWorkers?: number; 
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers;
  }
}
export interface JobTaskForEachTaskTaskNewClusterAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ebs_volume_count Job#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ebs_volume_iops Job#ebs_volume_iops}
  */
  readonly ebsVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ebs_volume_size Job#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ebs_volume_throughput Job#ebs_volume_throughput}
  */
  readonly ebsVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ebs_volume_type Job#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#instance_profile_arn Job#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spot_bid_price_percent Job#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobTaskForEachTaskTaskNewClusterAwsAttributesToTerraform(struct?: JobTaskForEachTaskTaskNewClusterAwsAttributesOutputReference | JobTaskForEachTaskTaskNewClusterAwsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    ebs_volume_count: cdktn.numberToTerraform(struct!.ebsVolumeCount),
    ebs_volume_iops: cdktn.numberToTerraform(struct!.ebsVolumeIops),
    ebs_volume_size: cdktn.numberToTerraform(struct!.ebsVolumeSize),
    ebs_volume_throughput: cdktn.numberToTerraform(struct!.ebsVolumeThroughput),
    ebs_volume_type: cdktn.stringToTerraform(struct!.ebsVolumeType),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    instance_profile_arn: cdktn.stringToTerraform(struct!.instanceProfileArn),
    spot_bid_price_percent: cdktn.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function jobTaskForEachTaskTaskNewClusterAwsAttributesToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterAwsAttributesOutputReference | JobTaskForEachTaskTaskNewClusterAwsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktn.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_volume_count: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_iops: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_size: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_throughput: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktn.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_profile_arn: {
      value: cdktn.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_bid_price_percent: {
      value: cdktn.numberToHclTerraform(struct!.spotBidPricePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_id: {
      value: cdktn.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterAwsAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterAwsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._ebsVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeCount = this._ebsVolumeCount;
    }
    if (this._ebsVolumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeIops = this._ebsVolumeIops;
    }
    if (this._ebsVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSize = this._ebsVolumeSize;
    }
    if (this._ebsVolumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeThroughput = this._ebsVolumeThroughput;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._spotBidPricePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidPricePercent = this._spotBidPricePercent;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._ebsVolumeCount = undefined;
      this._ebsVolumeIops = undefined;
      this._ebsVolumeSize = undefined;
      this._ebsVolumeThroughput = undefined;
      this._ebsVolumeType = undefined;
      this._firstOnDemand = undefined;
      this._instanceProfileArn = undefined;
      this._spotBidPricePercent = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._ebsVolumeCount = value.ebsVolumeCount;
      this._ebsVolumeIops = value.ebsVolumeIops;
      this._ebsVolumeSize = value.ebsVolumeSize;
      this._ebsVolumeThroughput = value.ebsVolumeThroughput;
      this._ebsVolumeType = value.ebsVolumeType;
      this._firstOnDemand = value.firstOnDemand;
      this._instanceProfileArn = value.instanceProfileArn;
      this._spotBidPricePercent = value.spotBidPricePercent;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // ebs_volume_count - computed: false, optional: true, required: false
  private _ebsVolumeCount?: number; 
  public get ebsVolumeCount() {
    return this.getNumberAttribute('ebs_volume_count');
  }
  public set ebsVolumeCount(value: number) {
    this._ebsVolumeCount = value;
  }
  public resetEbsVolumeCount() {
    this._ebsVolumeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeCountInput() {
    return this._ebsVolumeCount;
  }

  // ebs_volume_iops - computed: false, optional: true, required: false
  private _ebsVolumeIops?: number; 
  public get ebsVolumeIops() {
    return this.getNumberAttribute('ebs_volume_iops');
  }
  public set ebsVolumeIops(value: number) {
    this._ebsVolumeIops = value;
  }
  public resetEbsVolumeIops() {
    this._ebsVolumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeIopsInput() {
    return this._ebsVolumeIops;
  }

  // ebs_volume_size - computed: false, optional: true, required: false
  private _ebsVolumeSize?: number; 
  public get ebsVolumeSize() {
    return this.getNumberAttribute('ebs_volume_size');
  }
  public set ebsVolumeSize(value: number) {
    this._ebsVolumeSize = value;
  }
  public resetEbsVolumeSize() {
    this._ebsVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeSizeInput() {
    return this._ebsVolumeSize;
  }

  // ebs_volume_throughput - computed: false, optional: true, required: false
  private _ebsVolumeThroughput?: number; 
  public get ebsVolumeThroughput() {
    return this.getNumberAttribute('ebs_volume_throughput');
  }
  public set ebsVolumeThroughput(value: number) {
    this._ebsVolumeThroughput = value;
  }
  public resetEbsVolumeThroughput() {
    this._ebsVolumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeThroughputInput() {
    return this._ebsVolumeThroughput;
  }

  // ebs_volume_type - computed: false, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }

  // first_on_demand - computed: false, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // spot_bid_price_percent - computed: false, optional: true, required: false
  private _spotBidPricePercent?: number; 
  public get spotBidPricePercent() {
    return this.getNumberAttribute('spot_bid_price_percent');
  }
  public set spotBidPricePercent(value: number) {
    this._spotBidPricePercent = value;
  }
  public resetSpotBidPricePercent() {
    this._spotBidPricePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidPricePercentInput() {
    return this._spotBidPricePercent;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#log_analytics_primary_key Job#log_analytics_primary_key}
  */
  readonly logAnalyticsPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#log_analytics_workspace_id Job#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function jobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct?: JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_primary_key: cdktn.stringToTerraform(struct!.logAnalyticsPrimaryKey),
    log_analytics_workspace_id: cdktn.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function jobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_primary_key: {
      value: cdktn.stringToHclTerraform(struct!.logAnalyticsPrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_analytics_workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsPrimaryKey = this._logAnalyticsPrimaryKey;
    }
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsPrimaryKey = undefined;
      this._logAnalyticsWorkspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsPrimaryKey = value.logAnalyticsPrimaryKey;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
    }
  }

  // log_analytics_primary_key - computed: false, optional: true, required: false
  private _logAnalyticsPrimaryKey?: string; 
  public get logAnalyticsPrimaryKey() {
    return this.getStringAttribute('log_analytics_primary_key');
  }
  public set logAnalyticsPrimaryKey(value: string) {
    this._logAnalyticsPrimaryKey = value;
  }
  public resetLogAnalyticsPrimaryKey() {
    this._logAnalyticsPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsPrimaryKeyInput() {
    return this._logAnalyticsPrimaryKey;
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }
}
export interface JobTaskForEachTaskTaskNewClusterAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spot_bid_max_price Job#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
  /**
  * log_analytics_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#log_analytics_info Job#log_analytics_info}
  */
  readonly logAnalyticsInfo?: JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo;
}

export function jobTaskForEachTaskTaskNewClusterAzureAttributesToTerraform(struct?: JobTaskForEachTaskTaskNewClusterAzureAttributesOutputReference | JobTaskForEachTaskTaskNewClusterAzureAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    spot_bid_max_price: cdktn.numberToTerraform(struct!.spotBidMaxPrice),
    log_analytics_info: jobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct!.logAnalyticsInfo),
  }
}


export function jobTaskForEachTaskTaskNewClusterAzureAttributesToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterAzureAttributesOutputReference | JobTaskForEachTaskTaskNewClusterAzureAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktn.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_bid_max_price: {
      value: cdktn.numberToHclTerraform(struct!.spotBidMaxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_analytics_info: {
      value: jobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct!.logAnalyticsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterAzureAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterAzureAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._spotBidMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidMaxPrice = this._spotBidMaxPrice;
    }
    if (this._logAnalyticsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsInfo = this._logAnalyticsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterAzureAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._firstOnDemand = undefined;
      this._spotBidMaxPrice = undefined;
      this._logAnalyticsInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._firstOnDemand = value.firstOnDemand;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
      this._logAnalyticsInfo.internalValue = value.logAnalyticsInfo;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // first_on_demand - computed: false, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // spot_bid_max_price - computed: false, optional: true, required: false
  private _spotBidMaxPrice?: number; 
  public get spotBidMaxPrice() {
    return this.getNumberAttribute('spot_bid_max_price');
  }
  public set spotBidMaxPrice(value: number) {
    this._spotBidMaxPrice = value;
  }
  public resetSpotBidMaxPrice() {
    this._spotBidMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidMaxPriceInput() {
    return this._spotBidMaxPrice;
  }

  // log_analytics_info - computed: false, optional: true, required: false
  private _logAnalyticsInfo = new JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference(this, "log_analytics_info");
  public get logAnalyticsInfo() {
    return this._logAnalyticsInfo;
  }
  public putLogAnalyticsInfo(value: JobTaskForEachTaskTaskNewClusterAzureAttributesLogAnalyticsInfo) {
    this._logAnalyticsInfo.internalValue = value;
  }
  public resetLogAnalyticsInfo() {
    this._logAnalyticsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInfoInput() {
    return this._logAnalyticsInfo.internalValue;
  }
}
export interface JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterClusterLogConfDbfsToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfDbfsOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterClusterLogConfDbfsToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfDbfsOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterClusterLogConfDbfsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskForEachTaskTaskNewClusterClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobTaskForEachTaskTaskNewClusterClusterLogConfS3ToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfS3OutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    destination: cdktn.stringToTerraform(struct!.destination),
    enable_encryption: cdktn.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function jobTaskForEachTaskTaskNewClusterClusterLogConfS3ToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfS3OutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterClusterLogConfS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterLogConfS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterLogConfS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktn.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktn.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterClusterLogConfVolumesToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfVolumesOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterClusterLogConfVolumesToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfVolumesOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterClusterLogConfVolumesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskForEachTaskTaskNewClusterClusterLogConf {
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobTaskForEachTaskTaskNewClusterClusterLogConfS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes;
}

export function jobTaskForEachTaskTaskNewClusterClusterLogConfToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConf): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: jobTaskForEachTaskTaskNewClusterClusterLogConfDbfsToTerraform(struct!.dbfs),
    s3: jobTaskForEachTaskTaskNewClusterClusterLogConfS3ToTerraform(struct!.s3),
    volumes: jobTaskForEachTaskTaskNewClusterClusterLogConfVolumesToTerraform(struct!.volumes),
  }
}


export function jobTaskForEachTaskTaskNewClusterClusterLogConfToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterLogConfOutputReference | JobTaskForEachTaskTaskNewClusterClusterLogConf): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: jobTaskForEachTaskTaskNewClusterClusterLogConfDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterClusterLogConfDbfsList",
    },
    s3: {
      value: jobTaskForEachTaskTaskNewClusterClusterLogConfS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterClusterLogConfS3List",
    },
    volumes: {
      value: jobTaskForEachTaskTaskNewClusterClusterLogConfVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterClusterLogConfVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterClusterLogConfOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterLogConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterLogConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
    }
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new JobTaskForEachTaskTaskNewClusterClusterLogConfDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobTaskForEachTaskTaskNewClusterClusterLogConfDbfs) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new JobTaskForEachTaskTaskNewClusterClusterLogConfS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobTaskForEachTaskTaskNewClusterClusterLogConfS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new JobTaskForEachTaskTaskNewClusterClusterLogConfVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobTaskForEachTaskTaskNewClusterClusterLogConfVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#mount_options Job#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#server_address Job#server_address}
  */
  readonly serverAddress: string;
}

export function jobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: cdktn.stringToTerraform(struct!.mountOptions),
    server_address: cdktn.stringToTerraform(struct!.serverAddress),
  }
}


export function jobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_options: {
      value: cdktn.stringToHclTerraform(struct!.mountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktn.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountOptions = undefined;
      this._serverAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountOptions = value.mountOptions;
      this._serverAddress = value.serverAddress;
    }
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }
}
export interface JobTaskForEachTaskTaskNewClusterClusterMountInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#local_mount_dir_path Job#local_mount_dir_path}
  */
  readonly localMountDirPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#remote_mount_dir_path Job#remote_mount_dir_path}
  */
  readonly remoteMountDirPath?: string;
  /**
  * network_filesystem_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#network_filesystem_info Job#network_filesystem_info}
  */
  readonly networkFilesystemInfo: JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo;
}

export function jobTaskForEachTaskTaskNewClusterClusterMountInfoToTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterMountInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_dir_path: cdktn.stringToTerraform(struct!.localMountDirPath),
    remote_mount_dir_path: cdktn.stringToTerraform(struct!.remoteMountDirPath),
    network_filesystem_info: jobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct!.networkFilesystemInfo),
  }
}


export function jobTaskForEachTaskTaskNewClusterClusterMountInfoToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterClusterMountInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_mount_dir_path: {
      value: cdktn.stringToHclTerraform(struct!.localMountDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_mount_dir_path: {
      value: cdktn.stringToHclTerraform(struct!.remoteMountDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_filesystem_info: {
      value: jobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct!.networkFilesystemInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterClusterMountInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskNewClusterClusterMountInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localMountDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountDirPath = this._localMountDirPath;
    }
    if (this._remoteMountDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteMountDirPath = this._remoteMountDirPath;
    }
    if (this._networkFilesystemInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFilesystemInfo = this._networkFilesystemInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterClusterMountInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localMountDirPath = undefined;
      this._remoteMountDirPath = undefined;
      this._networkFilesystemInfo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localMountDirPath = value.localMountDirPath;
      this._remoteMountDirPath = value.remoteMountDirPath;
      this._networkFilesystemInfo.internalValue = value.networkFilesystemInfo;
    }
  }

  // local_mount_dir_path - computed: false, optional: false, required: true
  private _localMountDirPath?: string; 
  public get localMountDirPath() {
    return this.getStringAttribute('local_mount_dir_path');
  }
  public set localMountDirPath(value: string) {
    this._localMountDirPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountDirPathInput() {
    return this._localMountDirPath;
  }

  // remote_mount_dir_path - computed: false, optional: true, required: false
  private _remoteMountDirPath?: string; 
  public get remoteMountDirPath() {
    return this.getStringAttribute('remote_mount_dir_path');
  }
  public set remoteMountDirPath(value: string) {
    this._remoteMountDirPath = value;
  }
  public resetRemoteMountDirPath() {
    this._remoteMountDirPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMountDirPathInput() {
    return this._remoteMountDirPath;
  }

  // network_filesystem_info - computed: false, optional: false, required: true
  private _networkFilesystemInfo = new JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference(this, "network_filesystem_info");
  public get networkFilesystemInfo() {
    return this._networkFilesystemInfo;
  }
  public putNetworkFilesystemInfo(value: JobTaskForEachTaskTaskNewClusterClusterMountInfoNetworkFilesystemInfo) {
    this._networkFilesystemInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFilesystemInfoInput() {
    return this._networkFilesystemInfo.internalValue;
  }
}

export class JobTaskForEachTaskTaskNewClusterClusterMountInfoList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskNewClusterClusterMountInfo[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskNewClusterClusterMountInfoOutputReference {
    return new JobTaskForEachTaskTaskNewClusterClusterMountInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#password Job#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#username Job#username}
  */
  readonly username: string;
}

export function jobTaskForEachTaskTaskNewClusterDockerImageBasicAuthToTerraform(struct?: JobTaskForEachTaskTaskNewClusterDockerImageBasicAuthOutputReference | JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function jobTaskForEachTaskTaskNewClusterDockerImageBasicAuthToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterDockerImageBasicAuthOutputReference | JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterDockerImageBasicAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface JobTaskForEachTaskTaskNewClusterDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#basic_auth Job#basic_auth}
  */
  readonly basicAuth?: JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth;
}

export function jobTaskForEachTaskTaskNewClusterDockerImageToTerraform(struct?: JobTaskForEachTaskTaskNewClusterDockerImageOutputReference | JobTaskForEachTaskTaskNewClusterDockerImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktn.stringToTerraform(struct!.url),
    basic_auth: jobTaskForEachTaskTaskNewClusterDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function jobTaskForEachTaskTaskNewClusterDockerImageToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterDockerImageOutputReference | JobTaskForEachTaskTaskNewClusterDockerImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: jobTaskForEachTaskTaskNewClusterDockerImageBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterDockerImageBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterDockerImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterDockerImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterDockerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._basicAuth.internalValue = value.basicAuth;
    }
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

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new JobTaskForEachTaskTaskNewClusterDockerImageBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: JobTaskForEachTaskTaskNewClusterDockerImageBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#alternate_node_type_ids Job#alternate_node_type_ids}
  */
  readonly alternateNodeTypeIds?: string[];
}

export function jobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibilityToTerraform(struct?: JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibilityOutputReference | JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_node_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alternateNodeTypeIds),
  }
}


export function jobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibilityToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibilityOutputReference | JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate_node_type_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alternateNodeTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNodeTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNodeTypeIds = this._alternateNodeTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alternateNodeTypeIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alternateNodeTypeIds = value.alternateNodeTypeIds;
    }
  }

  // alternate_node_type_ids - computed: false, optional: true, required: false
  private _alternateNodeTypeIds?: string[]; 
  public get alternateNodeTypeIds() {
    return this.getListAttribute('alternate_node_type_ids');
  }
  public set alternateNodeTypeIds(value: string[]) {
    this._alternateNodeTypeIds = value;
  }
  public resetAlternateNodeTypeIds() {
    this._alternateNodeTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNodeTypeIdsInput() {
    return this._alternateNodeTypeIds;
  }
}
export interface JobTaskForEachTaskTaskNewClusterGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#boot_disk_size Job#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#confidential_compute_type Job#confidential_compute_type}
  */
  readonly confidentialComputeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#google_service_account Job#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#local_ssd_count Job#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#use_preemptible_executors Job#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobTaskForEachTaskTaskNewClusterGcpAttributesToTerraform(struct?: JobTaskForEachTaskTaskNewClusterGcpAttributesOutputReference | JobTaskForEachTaskTaskNewClusterGcpAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    boot_disk_size: cdktn.numberToTerraform(struct!.bootDiskSize),
    confidential_compute_type: cdktn.stringToTerraform(struct!.confidentialComputeType),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    google_service_account: cdktn.stringToTerraform(struct!.googleServiceAccount),
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
    use_preemptible_executors: cdktn.booleanToTerraform(struct!.usePreemptibleExecutors),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function jobTaskForEachTaskTaskNewClusterGcpAttributesToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterGcpAttributesOutputReference | JobTaskForEachTaskTaskNewClusterGcpAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktn.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_disk_size: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    confidential_compute_type: {
      value: cdktn.stringToHclTerraform(struct!.confidentialComputeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    google_service_account: {
      value: cdktn.stringToHclTerraform(struct!.googleServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_count: {
      value: cdktn.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_preemptible_executors: {
      value: cdktn.booleanToHclTerraform(struct!.usePreemptibleExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone_id: {
      value: cdktn.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterGcpAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterGcpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._confidentialComputeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialComputeType = this._confidentialComputeType;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._usePreemptibleExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePreemptibleExecutors = this._usePreemptibleExecutors;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterGcpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._bootDiskSize = undefined;
      this._confidentialComputeType = undefined;
      this._firstOnDemand = undefined;
      this._googleServiceAccount = undefined;
      this._localSsdCount = undefined;
      this._usePreemptibleExecutors = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._bootDiskSize = value.bootDiskSize;
      this._confidentialComputeType = value.confidentialComputeType;
      this._firstOnDemand = value.firstOnDemand;
      this._googleServiceAccount = value.googleServiceAccount;
      this._localSsdCount = value.localSsdCount;
      this._usePreemptibleExecutors = value.usePreemptibleExecutors;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // boot_disk_size - computed: false, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
  }

  // confidential_compute_type - computed: false, optional: true, required: false
  private _confidentialComputeType?: string; 
  public get confidentialComputeType() {
    return this.getStringAttribute('confidential_compute_type');
  }
  public set confidentialComputeType(value: string) {
    this._confidentialComputeType = value;
  }
  public resetConfidentialComputeType() {
    this._confidentialComputeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialComputeTypeInput() {
    return this._confidentialComputeType;
  }

  // first_on_demand - computed: false, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // google_service_account - computed: false, optional: true, required: false
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
  public set googleServiceAccount(value: string) {
    this._googleServiceAccount = value;
  }
  public resetGoogleServiceAccount() {
    this._googleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
  }

  // local_ssd_count - computed: false, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // use_preemptible_executors - computed: false, optional: true, required: false
  private _usePreemptibleExecutors?: boolean | cdktn.IResolvable; 
  public get usePreemptibleExecutors() {
    return this.getBooleanAttribute('use_preemptible_executors');
  }
  public set usePreemptibleExecutors(value: boolean | cdktn.IResolvable) {
    this._usePreemptibleExecutors = value;
  }
  public resetUsePreemptibleExecutors() {
    this._usePreemptibleExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreemptibleExecutorsInput() {
    return this._usePreemptibleExecutors;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface JobTaskForEachTaskTaskNewClusterInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsAbfssToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsAbfssOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsAbfss): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsAbfssToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsAbfssOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsAbfss): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterInitScriptsAbfssOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsAbfss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsAbfss | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskForEachTaskTaskNewClusterInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsDbfsToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsDbfsOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsDbfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsDbfsToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsDbfsOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsDbfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterInitScriptsDbfsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskForEachTaskTaskNewClusterInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsFileToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsFileOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsFileToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsFileOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterInitScriptsFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskForEachTaskTaskNewClusterInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsGcsToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsGcsOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsGcs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsGcsToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsGcsOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsGcs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterInitScriptsGcsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskForEachTaskTaskNewClusterInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsS3ToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsS3OutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    destination: cdktn.stringToTerraform(struct!.destination),
    enable_encryption: cdktn.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsS3ToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsS3OutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterInitScriptsS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktn.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktn.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface JobTaskForEachTaskTaskNewClusterInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsVolumesToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsVolumesOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsVolumesToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsVolumesOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterInitScriptsVolumesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceOutputReference | JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskForEachTaskTaskNewClusterInitScripts {
  /**
  * abfss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#abfss Job#abfss}
  */
  readonly abfss?: JobTaskForEachTaskTaskNewClusterInitScriptsAbfss;
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobTaskForEachTaskTaskNewClusterInitScriptsDbfs;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#file Job#file}
  */
  readonly file?: JobTaskForEachTaskTaskNewClusterInitScriptsFile;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#gcs Job#gcs}
  */
  readonly gcs?: JobTaskForEachTaskTaskNewClusterInitScriptsGcs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobTaskForEachTaskTaskNewClusterInitScriptsS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobTaskForEachTaskTaskNewClusterInitScriptsVolumes;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workspace Job#workspace}
  */
  readonly workspace?: JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace;
}

export function jobTaskForEachTaskTaskNewClusterInitScriptsToTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: jobTaskForEachTaskTaskNewClusterInitScriptsAbfssToTerraform(struct!.abfss),
    dbfs: jobTaskForEachTaskTaskNewClusterInitScriptsDbfsToTerraform(struct!.dbfs),
    file: jobTaskForEachTaskTaskNewClusterInitScriptsFileToTerraform(struct!.file),
    gcs: jobTaskForEachTaskTaskNewClusterInitScriptsGcsToTerraform(struct!.gcs),
    s3: jobTaskForEachTaskTaskNewClusterInitScriptsS3ToTerraform(struct!.s3),
    volumes: jobTaskForEachTaskTaskNewClusterInitScriptsVolumesToTerraform(struct!.volumes),
    workspace: jobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceToTerraform(struct!.workspace),
  }
}


export function jobTaskForEachTaskTaskNewClusterInitScriptsToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterInitScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsAbfssToHclTerraform(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsAbfssList",
    },
    dbfs: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsDbfsList",
    },
    file: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsFileList",
    },
    gcs: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsGcsList",
    },
    s3: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsS3List",
    },
    volumes: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsVolumesList",
    },
    workspace: {
      value: jobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterInitScriptsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskNewClusterInitScripts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abfss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abfss = this._abfss?.internalValue;
    }
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterInitScripts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abfss.internalValue = undefined;
      this._dbfs.internalValue = undefined;
      this._file.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abfss.internalValue = value.abfss;
      this._dbfs.internalValue = value.dbfs;
      this._file.internalValue = value.file;
      this._gcs.internalValue = value.gcs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
      this._workspace.internalValue = value.workspace;
    }
  }

  // abfss - computed: false, optional: true, required: false
  private _abfss = new JobTaskForEachTaskTaskNewClusterInitScriptsAbfssOutputReference(this, "abfss");
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: JobTaskForEachTaskTaskNewClusterInitScriptsAbfss) {
    this._abfss.internalValue = value;
  }
  public resetAbfss() {
    this._abfss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abfssInput() {
    return this._abfss.internalValue;
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new JobTaskForEachTaskTaskNewClusterInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobTaskForEachTaskTaskNewClusterInitScriptsDbfs) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new JobTaskForEachTaskTaskNewClusterInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobTaskForEachTaskTaskNewClusterInitScriptsFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new JobTaskForEachTaskTaskNewClusterInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: JobTaskForEachTaskTaskNewClusterInitScriptsGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new JobTaskForEachTaskTaskNewClusterInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobTaskForEachTaskTaskNewClusterInitScriptsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new JobTaskForEachTaskTaskNewClusterInitScriptsVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobTaskForEachTaskTaskNewClusterInitScriptsVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new JobTaskForEachTaskTaskNewClusterInitScriptsWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: JobTaskForEachTaskTaskNewClusterInitScriptsWorkspace) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

export class JobTaskForEachTaskTaskNewClusterInitScriptsList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskNewClusterInitScripts[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskNewClusterInitScriptsOutputReference {
    return new JobTaskForEachTaskTaskNewClusterInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskNewClusterLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskForEachTaskTaskNewClusterLibraryCranToTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryCranOutputReference | JobTaskForEachTaskTaskNewClusterLibraryCran): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function jobTaskForEachTaskTaskNewClusterLibraryCranToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryCranOutputReference | JobTaskForEachTaskTaskNewClusterLibraryCran): any {
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

export class JobTaskForEachTaskTaskNewClusterLibraryCranOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterLibraryCran | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterLibraryCran | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#coordinates Job#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#exclusions Job#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskForEachTaskTaskNewClusterLibraryMavenToTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryMavenOutputReference | JobTaskForEachTaskTaskNewClusterLibraryMaven): any {
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


export function jobTaskForEachTaskTaskNewClusterLibraryMavenToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryMavenOutputReference | JobTaskForEachTaskTaskNewClusterLibraryMaven): any {
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

export class JobTaskForEachTaskTaskNewClusterLibraryMavenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterLibraryMaven | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterLibraryMaven | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterLibraryProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workspace_id Job#workspace_id}
  */
  readonly workspaceId?: string;
}

export function jobTaskForEachTaskTaskNewClusterLibraryProviderConfigToTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryProviderConfigOutputReference | JobTaskForEachTaskTaskNewClusterLibraryProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function jobTaskForEachTaskTaskNewClusterLibraryProviderConfigToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryProviderConfigOutputReference | JobTaskForEachTaskTaskNewClusterLibraryProviderConfig): any {
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

export class JobTaskForEachTaskTaskNewClusterLibraryProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterLibraryProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterLibraryProviderConfig | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskForEachTaskTaskNewClusterLibraryPypiToTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryPypiOutputReference | JobTaskForEachTaskTaskNewClusterLibraryPypi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function jobTaskForEachTaskTaskNewClusterLibraryPypiToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibraryPypiOutputReference | JobTaskForEachTaskTaskNewClusterLibraryPypi): any {
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

export class JobTaskForEachTaskTaskNewClusterLibraryPypiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterLibraryPypi | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterLibraryPypi | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobTaskForEachTaskTaskNewClusterLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobTaskForEachTaskTaskNewClusterLibraryMaven;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#provider_config Job#provider_config}
  */
  readonly providerConfig?: JobTaskForEachTaskTaskNewClusterLibraryProviderConfig;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobTaskForEachTaskTaskNewClusterLibraryPypi;
}

export function jobTaskForEachTaskTaskNewClusterLibraryToTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktn.stringToTerraform(struct!.egg),
    jar: cdktn.stringToTerraform(struct!.jar),
    requirements: cdktn.stringToTerraform(struct!.requirements),
    whl: cdktn.stringToTerraform(struct!.whl),
    cran: jobTaskForEachTaskTaskNewClusterLibraryCranToTerraform(struct!.cran),
    maven: jobTaskForEachTaskTaskNewClusterLibraryMavenToTerraform(struct!.maven),
    provider_config: jobTaskForEachTaskTaskNewClusterLibraryProviderConfigToTerraform(struct!.providerConfig),
    pypi: jobTaskForEachTaskTaskNewClusterLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobTaskForEachTaskTaskNewClusterLibraryToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterLibrary | cdktn.IResolvable): any {
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
      value: jobTaskForEachTaskTaskNewClusterLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterLibraryCranList",
    },
    maven: {
      value: jobTaskForEachTaskTaskNewClusterLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterLibraryMavenList",
    },
    provider_config: {
      value: jobTaskForEachTaskTaskNewClusterLibraryProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterLibraryProviderConfigList",
    },
    pypi: {
      value: jobTaskForEachTaskTaskNewClusterLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterLibraryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskNewClusterLibrary | cdktn.IResolvable | undefined {
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

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterLibrary | cdktn.IResolvable | undefined) {
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
  private _cran = new JobTaskForEachTaskTaskNewClusterLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobTaskForEachTaskTaskNewClusterLibraryCran) {
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
  private _maven = new JobTaskForEachTaskTaskNewClusterLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobTaskForEachTaskTaskNewClusterLibraryMaven) {
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
  private _providerConfig = new JobTaskForEachTaskTaskNewClusterLibraryProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: JobTaskForEachTaskTaskNewClusterLibraryProviderConfig) {
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
  private _pypi = new JobTaskForEachTaskTaskNewClusterLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobTaskForEachTaskTaskNewClusterLibraryPypi) {
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

export class JobTaskForEachTaskTaskNewClusterLibraryList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskNewClusterLibrary[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskNewClusterLibraryOutputReference {
    return new JobTaskForEachTaskTaskNewClusterLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskNewClusterProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workspace_id Job#workspace_id}
  */
  readonly workspaceId?: string;
}

export function jobTaskForEachTaskTaskNewClusterProviderConfigToTerraform(struct?: JobTaskForEachTaskTaskNewClusterProviderConfigOutputReference | JobTaskForEachTaskTaskNewClusterProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function jobTaskForEachTaskTaskNewClusterProviderConfigToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterProviderConfigOutputReference | JobTaskForEachTaskTaskNewClusterProviderConfig): any {
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

export class JobTaskForEachTaskTaskNewClusterProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterProviderConfig | undefined) {
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
export interface JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#alternate_node_type_ids Job#alternate_node_type_ids}
  */
  readonly alternateNodeTypeIds?: string[];
}

export function jobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibilityToTerraform(struct?: JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibilityOutputReference | JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_node_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alternateNodeTypeIds),
  }
}


export function jobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibilityToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibilityOutputReference | JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate_node_type_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alternateNodeTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNodeTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNodeTypeIds = this._alternateNodeTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alternateNodeTypeIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alternateNodeTypeIds = value.alternateNodeTypeIds;
    }
  }

  // alternate_node_type_ids - computed: false, optional: true, required: false
  private _alternateNodeTypeIds?: string[]; 
  public get alternateNodeTypeIds() {
    return this.getListAttribute('alternate_node_type_ids');
  }
  public set alternateNodeTypeIds(value: string[]) {
    this._alternateNodeTypeIds = value;
  }
  public resetAlternateNodeTypeIds() {
    this._alternateNodeTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNodeTypeIdsInput() {
    return this._alternateNodeTypeIds;
  }
}
export interface JobTaskForEachTaskTaskNewClusterWorkloadTypeClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#jobs Job#jobs}
  */
  readonly jobs?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#notebooks Job#notebooks}
  */
  readonly notebooks?: boolean | cdktn.IResolvable;
}

export function jobTaskForEachTaskTaskNewClusterWorkloadTypeClientsToTerraform(struct?: JobTaskForEachTaskTaskNewClusterWorkloadTypeClientsOutputReference | JobTaskForEachTaskTaskNewClusterWorkloadTypeClients): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jobs: cdktn.booleanToTerraform(struct!.jobs),
    notebooks: cdktn.booleanToTerraform(struct!.notebooks),
  }
}


export function jobTaskForEachTaskTaskNewClusterWorkloadTypeClientsToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterWorkloadTypeClientsOutputReference | JobTaskForEachTaskTaskNewClusterWorkloadTypeClients): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jobs: {
      value: cdktn.booleanToHclTerraform(struct!.jobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notebooks: {
      value: cdktn.booleanToHclTerraform(struct!.notebooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterWorkloadTypeClientsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterWorkloadTypeClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs;
    }
    if (this._notebooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebooks = this._notebooks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterWorkloadTypeClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobs = undefined;
      this._notebooks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobs = value.jobs;
      this._notebooks = value.notebooks;
    }
  }

  // jobs - computed: false, optional: true, required: false
  private _jobs?: boolean | cdktn.IResolvable; 
  public get jobs() {
    return this.getBooleanAttribute('jobs');
  }
  public set jobs(value: boolean | cdktn.IResolvable) {
    this._jobs = value;
  }
  public resetJobs() {
    this._jobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs;
  }

  // notebooks - computed: false, optional: true, required: false
  private _notebooks?: boolean | cdktn.IResolvable; 
  public get notebooks() {
    return this.getBooleanAttribute('notebooks');
  }
  public set notebooks(value: boolean | cdktn.IResolvable) {
    this._notebooks = value;
  }
  public resetNotebooks() {
    this._notebooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebooksInput() {
    return this._notebooks;
  }
}
export interface JobTaskForEachTaskTaskNewClusterWorkloadType {
  /**
  * clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#clients Job#clients}
  */
  readonly clients: JobTaskForEachTaskTaskNewClusterWorkloadTypeClients;
}

export function jobTaskForEachTaskTaskNewClusterWorkloadTypeToTerraform(struct?: JobTaskForEachTaskTaskNewClusterWorkloadTypeOutputReference | JobTaskForEachTaskTaskNewClusterWorkloadType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: jobTaskForEachTaskTaskNewClusterWorkloadTypeClientsToTerraform(struct!.clients),
  }
}


export function jobTaskForEachTaskTaskNewClusterWorkloadTypeToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterWorkloadTypeOutputReference | JobTaskForEachTaskTaskNewClusterWorkloadType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: jobTaskForEachTaskTaskNewClusterWorkloadTypeClientsToHclTerraform(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterWorkloadTypeClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterWorkloadTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewClusterWorkloadType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewClusterWorkloadType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clients.internalValue = value.clients;
    }
  }

  // clients - computed: false, optional: false, required: true
  private _clients = new JobTaskForEachTaskTaskNewClusterWorkloadTypeClientsOutputReference(this, "clients");
  public get clients() {
    return this._clients;
  }
  public putClients(value: JobTaskForEachTaskTaskNewClusterWorkloadTypeClients) {
    this._clients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }
}
export interface JobTaskForEachTaskTaskNewCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#apply_policy_default_values Job#apply_policy_default_values}
  */
  readonly applyPolicyDefaultValues?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cluster_id Job#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cluster_name Job#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#custom_tags Job#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#data_security_mode Job#data_security_mode}
  */
  readonly dataSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#driver_instance_pool_id Job#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#driver_node_type_id Job#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#enable_elastic_disk Job#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#enable_local_disk_encryption Job#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#idempotency_token Job#idempotency_token}
  */
  readonly idempotencyToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#instance_pool_id Job#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#is_single_node Job#is_single_node}
  */
  readonly isSingleNode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#kind Job#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#node_type_id Job#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#num_workers Job#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#policy_id Job#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#remote_disk_throughput Job#remote_disk_throughput}
  */
  readonly remoteDiskThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#runtime_engine Job#runtime_engine}
  */
  readonly runtimeEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#single_user_name Job#single_user_name}
  */
  readonly singleUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spark_conf Job#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spark_env_vars Job#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spark_version Job#spark_version}
  */
  readonly sparkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ssh_public_keys Job#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#total_initial_remote_disk_size Job#total_initial_remote_disk_size}
  */
  readonly totalInitialRemoteDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#use_ml_runtime Job#use_ml_runtime}
  */
  readonly useMlRuntime?: boolean | cdktn.IResolvable;
  /**
  * autoscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#autoscale Job#autoscale}
  */
  readonly autoscale?: JobTaskForEachTaskTaskNewClusterAutoscale;
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#aws_attributes Job#aws_attributes}
  */
  readonly awsAttributes?: JobTaskForEachTaskTaskNewClusterAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#azure_attributes Job#azure_attributes}
  */
  readonly azureAttributes?: JobTaskForEachTaskTaskNewClusterAzureAttributes;
  /**
  * cluster_log_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cluster_log_conf Job#cluster_log_conf}
  */
  readonly clusterLogConf?: JobTaskForEachTaskTaskNewClusterClusterLogConf;
  /**
  * cluster_mount_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cluster_mount_info Job#cluster_mount_info}
  */
  readonly clusterMountInfo?: JobTaskForEachTaskTaskNewClusterClusterMountInfo[] | cdktn.IResolvable;
  /**
  * docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#docker_image Job#docker_image}
  */
  readonly dockerImage?: JobTaskForEachTaskTaskNewClusterDockerImage;
  /**
  * driver_node_type_flexibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#driver_node_type_flexibility Job#driver_node_type_flexibility}
  */
  readonly driverNodeTypeFlexibility?: JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibility;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#gcp_attributes Job#gcp_attributes}
  */
  readonly gcpAttributes?: JobTaskForEachTaskTaskNewClusterGcpAttributes;
  /**
  * init_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#init_scripts Job#init_scripts}
  */
  readonly initScripts?: JobTaskForEachTaskTaskNewClusterInitScripts[] | cdktn.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#library Job#library}
  */
  readonly library?: JobTaskForEachTaskTaskNewClusterLibrary[] | cdktn.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#provider_config Job#provider_config}
  */
  readonly providerConfig?: JobTaskForEachTaskTaskNewClusterProviderConfig;
  /**
  * worker_node_type_flexibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#worker_node_type_flexibility Job#worker_node_type_flexibility}
  */
  readonly workerNodeTypeFlexibility?: JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibility;
  /**
  * workload_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workload_type Job#workload_type}
  */
  readonly workloadType?: JobTaskForEachTaskTaskNewClusterWorkloadType;
}

export function jobTaskForEachTaskTaskNewClusterToTerraform(struct?: JobTaskForEachTaskTaskNewClusterOutputReference | JobTaskForEachTaskTaskNewCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_policy_default_values: cdktn.booleanToTerraform(struct!.applyPolicyDefaultValues),
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
    cluster_name: cdktn.stringToTerraform(struct!.clusterName),
    custom_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customTags),
    data_security_mode: cdktn.stringToTerraform(struct!.dataSecurityMode),
    driver_instance_pool_id: cdktn.stringToTerraform(struct!.driverInstancePoolId),
    driver_node_type_id: cdktn.stringToTerraform(struct!.driverNodeTypeId),
    enable_elastic_disk: cdktn.booleanToTerraform(struct!.enableElasticDisk),
    enable_local_disk_encryption: cdktn.booleanToTerraform(struct!.enableLocalDiskEncryption),
    idempotency_token: cdktn.stringToTerraform(struct!.idempotencyToken),
    instance_pool_id: cdktn.stringToTerraform(struct!.instancePoolId),
    is_single_node: cdktn.booleanToTerraform(struct!.isSingleNode),
    kind: cdktn.stringToTerraform(struct!.kind),
    node_type_id: cdktn.stringToTerraform(struct!.nodeTypeId),
    num_workers: cdktn.numberToTerraform(struct!.numWorkers),
    policy_id: cdktn.stringToTerraform(struct!.policyId),
    remote_disk_throughput: cdktn.numberToTerraform(struct!.remoteDiskThroughput),
    runtime_engine: cdktn.stringToTerraform(struct!.runtimeEngine),
    single_user_name: cdktn.stringToTerraform(struct!.singleUserName),
    spark_conf: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkConf),
    spark_env_vars: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkEnvVars),
    spark_version: cdktn.stringToTerraform(struct!.sparkVersion),
    ssh_public_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sshPublicKeys),
    total_initial_remote_disk_size: cdktn.numberToTerraform(struct!.totalInitialRemoteDiskSize),
    use_ml_runtime: cdktn.booleanToTerraform(struct!.useMlRuntime),
    autoscale: jobTaskForEachTaskTaskNewClusterAutoscaleToTerraform(struct!.autoscale),
    aws_attributes: jobTaskForEachTaskTaskNewClusterAwsAttributesToTerraform(struct!.awsAttributes),
    azure_attributes: jobTaskForEachTaskTaskNewClusterAzureAttributesToTerraform(struct!.azureAttributes),
    cluster_log_conf: jobTaskForEachTaskTaskNewClusterClusterLogConfToTerraform(struct!.clusterLogConf),
    cluster_mount_info: cdktn.listMapper(jobTaskForEachTaskTaskNewClusterClusterMountInfoToTerraform, true)(struct!.clusterMountInfo),
    docker_image: jobTaskForEachTaskTaskNewClusterDockerImageToTerraform(struct!.dockerImage),
    driver_node_type_flexibility: jobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibilityToTerraform(struct!.driverNodeTypeFlexibility),
    gcp_attributes: jobTaskForEachTaskTaskNewClusterGcpAttributesToTerraform(struct!.gcpAttributes),
    init_scripts: cdktn.listMapper(jobTaskForEachTaskTaskNewClusterInitScriptsToTerraform, true)(struct!.initScripts),
    library: cdktn.listMapper(jobTaskForEachTaskTaskNewClusterLibraryToTerraform, true)(struct!.library),
    provider_config: jobTaskForEachTaskTaskNewClusterProviderConfigToTerraform(struct!.providerConfig),
    worker_node_type_flexibility: jobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibilityToTerraform(struct!.workerNodeTypeFlexibility),
    workload_type: jobTaskForEachTaskTaskNewClusterWorkloadTypeToTerraform(struct!.workloadType),
  }
}


export function jobTaskForEachTaskTaskNewClusterToHclTerraform(struct?: JobTaskForEachTaskTaskNewClusterOutputReference | JobTaskForEachTaskTaskNewCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_policy_default_values: {
      value: cdktn.booleanToHclTerraform(struct!.applyPolicyDefaultValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktn.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_security_mode: {
      value: cdktn.stringToHclTerraform(struct!.dataSecurityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_instance_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.driverInstancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_node_type_id: {
      value: cdktn.stringToHclTerraform(struct!.driverNodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_elastic_disk: {
      value: cdktn.booleanToHclTerraform(struct!.enableElasticDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_local_disk_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableLocalDiskEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idempotency_token: {
      value: cdktn.stringToHclTerraform(struct!.idempotencyToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.instancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_single_node: {
      value: cdktn.booleanToHclTerraform(struct!.isSingleNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_id: {
      value: cdktn.stringToHclTerraform(struct!.nodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_workers: {
      value: cdktn.numberToHclTerraform(struct!.numWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_id: {
      value: cdktn.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_disk_throughput: {
      value: cdktn.numberToHclTerraform(struct!.remoteDiskThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_engine: {
      value: cdktn.stringToHclTerraform(struct!.runtimeEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_user_name: {
      value: cdktn.stringToHclTerraform(struct!.singleUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spark_conf: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_env_vars: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkEnvVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_version: {
      value: cdktn.stringToHclTerraform(struct!.sparkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    total_initial_remote_disk_size: {
      value: cdktn.numberToHclTerraform(struct!.totalInitialRemoteDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_ml_runtime: {
      value: cdktn.booleanToHclTerraform(struct!.useMlRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscale: {
      value: jobTaskForEachTaskTaskNewClusterAutoscaleToHclTerraform(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterAutoscaleList",
    },
    aws_attributes: {
      value: jobTaskForEachTaskTaskNewClusterAwsAttributesToHclTerraform(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterAwsAttributesList",
    },
    azure_attributes: {
      value: jobTaskForEachTaskTaskNewClusterAzureAttributesToHclTerraform(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterAzureAttributesList",
    },
    cluster_log_conf: {
      value: jobTaskForEachTaskTaskNewClusterClusterLogConfToHclTerraform(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterClusterLogConfList",
    },
    cluster_mount_info: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskNewClusterClusterMountInfoToHclTerraform, true)(struct!.clusterMountInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterClusterMountInfoList",
    },
    docker_image: {
      value: jobTaskForEachTaskTaskNewClusterDockerImageToHclTerraform(struct!.dockerImage),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterDockerImageList",
    },
    driver_node_type_flexibility: {
      value: jobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibilityToHclTerraform(struct!.driverNodeTypeFlexibility),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibilityList",
    },
    gcp_attributes: {
      value: jobTaskForEachTaskTaskNewClusterGcpAttributesToHclTerraform(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterGcpAttributesList",
    },
    init_scripts: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskNewClusterInitScriptsToHclTerraform, true)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterInitScriptsList",
    },
    library: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskNewClusterLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "set",
      storageClassType: "JobTaskForEachTaskTaskNewClusterLibraryList",
    },
    provider_config: {
      value: jobTaskForEachTaskTaskNewClusterProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterProviderConfigList",
    },
    worker_node_type_flexibility: {
      value: jobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibilityToHclTerraform(struct!.workerNodeTypeFlexibility),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibilityList",
    },
    workload_type: {
      value: jobTaskForEachTaskTaskNewClusterWorkloadTypeToHclTerraform(struct!.workloadType),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterWorkloadTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNewClusterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNewCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyDefaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValues = this._applyPolicyDefaultValues;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._dataSecurityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecurityMode = this._dataSecurityMode;
    }
    if (this._driverInstancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverInstancePoolId = this._driverInstancePoolId;
    }
    if (this._driverNodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeId = this._driverNodeTypeId;
    }
    if (this._enableElasticDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableElasticDisk = this._enableElasticDisk;
    }
    if (this._enableLocalDiskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLocalDiskEncryption = this._enableLocalDiskEncryption;
    }
    if (this._idempotencyToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.idempotencyToken = this._idempotencyToken;
    }
    if (this._instancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolId = this._instancePoolId;
    }
    if (this._isSingleNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSingleNode = this._isSingleNode;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._nodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeId = this._nodeTypeId;
    }
    if (this._numWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numWorkers = this._numWorkers;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._remoteDiskThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDiskThroughput = this._remoteDiskThroughput;
    }
    if (this._runtimeEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEngine = this._runtimeEngine;
    }
    if (this._singleUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleUserName = this._singleUserName;
    }
    if (this._sparkConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConf = this._sparkConf;
    }
    if (this._sparkEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkEnvVars = this._sparkEnvVars;
    }
    if (this._sparkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkVersion = this._sparkVersion;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._totalInitialRemoteDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalInitialRemoteDiskSize = this._totalInitialRemoteDiskSize;
    }
    if (this._useMlRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMlRuntime = this._useMlRuntime;
    }
    if (this._autoscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale?.internalValue;
    }
    if (this._awsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAttributes = this._awsAttributes?.internalValue;
    }
    if (this._azureAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAttributes = this._azureAttributes?.internalValue;
    }
    if (this._clusterLogConf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLogConf = this._clusterLogConf?.internalValue;
    }
    if (this._clusterMountInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMountInfo = this._clusterMountInfo?.internalValue;
    }
    if (this._dockerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage?.internalValue;
    }
    if (this._driverNodeTypeFlexibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeFlexibility = this._driverNodeTypeFlexibility?.internalValue;
    }
    if (this._gcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAttributes = this._gcpAttributes?.internalValue;
    }
    if (this._initScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScripts = this._initScripts?.internalValue;
    }
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    if (this._workerNodeTypeFlexibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodeTypeFlexibility = this._workerNodeTypeFlexibility?.internalValue;
    }
    if (this._workloadType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNewCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyPolicyDefaultValues = undefined;
      this._clusterId = undefined;
      this._clusterName = undefined;
      this._customTags = undefined;
      this._dataSecurityMode = undefined;
      this._driverInstancePoolId = undefined;
      this._driverNodeTypeId = undefined;
      this._enableElasticDisk = undefined;
      this._enableLocalDiskEncryption = undefined;
      this._idempotencyToken = undefined;
      this._instancePoolId = undefined;
      this._isSingleNode = undefined;
      this._kind = undefined;
      this._nodeTypeId = undefined;
      this._numWorkers = undefined;
      this._policyId = undefined;
      this._remoteDiskThroughput = undefined;
      this._runtimeEngine = undefined;
      this._singleUserName = undefined;
      this._sparkConf = undefined;
      this._sparkEnvVars = undefined;
      this._sparkVersion = undefined;
      this._sshPublicKeys = undefined;
      this._totalInitialRemoteDiskSize = undefined;
      this._useMlRuntime = undefined;
      this._autoscale.internalValue = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._clusterMountInfo.internalValue = undefined;
      this._dockerImage.internalValue = undefined;
      this._driverNodeTypeFlexibility.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
      this._library.internalValue = undefined;
      this._providerConfig.internalValue = undefined;
      this._workerNodeTypeFlexibility.internalValue = undefined;
      this._workloadType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyPolicyDefaultValues = value.applyPolicyDefaultValues;
      this._clusterId = value.clusterId;
      this._clusterName = value.clusterName;
      this._customTags = value.customTags;
      this._dataSecurityMode = value.dataSecurityMode;
      this._driverInstancePoolId = value.driverInstancePoolId;
      this._driverNodeTypeId = value.driverNodeTypeId;
      this._enableElasticDisk = value.enableElasticDisk;
      this._enableLocalDiskEncryption = value.enableLocalDiskEncryption;
      this._idempotencyToken = value.idempotencyToken;
      this._instancePoolId = value.instancePoolId;
      this._isSingleNode = value.isSingleNode;
      this._kind = value.kind;
      this._nodeTypeId = value.nodeTypeId;
      this._numWorkers = value.numWorkers;
      this._policyId = value.policyId;
      this._remoteDiskThroughput = value.remoteDiskThroughput;
      this._runtimeEngine = value.runtimeEngine;
      this._singleUserName = value.singleUserName;
      this._sparkConf = value.sparkConf;
      this._sparkEnvVars = value.sparkEnvVars;
      this._sparkVersion = value.sparkVersion;
      this._sshPublicKeys = value.sshPublicKeys;
      this._totalInitialRemoteDiskSize = value.totalInitialRemoteDiskSize;
      this._useMlRuntime = value.useMlRuntime;
      this._autoscale.internalValue = value.autoscale;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._clusterMountInfo.internalValue = value.clusterMountInfo;
      this._dockerImage.internalValue = value.dockerImage;
      this._driverNodeTypeFlexibility.internalValue = value.driverNodeTypeFlexibility;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
      this._library.internalValue = value.library;
      this._providerConfig.internalValue = value.providerConfig;
      this._workerNodeTypeFlexibility.internalValue = value.workerNodeTypeFlexibility;
      this._workloadType.internalValue = value.workloadType;
    }
  }

  // apply_policy_default_values - computed: false, optional: true, required: false
  private _applyPolicyDefaultValues?: boolean | cdktn.IResolvable; 
  public get applyPolicyDefaultValues() {
    return this.getBooleanAttribute('apply_policy_default_values');
  }
  public set applyPolicyDefaultValues(value: boolean | cdktn.IResolvable) {
    this._applyPolicyDefaultValues = value;
  }
  public resetApplyPolicyDefaultValues() {
    this._applyPolicyDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyDefaultValuesInput() {
    return this._applyPolicyDefaultValues;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // data_security_mode - computed: false, optional: true, required: false
  private _dataSecurityMode?: string; 
  public get dataSecurityMode() {
    return this.getStringAttribute('data_security_mode');
  }
  public set dataSecurityMode(value: string) {
    this._dataSecurityMode = value;
  }
  public resetDataSecurityMode() {
    this._dataSecurityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecurityModeInput() {
    return this._dataSecurityMode;
  }

  // driver_instance_pool_id - computed: true, optional: true, required: false
  private _driverInstancePoolId?: string; 
  public get driverInstancePoolId() {
    return this.getStringAttribute('driver_instance_pool_id');
  }
  public set driverInstancePoolId(value: string) {
    this._driverInstancePoolId = value;
  }
  public resetDriverInstancePoolId() {
    this._driverInstancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInstancePoolIdInput() {
    return this._driverInstancePoolId;
  }

  // driver_node_type_id - computed: true, optional: true, required: false
  private _driverNodeTypeId?: string; 
  public get driverNodeTypeId() {
    return this.getStringAttribute('driver_node_type_id');
  }
  public set driverNodeTypeId(value: string) {
    this._driverNodeTypeId = value;
  }
  public resetDriverNodeTypeId() {
    this._driverNodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeIdInput() {
    return this._driverNodeTypeId;
  }

  // enable_elastic_disk - computed: true, optional: true, required: false
  private _enableElasticDisk?: boolean | cdktn.IResolvable; 
  public get enableElasticDisk() {
    return this.getBooleanAttribute('enable_elastic_disk');
  }
  public set enableElasticDisk(value: boolean | cdktn.IResolvable) {
    this._enableElasticDisk = value;
  }
  public resetEnableElasticDisk() {
    this._enableElasticDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableElasticDiskInput() {
    return this._enableElasticDisk;
  }

  // enable_local_disk_encryption - computed: true, optional: true, required: false
  private _enableLocalDiskEncryption?: boolean | cdktn.IResolvable; 
  public get enableLocalDiskEncryption() {
    return this.getBooleanAttribute('enable_local_disk_encryption');
  }
  public set enableLocalDiskEncryption(value: boolean | cdktn.IResolvable) {
    this._enableLocalDiskEncryption = value;
  }
  public resetEnableLocalDiskEncryption() {
    this._enableLocalDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalDiskEncryptionInput() {
    return this._enableLocalDiskEncryption;
  }

  // idempotency_token - computed: false, optional: true, required: false
  private _idempotencyToken?: string; 
  public get idempotencyToken() {
    return this.getStringAttribute('idempotency_token');
  }
  public set idempotencyToken(value: string) {
    this._idempotencyToken = value;
  }
  public resetIdempotencyToken() {
    this._idempotencyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idempotencyTokenInput() {
    return this._idempotencyToken;
  }

  // instance_pool_id - computed: false, optional: true, required: false
  private _instancePoolId?: string; 
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }
  public resetInstancePoolId() {
    this._instancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolIdInput() {
    return this._instancePoolId;
  }

  // is_single_node - computed: false, optional: true, required: false
  private _isSingleNode?: boolean | cdktn.IResolvable; 
  public get isSingleNode() {
    return this.getBooleanAttribute('is_single_node');
  }
  public set isSingleNode(value: boolean | cdktn.IResolvable) {
    this._isSingleNode = value;
  }
  public resetIsSingleNode() {
    this._isSingleNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSingleNodeInput() {
    return this._isSingleNode;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // node_type_id - computed: true, optional: true, required: false
  private _nodeTypeId?: string; 
  public get nodeTypeId() {
    return this.getStringAttribute('node_type_id');
  }
  public set nodeTypeId(value: string) {
    this._nodeTypeId = value;
  }
  public resetNodeTypeId() {
    this._nodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIdInput() {
    return this._nodeTypeId;
  }

  // num_workers - computed: false, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkersInput() {
    return this._numWorkers;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // remote_disk_throughput - computed: false, optional: true, required: false
  private _remoteDiskThroughput?: number; 
  public get remoteDiskThroughput() {
    return this.getNumberAttribute('remote_disk_throughput');
  }
  public set remoteDiskThroughput(value: number) {
    this._remoteDiskThroughput = value;
  }
  public resetRemoteDiskThroughput() {
    this._remoteDiskThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDiskThroughputInput() {
    return this._remoteDiskThroughput;
  }

  // runtime_engine - computed: false, optional: true, required: false
  private _runtimeEngine?: string; 
  public get runtimeEngine() {
    return this.getStringAttribute('runtime_engine');
  }
  public set runtimeEngine(value: string) {
    this._runtimeEngine = value;
  }
  public resetRuntimeEngine() {
    this._runtimeEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEngineInput() {
    return this._runtimeEngine;
  }

  // single_user_name - computed: false, optional: true, required: false
  private _singleUserName?: string; 
  public get singleUserName() {
    return this.getStringAttribute('single_user_name');
  }
  public set singleUserName(value: string) {
    this._singleUserName = value;
  }
  public resetSingleUserName() {
    this._singleUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleUserNameInput() {
    return this._singleUserName;
  }

  // spark_conf - computed: false, optional: true, required: false
  private _sparkConf?: { [key: string]: string }; 
  public get sparkConf() {
    return this.getStringMapAttribute('spark_conf');
  }
  public set sparkConf(value: { [key: string]: string }) {
    this._sparkConf = value;
  }
  public resetSparkConf() {
    this._sparkConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfInput() {
    return this._sparkConf;
  }

  // spark_env_vars - computed: false, optional: true, required: false
  private _sparkEnvVars?: { [key: string]: string }; 
  public get sparkEnvVars() {
    return this.getStringMapAttribute('spark_env_vars');
  }
  public set sparkEnvVars(value: { [key: string]: string }) {
    this._sparkEnvVars = value;
  }
  public resetSparkEnvVars() {
    this._sparkEnvVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEnvVarsInput() {
    return this._sparkEnvVars;
  }

  // spark_version - computed: false, optional: true, required: false
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  public resetSparkVersion() {
    this._sparkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
  }

  // ssh_public_keys - computed: false, optional: true, required: false
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // total_initial_remote_disk_size - computed: false, optional: true, required: false
  private _totalInitialRemoteDiskSize?: number; 
  public get totalInitialRemoteDiskSize() {
    return this.getNumberAttribute('total_initial_remote_disk_size');
  }
  public set totalInitialRemoteDiskSize(value: number) {
    this._totalInitialRemoteDiskSize = value;
  }
  public resetTotalInitialRemoteDiskSize() {
    this._totalInitialRemoteDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInitialRemoteDiskSizeInput() {
    return this._totalInitialRemoteDiskSize;
  }

  // use_ml_runtime - computed: false, optional: true, required: false
  private _useMlRuntime?: boolean | cdktn.IResolvable; 
  public get useMlRuntime() {
    return this.getBooleanAttribute('use_ml_runtime');
  }
  public set useMlRuntime(value: boolean | cdktn.IResolvable) {
    this._useMlRuntime = value;
  }
  public resetUseMlRuntime() {
    this._useMlRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMlRuntimeInput() {
    return this._useMlRuntime;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new JobTaskForEachTaskTaskNewClusterAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: JobTaskForEachTaskTaskNewClusterAutoscale) {
    this._autoscale.internalValue = value;
  }
  public resetAutoscale() {
    this._autoscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale.internalValue;
  }

  // aws_attributes - computed: false, optional: true, required: false
  private _awsAttributes = new JobTaskForEachTaskTaskNewClusterAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: JobTaskForEachTaskTaskNewClusterAwsAttributes) {
    this._awsAttributes.internalValue = value;
  }
  public resetAwsAttributes() {
    this._awsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAttributesInput() {
    return this._awsAttributes.internalValue;
  }

  // azure_attributes - computed: false, optional: true, required: false
  private _azureAttributes = new JobTaskForEachTaskTaskNewClusterAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: JobTaskForEachTaskTaskNewClusterAzureAttributes) {
    this._azureAttributes.internalValue = value;
  }
  public resetAzureAttributes() {
    this._azureAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAttributesInput() {
    return this._azureAttributes.internalValue;
  }

  // cluster_log_conf - computed: false, optional: true, required: false
  private _clusterLogConf = new JobTaskForEachTaskTaskNewClusterClusterLogConfOutputReference(this, "cluster_log_conf");
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: JobTaskForEachTaskTaskNewClusterClusterLogConf) {
    this._clusterLogConf.internalValue = value;
  }
  public resetClusterLogConf() {
    this._clusterLogConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogConfInput() {
    return this._clusterLogConf.internalValue;
  }

  // cluster_mount_info - computed: false, optional: true, required: false
  private _clusterMountInfo = new JobTaskForEachTaskTaskNewClusterClusterMountInfoList(this, "cluster_mount_info", false);
  public get clusterMountInfo() {
    return this._clusterMountInfo;
  }
  public putClusterMountInfo(value: JobTaskForEachTaskTaskNewClusterClusterMountInfo[] | cdktn.IResolvable) {
    this._clusterMountInfo.internalValue = value;
  }
  public resetClusterMountInfo() {
    this._clusterMountInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMountInfoInput() {
    return this._clusterMountInfo.internalValue;
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage = new JobTaskForEachTaskTaskNewClusterDockerImageOutputReference(this, "docker_image");
  public get dockerImage() {
    return this._dockerImage;
  }
  public putDockerImage(value: JobTaskForEachTaskTaskNewClusterDockerImage) {
    this._dockerImage.internalValue = value;
  }
  public resetDockerImage() {
    this._dockerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage.internalValue;
  }

  // driver_node_type_flexibility - computed: false, optional: true, required: false
  private _driverNodeTypeFlexibility = new JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibilityOutputReference(this, "driver_node_type_flexibility");
  public get driverNodeTypeFlexibility() {
    return this._driverNodeTypeFlexibility;
  }
  public putDriverNodeTypeFlexibility(value: JobTaskForEachTaskTaskNewClusterDriverNodeTypeFlexibility) {
    this._driverNodeTypeFlexibility.internalValue = value;
  }
  public resetDriverNodeTypeFlexibility() {
    this._driverNodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeFlexibilityInput() {
    return this._driverNodeTypeFlexibility.internalValue;
  }

  // gcp_attributes - computed: false, optional: true, required: false
  private _gcpAttributes = new JobTaskForEachTaskTaskNewClusterGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: JobTaskForEachTaskTaskNewClusterGcpAttributes) {
    this._gcpAttributes.internalValue = value;
  }
  public resetGcpAttributes() {
    this._gcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAttributesInput() {
    return this._gcpAttributes.internalValue;
  }

  // init_scripts - computed: false, optional: true, required: false
  private _initScripts = new JobTaskForEachTaskTaskNewClusterInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: JobTaskForEachTaskTaskNewClusterInitScripts[] | cdktn.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new JobTaskForEachTaskTaskNewClusterLibraryList(this, "library", true);
  public get library() {
    return this._library;
  }
  public putLibrary(value: JobTaskForEachTaskTaskNewClusterLibrary[] | cdktn.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new JobTaskForEachTaskTaskNewClusterProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: JobTaskForEachTaskTaskNewClusterProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // worker_node_type_flexibility - computed: false, optional: true, required: false
  private _workerNodeTypeFlexibility = new JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibilityOutputReference(this, "worker_node_type_flexibility");
  public get workerNodeTypeFlexibility() {
    return this._workerNodeTypeFlexibility;
  }
  public putWorkerNodeTypeFlexibility(value: JobTaskForEachTaskTaskNewClusterWorkerNodeTypeFlexibility) {
    this._workerNodeTypeFlexibility.internalValue = value;
  }
  public resetWorkerNodeTypeFlexibility() {
    this._workerNodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeTypeFlexibilityInput() {
    return this._workerNodeTypeFlexibility.internalValue;
  }

  // workload_type - computed: false, optional: true, required: false
  private _workloadType = new JobTaskForEachTaskTaskNewClusterWorkloadTypeOutputReference(this, "workload_type");
  public get workloadType() {
    return this._workloadType;
  }
  public putWorkloadType(value: JobTaskForEachTaskTaskNewClusterWorkloadType) {
    this._workloadType.internalValue = value;
  }
  public resetWorkloadType() {
    this._workloadType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType.internalValue;
  }
}
export interface JobTaskForEachTaskTaskNotebookTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#base_parameters Job#base_parameters}
  */
  readonly baseParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#notebook_path Job#notebook_path}
  */
  readonly notebookPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function jobTaskForEachTaskTaskNotebookTaskToTerraform(struct?: JobTaskForEachTaskTaskNotebookTaskOutputReference | JobTaskForEachTaskTaskNotebookTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.baseParameters),
    notebook_path: cdktn.stringToTerraform(struct!.notebookPath),
    source: cdktn.stringToTerraform(struct!.source),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
  }
}


export function jobTaskForEachTaskTaskNotebookTaskToHclTerraform(struct?: JobTaskForEachTaskTaskNotebookTaskOutputReference | JobTaskForEachTaskTaskNotebookTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.baseParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    notebook_path: {
      value: cdktn.stringToHclTerraform(struct!.notebookPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNotebookTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNotebookTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseParameters = this._baseParameters;
    }
    if (this._notebookPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookPath = this._notebookPath;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNotebookTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseParameters = undefined;
      this._notebookPath = undefined;
      this._source = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseParameters = value.baseParameters;
      this._notebookPath = value.notebookPath;
      this._source = value.source;
      this._warehouseId = value.warehouseId;
    }
  }

  // base_parameters - computed: false, optional: true, required: false
  private _baseParameters?: { [key: string]: string }; 
  public get baseParameters() {
    return this.getStringMapAttribute('base_parameters');
  }
  public set baseParameters(value: { [key: string]: string }) {
    this._baseParameters = value;
  }
  public resetBaseParameters() {
    this._baseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseParametersInput() {
    return this._baseParameters;
  }

  // notebook_path - computed: false, optional: false, required: true
  private _notebookPath?: string; 
  public get notebookPath() {
    return this.getStringAttribute('notebook_path');
  }
  public set notebookPath(value: string) {
    this._notebookPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookPathInput() {
    return this._notebookPath;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // warehouse_id - computed: false, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }
}
export interface JobTaskForEachTaskTaskNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#alert_on_last_attempt Job#alert_on_last_attempt}
  */
  readonly alertOnLastAttempt?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#no_alert_for_canceled_runs Job#no_alert_for_canceled_runs}
  */
  readonly noAlertForCanceledRuns?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#no_alert_for_skipped_runs Job#no_alert_for_skipped_runs}
  */
  readonly noAlertForSkippedRuns?: boolean | cdktn.IResolvable;
}

export function jobTaskForEachTaskTaskNotificationSettingsToTerraform(struct?: JobTaskForEachTaskTaskNotificationSettingsOutputReference | JobTaskForEachTaskTaskNotificationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_on_last_attempt: cdktn.booleanToTerraform(struct!.alertOnLastAttempt),
    no_alert_for_canceled_runs: cdktn.booleanToTerraform(struct!.noAlertForCanceledRuns),
    no_alert_for_skipped_runs: cdktn.booleanToTerraform(struct!.noAlertForSkippedRuns),
  }
}


export function jobTaskForEachTaskTaskNotificationSettingsToHclTerraform(struct?: JobTaskForEachTaskTaskNotificationSettingsOutputReference | JobTaskForEachTaskTaskNotificationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_on_last_attempt: {
      value: cdktn.booleanToHclTerraform(struct!.alertOnLastAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_alert_for_canceled_runs: {
      value: cdktn.booleanToHclTerraform(struct!.noAlertForCanceledRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_alert_for_skipped_runs: {
      value: cdktn.booleanToHclTerraform(struct!.noAlertForSkippedRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskNotificationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertOnLastAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertOnLastAttempt = this._alertOnLastAttempt;
    }
    if (this._noAlertForCanceledRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlertForCanceledRuns = this._noAlertForCanceledRuns;
    }
    if (this._noAlertForSkippedRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlertForSkippedRuns = this._noAlertForSkippedRuns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertOnLastAttempt = undefined;
      this._noAlertForCanceledRuns = undefined;
      this._noAlertForSkippedRuns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertOnLastAttempt = value.alertOnLastAttempt;
      this._noAlertForCanceledRuns = value.noAlertForCanceledRuns;
      this._noAlertForSkippedRuns = value.noAlertForSkippedRuns;
    }
  }

  // alert_on_last_attempt - computed: false, optional: true, required: false
  private _alertOnLastAttempt?: boolean | cdktn.IResolvable; 
  public get alertOnLastAttempt() {
    return this.getBooleanAttribute('alert_on_last_attempt');
  }
  public set alertOnLastAttempt(value: boolean | cdktn.IResolvable) {
    this._alertOnLastAttempt = value;
  }
  public resetAlertOnLastAttempt() {
    this._alertOnLastAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnLastAttemptInput() {
    return this._alertOnLastAttempt;
  }

  // no_alert_for_canceled_runs - computed: false, optional: true, required: false
  private _noAlertForCanceledRuns?: boolean | cdktn.IResolvable; 
  public get noAlertForCanceledRuns() {
    return this.getBooleanAttribute('no_alert_for_canceled_runs');
  }
  public set noAlertForCanceledRuns(value: boolean | cdktn.IResolvable) {
    this._noAlertForCanceledRuns = value;
  }
  public resetNoAlertForCanceledRuns() {
    this._noAlertForCanceledRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAlertForCanceledRunsInput() {
    return this._noAlertForCanceledRuns;
  }

  // no_alert_for_skipped_runs - computed: false, optional: true, required: false
  private _noAlertForSkippedRuns?: boolean | cdktn.IResolvable; 
  public get noAlertForSkippedRuns() {
    return this.getBooleanAttribute('no_alert_for_skipped_runs');
  }
  public set noAlertForSkippedRuns(value: boolean | cdktn.IResolvable) {
    this._noAlertForSkippedRuns = value;
  }
  public resetNoAlertForSkippedRuns() {
    this._noAlertForSkippedRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAlertForSkippedRunsInput() {
    return this._noAlertForSkippedRuns;
  }
}
export interface JobTaskForEachTaskTaskPipelineTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#full_refresh Job#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pipeline_id Job#pipeline_id}
  */
  readonly pipelineId: string;
}

export function jobTaskForEachTaskTaskPipelineTaskToTerraform(struct?: JobTaskForEachTaskTaskPipelineTaskOutputReference | JobTaskForEachTaskTaskPipelineTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_refresh: cdktn.booleanToTerraform(struct!.fullRefresh),
    pipeline_id: cdktn.stringToTerraform(struct!.pipelineId),
  }
}


export function jobTaskForEachTaskTaskPipelineTaskToHclTerraform(struct?: JobTaskForEachTaskTaskPipelineTaskOutputReference | JobTaskForEachTaskTaskPipelineTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_refresh: {
      value: cdktn.booleanToHclTerraform(struct!.fullRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_id: {
      value: cdktn.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskPipelineTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskPipelineTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefresh = this._fullRefresh;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskPipelineTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullRefresh = undefined;
      this._pipelineId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullRefresh = value.fullRefresh;
      this._pipelineId = value.pipelineId;
    }
  }

  // full_refresh - computed: false, optional: true, required: false
  private _fullRefresh?: boolean | cdktn.IResolvable; 
  public get fullRefresh() {
    return this.getBooleanAttribute('full_refresh');
  }
  public set fullRefresh(value: boolean | cdktn.IResolvable) {
    this._fullRefresh = value;
  }
  public resetFullRefresh() {
    this._fullRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRefreshInput() {
    return this._fullRefresh;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }
}
export interface JobTaskForEachTaskTaskPowerBiTaskPowerBiModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#authentication_method Job#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#model_name Job#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#overwrite_existing Job#overwrite_existing}
  */
  readonly overwriteExisting?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#storage_mode Job#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workspace_name Job#workspace_name}
  */
  readonly workspaceName?: string;
}

export function jobTaskForEachTaskTaskPowerBiTaskPowerBiModelToTerraform(struct?: JobTaskForEachTaskTaskPowerBiTaskPowerBiModelOutputReference | JobTaskForEachTaskTaskPowerBiTaskPowerBiModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktn.stringToTerraform(struct!.authenticationMethod),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    overwrite_existing: cdktn.booleanToTerraform(struct!.overwriteExisting),
    storage_mode: cdktn.stringToTerraform(struct!.storageMode),
    workspace_name: cdktn.stringToTerraform(struct!.workspaceName),
  }
}


export function jobTaskForEachTaskTaskPowerBiTaskPowerBiModelToHclTerraform(struct?: JobTaskForEachTaskTaskPowerBiTaskPowerBiModelOutputReference | JobTaskForEachTaskTaskPowerBiTaskPowerBiModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_method: {
      value: cdktn.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_mode: {
      value: cdktn.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_name: {
      value: cdktn.stringToHclTerraform(struct!.workspaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskPowerBiTaskPowerBiModelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskPowerBiTaskPowerBiModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._workspaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceName = this._workspaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskPowerBiTaskPowerBiModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationMethod = undefined;
      this._modelName = undefined;
      this._overwriteExisting = undefined;
      this._storageMode = undefined;
      this._workspaceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationMethod = value.authenticationMethod;
      this._modelName = value.modelName;
      this._overwriteExisting = value.overwriteExisting;
      this._storageMode = value.storageMode;
      this._workspaceName = value.workspaceName;
    }
  }

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: boolean | cdktn.IResolvable; 
  public get overwriteExisting() {
    return this.getBooleanAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: boolean | cdktn.IResolvable) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // workspace_name - computed: false, optional: true, required: false
  private _workspaceName?: string; 
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }
  public resetWorkspaceName() {
    this._workspaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName;
  }
}
export interface JobTaskForEachTaskTaskPowerBiTaskTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#catalog Job#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#name Job#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#schema Job#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#storage_mode Job#storage_mode}
  */
  readonly storageMode?: string;
}

export function jobTaskForEachTaskTaskPowerBiTaskTablesToTerraform(struct?: JobTaskForEachTaskTaskPowerBiTaskTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    name: cdktn.stringToTerraform(struct!.name),
    schema: cdktn.stringToTerraform(struct!.schema),
    storage_mode: cdktn.stringToTerraform(struct!.storageMode),
  }
}


export function jobTaskForEachTaskTaskPowerBiTaskTablesToHclTerraform(struct?: JobTaskForEachTaskTaskPowerBiTaskTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
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
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_mode: {
      value: cdktn.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskPowerBiTaskTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskPowerBiTaskTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskPowerBiTaskTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._name = undefined;
      this._schema = undefined;
      this._storageMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._name = value.name;
      this._schema = value.schema;
      this._storageMode = value.storageMode;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
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

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }
}

export class JobTaskForEachTaskTaskPowerBiTaskTablesList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskPowerBiTaskTables[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskPowerBiTaskTablesOutputReference {
    return new JobTaskForEachTaskTaskPowerBiTaskTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskPowerBiTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#connection_resource_name Job#connection_resource_name}
  */
  readonly connectionResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#refresh_after_update Job#refresh_after_update}
  */
  readonly refreshAfterUpdate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId?: string;
  /**
  * power_bi_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#power_bi_model Job#power_bi_model}
  */
  readonly powerBiModel?: JobTaskForEachTaskTaskPowerBiTaskPowerBiModel;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#tables Job#tables}
  */
  readonly tables?: JobTaskForEachTaskTaskPowerBiTaskTables[] | cdktn.IResolvable;
}

export function jobTaskForEachTaskTaskPowerBiTaskToTerraform(struct?: JobTaskForEachTaskTaskPowerBiTaskOutputReference | JobTaskForEachTaskTaskPowerBiTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_resource_name: cdktn.stringToTerraform(struct!.connectionResourceName),
    refresh_after_update: cdktn.booleanToTerraform(struct!.refreshAfterUpdate),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
    power_bi_model: jobTaskForEachTaskTaskPowerBiTaskPowerBiModelToTerraform(struct!.powerBiModel),
    tables: cdktn.listMapper(jobTaskForEachTaskTaskPowerBiTaskTablesToTerraform, true)(struct!.tables),
  }
}


export function jobTaskForEachTaskTaskPowerBiTaskToHclTerraform(struct?: JobTaskForEachTaskTaskPowerBiTaskOutputReference | JobTaskForEachTaskTaskPowerBiTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_resource_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_after_update: {
      value: cdktn.booleanToHclTerraform(struct!.refreshAfterUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_bi_model: {
      value: jobTaskForEachTaskTaskPowerBiTaskPowerBiModelToHclTerraform(struct!.powerBiModel),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskPowerBiTaskPowerBiModelList",
    },
    tables: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskPowerBiTaskTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskPowerBiTaskTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskPowerBiTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskPowerBiTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionResourceName = this._connectionResourceName;
    }
    if (this._refreshAfterUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshAfterUpdate = this._refreshAfterUpdate;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    if (this._powerBiModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerBiModel = this._powerBiModel?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskPowerBiTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionResourceName = undefined;
      this._refreshAfterUpdate = undefined;
      this._warehouseId = undefined;
      this._powerBiModel.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionResourceName = value.connectionResourceName;
      this._refreshAfterUpdate = value.refreshAfterUpdate;
      this._warehouseId = value.warehouseId;
      this._powerBiModel.internalValue = value.powerBiModel;
      this._tables.internalValue = value.tables;
    }
  }

  // connection_resource_name - computed: false, optional: true, required: false
  private _connectionResourceName?: string; 
  public get connectionResourceName() {
    return this.getStringAttribute('connection_resource_name');
  }
  public set connectionResourceName(value: string) {
    this._connectionResourceName = value;
  }
  public resetConnectionResourceName() {
    this._connectionResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionResourceNameInput() {
    return this._connectionResourceName;
  }

  // refresh_after_update - computed: false, optional: true, required: false
  private _refreshAfterUpdate?: boolean | cdktn.IResolvable; 
  public get refreshAfterUpdate() {
    return this.getBooleanAttribute('refresh_after_update');
  }
  public set refreshAfterUpdate(value: boolean | cdktn.IResolvable) {
    this._refreshAfterUpdate = value;
  }
  public resetRefreshAfterUpdate() {
    this._refreshAfterUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshAfterUpdateInput() {
    return this._refreshAfterUpdate;
  }

  // warehouse_id - computed: false, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // power_bi_model - computed: false, optional: true, required: false
  private _powerBiModel = new JobTaskForEachTaskTaskPowerBiTaskPowerBiModelOutputReference(this, "power_bi_model");
  public get powerBiModel() {
    return this._powerBiModel;
  }
  public putPowerBiModel(value: JobTaskForEachTaskTaskPowerBiTaskPowerBiModel) {
    this._powerBiModel.internalValue = value;
  }
  public resetPowerBiModel() {
    this._powerBiModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerBiModelInput() {
    return this._powerBiModel.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new JobTaskForEachTaskTaskPowerBiTaskTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: JobTaskForEachTaskTaskPowerBiTaskTables[] | cdktn.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface JobTaskForEachTaskTaskPythonWheelTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#entry_point Job#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#named_parameters Job#named_parameters}
  */
  readonly namedParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#package_name Job#package_name}
  */
  readonly packageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobTaskForEachTaskTaskPythonWheelTaskToTerraform(struct?: JobTaskForEachTaskTaskPythonWheelTaskOutputReference | JobTaskForEachTaskTaskPythonWheelTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_point: cdktn.stringToTerraform(struct!.entryPoint),
    named_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.namedParameters),
    package_name: cdktn.stringToTerraform(struct!.packageName),
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
  }
}


export function jobTaskForEachTaskTaskPythonWheelTaskToHclTerraform(struct?: JobTaskForEachTaskTaskPythonWheelTaskOutputReference | JobTaskForEachTaskTaskPythonWheelTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_point: {
      value: cdktn.stringToHclTerraform(struct!.entryPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.namedParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    package_name: {
      value: cdktn.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskPythonWheelTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskPythonWheelTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._namedParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedParameters = this._namedParameters;
    }
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskPythonWheelTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryPoint = undefined;
      this._namedParameters = undefined;
      this._packageName = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryPoint = value.entryPoint;
      this._namedParameters = value.namedParameters;
      this._packageName = value.packageName;
      this._parameters = value.parameters;
    }
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // named_parameters - computed: false, optional: true, required: false
  private _namedParameters?: { [key: string]: string }; 
  public get namedParameters() {
    return this.getStringMapAttribute('named_parameters');
  }
  public set namedParameters(value: { [key: string]: string }) {
    this._namedParameters = value;
  }
  public resetNamedParameters() {
    this._namedParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedParametersInput() {
    return this._namedParameters;
  }

  // package_name - computed: false, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface JobTaskForEachTaskTaskRunJobTaskPipelineParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#full_refresh Job#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktn.IResolvable;
}

export function jobTaskForEachTaskTaskRunJobTaskPipelineParamsToTerraform(struct?: JobTaskForEachTaskTaskRunJobTaskPipelineParamsOutputReference | JobTaskForEachTaskTaskRunJobTaskPipelineParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_refresh: cdktn.booleanToTerraform(struct!.fullRefresh),
  }
}


export function jobTaskForEachTaskTaskRunJobTaskPipelineParamsToHclTerraform(struct?: JobTaskForEachTaskTaskRunJobTaskPipelineParamsOutputReference | JobTaskForEachTaskTaskRunJobTaskPipelineParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_refresh: {
      value: cdktn.booleanToHclTerraform(struct!.fullRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskRunJobTaskPipelineParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskRunJobTaskPipelineParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefresh = this._fullRefresh;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskRunJobTaskPipelineParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullRefresh = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullRefresh = value.fullRefresh;
    }
  }

  // full_refresh - computed: false, optional: true, required: false
  private _fullRefresh?: boolean | cdktn.IResolvable; 
  public get fullRefresh() {
    return this.getBooleanAttribute('full_refresh');
  }
  public set fullRefresh(value: boolean | cdktn.IResolvable) {
    this._fullRefresh = value;
  }
  public resetFullRefresh() {
    this._fullRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRefreshInput() {
    return this._fullRefresh;
  }
}
export interface JobTaskForEachTaskTaskRunJobTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dbt_commands Job#dbt_commands}
  */
  readonly dbtCommands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#jar_params Job#jar_params}
  */
  readonly jarParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#job_id Job#job_id}
  */
  readonly jobId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#job_parameters Job#job_parameters}
  */
  readonly jobParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#notebook_params Job#notebook_params}
  */
  readonly notebookParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#python_named_params Job#python_named_params}
  */
  readonly pythonNamedParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#python_params Job#python_params}
  */
  readonly pythonParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spark_submit_params Job#spark_submit_params}
  */
  readonly sparkSubmitParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#sql_params Job#sql_params}
  */
  readonly sqlParams?: { [key: string]: string };
  /**
  * pipeline_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pipeline_params Job#pipeline_params}
  */
  readonly pipelineParams?: JobTaskForEachTaskTaskRunJobTaskPipelineParams;
}

export function jobTaskForEachTaskTaskRunJobTaskToTerraform(struct?: JobTaskForEachTaskTaskRunJobTaskOutputReference | JobTaskForEachTaskTaskRunJobTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbt_commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dbtCommands),
    jar_params: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.jarParams),
    job_id: cdktn.numberToTerraform(struct!.jobId),
    job_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.jobParameters),
    notebook_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.notebookParams),
    python_named_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.pythonNamedParams),
    python_params: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pythonParams),
    spark_submit_params: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sparkSubmitParams),
    sql_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sqlParams),
    pipeline_params: jobTaskForEachTaskTaskRunJobTaskPipelineParamsToTerraform(struct!.pipelineParams),
  }
}


export function jobTaskForEachTaskTaskRunJobTaskToHclTerraform(struct?: JobTaskForEachTaskTaskRunJobTaskOutputReference | JobTaskForEachTaskTaskRunJobTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbt_commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dbtCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jar_params: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.jarParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    job_id: {
      value: cdktn.numberToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.jobParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    notebook_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.notebookParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_named_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.pythonNamedParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_params: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pythonParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spark_submit_params: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sparkSubmitParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sqlParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pipeline_params: {
      value: jobTaskForEachTaskTaskRunJobTaskPipelineParamsToHclTerraform(struct!.pipelineParams),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskRunJobTaskPipelineParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskRunJobTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskRunJobTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbtCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtCommands = this._dbtCommands;
    }
    if (this._jarParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarParams = this._jarParams;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._jobParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobParameters = this._jobParameters;
    }
    if (this._notebookParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookParams = this._notebookParams;
    }
    if (this._pythonNamedParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonNamedParams = this._pythonNamedParams;
    }
    if (this._pythonParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonParams = this._pythonParams;
    }
    if (this._sparkSubmitParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitParams = this._sparkSubmitParams;
    }
    if (this._sqlParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlParams = this._sqlParams;
    }
    if (this._pipelineParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineParams = this._pipelineParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskRunJobTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbtCommands = undefined;
      this._jarParams = undefined;
      this._jobId = undefined;
      this._jobParameters = undefined;
      this._notebookParams = undefined;
      this._pythonNamedParams = undefined;
      this._pythonParams = undefined;
      this._sparkSubmitParams = undefined;
      this._sqlParams = undefined;
      this._pipelineParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbtCommands = value.dbtCommands;
      this._jarParams = value.jarParams;
      this._jobId = value.jobId;
      this._jobParameters = value.jobParameters;
      this._notebookParams = value.notebookParams;
      this._pythonNamedParams = value.pythonNamedParams;
      this._pythonParams = value.pythonParams;
      this._sparkSubmitParams = value.sparkSubmitParams;
      this._sqlParams = value.sqlParams;
      this._pipelineParams.internalValue = value.pipelineParams;
    }
  }

  // dbt_commands - computed: false, optional: true, required: false
  private _dbtCommands?: string[]; 
  public get dbtCommands() {
    return this.getListAttribute('dbt_commands');
  }
  public set dbtCommands(value: string[]) {
    this._dbtCommands = value;
  }
  public resetDbtCommands() {
    this._dbtCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtCommandsInput() {
    return this._dbtCommands;
  }

  // jar_params - computed: false, optional: true, required: false
  private _jarParams?: string[]; 
  public get jarParams() {
    return this.getListAttribute('jar_params');
  }
  public set jarParams(value: string[]) {
    this._jarParams = value;
  }
  public resetJarParams() {
    this._jarParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarParamsInput() {
    return this._jarParams;
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: number; 
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }
  public set jobId(value: number) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_parameters - computed: false, optional: true, required: false
  private _jobParameters?: { [key: string]: string }; 
  public get jobParameters() {
    return this.getStringMapAttribute('job_parameters');
  }
  public set jobParameters(value: { [key: string]: string }) {
    this._jobParameters = value;
  }
  public resetJobParameters() {
    this._jobParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobParametersInput() {
    return this._jobParameters;
  }

  // notebook_params - computed: false, optional: true, required: false
  private _notebookParams?: { [key: string]: string }; 
  public get notebookParams() {
    return this.getStringMapAttribute('notebook_params');
  }
  public set notebookParams(value: { [key: string]: string }) {
    this._notebookParams = value;
  }
  public resetNotebookParams() {
    this._notebookParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookParamsInput() {
    return this._notebookParams;
  }

  // python_named_params - computed: false, optional: true, required: false
  private _pythonNamedParams?: { [key: string]: string }; 
  public get pythonNamedParams() {
    return this.getStringMapAttribute('python_named_params');
  }
  public set pythonNamedParams(value: { [key: string]: string }) {
    this._pythonNamedParams = value;
  }
  public resetPythonNamedParams() {
    this._pythonNamedParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonNamedParamsInput() {
    return this._pythonNamedParams;
  }

  // python_params - computed: false, optional: true, required: false
  private _pythonParams?: string[]; 
  public get pythonParams() {
    return this.getListAttribute('python_params');
  }
  public set pythonParams(value: string[]) {
    this._pythonParams = value;
  }
  public resetPythonParams() {
    this._pythonParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonParamsInput() {
    return this._pythonParams;
  }

  // spark_submit_params - computed: false, optional: true, required: false
  private _sparkSubmitParams?: string[]; 
  public get sparkSubmitParams() {
    return this.getListAttribute('spark_submit_params');
  }
  public set sparkSubmitParams(value: string[]) {
    this._sparkSubmitParams = value;
  }
  public resetSparkSubmitParams() {
    this._sparkSubmitParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitParamsInput() {
    return this._sparkSubmitParams;
  }

  // sql_params - computed: false, optional: true, required: false
  private _sqlParams?: { [key: string]: string }; 
  public get sqlParams() {
    return this.getStringMapAttribute('sql_params');
  }
  public set sqlParams(value: { [key: string]: string }) {
    this._sqlParams = value;
  }
  public resetSqlParams() {
    this._sqlParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlParamsInput() {
    return this._sqlParams;
  }

  // pipeline_params - computed: false, optional: true, required: false
  private _pipelineParams = new JobTaskForEachTaskTaskRunJobTaskPipelineParamsOutputReference(this, "pipeline_params");
  public get pipelineParams() {
    return this._pipelineParams;
  }
  public putPipelineParams(value: JobTaskForEachTaskTaskRunJobTaskPipelineParams) {
    this._pipelineParams.internalValue = value;
  }
  public resetPipelineParams() {
    this._pipelineParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParamsInput() {
    return this._pipelineParams.internalValue;
  }
}
export interface JobTaskForEachTaskTaskSparkJarTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#jar_uri Job#jar_uri}
  */
  readonly jarUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#main_class_name Job#main_class_name}
  */
  readonly mainClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#run_as_repl Job#run_as_repl}
  */
  readonly runAsRepl?: boolean | cdktn.IResolvable;
}

export function jobTaskForEachTaskTaskSparkJarTaskToTerraform(struct?: JobTaskForEachTaskTaskSparkJarTaskOutputReference | JobTaskForEachTaskTaskSparkJarTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar_uri: cdktn.stringToTerraform(struct!.jarUri),
    main_class_name: cdktn.stringToTerraform(struct!.mainClassName),
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
    run_as_repl: cdktn.booleanToTerraform(struct!.runAsRepl),
  }
}


export function jobTaskForEachTaskTaskSparkJarTaskToHclTerraform(struct?: JobTaskForEachTaskTaskSparkJarTaskOutputReference | JobTaskForEachTaskTaskSparkJarTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jar_uri: {
      value: cdktn.stringToHclTerraform(struct!.jarUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_class_name: {
      value: cdktn.stringToHclTerraform(struct!.mainClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    run_as_repl: {
      value: cdktn.booleanToHclTerraform(struct!.runAsRepl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSparkJarTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSparkJarTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jarUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarUri = this._jarUri;
    }
    if (this._mainClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClassName = this._mainClassName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._runAsRepl !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsRepl = this._runAsRepl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSparkJarTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jarUri = undefined;
      this._mainClassName = undefined;
      this._parameters = undefined;
      this._runAsRepl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jarUri = value.jarUri;
      this._mainClassName = value.mainClassName;
      this._parameters = value.parameters;
      this._runAsRepl = value.runAsRepl;
    }
  }

  // jar_uri - computed: false, optional: true, required: false
  private _jarUri?: string; 
  public get jarUri() {
    return this.getStringAttribute('jar_uri');
  }
  public set jarUri(value: string) {
    this._jarUri = value;
  }
  public resetJarUri() {
    this._jarUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarUriInput() {
    return this._jarUri;
  }

  // main_class_name - computed: false, optional: true, required: false
  private _mainClassName?: string; 
  public get mainClassName() {
    return this.getStringAttribute('main_class_name');
  }
  public set mainClassName(value: string) {
    this._mainClassName = value;
  }
  public resetMainClassName() {
    this._mainClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassNameInput() {
    return this._mainClassName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // run_as_repl - computed: false, optional: true, required: false
  private _runAsRepl?: boolean | cdktn.IResolvable; 
  public get runAsRepl() {
    return this.getBooleanAttribute('run_as_repl');
  }
  public set runAsRepl(value: boolean | cdktn.IResolvable) {
    this._runAsRepl = value;
  }
  public resetRunAsRepl() {
    this._runAsRepl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsReplInput() {
    return this._runAsRepl;
  }
}
export interface JobTaskForEachTaskTaskSparkPythonTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#python_file Job#python_file}
  */
  readonly pythonFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
}

export function jobTaskForEachTaskTaskSparkPythonTaskToTerraform(struct?: JobTaskForEachTaskTaskSparkPythonTaskOutputReference | JobTaskForEachTaskTaskSparkPythonTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
    python_file: cdktn.stringToTerraform(struct!.pythonFile),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function jobTaskForEachTaskTaskSparkPythonTaskToHclTerraform(struct?: JobTaskForEachTaskTaskSparkPythonTaskOutputReference | JobTaskForEachTaskTaskSparkPythonTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    python_file: {
      value: cdktn.stringToHclTerraform(struct!.pythonFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSparkPythonTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSparkPythonTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._pythonFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonFile = this._pythonFile;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSparkPythonTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._pythonFile = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._pythonFile = value.pythonFile;
      this._source = value.source;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // python_file - computed: false, optional: false, required: true
  private _pythonFile?: string; 
  public get pythonFile() {
    return this.getStringAttribute('python_file');
  }
  public set pythonFile(value: string) {
    this._pythonFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonFileInput() {
    return this._pythonFile;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface JobTaskForEachTaskTaskSparkSubmitTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobTaskForEachTaskTaskSparkSubmitTaskToTerraform(struct?: JobTaskForEachTaskTaskSparkSubmitTaskOutputReference | JobTaskForEachTaskTaskSparkSubmitTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
  }
}


export function jobTaskForEachTaskTaskSparkSubmitTaskToHclTerraform(struct?: JobTaskForEachTaskTaskSparkSubmitTaskOutputReference | JobTaskForEachTaskTaskSparkSubmitTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSparkSubmitTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSparkSubmitTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSparkSubmitTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface JobTaskForEachTaskTaskSqlTaskAlertSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#user_name Job#user_name}
  */
  readonly userName?: string;
}

export function jobTaskForEachTaskTaskSqlTaskAlertSubscriptionsToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskAlertSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktn.stringToTerraform(struct!.destinationId),
    user_name: cdktn.stringToTerraform(struct!.userName),
  }
}


export function jobTaskForEachTaskTaskSqlTaskAlertSubscriptionsToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskAlertSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_id: {
      value: cdktn.stringToHclTerraform(struct!.destinationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktn.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskAlertSubscriptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationId = this._destinationId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskAlertSubscriptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationId = undefined;
      this._userName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationId = value.destinationId;
      this._userName = value.userName;
    }
  }

  // destination_id - computed: false, optional: true, required: false
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskSqlTaskAlertSubscriptions[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsOutputReference {
    return new JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskSqlTaskAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#alert_id Job#alert_id}
  */
  readonly alertId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktn.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#subscriptions Job#subscriptions}
  */
  readonly subscriptions?: JobTaskForEachTaskTaskSqlTaskAlertSubscriptions[] | cdktn.IResolvable;
}

export function jobTaskForEachTaskTaskSqlTaskAlertToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskAlertOutputReference | JobTaskForEachTaskTaskSqlTaskAlert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_id: cdktn.stringToTerraform(struct!.alertId),
    pause_subscriptions: cdktn.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktn.listMapper(jobTaskForEachTaskTaskSqlTaskAlertSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function jobTaskForEachTaskTaskSqlTaskAlertToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskAlertOutputReference | JobTaskForEachTaskTaskSqlTaskAlert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_id: {
      value: cdktn.stringToHclTerraform(struct!.alertId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_subscriptions: {
      value: cdktn.booleanToHclTerraform(struct!.pauseSubscriptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subscriptions: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskSqlTaskAlertSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSqlTaskAlertOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertId = this._alertId;
    }
    if (this._pauseSubscriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseSubscriptions = this._pauseSubscriptions;
    }
    if (this._subscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptions = this._subscriptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertId = undefined;
      this._pauseSubscriptions = undefined;
      this._subscriptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertId = value.alertId;
      this._pauseSubscriptions = value.pauseSubscriptions;
      this._subscriptions.internalValue = value.subscriptions;
    }
  }

  // alert_id - computed: false, optional: false, required: true
  private _alertId?: string; 
  public get alertId() {
    return this.getStringAttribute('alert_id');
  }
  public set alertId(value: string) {
    this._alertId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIdInput() {
    return this._alertId;
  }

  // pause_subscriptions - computed: false, optional: true, required: false
  private _pauseSubscriptions?: boolean | cdktn.IResolvable; 
  public get pauseSubscriptions() {
    return this.getBooleanAttribute('pause_subscriptions');
  }
  public set pauseSubscriptions(value: boolean | cdktn.IResolvable) {
    this._pauseSubscriptions = value;
  }
  public resetPauseSubscriptions() {
    this._pauseSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseSubscriptionsInput() {
    return this._pauseSubscriptions;
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new JobTaskForEachTaskTaskSqlTaskAlertSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: JobTaskForEachTaskTaskSqlTaskAlertSubscriptions[] | cdktn.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }
}
export interface JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#user_name Job#user_name}
  */
  readonly userName?: string;
}

export function jobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktn.stringToTerraform(struct!.destinationId),
    user_name: cdktn.stringToTerraform(struct!.userName),
  }
}


export function jobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_id: {
      value: cdktn.stringToHclTerraform(struct!.destinationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktn.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationId = this._destinationId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationId = undefined;
      this._userName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationId = value.destinationId;
      this._userName = value.userName;
    }
  }

  // destination_id - computed: false, optional: true, required: false
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsOutputReference {
    return new JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskSqlTaskDashboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#custom_subject Job#custom_subject}
  */
  readonly customSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dashboard_id Job#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktn.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#subscriptions Job#subscriptions}
  */
  readonly subscriptions?: JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions[] | cdktn.IResolvable;
}

export function jobTaskForEachTaskTaskSqlTaskDashboardToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskDashboardOutputReference | JobTaskForEachTaskTaskSqlTaskDashboard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_subject: cdktn.stringToTerraform(struct!.customSubject),
    dashboard_id: cdktn.stringToTerraform(struct!.dashboardId),
    pause_subscriptions: cdktn.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktn.listMapper(jobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function jobTaskForEachTaskTaskSqlTaskDashboardToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskDashboardOutputReference | JobTaskForEachTaskTaskSqlTaskDashboard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_subject: {
      value: cdktn.stringToHclTerraform(struct!.customSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_id: {
      value: cdktn.stringToHclTerraform(struct!.dashboardId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_subscriptions: {
      value: cdktn.booleanToHclTerraform(struct!.pauseSubscriptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subscriptions: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSqlTaskDashboardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskDashboard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSubject = this._customSubject;
    }
    if (this._dashboardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardId = this._dashboardId;
    }
    if (this._pauseSubscriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseSubscriptions = this._pauseSubscriptions;
    }
    if (this._subscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptions = this._subscriptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskDashboard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSubject = undefined;
      this._dashboardId = undefined;
      this._pauseSubscriptions = undefined;
      this._subscriptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSubject = value.customSubject;
      this._dashboardId = value.dashboardId;
      this._pauseSubscriptions = value.pauseSubscriptions;
      this._subscriptions.internalValue = value.subscriptions;
    }
  }

  // custom_subject - computed: false, optional: true, required: false
  private _customSubject?: string; 
  public get customSubject() {
    return this.getStringAttribute('custom_subject');
  }
  public set customSubject(value: string) {
    this._customSubject = value;
  }
  public resetCustomSubject() {
    this._customSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubjectInput() {
    return this._customSubject;
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // pause_subscriptions - computed: false, optional: true, required: false
  private _pauseSubscriptions?: boolean | cdktn.IResolvable; 
  public get pauseSubscriptions() {
    return this.getBooleanAttribute('pause_subscriptions');
  }
  public set pauseSubscriptions(value: boolean | cdktn.IResolvable) {
    this._pauseSubscriptions = value;
  }
  public resetPauseSubscriptions() {
    this._pauseSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseSubscriptionsInput() {
    return this._pauseSubscriptions;
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new JobTaskForEachTaskTaskSqlTaskDashboardSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: JobTaskForEachTaskTaskSqlTaskDashboardSubscriptions[] | cdktn.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }
}
export interface JobTaskForEachTaskTaskSqlTaskFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#path Job#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
}

export function jobTaskForEachTaskTaskSqlTaskFileToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskFileOutputReference | JobTaskForEachTaskTaskSqlTaskFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function jobTaskForEachTaskTaskSqlTaskFileToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskFileOutputReference | JobTaskForEachTaskTaskSqlTaskFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSqlTaskFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._source = value.source;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface JobTaskForEachTaskTaskSqlTaskQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#query_id Job#query_id}
  */
  readonly queryId: string;
}

export function jobTaskForEachTaskTaskSqlTaskQueryToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskQueryOutputReference | JobTaskForEachTaskTaskSqlTaskQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_id: cdktn.stringToTerraform(struct!.queryId),
  }
}


export function jobTaskForEachTaskTaskSqlTaskQueryToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskQueryOutputReference | JobTaskForEachTaskTaskSqlTaskQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_id: {
      value: cdktn.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSqlTaskQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSqlTaskQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSqlTaskQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryId = value.queryId;
    }
  }

  // query_id - computed: false, optional: false, required: true
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }
}
export interface JobTaskForEachTaskTaskSqlTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#alert Job#alert}
  */
  readonly alert?: JobTaskForEachTaskTaskSqlTaskAlert;
  /**
  * dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dashboard Job#dashboard}
  */
  readonly dashboard?: JobTaskForEachTaskTaskSqlTaskDashboard;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#file Job#file}
  */
  readonly file?: JobTaskForEachTaskTaskSqlTaskFile;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#query Job#query}
  */
  readonly query?: JobTaskForEachTaskTaskSqlTaskQuery;
}

export function jobTaskForEachTaskTaskSqlTaskToTerraform(struct?: JobTaskForEachTaskTaskSqlTaskOutputReference | JobTaskForEachTaskTaskSqlTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
    alert: jobTaskForEachTaskTaskSqlTaskAlertToTerraform(struct!.alert),
    dashboard: jobTaskForEachTaskTaskSqlTaskDashboardToTerraform(struct!.dashboard),
    file: jobTaskForEachTaskTaskSqlTaskFileToTerraform(struct!.file),
    query: jobTaskForEachTaskTaskSqlTaskQueryToTerraform(struct!.query),
  }
}


export function jobTaskForEachTaskTaskSqlTaskToHclTerraform(struct?: JobTaskForEachTaskTaskSqlTaskOutputReference | JobTaskForEachTaskTaskSqlTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert: {
      value: jobTaskForEachTaskTaskSqlTaskAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskAlertList",
    },
    dashboard: {
      value: jobTaskForEachTaskTaskSqlTaskDashboardToHclTerraform(struct!.dashboard),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskDashboardList",
    },
    file: {
      value: jobTaskForEachTaskTaskSqlTaskFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskFileList",
    },
    query: {
      value: jobTaskForEachTaskTaskSqlTaskQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskSqlTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskSqlTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._dashboard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskSqlTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._warehouseId = undefined;
      this._alert.internalValue = undefined;
      this._dashboard.internalValue = undefined;
      this._file.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._warehouseId = value.warehouseId;
      this._alert.internalValue = value.alert;
      this._dashboard.internalValue = value.dashboard;
      this._file.internalValue = value.file;
      this._query.internalValue = value.query;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // alert - computed: false, optional: true, required: false
  private _alert = new JobTaskForEachTaskTaskSqlTaskAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: JobTaskForEachTaskTaskSqlTaskAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard = new JobTaskForEachTaskTaskSqlTaskDashboardOutputReference(this, "dashboard");
  public get dashboard() {
    return this._dashboard;
  }
  public putDashboard(value: JobTaskForEachTaskTaskSqlTaskDashboard) {
    this._dashboard.internalValue = value;
  }
  public resetDashboard() {
    this._dashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new JobTaskForEachTaskTaskSqlTaskFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobTaskForEachTaskTaskSqlTaskFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new JobTaskForEachTaskTaskSqlTaskQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: JobTaskForEachTaskTaskSqlTaskQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference {
    return new JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskWebhookNotificationsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskForEachTaskTaskWebhookNotificationsOnFailureToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnFailure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsOnFailureToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnFailure | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskWebhookNotificationsOnFailureOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotificationsOnFailure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotificationsOnFailure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class JobTaskForEachTaskTaskWebhookNotificationsOnFailureList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskWebhookNotificationsOnFailure[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskWebhookNotificationsOnFailureOutputReference {
    return new JobTaskForEachTaskTaskWebhookNotificationsOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskWebhookNotificationsOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskForEachTaskTaskWebhookNotificationsOnStartToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsOnStartToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnStart | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskWebhookNotificationsOnStartOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotificationsOnStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotificationsOnStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class JobTaskForEachTaskTaskWebhookNotificationsOnStartList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskWebhookNotificationsOnStart[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskWebhookNotificationsOnStartOutputReference {
    return new JobTaskForEachTaskTaskWebhookNotificationsOnStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference {
    return new JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskWebhookNotificationsOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskForEachTaskTaskWebhookNotificationsOnSuccessToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsOnSuccessToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskWebhookNotificationsOnSuccessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotificationsOnSuccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class JobTaskForEachTaskTaskWebhookNotificationsOnSuccessList extends cdktn.ComplexList {
  public internalValue? : JobTaskForEachTaskTaskWebhookNotificationsOnSuccess[] | cdktn.IResolvable

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
  public get(index: number): JobTaskForEachTaskTaskWebhookNotificationsOnSuccessOutputReference {
    return new JobTaskForEachTaskTaskWebhookNotificationsOnSuccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskForEachTaskTaskWebhookNotifications {
  /**
  * on_duration_warning_threshold_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#on_duration_warning_threshold_exceeded Job#on_duration_warning_threshold_exceeded}
  */
  readonly onDurationWarningThresholdExceeded?: JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable;
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#on_failure Job#on_failure}
  */
  readonly onFailure?: JobTaskForEachTaskTaskWebhookNotificationsOnFailure[] | cdktn.IResolvable;
  /**
  * on_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#on_start Job#on_start}
  */
  readonly onStart?: JobTaskForEachTaskTaskWebhookNotificationsOnStart[] | cdktn.IResolvable;
  /**
  * on_streaming_backlog_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#on_streaming_backlog_exceeded Job#on_streaming_backlog_exceeded}
  */
  readonly onStreamingBacklogExceeded?: JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#on_success Job#on_success}
  */
  readonly onSuccess?: JobTaskForEachTaskTaskWebhookNotificationsOnSuccess[] | cdktn.IResolvable;
}

export function jobTaskForEachTaskTaskWebhookNotificationsToTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOutputReference | JobTaskForEachTaskTaskWebhookNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_duration_warning_threshold_exceeded: cdktn.listMapper(jobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform, true)(struct!.onDurationWarningThresholdExceeded),
    on_failure: cdktn.listMapper(jobTaskForEachTaskTaskWebhookNotificationsOnFailureToTerraform, true)(struct!.onFailure),
    on_start: cdktn.listMapper(jobTaskForEachTaskTaskWebhookNotificationsOnStartToTerraform, true)(struct!.onStart),
    on_streaming_backlog_exceeded: cdktn.listMapper(jobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToTerraform, true)(struct!.onStreamingBacklogExceeded),
    on_success: cdktn.listMapper(jobTaskForEachTaskTaskWebhookNotificationsOnSuccessToTerraform, true)(struct!.onSuccess),
  }
}


export function jobTaskForEachTaskTaskWebhookNotificationsToHclTerraform(struct?: JobTaskForEachTaskTaskWebhookNotificationsOutputReference | JobTaskForEachTaskTaskWebhookNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_duration_warning_threshold_exceeded: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform, true)(struct!.onDurationWarningThresholdExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededList",
    },
    on_failure: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskWebhookNotificationsOnFailureToHclTerraform, true)(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsOnFailureList",
    },
    on_start: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskWebhookNotificationsOnStartToHclTerraform, true)(struct!.onStart),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsOnStartList",
    },
    on_streaming_backlog_exceeded: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededToHclTerraform, true)(struct!.onStreamingBacklogExceeded),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededList",
    },
    on_success: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskWebhookNotificationsOnSuccessToHclTerraform, true)(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskWebhookNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTaskWebhookNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDurationWarningThresholdExceeded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDurationWarningThresholdExceeded = this._onDurationWarningThresholdExceeded?.internalValue;
    }
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStart = this._onStart?.internalValue;
    }
    if (this._onStreamingBacklogExceeded?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStreamingBacklogExceeded = this._onStreamingBacklogExceeded?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTaskWebhookNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDurationWarningThresholdExceeded.internalValue = undefined;
      this._onFailure.internalValue = undefined;
      this._onStart.internalValue = undefined;
      this._onStreamingBacklogExceeded.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDurationWarningThresholdExceeded.internalValue = value.onDurationWarningThresholdExceeded;
      this._onFailure.internalValue = value.onFailure;
      this._onStart.internalValue = value.onStart;
      this._onStreamingBacklogExceeded.internalValue = value.onStreamingBacklogExceeded;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // on_duration_warning_threshold_exceeded - computed: false, optional: true, required: false
  private _onDurationWarningThresholdExceeded = new JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceededList(this, "on_duration_warning_threshold_exceeded", false);
  public get onDurationWarningThresholdExceeded() {
    return this._onDurationWarningThresholdExceeded;
  }
  public putOnDurationWarningThresholdExceeded(value: JobTaskForEachTaskTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable) {
    this._onDurationWarningThresholdExceeded.internalValue = value;
  }
  public resetOnDurationWarningThresholdExceeded() {
    this._onDurationWarningThresholdExceeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDurationWarningThresholdExceededInput() {
    return this._onDurationWarningThresholdExceeded.internalValue;
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new JobTaskForEachTaskTaskWebhookNotificationsOnFailureList(this, "on_failure", false);
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: JobTaskForEachTaskTaskWebhookNotificationsOnFailure[] | cdktn.IResolvable) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart = new JobTaskForEachTaskTaskWebhookNotificationsOnStartList(this, "on_start", false);
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: JobTaskForEachTaskTaskWebhookNotificationsOnStart[] | cdktn.IResolvable) {
    this._onStart.internalValue = value;
  }
  public resetOnStart() {
    this._onStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart.internalValue;
  }

  // on_streaming_backlog_exceeded - computed: false, optional: true, required: false
  private _onStreamingBacklogExceeded = new JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceededList(this, "on_streaming_backlog_exceeded", false);
  public get onStreamingBacklogExceeded() {
    return this._onStreamingBacklogExceeded;
  }
  public putOnStreamingBacklogExceeded(value: JobTaskForEachTaskTaskWebhookNotificationsOnStreamingBacklogExceeded[] | cdktn.IResolvable) {
    this._onStreamingBacklogExceeded.internalValue = value;
  }
  public resetOnStreamingBacklogExceeded() {
    this._onStreamingBacklogExceeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStreamingBacklogExceededInput() {
    return this._onStreamingBacklogExceeded.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new JobTaskForEachTaskTaskWebhookNotificationsOnSuccessList(this, "on_success", false);
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: JobTaskForEachTaskTaskWebhookNotificationsOnSuccess[] | cdktn.IResolvable) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }
}
export interface JobTaskForEachTaskTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#description Job#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#disable_auto_optimization Job#disable_auto_optimization}
  */
  readonly disableAutoOptimization?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#disabled Job#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#environment_key Job#environment_key}
  */
  readonly environmentKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#existing_cluster_id Job#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#job_cluster_key Job#job_cluster_key}
  */
  readonly jobClusterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#max_retries Job#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#min_retry_interval_millis Job#min_retry_interval_millis}
  */
  readonly minRetryIntervalMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#retry_on_timeout Job#retry_on_timeout}
  */
  readonly retryOnTimeout?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#run_if Job#run_if}
  */
  readonly runIf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#task_key Job#task_key}
  */
  readonly taskKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#timeout_seconds Job#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * alert_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#alert_task Job#alert_task}
  */
  readonly alertTask?: JobTaskForEachTaskTaskAlertTask;
  /**
  * clean_rooms_notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#clean_rooms_notebook_task Job#clean_rooms_notebook_task}
  */
  readonly cleanRoomsNotebookTask?: JobTaskForEachTaskTaskCleanRoomsNotebookTask;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#compute Job#compute}
  */
  readonly compute?: JobTaskForEachTaskTaskCompute;
  /**
  * condition_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#condition_task Job#condition_task}
  */
  readonly conditionTask?: JobTaskForEachTaskTaskConditionTask;
  /**
  * dashboard_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dashboard_task Job#dashboard_task}
  */
  readonly dashboardTask?: JobTaskForEachTaskTaskDashboardTask;
  /**
  * dbt_cloud_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dbt_cloud_task Job#dbt_cloud_task}
  */
  readonly dbtCloudTask?: JobTaskForEachTaskTaskDbtCloudTask;
  /**
  * dbt_platform_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dbt_platform_task Job#dbt_platform_task}
  */
  readonly dbtPlatformTask?: JobTaskForEachTaskTaskDbtPlatformTask;
  /**
  * dbt_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dbt_task Job#dbt_task}
  */
  readonly dbtTask?: JobTaskForEachTaskTaskDbtTask;
  /**
  * depends_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#depends_on Job#depends_on}
  */
  readonly dependsOn?: JobTaskForEachTaskTaskDependsOn[] | cdktn.IResolvable;
  /**
  * email_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#email_notifications Job#email_notifications}
  */
  readonly emailNotifications?: JobTaskForEachTaskTaskEmailNotifications;
  /**
  * gen_ai_compute_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#gen_ai_compute_task Job#gen_ai_compute_task}
  */
  readonly genAiComputeTask?: JobTaskForEachTaskTaskGenAiComputeTask;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#health Job#health}
  */
  readonly health?: JobTaskForEachTaskTaskHealth;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#library Job#library}
  */
  readonly library?: JobTaskForEachTaskTaskLibrary[] | cdktn.IResolvable;
  /**
  * new_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#new_cluster Job#new_cluster}
  */
  readonly newCluster?: JobTaskForEachTaskTaskNewCluster;
  /**
  * notebook_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#notebook_task Job#notebook_task}
  */
  readonly notebookTask?: JobTaskForEachTaskTaskNotebookTask;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#notification_settings Job#notification_settings}
  */
  readonly notificationSettings?: JobTaskForEachTaskTaskNotificationSettings;
  /**
  * pipeline_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pipeline_task Job#pipeline_task}
  */
  readonly pipelineTask?: JobTaskForEachTaskTaskPipelineTask;
  /**
  * power_bi_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#power_bi_task Job#power_bi_task}
  */
  readonly powerBiTask?: JobTaskForEachTaskTaskPowerBiTask;
  /**
  * python_wheel_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#python_wheel_task Job#python_wheel_task}
  */
  readonly pythonWheelTask?: JobTaskForEachTaskTaskPythonWheelTask;
  /**
  * run_job_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#run_job_task Job#run_job_task}
  */
  readonly runJobTask?: JobTaskForEachTaskTaskRunJobTask;
  /**
  * spark_jar_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spark_jar_task Job#spark_jar_task}
  */
  readonly sparkJarTask?: JobTaskForEachTaskTaskSparkJarTask;
  /**
  * spark_python_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spark_python_task Job#spark_python_task}
  */
  readonly sparkPythonTask?: JobTaskForEachTaskTaskSparkPythonTask;
  /**
  * spark_submit_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spark_submit_task Job#spark_submit_task}
  */
  readonly sparkSubmitTask?: JobTaskForEachTaskTaskSparkSubmitTask;
  /**
  * sql_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#sql_task Job#sql_task}
  */
  readonly sqlTask?: JobTaskForEachTaskTaskSqlTask;
  /**
  * webhook_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#webhook_notifications Job#webhook_notifications}
  */
  readonly webhookNotifications?: JobTaskForEachTaskTaskWebhookNotifications;
}

export function jobTaskForEachTaskTaskToTerraform(struct?: JobTaskForEachTaskTaskOutputReference | JobTaskForEachTaskTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    disable_auto_optimization: cdktn.booleanToTerraform(struct!.disableAutoOptimization),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    environment_key: cdktn.stringToTerraform(struct!.environmentKey),
    existing_cluster_id: cdktn.stringToTerraform(struct!.existingClusterId),
    job_cluster_key: cdktn.stringToTerraform(struct!.jobClusterKey),
    max_retries: cdktn.numberToTerraform(struct!.maxRetries),
    min_retry_interval_millis: cdktn.numberToTerraform(struct!.minRetryIntervalMillis),
    retry_on_timeout: cdktn.booleanToTerraform(struct!.retryOnTimeout),
    run_if: cdktn.stringToTerraform(struct!.runIf),
    task_key: cdktn.stringToTerraform(struct!.taskKey),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    alert_task: jobTaskForEachTaskTaskAlertTaskToTerraform(struct!.alertTask),
    clean_rooms_notebook_task: jobTaskForEachTaskTaskCleanRoomsNotebookTaskToTerraform(struct!.cleanRoomsNotebookTask),
    compute: jobTaskForEachTaskTaskComputeToTerraform(struct!.compute),
    condition_task: jobTaskForEachTaskTaskConditionTaskToTerraform(struct!.conditionTask),
    dashboard_task: jobTaskForEachTaskTaskDashboardTaskToTerraform(struct!.dashboardTask),
    dbt_cloud_task: jobTaskForEachTaskTaskDbtCloudTaskToTerraform(struct!.dbtCloudTask),
    dbt_platform_task: jobTaskForEachTaskTaskDbtPlatformTaskToTerraform(struct!.dbtPlatformTask),
    dbt_task: jobTaskForEachTaskTaskDbtTaskToTerraform(struct!.dbtTask),
    depends_on: cdktn.listMapper(jobTaskForEachTaskTaskDependsOnToTerraform, true)(struct!.dependsOn),
    email_notifications: jobTaskForEachTaskTaskEmailNotificationsToTerraform(struct!.emailNotifications),
    gen_ai_compute_task: jobTaskForEachTaskTaskGenAiComputeTaskToTerraform(struct!.genAiComputeTask),
    health: jobTaskForEachTaskTaskHealthToTerraform(struct!.health),
    library: cdktn.listMapper(jobTaskForEachTaskTaskLibraryToTerraform, true)(struct!.library),
    new_cluster: jobTaskForEachTaskTaskNewClusterToTerraform(struct!.newCluster),
    notebook_task: jobTaskForEachTaskTaskNotebookTaskToTerraform(struct!.notebookTask),
    notification_settings: jobTaskForEachTaskTaskNotificationSettingsToTerraform(struct!.notificationSettings),
    pipeline_task: jobTaskForEachTaskTaskPipelineTaskToTerraform(struct!.pipelineTask),
    power_bi_task: jobTaskForEachTaskTaskPowerBiTaskToTerraform(struct!.powerBiTask),
    python_wheel_task: jobTaskForEachTaskTaskPythonWheelTaskToTerraform(struct!.pythonWheelTask),
    run_job_task: jobTaskForEachTaskTaskRunJobTaskToTerraform(struct!.runJobTask),
    spark_jar_task: jobTaskForEachTaskTaskSparkJarTaskToTerraform(struct!.sparkJarTask),
    spark_python_task: jobTaskForEachTaskTaskSparkPythonTaskToTerraform(struct!.sparkPythonTask),
    spark_submit_task: jobTaskForEachTaskTaskSparkSubmitTaskToTerraform(struct!.sparkSubmitTask),
    sql_task: jobTaskForEachTaskTaskSqlTaskToTerraform(struct!.sqlTask),
    webhook_notifications: jobTaskForEachTaskTaskWebhookNotificationsToTerraform(struct!.webhookNotifications),
  }
}


export function jobTaskForEachTaskTaskToHclTerraform(struct?: JobTaskForEachTaskTaskOutputReference | JobTaskForEachTaskTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_auto_optimization: {
      value: cdktn.booleanToHclTerraform(struct!.disableAutoOptimization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment_key: {
      value: cdktn.stringToHclTerraform(struct!.environmentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    existing_cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.existingClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_cluster_key: {
      value: cdktn.stringToHclTerraform(struct!.jobClusterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retries: {
      value: cdktn.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_retry_interval_millis: {
      value: cdktn.numberToHclTerraform(struct!.minRetryIntervalMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_on_timeout: {
      value: cdktn.booleanToHclTerraform(struct!.retryOnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_if: {
      value: cdktn.stringToHclTerraform(struct!.runIf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_key: {
      value: cdktn.stringToHclTerraform(struct!.taskKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alert_task: {
      value: jobTaskForEachTaskTaskAlertTaskToHclTerraform(struct!.alertTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskAlertTaskList",
    },
    clean_rooms_notebook_task: {
      value: jobTaskForEachTaskTaskCleanRoomsNotebookTaskToHclTerraform(struct!.cleanRoomsNotebookTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskCleanRoomsNotebookTaskList",
    },
    compute: {
      value: jobTaskForEachTaskTaskComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskComputeList",
    },
    condition_task: {
      value: jobTaskForEachTaskTaskConditionTaskToHclTerraform(struct!.conditionTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskConditionTaskList",
    },
    dashboard_task: {
      value: jobTaskForEachTaskTaskDashboardTaskToHclTerraform(struct!.dashboardTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskDashboardTaskList",
    },
    dbt_cloud_task: {
      value: jobTaskForEachTaskTaskDbtCloudTaskToHclTerraform(struct!.dbtCloudTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskDbtCloudTaskList",
    },
    dbt_platform_task: {
      value: jobTaskForEachTaskTaskDbtPlatformTaskToHclTerraform(struct!.dbtPlatformTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskDbtPlatformTaskList",
    },
    dbt_task: {
      value: jobTaskForEachTaskTaskDbtTaskToHclTerraform(struct!.dbtTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskDbtTaskList",
    },
    depends_on: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskDependsOnToHclTerraform, true)(struct!.dependsOn),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskDependsOnList",
    },
    email_notifications: {
      value: jobTaskForEachTaskTaskEmailNotificationsToHclTerraform(struct!.emailNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskEmailNotificationsList",
    },
    gen_ai_compute_task: {
      value: jobTaskForEachTaskTaskGenAiComputeTaskToHclTerraform(struct!.genAiComputeTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskGenAiComputeTaskList",
    },
    health: {
      value: jobTaskForEachTaskTaskHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskHealthList",
    },
    library: {
      value: cdktn.listMapperHcl(jobTaskForEachTaskTaskLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskLibraryList",
    },
    new_cluster: {
      value: jobTaskForEachTaskTaskNewClusterToHclTerraform(struct!.newCluster),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNewClusterList",
    },
    notebook_task: {
      value: jobTaskForEachTaskTaskNotebookTaskToHclTerraform(struct!.notebookTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNotebookTaskList",
    },
    notification_settings: {
      value: jobTaskForEachTaskTaskNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskNotificationSettingsList",
    },
    pipeline_task: {
      value: jobTaskForEachTaskTaskPipelineTaskToHclTerraform(struct!.pipelineTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskPipelineTaskList",
    },
    power_bi_task: {
      value: jobTaskForEachTaskTaskPowerBiTaskToHclTerraform(struct!.powerBiTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskPowerBiTaskList",
    },
    python_wheel_task: {
      value: jobTaskForEachTaskTaskPythonWheelTaskToHclTerraform(struct!.pythonWheelTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskPythonWheelTaskList",
    },
    run_job_task: {
      value: jobTaskForEachTaskTaskRunJobTaskToHclTerraform(struct!.runJobTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskRunJobTaskList",
    },
    spark_jar_task: {
      value: jobTaskForEachTaskTaskSparkJarTaskToHclTerraform(struct!.sparkJarTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSparkJarTaskList",
    },
    spark_python_task: {
      value: jobTaskForEachTaskTaskSparkPythonTaskToHclTerraform(struct!.sparkPythonTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSparkPythonTaskList",
    },
    spark_submit_task: {
      value: jobTaskForEachTaskTaskSparkSubmitTaskToHclTerraform(struct!.sparkSubmitTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSparkSubmitTaskList",
    },
    sql_task: {
      value: jobTaskForEachTaskTaskSqlTaskToHclTerraform(struct!.sqlTask),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskSqlTaskList",
    },
    webhook_notifications: {
      value: jobTaskForEachTaskTaskWebhookNotificationsToHclTerraform(struct!.webhookNotifications),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskWebhookNotificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTaskTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableAutoOptimization !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoOptimization = this._disableAutoOptimization;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._environmentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentKey = this._environmentKey;
    }
    if (this._existingClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingClusterId = this._existingClusterId;
    }
    if (this._jobClusterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobClusterKey = this._jobClusterKey;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._minRetryIntervalMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryIntervalMillis = this._minRetryIntervalMillis;
    }
    if (this._retryOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOnTimeout = this._retryOnTimeout;
    }
    if (this._runIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.runIf = this._runIf;
    }
    if (this._taskKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskKey = this._taskKey;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._alertTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertTask = this._alertTask?.internalValue;
    }
    if (this._cleanRoomsNotebookTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanRoomsNotebookTask = this._cleanRoomsNotebookTask?.internalValue;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._conditionTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionTask = this._conditionTask?.internalValue;
    }
    if (this._dashboardTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardTask = this._dashboardTask?.internalValue;
    }
    if (this._dbtCloudTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtCloudTask = this._dbtCloudTask?.internalValue;
    }
    if (this._dbtPlatformTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtPlatformTask = this._dbtPlatformTask?.internalValue;
    }
    if (this._dbtTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtTask = this._dbtTask?.internalValue;
    }
    if (this._dependsOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn?.internalValue;
    }
    if (this._emailNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailNotifications = this._emailNotifications?.internalValue;
    }
    if (this._genAiComputeTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genAiComputeTask = this._genAiComputeTask?.internalValue;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
    }
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    if (this._newCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newCluster = this._newCluster?.internalValue;
    }
    if (this._notebookTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookTask = this._notebookTask?.internalValue;
    }
    if (this._notificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
    }
    if (this._pipelineTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineTask = this._pipelineTask?.internalValue;
    }
    if (this._powerBiTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerBiTask = this._powerBiTask?.internalValue;
    }
    if (this._pythonWheelTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonWheelTask = this._pythonWheelTask?.internalValue;
    }
    if (this._runJobTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runJobTask = this._runJobTask?.internalValue;
    }
    if (this._sparkJarTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkJarTask = this._sparkJarTask?.internalValue;
    }
    if (this._sparkPythonTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkPythonTask = this._sparkPythonTask?.internalValue;
    }
    if (this._sparkSubmitTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitTask = this._sparkSubmitTask?.internalValue;
    }
    if (this._sqlTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlTask = this._sqlTask?.internalValue;
    }
    if (this._webhookNotifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookNotifications = this._webhookNotifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTaskTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disableAutoOptimization = undefined;
      this._disabled = undefined;
      this._environmentKey = undefined;
      this._existingClusterId = undefined;
      this._jobClusterKey = undefined;
      this._maxRetries = undefined;
      this._minRetryIntervalMillis = undefined;
      this._retryOnTimeout = undefined;
      this._runIf = undefined;
      this._taskKey = undefined;
      this._timeoutSeconds = undefined;
      this._alertTask.internalValue = undefined;
      this._cleanRoomsNotebookTask.internalValue = undefined;
      this._compute.internalValue = undefined;
      this._conditionTask.internalValue = undefined;
      this._dashboardTask.internalValue = undefined;
      this._dbtCloudTask.internalValue = undefined;
      this._dbtPlatformTask.internalValue = undefined;
      this._dbtTask.internalValue = undefined;
      this._dependsOn.internalValue = undefined;
      this._emailNotifications.internalValue = undefined;
      this._genAiComputeTask.internalValue = undefined;
      this._health.internalValue = undefined;
      this._library.internalValue = undefined;
      this._newCluster.internalValue = undefined;
      this._notebookTask.internalValue = undefined;
      this._notificationSettings.internalValue = undefined;
      this._pipelineTask.internalValue = undefined;
      this._powerBiTask.internalValue = undefined;
      this._pythonWheelTask.internalValue = undefined;
      this._runJobTask.internalValue = undefined;
      this._sparkJarTask.internalValue = undefined;
      this._sparkPythonTask.internalValue = undefined;
      this._sparkSubmitTask.internalValue = undefined;
      this._sqlTask.internalValue = undefined;
      this._webhookNotifications.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disableAutoOptimization = value.disableAutoOptimization;
      this._disabled = value.disabled;
      this._environmentKey = value.environmentKey;
      this._existingClusterId = value.existingClusterId;
      this._jobClusterKey = value.jobClusterKey;
      this._maxRetries = value.maxRetries;
      this._minRetryIntervalMillis = value.minRetryIntervalMillis;
      this._retryOnTimeout = value.retryOnTimeout;
      this._runIf = value.runIf;
      this._taskKey = value.taskKey;
      this._timeoutSeconds = value.timeoutSeconds;
      this._alertTask.internalValue = value.alertTask;
      this._cleanRoomsNotebookTask.internalValue = value.cleanRoomsNotebookTask;
      this._compute.internalValue = value.compute;
      this._conditionTask.internalValue = value.conditionTask;
      this._dashboardTask.internalValue = value.dashboardTask;
      this._dbtCloudTask.internalValue = value.dbtCloudTask;
      this._dbtPlatformTask.internalValue = value.dbtPlatformTask;
      this._dbtTask.internalValue = value.dbtTask;
      this._dependsOn.internalValue = value.dependsOn;
      this._emailNotifications.internalValue = value.emailNotifications;
      this._genAiComputeTask.internalValue = value.genAiComputeTask;
      this._health.internalValue = value.health;
      this._library.internalValue = value.library;
      this._newCluster.internalValue = value.newCluster;
      this._notebookTask.internalValue = value.notebookTask;
      this._notificationSettings.internalValue = value.notificationSettings;
      this._pipelineTask.internalValue = value.pipelineTask;
      this._powerBiTask.internalValue = value.powerBiTask;
      this._pythonWheelTask.internalValue = value.pythonWheelTask;
      this._runJobTask.internalValue = value.runJobTask;
      this._sparkJarTask.internalValue = value.sparkJarTask;
      this._sparkPythonTask.internalValue = value.sparkPythonTask;
      this._sparkSubmitTask.internalValue = value.sparkSubmitTask;
      this._sqlTask.internalValue = value.sqlTask;
      this._webhookNotifications.internalValue = value.webhookNotifications;
    }
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

  // disable_auto_optimization - computed: false, optional: true, required: false
  private _disableAutoOptimization?: boolean | cdktn.IResolvable; 
  public get disableAutoOptimization() {
    return this.getBooleanAttribute('disable_auto_optimization');
  }
  public set disableAutoOptimization(value: boolean | cdktn.IResolvable) {
    this._disableAutoOptimization = value;
  }
  public resetDisableAutoOptimization() {
    this._disableAutoOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoOptimizationInput() {
    return this._disableAutoOptimization;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // environment_key - computed: false, optional: true, required: false
  private _environmentKey?: string; 
  public get environmentKey() {
    return this.getStringAttribute('environment_key');
  }
  public set environmentKey(value: string) {
    this._environmentKey = value;
  }
  public resetEnvironmentKey() {
    this._environmentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentKeyInput() {
    return this._environmentKey;
  }

  // existing_cluster_id - computed: false, optional: true, required: false
  private _existingClusterId?: string; 
  public get existingClusterId() {
    return this.getStringAttribute('existing_cluster_id');
  }
  public set existingClusterId(value: string) {
    this._existingClusterId = value;
  }
  public resetExistingClusterId() {
    this._existingClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingClusterIdInput() {
    return this._existingClusterId;
  }

  // job_cluster_key - computed: false, optional: true, required: false
  private _jobClusterKey?: string; 
  public get jobClusterKey() {
    return this.getStringAttribute('job_cluster_key');
  }
  public set jobClusterKey(value: string) {
    this._jobClusterKey = value;
  }
  public resetJobClusterKey() {
    this._jobClusterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobClusterKeyInput() {
    return this._jobClusterKey;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // min_retry_interval_millis - computed: false, optional: true, required: false
  private _minRetryIntervalMillis?: number; 
  public get minRetryIntervalMillis() {
    return this.getNumberAttribute('min_retry_interval_millis');
  }
  public set minRetryIntervalMillis(value: number) {
    this._minRetryIntervalMillis = value;
  }
  public resetMinRetryIntervalMillis() {
    this._minRetryIntervalMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetryIntervalMillisInput() {
    return this._minRetryIntervalMillis;
  }

  // retry_on_timeout - computed: true, optional: true, required: false
  private _retryOnTimeout?: boolean | cdktn.IResolvable; 
  public get retryOnTimeout() {
    return this.getBooleanAttribute('retry_on_timeout');
  }
  public set retryOnTimeout(value: boolean | cdktn.IResolvable) {
    this._retryOnTimeout = value;
  }
  public resetRetryOnTimeout() {
    this._retryOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnTimeoutInput() {
    return this._retryOnTimeout;
  }

  // run_if - computed: false, optional: true, required: false
  private _runIf?: string; 
  public get runIf() {
    return this.getStringAttribute('run_if');
  }
  public set runIf(value: string) {
    this._runIf = value;
  }
  public resetRunIf() {
    this._runIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIfInput() {
    return this._runIf;
  }

  // task_key - computed: false, optional: false, required: true
  private _taskKey?: string; 
  public get taskKey() {
    return this.getStringAttribute('task_key');
  }
  public set taskKey(value: string) {
    this._taskKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskKeyInput() {
    return this._taskKey;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // alert_task - computed: false, optional: true, required: false
  private _alertTask = new JobTaskForEachTaskTaskAlertTaskOutputReference(this, "alert_task");
  public get alertTask() {
    return this._alertTask;
  }
  public putAlertTask(value: JobTaskForEachTaskTaskAlertTask) {
    this._alertTask.internalValue = value;
  }
  public resetAlertTask() {
    this._alertTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTaskInput() {
    return this._alertTask.internalValue;
  }

  // clean_rooms_notebook_task - computed: false, optional: true, required: false
  private _cleanRoomsNotebookTask = new JobTaskForEachTaskTaskCleanRoomsNotebookTaskOutputReference(this, "clean_rooms_notebook_task");
  public get cleanRoomsNotebookTask() {
    return this._cleanRoomsNotebookTask;
  }
  public putCleanRoomsNotebookTask(value: JobTaskForEachTaskTaskCleanRoomsNotebookTask) {
    this._cleanRoomsNotebookTask.internalValue = value;
  }
  public resetCleanRoomsNotebookTask() {
    this._cleanRoomsNotebookTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanRoomsNotebookTaskInput() {
    return this._cleanRoomsNotebookTask.internalValue;
  }

  // compute - computed: false, optional: true, required: false
  private _compute = new JobTaskForEachTaskTaskComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: JobTaskForEachTaskTaskCompute) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // condition_task - computed: false, optional: true, required: false
  private _conditionTask = new JobTaskForEachTaskTaskConditionTaskOutputReference(this, "condition_task");
  public get conditionTask() {
    return this._conditionTask;
  }
  public putConditionTask(value: JobTaskForEachTaskTaskConditionTask) {
    this._conditionTask.internalValue = value;
  }
  public resetConditionTask() {
    this._conditionTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTaskInput() {
    return this._conditionTask.internalValue;
  }

  // dashboard_task - computed: false, optional: true, required: false
  private _dashboardTask = new JobTaskForEachTaskTaskDashboardTaskOutputReference(this, "dashboard_task");
  public get dashboardTask() {
    return this._dashboardTask;
  }
  public putDashboardTask(value: JobTaskForEachTaskTaskDashboardTask) {
    this._dashboardTask.internalValue = value;
  }
  public resetDashboardTask() {
    this._dashboardTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardTaskInput() {
    return this._dashboardTask.internalValue;
  }

  // dbt_cloud_task - computed: false, optional: true, required: false
  private _dbtCloudTask = new JobTaskForEachTaskTaskDbtCloudTaskOutputReference(this, "dbt_cloud_task");
  public get dbtCloudTask() {
    return this._dbtCloudTask;
  }
  public putDbtCloudTask(value: JobTaskForEachTaskTaskDbtCloudTask) {
    this._dbtCloudTask.internalValue = value;
  }
  public resetDbtCloudTask() {
    this._dbtCloudTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtCloudTaskInput() {
    return this._dbtCloudTask.internalValue;
  }

  // dbt_platform_task - computed: false, optional: true, required: false
  private _dbtPlatformTask = new JobTaskForEachTaskTaskDbtPlatformTaskOutputReference(this, "dbt_platform_task");
  public get dbtPlatformTask() {
    return this._dbtPlatformTask;
  }
  public putDbtPlatformTask(value: JobTaskForEachTaskTaskDbtPlatformTask) {
    this._dbtPlatformTask.internalValue = value;
  }
  public resetDbtPlatformTask() {
    this._dbtPlatformTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtPlatformTaskInput() {
    return this._dbtPlatformTask.internalValue;
  }

  // dbt_task - computed: false, optional: true, required: false
  private _dbtTask = new JobTaskForEachTaskTaskDbtTaskOutputReference(this, "dbt_task");
  public get dbtTask() {
    return this._dbtTask;
  }
  public putDbtTask(value: JobTaskForEachTaskTaskDbtTask) {
    this._dbtTask.internalValue = value;
  }
  public resetDbtTask() {
    this._dbtTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtTaskInput() {
    return this._dbtTask.internalValue;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn = new JobTaskForEachTaskTaskDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }
  public putDependsOn(value: JobTaskForEachTaskTaskDependsOn[] | cdktn.IResolvable) {
    this._dependsOn.internalValue = value;
  }
  public resetDependsOn() {
    this._dependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn.internalValue;
  }

  // email_notifications - computed: false, optional: true, required: false
  private _emailNotifications = new JobTaskForEachTaskTaskEmailNotificationsOutputReference(this, "email_notifications");
  public get emailNotifications() {
    return this._emailNotifications;
  }
  public putEmailNotifications(value: JobTaskForEachTaskTaskEmailNotifications) {
    this._emailNotifications.internalValue = value;
  }
  public resetEmailNotifications() {
    this._emailNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotificationsInput() {
    return this._emailNotifications.internalValue;
  }

  // gen_ai_compute_task - computed: false, optional: true, required: false
  private _genAiComputeTask = new JobTaskForEachTaskTaskGenAiComputeTaskOutputReference(this, "gen_ai_compute_task");
  public get genAiComputeTask() {
    return this._genAiComputeTask;
  }
  public putGenAiComputeTask(value: JobTaskForEachTaskTaskGenAiComputeTask) {
    this._genAiComputeTask.internalValue = value;
  }
  public resetGenAiComputeTask() {
    this._genAiComputeTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genAiComputeTaskInput() {
    return this._genAiComputeTask.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new JobTaskForEachTaskTaskHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: JobTaskForEachTaskTaskHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new JobTaskForEachTaskTaskLibraryList(this, "library", false);
  public get library() {
    return this._library;
  }
  public putLibrary(value: JobTaskForEachTaskTaskLibrary[] | cdktn.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // new_cluster - computed: false, optional: true, required: false
  private _newCluster = new JobTaskForEachTaskTaskNewClusterOutputReference(this, "new_cluster");
  public get newCluster() {
    return this._newCluster;
  }
  public putNewCluster(value: JobTaskForEachTaskTaskNewCluster) {
    this._newCluster.internalValue = value;
  }
  public resetNewCluster() {
    this._newCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newClusterInput() {
    return this._newCluster.internalValue;
  }

  // notebook_task - computed: false, optional: true, required: false
  private _notebookTask = new JobTaskForEachTaskTaskNotebookTaskOutputReference(this, "notebook_task");
  public get notebookTask() {
    return this._notebookTask;
  }
  public putNotebookTask(value: JobTaskForEachTaskTaskNotebookTask) {
    this._notebookTask.internalValue = value;
  }
  public resetNotebookTask() {
    this._notebookTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookTaskInput() {
    return this._notebookTask.internalValue;
  }

  // notification_settings - computed: false, optional: true, required: false
  private _notificationSettings = new JobTaskForEachTaskTaskNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: JobTaskForEachTaskTaskNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }

  // pipeline_task - computed: false, optional: true, required: false
  private _pipelineTask = new JobTaskForEachTaskTaskPipelineTaskOutputReference(this, "pipeline_task");
  public get pipelineTask() {
    return this._pipelineTask;
  }
  public putPipelineTask(value: JobTaskForEachTaskTaskPipelineTask) {
    this._pipelineTask.internalValue = value;
  }
  public resetPipelineTask() {
    this._pipelineTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTaskInput() {
    return this._pipelineTask.internalValue;
  }

  // power_bi_task - computed: false, optional: true, required: false
  private _powerBiTask = new JobTaskForEachTaskTaskPowerBiTaskOutputReference(this, "power_bi_task");
  public get powerBiTask() {
    return this._powerBiTask;
  }
  public putPowerBiTask(value: JobTaskForEachTaskTaskPowerBiTask) {
    this._powerBiTask.internalValue = value;
  }
  public resetPowerBiTask() {
    this._powerBiTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerBiTaskInput() {
    return this._powerBiTask.internalValue;
  }

  // python_wheel_task - computed: false, optional: true, required: false
  private _pythonWheelTask = new JobTaskForEachTaskTaskPythonWheelTaskOutputReference(this, "python_wheel_task");
  public get pythonWheelTask() {
    return this._pythonWheelTask;
  }
  public putPythonWheelTask(value: JobTaskForEachTaskTaskPythonWheelTask) {
    this._pythonWheelTask.internalValue = value;
  }
  public resetPythonWheelTask() {
    this._pythonWheelTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonWheelTaskInput() {
    return this._pythonWheelTask.internalValue;
  }

  // run_job_task - computed: false, optional: true, required: false
  private _runJobTask = new JobTaskForEachTaskTaskRunJobTaskOutputReference(this, "run_job_task");
  public get runJobTask() {
    return this._runJobTask;
  }
  public putRunJobTask(value: JobTaskForEachTaskTaskRunJobTask) {
    this._runJobTask.internalValue = value;
  }
  public resetRunJobTask() {
    this._runJobTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runJobTaskInput() {
    return this._runJobTask.internalValue;
  }

  // spark_jar_task - computed: false, optional: true, required: false
  private _sparkJarTask = new JobTaskForEachTaskTaskSparkJarTaskOutputReference(this, "spark_jar_task");
  public get sparkJarTask() {
    return this._sparkJarTask;
  }
  public putSparkJarTask(value: JobTaskForEachTaskTaskSparkJarTask) {
    this._sparkJarTask.internalValue = value;
  }
  public resetSparkJarTask() {
    this._sparkJarTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkJarTaskInput() {
    return this._sparkJarTask.internalValue;
  }

  // spark_python_task - computed: false, optional: true, required: false
  private _sparkPythonTask = new JobTaskForEachTaskTaskSparkPythonTaskOutputReference(this, "spark_python_task");
  public get sparkPythonTask() {
    return this._sparkPythonTask;
  }
  public putSparkPythonTask(value: JobTaskForEachTaskTaskSparkPythonTask) {
    this._sparkPythonTask.internalValue = value;
  }
  public resetSparkPythonTask() {
    this._sparkPythonTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkPythonTaskInput() {
    return this._sparkPythonTask.internalValue;
  }

  // spark_submit_task - computed: false, optional: true, required: false
  private _sparkSubmitTask = new JobTaskForEachTaskTaskSparkSubmitTaskOutputReference(this, "spark_submit_task");
  public get sparkSubmitTask() {
    return this._sparkSubmitTask;
  }
  public putSparkSubmitTask(value: JobTaskForEachTaskTaskSparkSubmitTask) {
    this._sparkSubmitTask.internalValue = value;
  }
  public resetSparkSubmitTask() {
    this._sparkSubmitTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitTaskInput() {
    return this._sparkSubmitTask.internalValue;
  }

  // sql_task - computed: false, optional: true, required: false
  private _sqlTask = new JobTaskForEachTaskTaskSqlTaskOutputReference(this, "sql_task");
  public get sqlTask() {
    return this._sqlTask;
  }
  public putSqlTask(value: JobTaskForEachTaskTaskSqlTask) {
    this._sqlTask.internalValue = value;
  }
  public resetSqlTask() {
    this._sqlTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTaskInput() {
    return this._sqlTask.internalValue;
  }

  // webhook_notifications - computed: false, optional: true, required: false
  private _webhookNotifications = new JobTaskForEachTaskTaskWebhookNotificationsOutputReference(this, "webhook_notifications");
  public get webhookNotifications() {
    return this._webhookNotifications;
  }
  public putWebhookNotifications(value: JobTaskForEachTaskTaskWebhookNotifications) {
    this._webhookNotifications.internalValue = value;
  }
  public resetWebhookNotifications() {
    this._webhookNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookNotificationsInput() {
    return this._webhookNotifications.internalValue;
  }
}
export interface JobTaskForEachTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#concurrency Job#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#inputs Job#inputs}
  */
  readonly inputs: string;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#task Job#task}
  */
  readonly task: JobTaskForEachTaskTask;
}

export function jobTaskForEachTaskToTerraform(struct?: JobTaskForEachTaskOutputReference | JobTaskForEachTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktn.numberToTerraform(struct!.concurrency),
    inputs: cdktn.stringToTerraform(struct!.inputs),
    task: jobTaskForEachTaskTaskToTerraform(struct!.task),
  }
}


export function jobTaskForEachTaskToHclTerraform(struct?: JobTaskForEachTaskOutputReference | JobTaskForEachTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktn.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inputs: {
      value: cdktn.stringToHclTerraform(struct!.inputs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task: {
      value: jobTaskForEachTaskTaskToHclTerraform(struct!.task),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskForEachTaskTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskForEachTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskForEachTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskForEachTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._concurrency = undefined;
      this._inputs = undefined;
      this._task.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._concurrency = value.concurrency;
      this._inputs = value.inputs;
      this._task.internalValue = value.task;
    }
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string; 
  public get inputs() {
    return this.getStringAttribute('inputs');
  }
  public set inputs(value: string) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // task - computed: false, optional: false, required: true
  private _task = new JobTaskForEachTaskTaskOutputReference(this, "task");
  public get task() {
    return this._task;
  }
  public putTask(value: JobTaskForEachTaskTask) {
    this._task.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }
}
export interface JobTaskGenAiComputeTaskCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#gpu_node_pool_id Job#gpu_node_pool_id}
  */
  readonly gpuNodePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#gpu_type Job#gpu_type}
  */
  readonly gpuType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#num_gpus Job#num_gpus}
  */
  readonly numGpus: number;
}

export function jobTaskGenAiComputeTaskComputeToTerraform(struct?: JobTaskGenAiComputeTaskComputeOutputReference | JobTaskGenAiComputeTaskCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_node_pool_id: cdktn.stringToTerraform(struct!.gpuNodePoolId),
    gpu_type: cdktn.stringToTerraform(struct!.gpuType),
    num_gpus: cdktn.numberToTerraform(struct!.numGpus),
  }
}


export function jobTaskGenAiComputeTaskComputeToHclTerraform(struct?: JobTaskGenAiComputeTaskComputeOutputReference | JobTaskGenAiComputeTaskCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_node_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.gpuNodePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_type: {
      value: cdktn.stringToHclTerraform(struct!.gpuType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_gpus: {
      value: cdktn.numberToHclTerraform(struct!.numGpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskGenAiComputeTaskComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskGenAiComputeTaskCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuNodePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuNodePoolId = this._gpuNodePoolId;
    }
    if (this._gpuType !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuType = this._gpuType;
    }
    if (this._numGpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.numGpus = this._numGpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskGenAiComputeTaskCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuNodePoolId = undefined;
      this._gpuType = undefined;
      this._numGpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuNodePoolId = value.gpuNodePoolId;
      this._gpuType = value.gpuType;
      this._numGpus = value.numGpus;
    }
  }

  // gpu_node_pool_id - computed: false, optional: true, required: false
  private _gpuNodePoolId?: string; 
  public get gpuNodePoolId() {
    return this.getStringAttribute('gpu_node_pool_id');
  }
  public set gpuNodePoolId(value: string) {
    this._gpuNodePoolId = value;
  }
  public resetGpuNodePoolId() {
    this._gpuNodePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuNodePoolIdInput() {
    return this._gpuNodePoolId;
  }

  // gpu_type - computed: false, optional: true, required: false
  private _gpuType?: string; 
  public get gpuType() {
    return this.getStringAttribute('gpu_type');
  }
  public set gpuType(value: string) {
    this._gpuType = value;
  }
  public resetGpuType() {
    this._gpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuTypeInput() {
    return this._gpuType;
  }

  // num_gpus - computed: false, optional: false, required: true
  private _numGpus?: number; 
  public get numGpus() {
    return this.getNumberAttribute('num_gpus');
  }
  public set numGpus(value: number) {
    this._numGpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numGpusInput() {
    return this._numGpus;
  }
}
export interface JobTaskGenAiComputeTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#command Job#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dl_runtime_image Job#dl_runtime_image}
  */
  readonly dlRuntimeImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#mlflow_experiment_name Job#mlflow_experiment_name}
  */
  readonly mlflowExperimentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#training_script_path Job#training_script_path}
  */
  readonly trainingScriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#yaml_parameters Job#yaml_parameters}
  */
  readonly yamlParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#yaml_parameters_file_path Job#yaml_parameters_file_path}
  */
  readonly yamlParametersFilePath?: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#compute Job#compute}
  */
  readonly compute?: JobTaskGenAiComputeTaskCompute;
}

export function jobTaskGenAiComputeTaskToTerraform(struct?: JobTaskGenAiComputeTaskOutputReference | JobTaskGenAiComputeTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktn.stringToTerraform(struct!.command),
    dl_runtime_image: cdktn.stringToTerraform(struct!.dlRuntimeImage),
    mlflow_experiment_name: cdktn.stringToTerraform(struct!.mlflowExperimentName),
    source: cdktn.stringToTerraform(struct!.source),
    training_script_path: cdktn.stringToTerraform(struct!.trainingScriptPath),
    yaml_parameters: cdktn.stringToTerraform(struct!.yamlParameters),
    yaml_parameters_file_path: cdktn.stringToTerraform(struct!.yamlParametersFilePath),
    compute: jobTaskGenAiComputeTaskComputeToTerraform(struct!.compute),
  }
}


export function jobTaskGenAiComputeTaskToHclTerraform(struct?: JobTaskGenAiComputeTaskOutputReference | JobTaskGenAiComputeTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktn.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dl_runtime_image: {
      value: cdktn.stringToHclTerraform(struct!.dlRuntimeImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mlflow_experiment_name: {
      value: cdktn.stringToHclTerraform(struct!.mlflowExperimentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_script_path: {
      value: cdktn.stringToHclTerraform(struct!.trainingScriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yaml_parameters: {
      value: cdktn.stringToHclTerraform(struct!.yamlParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yaml_parameters_file_path: {
      value: cdktn.stringToHclTerraform(struct!.yamlParametersFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute: {
      value: jobTaskGenAiComputeTaskComputeToHclTerraform(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskGenAiComputeTaskComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskGenAiComputeTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskGenAiComputeTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._dlRuntimeImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlRuntimeImage = this._dlRuntimeImage;
    }
    if (this._mlflowExperimentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlflowExperimentName = this._mlflowExperimentName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._trainingScriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingScriptPath = this._trainingScriptPath;
    }
    if (this._yamlParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.yamlParameters = this._yamlParameters;
    }
    if (this._yamlParametersFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.yamlParametersFilePath = this._yamlParametersFilePath;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskGenAiComputeTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._dlRuntimeImage = undefined;
      this._mlflowExperimentName = undefined;
      this._source = undefined;
      this._trainingScriptPath = undefined;
      this._yamlParameters = undefined;
      this._yamlParametersFilePath = undefined;
      this._compute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._dlRuntimeImage = value.dlRuntimeImage;
      this._mlflowExperimentName = value.mlflowExperimentName;
      this._source = value.source;
      this._trainingScriptPath = value.trainingScriptPath;
      this._yamlParameters = value.yamlParameters;
      this._yamlParametersFilePath = value.yamlParametersFilePath;
      this._compute.internalValue = value.compute;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // dl_runtime_image - computed: false, optional: false, required: true
  private _dlRuntimeImage?: string; 
  public get dlRuntimeImage() {
    return this.getStringAttribute('dl_runtime_image');
  }
  public set dlRuntimeImage(value: string) {
    this._dlRuntimeImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dlRuntimeImageInput() {
    return this._dlRuntimeImage;
  }

  // mlflow_experiment_name - computed: false, optional: true, required: false
  private _mlflowExperimentName?: string; 
  public get mlflowExperimentName() {
    return this.getStringAttribute('mlflow_experiment_name');
  }
  public set mlflowExperimentName(value: string) {
    this._mlflowExperimentName = value;
  }
  public resetMlflowExperimentName() {
    this._mlflowExperimentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlflowExperimentNameInput() {
    return this._mlflowExperimentName;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // training_script_path - computed: false, optional: true, required: false
  private _trainingScriptPath?: string; 
  public get trainingScriptPath() {
    return this.getStringAttribute('training_script_path');
  }
  public set trainingScriptPath(value: string) {
    this._trainingScriptPath = value;
  }
  public resetTrainingScriptPath() {
    this._trainingScriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingScriptPathInput() {
    return this._trainingScriptPath;
  }

  // yaml_parameters - computed: false, optional: true, required: false
  private _yamlParameters?: string; 
  public get yamlParameters() {
    return this.getStringAttribute('yaml_parameters');
  }
  public set yamlParameters(value: string) {
    this._yamlParameters = value;
  }
  public resetYamlParameters() {
    this._yamlParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlParametersInput() {
    return this._yamlParameters;
  }

  // yaml_parameters_file_path - computed: false, optional: true, required: false
  private _yamlParametersFilePath?: string; 
  public get yamlParametersFilePath() {
    return this.getStringAttribute('yaml_parameters_file_path');
  }
  public set yamlParametersFilePath(value: string) {
    this._yamlParametersFilePath = value;
  }
  public resetYamlParametersFilePath() {
    this._yamlParametersFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlParametersFilePathInput() {
    return this._yamlParametersFilePath;
  }

  // compute - computed: false, optional: true, required: false
  private _compute = new JobTaskGenAiComputeTaskComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: JobTaskGenAiComputeTaskCompute) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }
}
export interface JobTaskHealthRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#metric Job#metric}
  */
  readonly metric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#op Job#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#value Job#value}
  */
  readonly value: number;
}

export function jobTaskHealthRulesToTerraform(struct?: JobTaskHealthRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktn.stringToTerraform(struct!.metric),
    op: cdktn.stringToTerraform(struct!.op),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function jobTaskHealthRulesToHclTerraform(struct?: JobTaskHealthRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktn.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktn.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskHealthRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskHealthRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskHealthRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class JobTaskHealthRulesList extends cdktn.ComplexList {
  public internalValue? : JobTaskHealthRules[] | cdktn.IResolvable

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
  public get(index: number): JobTaskHealthRulesOutputReference {
    return new JobTaskHealthRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskHealth {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#rules Job#rules}
  */
  readonly rules: JobTaskHealthRules[] | cdktn.IResolvable;
}

export function jobTaskHealthToTerraform(struct?: JobTaskHealthOutputReference | JobTaskHealth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktn.listMapper(jobTaskHealthRulesToTerraform, true)(struct!.rules),
  }
}


export function jobTaskHealthToHclTerraform(struct?: JobTaskHealthOutputReference | JobTaskHealth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktn.listMapperHcl(jobTaskHealthRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskHealthRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskHealthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new JobTaskHealthRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: JobTaskHealthRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface JobTaskLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskLibraryCranToTerraform(struct?: JobTaskLibraryCranOutputReference | JobTaskLibraryCran): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function jobTaskLibraryCranToHclTerraform(struct?: JobTaskLibraryCranOutputReference | JobTaskLibraryCran): any {
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

export class JobTaskLibraryCranOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskLibraryCran | undefined {
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

  public set internalValue(value: JobTaskLibraryCran | undefined) {
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
export interface JobTaskLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#coordinates Job#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#exclusions Job#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskLibraryMavenToTerraform(struct?: JobTaskLibraryMavenOutputReference | JobTaskLibraryMaven): any {
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


export function jobTaskLibraryMavenToHclTerraform(struct?: JobTaskLibraryMavenOutputReference | JobTaskLibraryMaven): any {
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

export class JobTaskLibraryMavenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskLibraryMaven | undefined {
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

  public set internalValue(value: JobTaskLibraryMaven | undefined) {
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
export interface JobTaskLibraryProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workspace_id Job#workspace_id}
  */
  readonly workspaceId?: string;
}

export function jobTaskLibraryProviderConfigToTerraform(struct?: JobTaskLibraryProviderConfigOutputReference | JobTaskLibraryProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function jobTaskLibraryProviderConfigToHclTerraform(struct?: JobTaskLibraryProviderConfigOutputReference | JobTaskLibraryProviderConfig): any {
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

export class JobTaskLibraryProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskLibraryProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskLibraryProviderConfig | undefined) {
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
export interface JobTaskLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskLibraryPypiToTerraform(struct?: JobTaskLibraryPypiOutputReference | JobTaskLibraryPypi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function jobTaskLibraryPypiToHclTerraform(struct?: JobTaskLibraryPypiOutputReference | JobTaskLibraryPypi): any {
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

export class JobTaskLibraryPypiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskLibraryPypi | undefined {
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

  public set internalValue(value: JobTaskLibraryPypi | undefined) {
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
export interface JobTaskLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobTaskLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobTaskLibraryMaven;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#provider_config Job#provider_config}
  */
  readonly providerConfig?: JobTaskLibraryProviderConfig;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobTaskLibraryPypi;
}

export function jobTaskLibraryToTerraform(struct?: JobTaskLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktn.stringToTerraform(struct!.egg),
    jar: cdktn.stringToTerraform(struct!.jar),
    requirements: cdktn.stringToTerraform(struct!.requirements),
    whl: cdktn.stringToTerraform(struct!.whl),
    cran: jobTaskLibraryCranToTerraform(struct!.cran),
    maven: jobTaskLibraryMavenToTerraform(struct!.maven),
    provider_config: jobTaskLibraryProviderConfigToTerraform(struct!.providerConfig),
    pypi: jobTaskLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobTaskLibraryToHclTerraform(struct?: JobTaskLibrary | cdktn.IResolvable): any {
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
      value: jobTaskLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskLibraryCranList",
    },
    maven: {
      value: jobTaskLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskLibraryMavenList",
    },
    provider_config: {
      value: jobTaskLibraryProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskLibraryProviderConfigList",
    },
    pypi: {
      value: jobTaskLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskLibraryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskLibrary | cdktn.IResolvable | undefined {
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

  public set internalValue(value: JobTaskLibrary | cdktn.IResolvable | undefined) {
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
  private _cran = new JobTaskLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobTaskLibraryCran) {
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
  private _maven = new JobTaskLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobTaskLibraryMaven) {
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
  private _providerConfig = new JobTaskLibraryProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: JobTaskLibraryProviderConfig) {
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
  private _pypi = new JobTaskLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobTaskLibraryPypi) {
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

export class JobTaskLibraryList extends cdktn.ComplexList {
  public internalValue? : JobTaskLibrary[] | cdktn.IResolvable

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
  public get(index: number): JobTaskLibraryOutputReference {
    return new JobTaskLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskNewClusterAutoscale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#max_workers Job#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#min_workers Job#min_workers}
  */
  readonly minWorkers?: number;
}

export function jobTaskNewClusterAutoscaleToTerraform(struct?: JobTaskNewClusterAutoscaleOutputReference | JobTaskNewClusterAutoscale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktn.numberToTerraform(struct!.maxWorkers),
    min_workers: cdktn.numberToTerraform(struct!.minWorkers),
  }
}


export function jobTaskNewClusterAutoscaleToHclTerraform(struct?: JobTaskNewClusterAutoscaleOutputReference | JobTaskNewClusterAutoscale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_workers: {
      value: cdktn.numberToHclTerraform(struct!.maxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_workers: {
      value: cdktn.numberToHclTerraform(struct!.minWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterAutoscaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterAutoscale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkers = this._maxWorkers;
    }
    if (this._minWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWorkers = this._minWorkers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterAutoscale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxWorkers = undefined;
      this._minWorkers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxWorkers = value.maxWorkers;
      this._minWorkers = value.minWorkers;
    }
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_workers - computed: false, optional: true, required: false
  private _minWorkers?: number; 
  public get minWorkers() {
    return this.getNumberAttribute('min_workers');
  }
  public set minWorkers(value: number) {
    this._minWorkers = value;
  }
  public resetMinWorkers() {
    this._minWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWorkersInput() {
    return this._minWorkers;
  }
}
export interface JobTaskNewClusterAwsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ebs_volume_count Job#ebs_volume_count}
  */
  readonly ebsVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ebs_volume_iops Job#ebs_volume_iops}
  */
  readonly ebsVolumeIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ebs_volume_size Job#ebs_volume_size}
  */
  readonly ebsVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ebs_volume_throughput Job#ebs_volume_throughput}
  */
  readonly ebsVolumeThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ebs_volume_type Job#ebs_volume_type}
  */
  readonly ebsVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#instance_profile_arn Job#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spot_bid_price_percent Job#spot_bid_price_percent}
  */
  readonly spotBidPricePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobTaskNewClusterAwsAttributesToTerraform(struct?: JobTaskNewClusterAwsAttributesOutputReference | JobTaskNewClusterAwsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    ebs_volume_count: cdktn.numberToTerraform(struct!.ebsVolumeCount),
    ebs_volume_iops: cdktn.numberToTerraform(struct!.ebsVolumeIops),
    ebs_volume_size: cdktn.numberToTerraform(struct!.ebsVolumeSize),
    ebs_volume_throughput: cdktn.numberToTerraform(struct!.ebsVolumeThroughput),
    ebs_volume_type: cdktn.stringToTerraform(struct!.ebsVolumeType),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    instance_profile_arn: cdktn.stringToTerraform(struct!.instanceProfileArn),
    spot_bid_price_percent: cdktn.numberToTerraform(struct!.spotBidPricePercent),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function jobTaskNewClusterAwsAttributesToHclTerraform(struct?: JobTaskNewClusterAwsAttributesOutputReference | JobTaskNewClusterAwsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktn.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_volume_count: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_iops: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_size: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_throughput: {
      value: cdktn.numberToHclTerraform(struct!.ebsVolumeThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebs_volume_type: {
      value: cdktn.stringToHclTerraform(struct!.ebsVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_profile_arn: {
      value: cdktn.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_bid_price_percent: {
      value: cdktn.numberToHclTerraform(struct!.spotBidPricePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_id: {
      value: cdktn.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterAwsAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterAwsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._ebsVolumeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeCount = this._ebsVolumeCount;
    }
    if (this._ebsVolumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeIops = this._ebsVolumeIops;
    }
    if (this._ebsVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSize = this._ebsVolumeSize;
    }
    if (this._ebsVolumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeThroughput = this._ebsVolumeThroughput;
    }
    if (this._ebsVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeType = this._ebsVolumeType;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._spotBidPricePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidPricePercent = this._spotBidPricePercent;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterAwsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._ebsVolumeCount = undefined;
      this._ebsVolumeIops = undefined;
      this._ebsVolumeSize = undefined;
      this._ebsVolumeThroughput = undefined;
      this._ebsVolumeType = undefined;
      this._firstOnDemand = undefined;
      this._instanceProfileArn = undefined;
      this._spotBidPricePercent = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._ebsVolumeCount = value.ebsVolumeCount;
      this._ebsVolumeIops = value.ebsVolumeIops;
      this._ebsVolumeSize = value.ebsVolumeSize;
      this._ebsVolumeThroughput = value.ebsVolumeThroughput;
      this._ebsVolumeType = value.ebsVolumeType;
      this._firstOnDemand = value.firstOnDemand;
      this._instanceProfileArn = value.instanceProfileArn;
      this._spotBidPricePercent = value.spotBidPricePercent;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // ebs_volume_count - computed: false, optional: true, required: false
  private _ebsVolumeCount?: number; 
  public get ebsVolumeCount() {
    return this.getNumberAttribute('ebs_volume_count');
  }
  public set ebsVolumeCount(value: number) {
    this._ebsVolumeCount = value;
  }
  public resetEbsVolumeCount() {
    this._ebsVolumeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeCountInput() {
    return this._ebsVolumeCount;
  }

  // ebs_volume_iops - computed: false, optional: true, required: false
  private _ebsVolumeIops?: number; 
  public get ebsVolumeIops() {
    return this.getNumberAttribute('ebs_volume_iops');
  }
  public set ebsVolumeIops(value: number) {
    this._ebsVolumeIops = value;
  }
  public resetEbsVolumeIops() {
    this._ebsVolumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeIopsInput() {
    return this._ebsVolumeIops;
  }

  // ebs_volume_size - computed: false, optional: true, required: false
  private _ebsVolumeSize?: number; 
  public get ebsVolumeSize() {
    return this.getNumberAttribute('ebs_volume_size');
  }
  public set ebsVolumeSize(value: number) {
    this._ebsVolumeSize = value;
  }
  public resetEbsVolumeSize() {
    this._ebsVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeSizeInput() {
    return this._ebsVolumeSize;
  }

  // ebs_volume_throughput - computed: false, optional: true, required: false
  private _ebsVolumeThroughput?: number; 
  public get ebsVolumeThroughput() {
    return this.getNumberAttribute('ebs_volume_throughput');
  }
  public set ebsVolumeThroughput(value: number) {
    this._ebsVolumeThroughput = value;
  }
  public resetEbsVolumeThroughput() {
    this._ebsVolumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeThroughputInput() {
    return this._ebsVolumeThroughput;
  }

  // ebs_volume_type - computed: false, optional: true, required: false
  private _ebsVolumeType?: string; 
  public get ebsVolumeType() {
    return this.getStringAttribute('ebs_volume_type');
  }
  public set ebsVolumeType(value: string) {
    this._ebsVolumeType = value;
  }
  public resetEbsVolumeType() {
    this._ebsVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeTypeInput() {
    return this._ebsVolumeType;
  }

  // first_on_demand - computed: false, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // spot_bid_price_percent - computed: false, optional: true, required: false
  private _spotBidPricePercent?: number; 
  public get spotBidPricePercent() {
    return this.getNumberAttribute('spot_bid_price_percent');
  }
  public set spotBidPricePercent(value: number) {
    this._spotBidPricePercent = value;
  }
  public resetSpotBidPricePercent() {
    this._spotBidPricePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidPricePercentInput() {
    return this._spotBidPricePercent;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface JobTaskNewClusterAzureAttributesLogAnalyticsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#log_analytics_primary_key Job#log_analytics_primary_key}
  */
  readonly logAnalyticsPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#log_analytics_workspace_id Job#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

export function jobTaskNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct?: JobTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobTaskNewClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_primary_key: cdktn.stringToTerraform(struct!.logAnalyticsPrimaryKey),
    log_analytics_workspace_id: cdktn.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}


export function jobTaskNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct?: JobTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference | JobTaskNewClusterAzureAttributesLogAnalyticsInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_analytics_primary_key: {
      value: cdktn.stringToHclTerraform(struct!.logAnalyticsPrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_analytics_workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.logAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterAzureAttributesLogAnalyticsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsPrimaryKey = this._logAnalyticsPrimaryKey;
    }
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterAzureAttributesLogAnalyticsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsPrimaryKey = undefined;
      this._logAnalyticsWorkspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsPrimaryKey = value.logAnalyticsPrimaryKey;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
    }
  }

  // log_analytics_primary_key - computed: false, optional: true, required: false
  private _logAnalyticsPrimaryKey?: string; 
  public get logAnalyticsPrimaryKey() {
    return this.getStringAttribute('log_analytics_primary_key');
  }
  public set logAnalyticsPrimaryKey(value: string) {
    this._logAnalyticsPrimaryKey = value;
  }
  public resetLogAnalyticsPrimaryKey() {
    this._logAnalyticsPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsPrimaryKeyInput() {
    return this._logAnalyticsPrimaryKey;
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }
}
export interface JobTaskNewClusterAzureAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spot_bid_max_price Job#spot_bid_max_price}
  */
  readonly spotBidMaxPrice?: number;
  /**
  * log_analytics_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#log_analytics_info Job#log_analytics_info}
  */
  readonly logAnalyticsInfo?: JobTaskNewClusterAzureAttributesLogAnalyticsInfo;
}

export function jobTaskNewClusterAzureAttributesToTerraform(struct?: JobTaskNewClusterAzureAttributesOutputReference | JobTaskNewClusterAzureAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    spot_bid_max_price: cdktn.numberToTerraform(struct!.spotBidMaxPrice),
    log_analytics_info: jobTaskNewClusterAzureAttributesLogAnalyticsInfoToTerraform(struct!.logAnalyticsInfo),
  }
}


export function jobTaskNewClusterAzureAttributesToHclTerraform(struct?: JobTaskNewClusterAzureAttributesOutputReference | JobTaskNewClusterAzureAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktn.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_bid_max_price: {
      value: cdktn.numberToHclTerraform(struct!.spotBidMaxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_analytics_info: {
      value: jobTaskNewClusterAzureAttributesLogAnalyticsInfoToHclTerraform(struct!.logAnalyticsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterAzureAttributesLogAnalyticsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterAzureAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterAzureAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._spotBidMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidMaxPrice = this._spotBidMaxPrice;
    }
    if (this._logAnalyticsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsInfo = this._logAnalyticsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterAzureAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._firstOnDemand = undefined;
      this._spotBidMaxPrice = undefined;
      this._logAnalyticsInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._firstOnDemand = value.firstOnDemand;
      this._spotBidMaxPrice = value.spotBidMaxPrice;
      this._logAnalyticsInfo.internalValue = value.logAnalyticsInfo;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // first_on_demand - computed: false, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // spot_bid_max_price - computed: false, optional: true, required: false
  private _spotBidMaxPrice?: number; 
  public get spotBidMaxPrice() {
    return this.getNumberAttribute('spot_bid_max_price');
  }
  public set spotBidMaxPrice(value: number) {
    this._spotBidMaxPrice = value;
  }
  public resetSpotBidMaxPrice() {
    this._spotBidMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidMaxPriceInput() {
    return this._spotBidMaxPrice;
  }

  // log_analytics_info - computed: false, optional: true, required: false
  private _logAnalyticsInfo = new JobTaskNewClusterAzureAttributesLogAnalyticsInfoOutputReference(this, "log_analytics_info");
  public get logAnalyticsInfo() {
    return this._logAnalyticsInfo;
  }
  public putLogAnalyticsInfo(value: JobTaskNewClusterAzureAttributesLogAnalyticsInfo) {
    this._logAnalyticsInfo.internalValue = value;
  }
  public resetLogAnalyticsInfo() {
    this._logAnalyticsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInfoInput() {
    return this._logAnalyticsInfo.internalValue;
  }
}
export interface JobTaskNewClusterClusterLogConfDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterClusterLogConfDbfsToTerraform(struct?: JobTaskNewClusterClusterLogConfDbfsOutputReference | JobTaskNewClusterClusterLogConfDbfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterClusterLogConfDbfsToHclTerraform(struct?: JobTaskNewClusterClusterLogConfDbfsOutputReference | JobTaskNewClusterClusterLogConfDbfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterClusterLogConfDbfsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterClusterLogConfDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterClusterLogConfDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskNewClusterClusterLogConfS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobTaskNewClusterClusterLogConfS3ToTerraform(struct?: JobTaskNewClusterClusterLogConfS3OutputReference | JobTaskNewClusterClusterLogConfS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    destination: cdktn.stringToTerraform(struct!.destination),
    enable_encryption: cdktn.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function jobTaskNewClusterClusterLogConfS3ToHclTerraform(struct?: JobTaskNewClusterClusterLogConfS3OutputReference | JobTaskNewClusterClusterLogConfS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterClusterLogConfS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterClusterLogConfS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterClusterLogConfS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktn.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktn.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface JobTaskNewClusterClusterLogConfVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterClusterLogConfVolumesToTerraform(struct?: JobTaskNewClusterClusterLogConfVolumesOutputReference | JobTaskNewClusterClusterLogConfVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterClusterLogConfVolumesToHclTerraform(struct?: JobTaskNewClusterClusterLogConfVolumesOutputReference | JobTaskNewClusterClusterLogConfVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterClusterLogConfVolumesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterClusterLogConfVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterClusterLogConfVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskNewClusterClusterLogConf {
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobTaskNewClusterClusterLogConfDbfs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobTaskNewClusterClusterLogConfS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobTaskNewClusterClusterLogConfVolumes;
}

export function jobTaskNewClusterClusterLogConfToTerraform(struct?: JobTaskNewClusterClusterLogConfOutputReference | JobTaskNewClusterClusterLogConf): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbfs: jobTaskNewClusterClusterLogConfDbfsToTerraform(struct!.dbfs),
    s3: jobTaskNewClusterClusterLogConfS3ToTerraform(struct!.s3),
    volumes: jobTaskNewClusterClusterLogConfVolumesToTerraform(struct!.volumes),
  }
}


export function jobTaskNewClusterClusterLogConfToHclTerraform(struct?: JobTaskNewClusterClusterLogConfOutputReference | JobTaskNewClusterClusterLogConf): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbfs: {
      value: jobTaskNewClusterClusterLogConfDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterLogConfDbfsList",
    },
    s3: {
      value: jobTaskNewClusterClusterLogConfS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterLogConfS3List",
    },
    volumes: {
      value: jobTaskNewClusterClusterLogConfVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterLogConfVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterClusterLogConfOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterClusterLogConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterClusterLogConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbfs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbfs.internalValue = value.dbfs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
    }
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new JobTaskNewClusterClusterLogConfDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobTaskNewClusterClusterLogConfDbfs) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new JobTaskNewClusterClusterLogConfS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobTaskNewClusterClusterLogConfS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new JobTaskNewClusterClusterLogConfVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobTaskNewClusterClusterLogConfVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#mount_options Job#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#server_address Job#server_address}
  */
  readonly serverAddress: string;
}

export function jobTaskNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct?: JobTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: cdktn.stringToTerraform(struct!.mountOptions),
    server_address: cdktn.stringToTerraform(struct!.serverAddress),
  }
}


export function jobTaskNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct?: JobTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference | JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_options: {
      value: cdktn.stringToHclTerraform(struct!.mountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktn.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountOptions = undefined;
      this._serverAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountOptions = value.mountOptions;
      this._serverAddress = value.serverAddress;
    }
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }
}
export interface JobTaskNewClusterClusterMountInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#local_mount_dir_path Job#local_mount_dir_path}
  */
  readonly localMountDirPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#remote_mount_dir_path Job#remote_mount_dir_path}
  */
  readonly remoteMountDirPath?: string;
  /**
  * network_filesystem_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#network_filesystem_info Job#network_filesystem_info}
  */
  readonly networkFilesystemInfo: JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo;
}

export function jobTaskNewClusterClusterMountInfoToTerraform(struct?: JobTaskNewClusterClusterMountInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_dir_path: cdktn.stringToTerraform(struct!.localMountDirPath),
    remote_mount_dir_path: cdktn.stringToTerraform(struct!.remoteMountDirPath),
    network_filesystem_info: jobTaskNewClusterClusterMountInfoNetworkFilesystemInfoToTerraform(struct!.networkFilesystemInfo),
  }
}


export function jobTaskNewClusterClusterMountInfoToHclTerraform(struct?: JobTaskNewClusterClusterMountInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_mount_dir_path: {
      value: cdktn.stringToHclTerraform(struct!.localMountDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_mount_dir_path: {
      value: cdktn.stringToHclTerraform(struct!.remoteMountDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_filesystem_info: {
      value: jobTaskNewClusterClusterMountInfoNetworkFilesystemInfoToHclTerraform(struct!.networkFilesystemInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterMountInfoNetworkFilesystemInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterClusterMountInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskNewClusterClusterMountInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localMountDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountDirPath = this._localMountDirPath;
    }
    if (this._remoteMountDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteMountDirPath = this._remoteMountDirPath;
    }
    if (this._networkFilesystemInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFilesystemInfo = this._networkFilesystemInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterClusterMountInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localMountDirPath = undefined;
      this._remoteMountDirPath = undefined;
      this._networkFilesystemInfo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localMountDirPath = value.localMountDirPath;
      this._remoteMountDirPath = value.remoteMountDirPath;
      this._networkFilesystemInfo.internalValue = value.networkFilesystemInfo;
    }
  }

  // local_mount_dir_path - computed: false, optional: false, required: true
  private _localMountDirPath?: string; 
  public get localMountDirPath() {
    return this.getStringAttribute('local_mount_dir_path');
  }
  public set localMountDirPath(value: string) {
    this._localMountDirPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountDirPathInput() {
    return this._localMountDirPath;
  }

  // remote_mount_dir_path - computed: false, optional: true, required: false
  private _remoteMountDirPath?: string; 
  public get remoteMountDirPath() {
    return this.getStringAttribute('remote_mount_dir_path');
  }
  public set remoteMountDirPath(value: string) {
    this._remoteMountDirPath = value;
  }
  public resetRemoteMountDirPath() {
    this._remoteMountDirPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMountDirPathInput() {
    return this._remoteMountDirPath;
  }

  // network_filesystem_info - computed: false, optional: false, required: true
  private _networkFilesystemInfo = new JobTaskNewClusterClusterMountInfoNetworkFilesystemInfoOutputReference(this, "network_filesystem_info");
  public get networkFilesystemInfo() {
    return this._networkFilesystemInfo;
  }
  public putNetworkFilesystemInfo(value: JobTaskNewClusterClusterMountInfoNetworkFilesystemInfo) {
    this._networkFilesystemInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFilesystemInfoInput() {
    return this._networkFilesystemInfo.internalValue;
  }
}

export class JobTaskNewClusterClusterMountInfoList extends cdktn.ComplexList {
  public internalValue? : JobTaskNewClusterClusterMountInfo[] | cdktn.IResolvable

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
  public get(index: number): JobTaskNewClusterClusterMountInfoOutputReference {
    return new JobTaskNewClusterClusterMountInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskNewClusterDockerImageBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#password Job#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#username Job#username}
  */
  readonly username: string;
}

export function jobTaskNewClusterDockerImageBasicAuthToTerraform(struct?: JobTaskNewClusterDockerImageBasicAuthOutputReference | JobTaskNewClusterDockerImageBasicAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function jobTaskNewClusterDockerImageBasicAuthToHclTerraform(struct?: JobTaskNewClusterDockerImageBasicAuthOutputReference | JobTaskNewClusterDockerImageBasicAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterDockerImageBasicAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterDockerImageBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterDockerImageBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface JobTaskNewClusterDockerImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#url Job#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#basic_auth Job#basic_auth}
  */
  readonly basicAuth?: JobTaskNewClusterDockerImageBasicAuth;
}

export function jobTaskNewClusterDockerImageToTerraform(struct?: JobTaskNewClusterDockerImageOutputReference | JobTaskNewClusterDockerImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktn.stringToTerraform(struct!.url),
    basic_auth: jobTaskNewClusterDockerImageBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function jobTaskNewClusterDockerImageToHclTerraform(struct?: JobTaskNewClusterDockerImageOutputReference | JobTaskNewClusterDockerImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: jobTaskNewClusterDockerImageBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterDockerImageBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterDockerImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterDockerImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterDockerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._basicAuth.internalValue = value.basicAuth;
    }
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

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new JobTaskNewClusterDockerImageBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: JobTaskNewClusterDockerImageBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface JobTaskNewClusterDriverNodeTypeFlexibility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#alternate_node_type_ids Job#alternate_node_type_ids}
  */
  readonly alternateNodeTypeIds?: string[];
}

export function jobTaskNewClusterDriverNodeTypeFlexibilityToTerraform(struct?: JobTaskNewClusterDriverNodeTypeFlexibilityOutputReference | JobTaskNewClusterDriverNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_node_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alternateNodeTypeIds),
  }
}


export function jobTaskNewClusterDriverNodeTypeFlexibilityToHclTerraform(struct?: JobTaskNewClusterDriverNodeTypeFlexibilityOutputReference | JobTaskNewClusterDriverNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate_node_type_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alternateNodeTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterDriverNodeTypeFlexibilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterDriverNodeTypeFlexibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNodeTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNodeTypeIds = this._alternateNodeTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterDriverNodeTypeFlexibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alternateNodeTypeIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alternateNodeTypeIds = value.alternateNodeTypeIds;
    }
  }

  // alternate_node_type_ids - computed: false, optional: true, required: false
  private _alternateNodeTypeIds?: string[]; 
  public get alternateNodeTypeIds() {
    return this.getListAttribute('alternate_node_type_ids');
  }
  public set alternateNodeTypeIds(value: string[]) {
    this._alternateNodeTypeIds = value;
  }
  public resetAlternateNodeTypeIds() {
    this._alternateNodeTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNodeTypeIdsInput() {
    return this._alternateNodeTypeIds;
  }
}
export interface JobTaskNewClusterGcpAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#availability Job#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#boot_disk_size Job#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#confidential_compute_type Job#confidential_compute_type}
  */
  readonly confidentialComputeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#first_on_demand Job#first_on_demand}
  */
  readonly firstOnDemand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#google_service_account Job#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#local_ssd_count Job#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#use_preemptible_executors Job#use_preemptible_executors}
  */
  readonly usePreemptibleExecutors?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#zone_id Job#zone_id}
  */
  readonly zoneId?: string;
}

export function jobTaskNewClusterGcpAttributesToTerraform(struct?: JobTaskNewClusterGcpAttributesOutputReference | JobTaskNewClusterGcpAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktn.stringToTerraform(struct!.availability),
    boot_disk_size: cdktn.numberToTerraform(struct!.bootDiskSize),
    confidential_compute_type: cdktn.stringToTerraform(struct!.confidentialComputeType),
    first_on_demand: cdktn.numberToTerraform(struct!.firstOnDemand),
    google_service_account: cdktn.stringToTerraform(struct!.googleServiceAccount),
    local_ssd_count: cdktn.numberToTerraform(struct!.localSsdCount),
    use_preemptible_executors: cdktn.booleanToTerraform(struct!.usePreemptibleExecutors),
    zone_id: cdktn.stringToTerraform(struct!.zoneId),
  }
}


export function jobTaskNewClusterGcpAttributesToHclTerraform(struct?: JobTaskNewClusterGcpAttributesOutputReference | JobTaskNewClusterGcpAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktn.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_disk_size: {
      value: cdktn.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    confidential_compute_type: {
      value: cdktn.stringToHclTerraform(struct!.confidentialComputeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_on_demand: {
      value: cdktn.numberToHclTerraform(struct!.firstOnDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    google_service_account: {
      value: cdktn.stringToHclTerraform(struct!.googleServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ssd_count: {
      value: cdktn.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_preemptible_executors: {
      value: cdktn.booleanToHclTerraform(struct!.usePreemptibleExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone_id: {
      value: cdktn.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterGcpAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterGcpAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._confidentialComputeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialComputeType = this._confidentialComputeType;
    }
    if (this._firstOnDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstOnDemand = this._firstOnDemand;
    }
    if (this._googleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccount = this._googleServiceAccount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._usePreemptibleExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePreemptibleExecutors = this._usePreemptibleExecutors;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterGcpAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._bootDiskSize = undefined;
      this._confidentialComputeType = undefined;
      this._firstOnDemand = undefined;
      this._googleServiceAccount = undefined;
      this._localSsdCount = undefined;
      this._usePreemptibleExecutors = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._bootDiskSize = value.bootDiskSize;
      this._confidentialComputeType = value.confidentialComputeType;
      this._firstOnDemand = value.firstOnDemand;
      this._googleServiceAccount = value.googleServiceAccount;
      this._localSsdCount = value.localSsdCount;
      this._usePreemptibleExecutors = value.usePreemptibleExecutors;
      this._zoneId = value.zoneId;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // boot_disk_size - computed: false, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
  }

  // confidential_compute_type - computed: false, optional: true, required: false
  private _confidentialComputeType?: string; 
  public get confidentialComputeType() {
    return this.getStringAttribute('confidential_compute_type');
  }
  public set confidentialComputeType(value: string) {
    this._confidentialComputeType = value;
  }
  public resetConfidentialComputeType() {
    this._confidentialComputeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialComputeTypeInput() {
    return this._confidentialComputeType;
  }

  // first_on_demand - computed: false, optional: true, required: false
  private _firstOnDemand?: number; 
  public get firstOnDemand() {
    return this.getNumberAttribute('first_on_demand');
  }
  public set firstOnDemand(value: number) {
    this._firstOnDemand = value;
  }
  public resetFirstOnDemand() {
    this._firstOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstOnDemandInput() {
    return this._firstOnDemand;
  }

  // google_service_account - computed: false, optional: true, required: false
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
  public set googleServiceAccount(value: string) {
    this._googleServiceAccount = value;
  }
  public resetGoogleServiceAccount() {
    this._googleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
  }

  // local_ssd_count - computed: false, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // use_preemptible_executors - computed: false, optional: true, required: false
  private _usePreemptibleExecutors?: boolean | cdktn.IResolvable; 
  public get usePreemptibleExecutors() {
    return this.getBooleanAttribute('use_preemptible_executors');
  }
  public set usePreemptibleExecutors(value: boolean | cdktn.IResolvable) {
    this._usePreemptibleExecutors = value;
  }
  public resetUsePreemptibleExecutors() {
    this._usePreemptibleExecutors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreemptibleExecutorsInput() {
    return this._usePreemptibleExecutors;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface JobTaskNewClusterInitScriptsAbfss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsAbfssToTerraform(struct?: JobTaskNewClusterInitScriptsAbfssOutputReference | JobTaskNewClusterInitScriptsAbfss): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsAbfssToHclTerraform(struct?: JobTaskNewClusterInitScriptsAbfssOutputReference | JobTaskNewClusterInitScriptsAbfss): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterInitScriptsAbfssOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsAbfss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsAbfss | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskNewClusterInitScriptsDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsDbfsToTerraform(struct?: JobTaskNewClusterInitScriptsDbfsOutputReference | JobTaskNewClusterInitScriptsDbfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsDbfsToHclTerraform(struct?: JobTaskNewClusterInitScriptsDbfsOutputReference | JobTaskNewClusterInitScriptsDbfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterInitScriptsDbfsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskNewClusterInitScriptsFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsFileToTerraform(struct?: JobTaskNewClusterInitScriptsFileOutputReference | JobTaskNewClusterInitScriptsFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsFileToHclTerraform(struct?: JobTaskNewClusterInitScriptsFileOutputReference | JobTaskNewClusterInitScriptsFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterInitScriptsFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskNewClusterInitScriptsGcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsGcsToTerraform(struct?: JobTaskNewClusterInitScriptsGcsOutputReference | JobTaskNewClusterInitScriptsGcs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsGcsToHclTerraform(struct?: JobTaskNewClusterInitScriptsGcsOutputReference | JobTaskNewClusterInitScriptsGcs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterInitScriptsGcsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskNewClusterInitScriptsS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#canned_acl Job#canned_acl}
  */
  readonly cannedAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#enable_encryption Job#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#encryption_type Job#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#endpoint Job#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#kms_key Job#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#region Job#region}
  */
  readonly region?: string;
}

export function jobTaskNewClusterInitScriptsS3ToTerraform(struct?: JobTaskNewClusterInitScriptsS3OutputReference | JobTaskNewClusterInitScriptsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canned_acl: cdktn.stringToTerraform(struct!.cannedAcl),
    destination: cdktn.stringToTerraform(struct!.destination),
    enable_encryption: cdktn.booleanToTerraform(struct!.enableEncryption),
    encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function jobTaskNewClusterInitScriptsS3ToHclTerraform(struct?: JobTaskNewClusterInitScriptsS3OutputReference | JobTaskNewClusterInitScriptsS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canned_acl: {
      value: cdktn.stringToHclTerraform(struct!.cannedAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_type: {
      value: cdktn.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktn.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterInitScriptsS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cannedAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAcl = this._cannedAcl;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cannedAcl = undefined;
      this._destination = undefined;
      this._enableEncryption = undefined;
      this._encryptionType = undefined;
      this._endpoint = undefined;
      this._kmsKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cannedAcl = value.cannedAcl;
      this._destination = value.destination;
      this._enableEncryption = value.enableEncryption;
      this._encryptionType = value.encryptionType;
      this._endpoint = value.endpoint;
      this._kmsKey = value.kmsKey;
      this._region = value.region;
    }
  }

  // canned_acl - computed: false, optional: true, required: false
  private _cannedAcl?: string; 
  public get cannedAcl() {
    return this.getStringAttribute('canned_acl');
  }
  public set cannedAcl(value: string) {
    this._cannedAcl = value;
  }
  public resetCannedAcl() {
    this._cannedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAclInput() {
    return this._cannedAcl;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktn.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktn.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface JobTaskNewClusterInitScriptsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsVolumesToTerraform(struct?: JobTaskNewClusterInitScriptsVolumesOutputReference | JobTaskNewClusterInitScriptsVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsVolumesToHclTerraform(struct?: JobTaskNewClusterInitScriptsVolumesOutputReference | JobTaskNewClusterInitScriptsVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterInitScriptsVolumesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskNewClusterInitScriptsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination Job#destination}
  */
  readonly destination: string;
}

export function jobTaskNewClusterInitScriptsWorkspaceToTerraform(struct?: JobTaskNewClusterInitScriptsWorkspaceOutputReference | JobTaskNewClusterInitScriptsWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
  }
}


export function jobTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct?: JobTaskNewClusterInitScriptsWorkspaceOutputReference | JobTaskNewClusterInitScriptsWorkspace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterInitScriptsWorkspaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterInitScriptsWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScriptsWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface JobTaskNewClusterInitScripts {
  /**
  * abfss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#abfss Job#abfss}
  */
  readonly abfss?: JobTaskNewClusterInitScriptsAbfss;
  /**
  * dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dbfs Job#dbfs}
  */
  readonly dbfs?: JobTaskNewClusterInitScriptsDbfs;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#file Job#file}
  */
  readonly file?: JobTaskNewClusterInitScriptsFile;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#gcs Job#gcs}
  */
  readonly gcs?: JobTaskNewClusterInitScriptsGcs;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#s3 Job#s3}
  */
  readonly s3?: JobTaskNewClusterInitScriptsS3;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#volumes Job#volumes}
  */
  readonly volumes?: JobTaskNewClusterInitScriptsVolumes;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workspace Job#workspace}
  */
  readonly workspace?: JobTaskNewClusterInitScriptsWorkspace;
}

export function jobTaskNewClusterInitScriptsToTerraform(struct?: JobTaskNewClusterInitScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abfss: jobTaskNewClusterInitScriptsAbfssToTerraform(struct!.abfss),
    dbfs: jobTaskNewClusterInitScriptsDbfsToTerraform(struct!.dbfs),
    file: jobTaskNewClusterInitScriptsFileToTerraform(struct!.file),
    gcs: jobTaskNewClusterInitScriptsGcsToTerraform(struct!.gcs),
    s3: jobTaskNewClusterInitScriptsS3ToTerraform(struct!.s3),
    volumes: jobTaskNewClusterInitScriptsVolumesToTerraform(struct!.volumes),
    workspace: jobTaskNewClusterInitScriptsWorkspaceToTerraform(struct!.workspace),
  }
}


export function jobTaskNewClusterInitScriptsToHclTerraform(struct?: JobTaskNewClusterInitScripts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abfss: {
      value: jobTaskNewClusterInitScriptsAbfssToHclTerraform(struct!.abfss),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsAbfssList",
    },
    dbfs: {
      value: jobTaskNewClusterInitScriptsDbfsToHclTerraform(struct!.dbfs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsDbfsList",
    },
    file: {
      value: jobTaskNewClusterInitScriptsFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsFileList",
    },
    gcs: {
      value: jobTaskNewClusterInitScriptsGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsGcsList",
    },
    s3: {
      value: jobTaskNewClusterInitScriptsS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsS3List",
    },
    volumes: {
      value: jobTaskNewClusterInitScriptsVolumesToHclTerraform(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsVolumesList",
    },
    workspace: {
      value: jobTaskNewClusterInitScriptsWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterInitScriptsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskNewClusterInitScripts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abfss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abfss = this._abfss?.internalValue;
    }
    if (this._dbfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbfs = this._dbfs?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterInitScripts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abfss.internalValue = undefined;
      this._dbfs.internalValue = undefined;
      this._file.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abfss.internalValue = value.abfss;
      this._dbfs.internalValue = value.dbfs;
      this._file.internalValue = value.file;
      this._gcs.internalValue = value.gcs;
      this._s3.internalValue = value.s3;
      this._volumes.internalValue = value.volumes;
      this._workspace.internalValue = value.workspace;
    }
  }

  // abfss - computed: false, optional: true, required: false
  private _abfss = new JobTaskNewClusterInitScriptsAbfssOutputReference(this, "abfss");
  public get abfss() {
    return this._abfss;
  }
  public putAbfss(value: JobTaskNewClusterInitScriptsAbfss) {
    this._abfss.internalValue = value;
  }
  public resetAbfss() {
    this._abfss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abfssInput() {
    return this._abfss.internalValue;
  }

  // dbfs - computed: false, optional: true, required: false
  private _dbfs = new JobTaskNewClusterInitScriptsDbfsOutputReference(this, "dbfs");
  public get dbfs() {
    return this._dbfs;
  }
  public putDbfs(value: JobTaskNewClusterInitScriptsDbfs) {
    this._dbfs.internalValue = value;
  }
  public resetDbfs() {
    this._dbfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbfsInput() {
    return this._dbfs.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new JobTaskNewClusterInitScriptsFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobTaskNewClusterInitScriptsFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new JobTaskNewClusterInitScriptsGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: JobTaskNewClusterInitScriptsGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new JobTaskNewClusterInitScriptsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: JobTaskNewClusterInitScriptsS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new JobTaskNewClusterInitScriptsVolumesOutputReference(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: JobTaskNewClusterInitScriptsVolumes) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new JobTaskNewClusterInitScriptsWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: JobTaskNewClusterInitScriptsWorkspace) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

export class JobTaskNewClusterInitScriptsList extends cdktn.ComplexList {
  public internalValue? : JobTaskNewClusterInitScripts[] | cdktn.IResolvable

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
  public get(index: number): JobTaskNewClusterInitScriptsOutputReference {
    return new JobTaskNewClusterInitScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskNewClusterLibraryCran {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskNewClusterLibraryCranToTerraform(struct?: JobTaskNewClusterLibraryCranOutputReference | JobTaskNewClusterLibraryCran): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function jobTaskNewClusterLibraryCranToHclTerraform(struct?: JobTaskNewClusterLibraryCranOutputReference | JobTaskNewClusterLibraryCran): any {
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

export class JobTaskNewClusterLibraryCranOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterLibraryCran | undefined {
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

  public set internalValue(value: JobTaskNewClusterLibraryCran | undefined) {
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
export interface JobTaskNewClusterLibraryMaven {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#coordinates Job#coordinates}
  */
  readonly coordinates: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#exclusions Job#exclusions}
  */
  readonly exclusions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskNewClusterLibraryMavenToTerraform(struct?: JobTaskNewClusterLibraryMavenOutputReference | JobTaskNewClusterLibraryMaven): any {
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


export function jobTaskNewClusterLibraryMavenToHclTerraform(struct?: JobTaskNewClusterLibraryMavenOutputReference | JobTaskNewClusterLibraryMaven): any {
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

export class JobTaskNewClusterLibraryMavenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterLibraryMaven | undefined {
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

  public set internalValue(value: JobTaskNewClusterLibraryMaven | undefined) {
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
export interface JobTaskNewClusterLibraryProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workspace_id Job#workspace_id}
  */
  readonly workspaceId?: string;
}

export function jobTaskNewClusterLibraryProviderConfigToTerraform(struct?: JobTaskNewClusterLibraryProviderConfigOutputReference | JobTaskNewClusterLibraryProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function jobTaskNewClusterLibraryProviderConfigToHclTerraform(struct?: JobTaskNewClusterLibraryProviderConfigOutputReference | JobTaskNewClusterLibraryProviderConfig): any {
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

export class JobTaskNewClusterLibraryProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterLibraryProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterLibraryProviderConfig | undefined) {
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
export interface JobTaskNewClusterLibraryPypi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#package Job#package}
  */
  readonly package: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#repo Job#repo}
  */
  readonly repo?: string;
}

export function jobTaskNewClusterLibraryPypiToTerraform(struct?: JobTaskNewClusterLibraryPypiOutputReference | JobTaskNewClusterLibraryPypi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package: cdktn.stringToTerraform(struct!.package),
    repo: cdktn.stringToTerraform(struct!.repo),
  }
}


export function jobTaskNewClusterLibraryPypiToHclTerraform(struct?: JobTaskNewClusterLibraryPypiOutputReference | JobTaskNewClusterLibraryPypi): any {
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

export class JobTaskNewClusterLibraryPypiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterLibraryPypi | undefined {
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

  public set internalValue(value: JobTaskNewClusterLibraryPypi | undefined) {
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
export interface JobTaskNewClusterLibrary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#egg Job#egg}
  */
  readonly egg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#jar Job#jar}
  */
  readonly jar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#requirements Job#requirements}
  */
  readonly requirements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#whl Job#whl}
  */
  readonly whl?: string;
  /**
  * cran block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cran Job#cran}
  */
  readonly cran?: JobTaskNewClusterLibraryCran;
  /**
  * maven block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#maven Job#maven}
  */
  readonly maven?: JobTaskNewClusterLibraryMaven;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#provider_config Job#provider_config}
  */
  readonly providerConfig?: JobTaskNewClusterLibraryProviderConfig;
  /**
  * pypi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pypi Job#pypi}
  */
  readonly pypi?: JobTaskNewClusterLibraryPypi;
}

export function jobTaskNewClusterLibraryToTerraform(struct?: JobTaskNewClusterLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egg: cdktn.stringToTerraform(struct!.egg),
    jar: cdktn.stringToTerraform(struct!.jar),
    requirements: cdktn.stringToTerraform(struct!.requirements),
    whl: cdktn.stringToTerraform(struct!.whl),
    cran: jobTaskNewClusterLibraryCranToTerraform(struct!.cran),
    maven: jobTaskNewClusterLibraryMavenToTerraform(struct!.maven),
    provider_config: jobTaskNewClusterLibraryProviderConfigToTerraform(struct!.providerConfig),
    pypi: jobTaskNewClusterLibraryPypiToTerraform(struct!.pypi),
  }
}


export function jobTaskNewClusterLibraryToHclTerraform(struct?: JobTaskNewClusterLibrary | cdktn.IResolvable): any {
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
      value: jobTaskNewClusterLibraryCranToHclTerraform(struct!.cran),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterLibraryCranList",
    },
    maven: {
      value: jobTaskNewClusterLibraryMavenToHclTerraform(struct!.maven),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterLibraryMavenList",
    },
    provider_config: {
      value: jobTaskNewClusterLibraryProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterLibraryProviderConfigList",
    },
    pypi: {
      value: jobTaskNewClusterLibraryPypiToHclTerraform(struct!.pypi),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterLibraryPypiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterLibraryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskNewClusterLibrary | cdktn.IResolvable | undefined {
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

  public set internalValue(value: JobTaskNewClusterLibrary | cdktn.IResolvable | undefined) {
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
  private _cran = new JobTaskNewClusterLibraryCranOutputReference(this, "cran");
  public get cran() {
    return this._cran;
  }
  public putCran(value: JobTaskNewClusterLibraryCran) {
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
  private _maven = new JobTaskNewClusterLibraryMavenOutputReference(this, "maven");
  public get maven() {
    return this._maven;
  }
  public putMaven(value: JobTaskNewClusterLibraryMaven) {
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
  private _providerConfig = new JobTaskNewClusterLibraryProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: JobTaskNewClusterLibraryProviderConfig) {
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
  private _pypi = new JobTaskNewClusterLibraryPypiOutputReference(this, "pypi");
  public get pypi() {
    return this._pypi;
  }
  public putPypi(value: JobTaskNewClusterLibraryPypi) {
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

export class JobTaskNewClusterLibraryList extends cdktn.ComplexList {
  public internalValue? : JobTaskNewClusterLibrary[] | cdktn.IResolvable

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
  public get(index: number): JobTaskNewClusterLibraryOutputReference {
    return new JobTaskNewClusterLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskNewClusterProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workspace_id Job#workspace_id}
  */
  readonly workspaceId?: string;
}

export function jobTaskNewClusterProviderConfigToTerraform(struct?: JobTaskNewClusterProviderConfigOutputReference | JobTaskNewClusterProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function jobTaskNewClusterProviderConfigToHclTerraform(struct?: JobTaskNewClusterProviderConfigOutputReference | JobTaskNewClusterProviderConfig): any {
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

export class JobTaskNewClusterProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterProviderConfig | undefined) {
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
export interface JobTaskNewClusterWorkerNodeTypeFlexibility {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#alternate_node_type_ids Job#alternate_node_type_ids}
  */
  readonly alternateNodeTypeIds?: string[];
}

export function jobTaskNewClusterWorkerNodeTypeFlexibilityToTerraform(struct?: JobTaskNewClusterWorkerNodeTypeFlexibilityOutputReference | JobTaskNewClusterWorkerNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_node_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alternateNodeTypeIds),
  }
}


export function jobTaskNewClusterWorkerNodeTypeFlexibilityToHclTerraform(struct?: JobTaskNewClusterWorkerNodeTypeFlexibilityOutputReference | JobTaskNewClusterWorkerNodeTypeFlexibility): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate_node_type_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alternateNodeTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterWorkerNodeTypeFlexibilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterWorkerNodeTypeFlexibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateNodeTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateNodeTypeIds = this._alternateNodeTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterWorkerNodeTypeFlexibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alternateNodeTypeIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alternateNodeTypeIds = value.alternateNodeTypeIds;
    }
  }

  // alternate_node_type_ids - computed: false, optional: true, required: false
  private _alternateNodeTypeIds?: string[]; 
  public get alternateNodeTypeIds() {
    return this.getListAttribute('alternate_node_type_ids');
  }
  public set alternateNodeTypeIds(value: string[]) {
    this._alternateNodeTypeIds = value;
  }
  public resetAlternateNodeTypeIds() {
    this._alternateNodeTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNodeTypeIdsInput() {
    return this._alternateNodeTypeIds;
  }
}
export interface JobTaskNewClusterWorkloadTypeClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#jobs Job#jobs}
  */
  readonly jobs?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#notebooks Job#notebooks}
  */
  readonly notebooks?: boolean | cdktn.IResolvable;
}

export function jobTaskNewClusterWorkloadTypeClientsToTerraform(struct?: JobTaskNewClusterWorkloadTypeClientsOutputReference | JobTaskNewClusterWorkloadTypeClients): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jobs: cdktn.booleanToTerraform(struct!.jobs),
    notebooks: cdktn.booleanToTerraform(struct!.notebooks),
  }
}


export function jobTaskNewClusterWorkloadTypeClientsToHclTerraform(struct?: JobTaskNewClusterWorkloadTypeClientsOutputReference | JobTaskNewClusterWorkloadTypeClients): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jobs: {
      value: cdktn.booleanToHclTerraform(struct!.jobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notebooks: {
      value: cdktn.booleanToHclTerraform(struct!.notebooks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterWorkloadTypeClientsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterWorkloadTypeClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs;
    }
    if (this._notebooks !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebooks = this._notebooks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterWorkloadTypeClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobs = undefined;
      this._notebooks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobs = value.jobs;
      this._notebooks = value.notebooks;
    }
  }

  // jobs - computed: false, optional: true, required: false
  private _jobs?: boolean | cdktn.IResolvable; 
  public get jobs() {
    return this.getBooleanAttribute('jobs');
  }
  public set jobs(value: boolean | cdktn.IResolvable) {
    this._jobs = value;
  }
  public resetJobs() {
    this._jobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs;
  }

  // notebooks - computed: false, optional: true, required: false
  private _notebooks?: boolean | cdktn.IResolvable; 
  public get notebooks() {
    return this.getBooleanAttribute('notebooks');
  }
  public set notebooks(value: boolean | cdktn.IResolvable) {
    this._notebooks = value;
  }
  public resetNotebooks() {
    this._notebooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebooksInput() {
    return this._notebooks;
  }
}
export interface JobTaskNewClusterWorkloadType {
  /**
  * clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#clients Job#clients}
  */
  readonly clients: JobTaskNewClusterWorkloadTypeClients;
}

export function jobTaskNewClusterWorkloadTypeToTerraform(struct?: JobTaskNewClusterWorkloadTypeOutputReference | JobTaskNewClusterWorkloadType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: jobTaskNewClusterWorkloadTypeClientsToTerraform(struct!.clients),
  }
}


export function jobTaskNewClusterWorkloadTypeToHclTerraform(struct?: JobTaskNewClusterWorkloadTypeOutputReference | JobTaskNewClusterWorkloadType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: jobTaskNewClusterWorkloadTypeClientsToHclTerraform(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterWorkloadTypeClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterWorkloadTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewClusterWorkloadType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewClusterWorkloadType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clients.internalValue = value.clients;
    }
  }

  // clients - computed: false, optional: false, required: true
  private _clients = new JobTaskNewClusterWorkloadTypeClientsOutputReference(this, "clients");
  public get clients() {
    return this._clients;
  }
  public putClients(value: JobTaskNewClusterWorkloadTypeClients) {
    this._clients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }
}
export interface JobTaskNewCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#__apply_policy_default_values_allow_list Job#__apply_policy_default_values_allow_list}
  */
  readonly applyPolicyDefaultValuesAllowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#apply_policy_default_values Job#apply_policy_default_values}
  */
  readonly applyPolicyDefaultValues?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cluster_id Job#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cluster_name Job#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#custom_tags Job#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#data_security_mode Job#data_security_mode}
  */
  readonly dataSecurityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#driver_instance_pool_id Job#driver_instance_pool_id}
  */
  readonly driverInstancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#driver_node_type_id Job#driver_node_type_id}
  */
  readonly driverNodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#enable_elastic_disk Job#enable_elastic_disk}
  */
  readonly enableElasticDisk?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#enable_local_disk_encryption Job#enable_local_disk_encryption}
  */
  readonly enableLocalDiskEncryption?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#idempotency_token Job#idempotency_token}
  */
  readonly idempotencyToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#instance_pool_id Job#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#is_single_node Job#is_single_node}
  */
  readonly isSingleNode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#kind Job#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#node_type_id Job#node_type_id}
  */
  readonly nodeTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#num_workers Job#num_workers}
  */
  readonly numWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#policy_id Job#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#remote_disk_throughput Job#remote_disk_throughput}
  */
  readonly remoteDiskThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#runtime_engine Job#runtime_engine}
  */
  readonly runtimeEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#single_user_name Job#single_user_name}
  */
  readonly singleUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spark_conf Job#spark_conf}
  */
  readonly sparkConf?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spark_env_vars Job#spark_env_vars}
  */
  readonly sparkEnvVars?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spark_version Job#spark_version}
  */
  readonly sparkVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#ssh_public_keys Job#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#total_initial_remote_disk_size Job#total_initial_remote_disk_size}
  */
  readonly totalInitialRemoteDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#use_ml_runtime Job#use_ml_runtime}
  */
  readonly useMlRuntime?: boolean | cdktn.IResolvable;
  /**
  * autoscale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#autoscale Job#autoscale}
  */
  readonly autoscale?: JobTaskNewClusterAutoscale;
  /**
  * aws_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#aws_attributes Job#aws_attributes}
  */
  readonly awsAttributes?: JobTaskNewClusterAwsAttributes;
  /**
  * azure_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#azure_attributes Job#azure_attributes}
  */
  readonly azureAttributes?: JobTaskNewClusterAzureAttributes;
  /**
  * cluster_log_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cluster_log_conf Job#cluster_log_conf}
  */
  readonly clusterLogConf?: JobTaskNewClusterClusterLogConf;
  /**
  * cluster_mount_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#cluster_mount_info Job#cluster_mount_info}
  */
  readonly clusterMountInfo?: JobTaskNewClusterClusterMountInfo[] | cdktn.IResolvable;
  /**
  * docker_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#docker_image Job#docker_image}
  */
  readonly dockerImage?: JobTaskNewClusterDockerImage;
  /**
  * driver_node_type_flexibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#driver_node_type_flexibility Job#driver_node_type_flexibility}
  */
  readonly driverNodeTypeFlexibility?: JobTaskNewClusterDriverNodeTypeFlexibility;
  /**
  * gcp_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#gcp_attributes Job#gcp_attributes}
  */
  readonly gcpAttributes?: JobTaskNewClusterGcpAttributes;
  /**
  * init_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#init_scripts Job#init_scripts}
  */
  readonly initScripts?: JobTaskNewClusterInitScripts[] | cdktn.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#library Job#library}
  */
  readonly library?: JobTaskNewClusterLibrary[] | cdktn.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#provider_config Job#provider_config}
  */
  readonly providerConfig?: JobTaskNewClusterProviderConfig;
  /**
  * worker_node_type_flexibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#worker_node_type_flexibility Job#worker_node_type_flexibility}
  */
  readonly workerNodeTypeFlexibility?: JobTaskNewClusterWorkerNodeTypeFlexibility;
  /**
  * workload_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workload_type Job#workload_type}
  */
  readonly workloadType?: JobTaskNewClusterWorkloadType;
}

export function jobTaskNewClusterToTerraform(struct?: JobTaskNewClusterOutputReference | JobTaskNewCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    __apply_policy_default_values_allow_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.applyPolicyDefaultValuesAllowList),
    apply_policy_default_values: cdktn.booleanToTerraform(struct!.applyPolicyDefaultValues),
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
    cluster_name: cdktn.stringToTerraform(struct!.clusterName),
    custom_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customTags),
    data_security_mode: cdktn.stringToTerraform(struct!.dataSecurityMode),
    driver_instance_pool_id: cdktn.stringToTerraform(struct!.driverInstancePoolId),
    driver_node_type_id: cdktn.stringToTerraform(struct!.driverNodeTypeId),
    enable_elastic_disk: cdktn.booleanToTerraform(struct!.enableElasticDisk),
    enable_local_disk_encryption: cdktn.booleanToTerraform(struct!.enableLocalDiskEncryption),
    idempotency_token: cdktn.stringToTerraform(struct!.idempotencyToken),
    instance_pool_id: cdktn.stringToTerraform(struct!.instancePoolId),
    is_single_node: cdktn.booleanToTerraform(struct!.isSingleNode),
    kind: cdktn.stringToTerraform(struct!.kind),
    node_type_id: cdktn.stringToTerraform(struct!.nodeTypeId),
    num_workers: cdktn.numberToTerraform(struct!.numWorkers),
    policy_id: cdktn.stringToTerraform(struct!.policyId),
    remote_disk_throughput: cdktn.numberToTerraform(struct!.remoteDiskThroughput),
    runtime_engine: cdktn.stringToTerraform(struct!.runtimeEngine),
    single_user_name: cdktn.stringToTerraform(struct!.singleUserName),
    spark_conf: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkConf),
    spark_env_vars: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkEnvVars),
    spark_version: cdktn.stringToTerraform(struct!.sparkVersion),
    ssh_public_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sshPublicKeys),
    total_initial_remote_disk_size: cdktn.numberToTerraform(struct!.totalInitialRemoteDiskSize),
    use_ml_runtime: cdktn.booleanToTerraform(struct!.useMlRuntime),
    autoscale: jobTaskNewClusterAutoscaleToTerraform(struct!.autoscale),
    aws_attributes: jobTaskNewClusterAwsAttributesToTerraform(struct!.awsAttributes),
    azure_attributes: jobTaskNewClusterAzureAttributesToTerraform(struct!.azureAttributes),
    cluster_log_conf: jobTaskNewClusterClusterLogConfToTerraform(struct!.clusterLogConf),
    cluster_mount_info: cdktn.listMapper(jobTaskNewClusterClusterMountInfoToTerraform, true)(struct!.clusterMountInfo),
    docker_image: jobTaskNewClusterDockerImageToTerraform(struct!.dockerImage),
    driver_node_type_flexibility: jobTaskNewClusterDriverNodeTypeFlexibilityToTerraform(struct!.driverNodeTypeFlexibility),
    gcp_attributes: jobTaskNewClusterGcpAttributesToTerraform(struct!.gcpAttributes),
    init_scripts: cdktn.listMapper(jobTaskNewClusterInitScriptsToTerraform, true)(struct!.initScripts),
    library: cdktn.listMapper(jobTaskNewClusterLibraryToTerraform, true)(struct!.library),
    provider_config: jobTaskNewClusterProviderConfigToTerraform(struct!.providerConfig),
    worker_node_type_flexibility: jobTaskNewClusterWorkerNodeTypeFlexibilityToTerraform(struct!.workerNodeTypeFlexibility),
    workload_type: jobTaskNewClusterWorkloadTypeToTerraform(struct!.workloadType),
  }
}


export function jobTaskNewClusterToHclTerraform(struct?: JobTaskNewClusterOutputReference | JobTaskNewCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    __apply_policy_default_values_allow_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.applyPolicyDefaultValuesAllowList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    apply_policy_default_values: {
      value: cdktn.booleanToHclTerraform(struct!.applyPolicyDefaultValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktn.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    data_security_mode: {
      value: cdktn.stringToHclTerraform(struct!.dataSecurityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_instance_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.driverInstancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_node_type_id: {
      value: cdktn.stringToHclTerraform(struct!.driverNodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_elastic_disk: {
      value: cdktn.booleanToHclTerraform(struct!.enableElasticDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_local_disk_encryption: {
      value: cdktn.booleanToHclTerraform(struct!.enableLocalDiskEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idempotency_token: {
      value: cdktn.stringToHclTerraform(struct!.idempotencyToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.instancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_single_node: {
      value: cdktn.booleanToHclTerraform(struct!.isSingleNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_id: {
      value: cdktn.stringToHclTerraform(struct!.nodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_workers: {
      value: cdktn.numberToHclTerraform(struct!.numWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_id: {
      value: cdktn.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_disk_throughput: {
      value: cdktn.numberToHclTerraform(struct!.remoteDiskThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_engine: {
      value: cdktn.stringToHclTerraform(struct!.runtimeEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_user_name: {
      value: cdktn.stringToHclTerraform(struct!.singleUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spark_conf: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_env_vars: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkEnvVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_version: {
      value: cdktn.stringToHclTerraform(struct!.sparkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_public_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    total_initial_remote_disk_size: {
      value: cdktn.numberToHclTerraform(struct!.totalInitialRemoteDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_ml_runtime: {
      value: cdktn.booleanToHclTerraform(struct!.useMlRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscale: {
      value: jobTaskNewClusterAutoscaleToHclTerraform(struct!.autoscale),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterAutoscaleList",
    },
    aws_attributes: {
      value: jobTaskNewClusterAwsAttributesToHclTerraform(struct!.awsAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterAwsAttributesList",
    },
    azure_attributes: {
      value: jobTaskNewClusterAzureAttributesToHclTerraform(struct!.azureAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterAzureAttributesList",
    },
    cluster_log_conf: {
      value: jobTaskNewClusterClusterLogConfToHclTerraform(struct!.clusterLogConf),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterLogConfList",
    },
    cluster_mount_info: {
      value: cdktn.listMapperHcl(jobTaskNewClusterClusterMountInfoToHclTerraform, true)(struct!.clusterMountInfo),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterClusterMountInfoList",
    },
    docker_image: {
      value: jobTaskNewClusterDockerImageToHclTerraform(struct!.dockerImage),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterDockerImageList",
    },
    driver_node_type_flexibility: {
      value: jobTaskNewClusterDriverNodeTypeFlexibilityToHclTerraform(struct!.driverNodeTypeFlexibility),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterDriverNodeTypeFlexibilityList",
    },
    gcp_attributes: {
      value: jobTaskNewClusterGcpAttributesToHclTerraform(struct!.gcpAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterGcpAttributesList",
    },
    init_scripts: {
      value: cdktn.listMapperHcl(jobTaskNewClusterInitScriptsToHclTerraform, true)(struct!.initScripts),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterInitScriptsList",
    },
    library: {
      value: cdktn.listMapperHcl(jobTaskNewClusterLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "set",
      storageClassType: "JobTaskNewClusterLibraryList",
    },
    provider_config: {
      value: jobTaskNewClusterProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterProviderConfigList",
    },
    worker_node_type_flexibility: {
      value: jobTaskNewClusterWorkerNodeTypeFlexibilityToHclTerraform(struct!.workerNodeTypeFlexibility),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterWorkerNodeTypeFlexibilityList",
    },
    workload_type: {
      value: jobTaskNewClusterWorkloadTypeToHclTerraform(struct!.workloadType),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskNewClusterWorkloadTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNewClusterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNewCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyDefaultValuesAllowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValuesAllowList = this._applyPolicyDefaultValuesAllowList;
    }
    if (this._applyPolicyDefaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyDefaultValues = this._applyPolicyDefaultValues;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._dataSecurityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecurityMode = this._dataSecurityMode;
    }
    if (this._driverInstancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverInstancePoolId = this._driverInstancePoolId;
    }
    if (this._driverNodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeId = this._driverNodeTypeId;
    }
    if (this._enableElasticDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableElasticDisk = this._enableElasticDisk;
    }
    if (this._enableLocalDiskEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLocalDiskEncryption = this._enableLocalDiskEncryption;
    }
    if (this._idempotencyToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.idempotencyToken = this._idempotencyToken;
    }
    if (this._instancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolId = this._instancePoolId;
    }
    if (this._isSingleNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSingleNode = this._isSingleNode;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._nodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeId = this._nodeTypeId;
    }
    if (this._numWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numWorkers = this._numWorkers;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._remoteDiskThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDiskThroughput = this._remoteDiskThroughput;
    }
    if (this._runtimeEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEngine = this._runtimeEngine;
    }
    if (this._singleUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleUserName = this._singleUserName;
    }
    if (this._sparkConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConf = this._sparkConf;
    }
    if (this._sparkEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkEnvVars = this._sparkEnvVars;
    }
    if (this._sparkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkVersion = this._sparkVersion;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._totalInitialRemoteDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalInitialRemoteDiskSize = this._totalInitialRemoteDiskSize;
    }
    if (this._useMlRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMlRuntime = this._useMlRuntime;
    }
    if (this._autoscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale?.internalValue;
    }
    if (this._awsAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAttributes = this._awsAttributes?.internalValue;
    }
    if (this._azureAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAttributes = this._azureAttributes?.internalValue;
    }
    if (this._clusterLogConf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLogConf = this._clusterLogConf?.internalValue;
    }
    if (this._clusterMountInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMountInfo = this._clusterMountInfo?.internalValue;
    }
    if (this._dockerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage?.internalValue;
    }
    if (this._driverNodeTypeFlexibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeTypeFlexibility = this._driverNodeTypeFlexibility?.internalValue;
    }
    if (this._gcpAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAttributes = this._gcpAttributes?.internalValue;
    }
    if (this._initScripts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScripts = this._initScripts?.internalValue;
    }
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    if (this._workerNodeTypeFlexibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNodeTypeFlexibility = this._workerNodeTypeFlexibility?.internalValue;
    }
    if (this._workloadType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNewCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyPolicyDefaultValuesAllowList = undefined;
      this._applyPolicyDefaultValues = undefined;
      this._clusterId = undefined;
      this._clusterName = undefined;
      this._customTags = undefined;
      this._dataSecurityMode = undefined;
      this._driverInstancePoolId = undefined;
      this._driverNodeTypeId = undefined;
      this._enableElasticDisk = undefined;
      this._enableLocalDiskEncryption = undefined;
      this._idempotencyToken = undefined;
      this._instancePoolId = undefined;
      this._isSingleNode = undefined;
      this._kind = undefined;
      this._nodeTypeId = undefined;
      this._numWorkers = undefined;
      this._policyId = undefined;
      this._remoteDiskThroughput = undefined;
      this._runtimeEngine = undefined;
      this._singleUserName = undefined;
      this._sparkConf = undefined;
      this._sparkEnvVars = undefined;
      this._sparkVersion = undefined;
      this._sshPublicKeys = undefined;
      this._totalInitialRemoteDiskSize = undefined;
      this._useMlRuntime = undefined;
      this._autoscale.internalValue = undefined;
      this._awsAttributes.internalValue = undefined;
      this._azureAttributes.internalValue = undefined;
      this._clusterLogConf.internalValue = undefined;
      this._clusterMountInfo.internalValue = undefined;
      this._dockerImage.internalValue = undefined;
      this._driverNodeTypeFlexibility.internalValue = undefined;
      this._gcpAttributes.internalValue = undefined;
      this._initScripts.internalValue = undefined;
      this._library.internalValue = undefined;
      this._providerConfig.internalValue = undefined;
      this._workerNodeTypeFlexibility.internalValue = undefined;
      this._workloadType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyPolicyDefaultValuesAllowList = value.applyPolicyDefaultValuesAllowList;
      this._applyPolicyDefaultValues = value.applyPolicyDefaultValues;
      this._clusterId = value.clusterId;
      this._clusterName = value.clusterName;
      this._customTags = value.customTags;
      this._dataSecurityMode = value.dataSecurityMode;
      this._driverInstancePoolId = value.driverInstancePoolId;
      this._driverNodeTypeId = value.driverNodeTypeId;
      this._enableElasticDisk = value.enableElasticDisk;
      this._enableLocalDiskEncryption = value.enableLocalDiskEncryption;
      this._idempotencyToken = value.idempotencyToken;
      this._instancePoolId = value.instancePoolId;
      this._isSingleNode = value.isSingleNode;
      this._kind = value.kind;
      this._nodeTypeId = value.nodeTypeId;
      this._numWorkers = value.numWorkers;
      this._policyId = value.policyId;
      this._remoteDiskThroughput = value.remoteDiskThroughput;
      this._runtimeEngine = value.runtimeEngine;
      this._singleUserName = value.singleUserName;
      this._sparkConf = value.sparkConf;
      this._sparkEnvVars = value.sparkEnvVars;
      this._sparkVersion = value.sparkVersion;
      this._sshPublicKeys = value.sshPublicKeys;
      this._totalInitialRemoteDiskSize = value.totalInitialRemoteDiskSize;
      this._useMlRuntime = value.useMlRuntime;
      this._autoscale.internalValue = value.autoscale;
      this._awsAttributes.internalValue = value.awsAttributes;
      this._azureAttributes.internalValue = value.azureAttributes;
      this._clusterLogConf.internalValue = value.clusterLogConf;
      this._clusterMountInfo.internalValue = value.clusterMountInfo;
      this._dockerImage.internalValue = value.dockerImage;
      this._driverNodeTypeFlexibility.internalValue = value.driverNodeTypeFlexibility;
      this._gcpAttributes.internalValue = value.gcpAttributes;
      this._initScripts.internalValue = value.initScripts;
      this._library.internalValue = value.library;
      this._providerConfig.internalValue = value.providerConfig;
      this._workerNodeTypeFlexibility.internalValue = value.workerNodeTypeFlexibility;
      this._workloadType.internalValue = value.workloadType;
    }
  }

  // __apply_policy_default_values_allow_list - computed: false, optional: true, required: false
  private _applyPolicyDefaultValuesAllowList?: string[]; 
  public get applyPolicyDefaultValuesAllowList() {
    return this.getListAttribute('__apply_policy_default_values_allow_list');
  }
  public set applyPolicyDefaultValuesAllowList(value: string[]) {
    this._applyPolicyDefaultValuesAllowList = value;
  }
  public resetApplyPolicyDefaultValuesAllowList() {
    this._applyPolicyDefaultValuesAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyDefaultValuesAllowListInput() {
    return this._applyPolicyDefaultValuesAllowList;
  }

  // apply_policy_default_values - computed: false, optional: true, required: false
  private _applyPolicyDefaultValues?: boolean | cdktn.IResolvable; 
  public get applyPolicyDefaultValues() {
    return this.getBooleanAttribute('apply_policy_default_values');
  }
  public set applyPolicyDefaultValues(value: boolean | cdktn.IResolvable) {
    this._applyPolicyDefaultValues = value;
  }
  public resetApplyPolicyDefaultValues() {
    this._applyPolicyDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyDefaultValuesInput() {
    return this._applyPolicyDefaultValues;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // data_security_mode - computed: false, optional: true, required: false
  private _dataSecurityMode?: string; 
  public get dataSecurityMode() {
    return this.getStringAttribute('data_security_mode');
  }
  public set dataSecurityMode(value: string) {
    this._dataSecurityMode = value;
  }
  public resetDataSecurityMode() {
    this._dataSecurityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecurityModeInput() {
    return this._dataSecurityMode;
  }

  // driver_instance_pool_id - computed: true, optional: true, required: false
  private _driverInstancePoolId?: string; 
  public get driverInstancePoolId() {
    return this.getStringAttribute('driver_instance_pool_id');
  }
  public set driverInstancePoolId(value: string) {
    this._driverInstancePoolId = value;
  }
  public resetDriverInstancePoolId() {
    this._driverInstancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInstancePoolIdInput() {
    return this._driverInstancePoolId;
  }

  // driver_node_type_id - computed: true, optional: true, required: false
  private _driverNodeTypeId?: string; 
  public get driverNodeTypeId() {
    return this.getStringAttribute('driver_node_type_id');
  }
  public set driverNodeTypeId(value: string) {
    this._driverNodeTypeId = value;
  }
  public resetDriverNodeTypeId() {
    this._driverNodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeIdInput() {
    return this._driverNodeTypeId;
  }

  // enable_elastic_disk - computed: true, optional: true, required: false
  private _enableElasticDisk?: boolean | cdktn.IResolvable; 
  public get enableElasticDisk() {
    return this.getBooleanAttribute('enable_elastic_disk');
  }
  public set enableElasticDisk(value: boolean | cdktn.IResolvable) {
    this._enableElasticDisk = value;
  }
  public resetEnableElasticDisk() {
    this._enableElasticDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableElasticDiskInput() {
    return this._enableElasticDisk;
  }

  // enable_local_disk_encryption - computed: true, optional: true, required: false
  private _enableLocalDiskEncryption?: boolean | cdktn.IResolvable; 
  public get enableLocalDiskEncryption() {
    return this.getBooleanAttribute('enable_local_disk_encryption');
  }
  public set enableLocalDiskEncryption(value: boolean | cdktn.IResolvable) {
    this._enableLocalDiskEncryption = value;
  }
  public resetEnableLocalDiskEncryption() {
    this._enableLocalDiskEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLocalDiskEncryptionInput() {
    return this._enableLocalDiskEncryption;
  }

  // idempotency_token - computed: false, optional: true, required: false
  private _idempotencyToken?: string; 
  public get idempotencyToken() {
    return this.getStringAttribute('idempotency_token');
  }
  public set idempotencyToken(value: string) {
    this._idempotencyToken = value;
  }
  public resetIdempotencyToken() {
    this._idempotencyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idempotencyTokenInput() {
    return this._idempotencyToken;
  }

  // instance_pool_id - computed: false, optional: true, required: false
  private _instancePoolId?: string; 
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }
  public resetInstancePoolId() {
    this._instancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolIdInput() {
    return this._instancePoolId;
  }

  // is_single_node - computed: false, optional: true, required: false
  private _isSingleNode?: boolean | cdktn.IResolvable; 
  public get isSingleNode() {
    return this.getBooleanAttribute('is_single_node');
  }
  public set isSingleNode(value: boolean | cdktn.IResolvable) {
    this._isSingleNode = value;
  }
  public resetIsSingleNode() {
    this._isSingleNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSingleNodeInput() {
    return this._isSingleNode;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // node_type_id - computed: true, optional: true, required: false
  private _nodeTypeId?: string; 
  public get nodeTypeId() {
    return this.getStringAttribute('node_type_id');
  }
  public set nodeTypeId(value: string) {
    this._nodeTypeId = value;
  }
  public resetNodeTypeId() {
    this._nodeTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIdInput() {
    return this._nodeTypeId;
  }

  // num_workers - computed: false, optional: true, required: false
  private _numWorkers?: number; 
  public get numWorkers() {
    return this.getNumberAttribute('num_workers');
  }
  public set numWorkers(value: number) {
    this._numWorkers = value;
  }
  public resetNumWorkers() {
    this._numWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkersInput() {
    return this._numWorkers;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // remote_disk_throughput - computed: false, optional: true, required: false
  private _remoteDiskThroughput?: number; 
  public get remoteDiskThroughput() {
    return this.getNumberAttribute('remote_disk_throughput');
  }
  public set remoteDiskThroughput(value: number) {
    this._remoteDiskThroughput = value;
  }
  public resetRemoteDiskThroughput() {
    this._remoteDiskThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDiskThroughputInput() {
    return this._remoteDiskThroughput;
  }

  // runtime_engine - computed: false, optional: true, required: false
  private _runtimeEngine?: string; 
  public get runtimeEngine() {
    return this.getStringAttribute('runtime_engine');
  }
  public set runtimeEngine(value: string) {
    this._runtimeEngine = value;
  }
  public resetRuntimeEngine() {
    this._runtimeEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEngineInput() {
    return this._runtimeEngine;
  }

  // single_user_name - computed: false, optional: true, required: false
  private _singleUserName?: string; 
  public get singleUserName() {
    return this.getStringAttribute('single_user_name');
  }
  public set singleUserName(value: string) {
    this._singleUserName = value;
  }
  public resetSingleUserName() {
    this._singleUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleUserNameInput() {
    return this._singleUserName;
  }

  // spark_conf - computed: false, optional: true, required: false
  private _sparkConf?: { [key: string]: string }; 
  public get sparkConf() {
    return this.getStringMapAttribute('spark_conf');
  }
  public set sparkConf(value: { [key: string]: string }) {
    this._sparkConf = value;
  }
  public resetSparkConf() {
    this._sparkConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfInput() {
    return this._sparkConf;
  }

  // spark_env_vars - computed: false, optional: true, required: false
  private _sparkEnvVars?: { [key: string]: string }; 
  public get sparkEnvVars() {
    return this.getStringMapAttribute('spark_env_vars');
  }
  public set sparkEnvVars(value: { [key: string]: string }) {
    this._sparkEnvVars = value;
  }
  public resetSparkEnvVars() {
    this._sparkEnvVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEnvVarsInput() {
    return this._sparkEnvVars;
  }

  // spark_version - computed: false, optional: true, required: false
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  public resetSparkVersion() {
    this._sparkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
  }

  // ssh_public_keys - computed: false, optional: true, required: false
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // total_initial_remote_disk_size - computed: false, optional: true, required: false
  private _totalInitialRemoteDiskSize?: number; 
  public get totalInitialRemoteDiskSize() {
    return this.getNumberAttribute('total_initial_remote_disk_size');
  }
  public set totalInitialRemoteDiskSize(value: number) {
    this._totalInitialRemoteDiskSize = value;
  }
  public resetTotalInitialRemoteDiskSize() {
    this._totalInitialRemoteDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInitialRemoteDiskSizeInput() {
    return this._totalInitialRemoteDiskSize;
  }

  // use_ml_runtime - computed: false, optional: true, required: false
  private _useMlRuntime?: boolean | cdktn.IResolvable; 
  public get useMlRuntime() {
    return this.getBooleanAttribute('use_ml_runtime');
  }
  public set useMlRuntime(value: boolean | cdktn.IResolvable) {
    this._useMlRuntime = value;
  }
  public resetUseMlRuntime() {
    this._useMlRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMlRuntimeInput() {
    return this._useMlRuntime;
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new JobTaskNewClusterAutoscaleOutputReference(this, "autoscale");
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: JobTaskNewClusterAutoscale) {
    this._autoscale.internalValue = value;
  }
  public resetAutoscale() {
    this._autoscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale.internalValue;
  }

  // aws_attributes - computed: false, optional: true, required: false
  private _awsAttributes = new JobTaskNewClusterAwsAttributesOutputReference(this, "aws_attributes");
  public get awsAttributes() {
    return this._awsAttributes;
  }
  public putAwsAttributes(value: JobTaskNewClusterAwsAttributes) {
    this._awsAttributes.internalValue = value;
  }
  public resetAwsAttributes() {
    this._awsAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAttributesInput() {
    return this._awsAttributes.internalValue;
  }

  // azure_attributes - computed: false, optional: true, required: false
  private _azureAttributes = new JobTaskNewClusterAzureAttributesOutputReference(this, "azure_attributes");
  public get azureAttributes() {
    return this._azureAttributes;
  }
  public putAzureAttributes(value: JobTaskNewClusterAzureAttributes) {
    this._azureAttributes.internalValue = value;
  }
  public resetAzureAttributes() {
    this._azureAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAttributesInput() {
    return this._azureAttributes.internalValue;
  }

  // cluster_log_conf - computed: false, optional: true, required: false
  private _clusterLogConf = new JobTaskNewClusterClusterLogConfOutputReference(this, "cluster_log_conf");
  public get clusterLogConf() {
    return this._clusterLogConf;
  }
  public putClusterLogConf(value: JobTaskNewClusterClusterLogConf) {
    this._clusterLogConf.internalValue = value;
  }
  public resetClusterLogConf() {
    this._clusterLogConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLogConfInput() {
    return this._clusterLogConf.internalValue;
  }

  // cluster_mount_info - computed: false, optional: true, required: false
  private _clusterMountInfo = new JobTaskNewClusterClusterMountInfoList(this, "cluster_mount_info", false);
  public get clusterMountInfo() {
    return this._clusterMountInfo;
  }
  public putClusterMountInfo(value: JobTaskNewClusterClusterMountInfo[] | cdktn.IResolvable) {
    this._clusterMountInfo.internalValue = value;
  }
  public resetClusterMountInfo() {
    this._clusterMountInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMountInfoInput() {
    return this._clusterMountInfo.internalValue;
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage = new JobTaskNewClusterDockerImageOutputReference(this, "docker_image");
  public get dockerImage() {
    return this._dockerImage;
  }
  public putDockerImage(value: JobTaskNewClusterDockerImage) {
    this._dockerImage.internalValue = value;
  }
  public resetDockerImage() {
    this._dockerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage.internalValue;
  }

  // driver_node_type_flexibility - computed: false, optional: true, required: false
  private _driverNodeTypeFlexibility = new JobTaskNewClusterDriverNodeTypeFlexibilityOutputReference(this, "driver_node_type_flexibility");
  public get driverNodeTypeFlexibility() {
    return this._driverNodeTypeFlexibility;
  }
  public putDriverNodeTypeFlexibility(value: JobTaskNewClusterDriverNodeTypeFlexibility) {
    this._driverNodeTypeFlexibility.internalValue = value;
  }
  public resetDriverNodeTypeFlexibility() {
    this._driverNodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeFlexibilityInput() {
    return this._driverNodeTypeFlexibility.internalValue;
  }

  // gcp_attributes - computed: false, optional: true, required: false
  private _gcpAttributes = new JobTaskNewClusterGcpAttributesOutputReference(this, "gcp_attributes");
  public get gcpAttributes() {
    return this._gcpAttributes;
  }
  public putGcpAttributes(value: JobTaskNewClusterGcpAttributes) {
    this._gcpAttributes.internalValue = value;
  }
  public resetGcpAttributes() {
    this._gcpAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAttributesInput() {
    return this._gcpAttributes.internalValue;
  }

  // init_scripts - computed: false, optional: true, required: false
  private _initScripts = new JobTaskNewClusterInitScriptsList(this, "init_scripts", false);
  public get initScripts() {
    return this._initScripts;
  }
  public putInitScripts(value: JobTaskNewClusterInitScripts[] | cdktn.IResolvable) {
    this._initScripts.internalValue = value;
  }
  public resetInitScripts() {
    this._initScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new JobTaskNewClusterLibraryList(this, "library", true);
  public get library() {
    return this._library;
  }
  public putLibrary(value: JobTaskNewClusterLibrary[] | cdktn.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new JobTaskNewClusterProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: JobTaskNewClusterProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // worker_node_type_flexibility - computed: false, optional: true, required: false
  private _workerNodeTypeFlexibility = new JobTaskNewClusterWorkerNodeTypeFlexibilityOutputReference(this, "worker_node_type_flexibility");
  public get workerNodeTypeFlexibility() {
    return this._workerNodeTypeFlexibility;
  }
  public putWorkerNodeTypeFlexibility(value: JobTaskNewClusterWorkerNodeTypeFlexibility) {
    this._workerNodeTypeFlexibility.internalValue = value;
  }
  public resetWorkerNodeTypeFlexibility() {
    this._workerNodeTypeFlexibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeTypeFlexibilityInput() {
    return this._workerNodeTypeFlexibility.internalValue;
  }

  // workload_type - computed: false, optional: true, required: false
  private _workloadType = new JobTaskNewClusterWorkloadTypeOutputReference(this, "workload_type");
  public get workloadType() {
    return this._workloadType;
  }
  public putWorkloadType(value: JobTaskNewClusterWorkloadType) {
    this._workloadType.internalValue = value;
  }
  public resetWorkloadType() {
    this._workloadType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType.internalValue;
  }
}
export interface JobTaskNotebookTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#base_parameters Job#base_parameters}
  */
  readonly baseParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#notebook_path Job#notebook_path}
  */
  readonly notebookPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId?: string;
}

export function jobTaskNotebookTaskToTerraform(struct?: JobTaskNotebookTaskOutputReference | JobTaskNotebookTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.baseParameters),
    notebook_path: cdktn.stringToTerraform(struct!.notebookPath),
    source: cdktn.stringToTerraform(struct!.source),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
  }
}


export function jobTaskNotebookTaskToHclTerraform(struct?: JobTaskNotebookTaskOutputReference | JobTaskNotebookTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.baseParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    notebook_path: {
      value: cdktn.stringToHclTerraform(struct!.notebookPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNotebookTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNotebookTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseParameters = this._baseParameters;
    }
    if (this._notebookPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookPath = this._notebookPath;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNotebookTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseParameters = undefined;
      this._notebookPath = undefined;
      this._source = undefined;
      this._warehouseId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseParameters = value.baseParameters;
      this._notebookPath = value.notebookPath;
      this._source = value.source;
      this._warehouseId = value.warehouseId;
    }
  }

  // base_parameters - computed: false, optional: true, required: false
  private _baseParameters?: { [key: string]: string }; 
  public get baseParameters() {
    return this.getStringMapAttribute('base_parameters');
  }
  public set baseParameters(value: { [key: string]: string }) {
    this._baseParameters = value;
  }
  public resetBaseParameters() {
    this._baseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseParametersInput() {
    return this._baseParameters;
  }

  // notebook_path - computed: false, optional: false, required: true
  private _notebookPath?: string; 
  public get notebookPath() {
    return this.getStringAttribute('notebook_path');
  }
  public set notebookPath(value: string) {
    this._notebookPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookPathInput() {
    return this._notebookPath;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // warehouse_id - computed: false, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }
}
export interface JobTaskNotificationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#alert_on_last_attempt Job#alert_on_last_attempt}
  */
  readonly alertOnLastAttempt?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#no_alert_for_canceled_runs Job#no_alert_for_canceled_runs}
  */
  readonly noAlertForCanceledRuns?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#no_alert_for_skipped_runs Job#no_alert_for_skipped_runs}
  */
  readonly noAlertForSkippedRuns?: boolean | cdktn.IResolvable;
}

export function jobTaskNotificationSettingsToTerraform(struct?: JobTaskNotificationSettingsOutputReference | JobTaskNotificationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_on_last_attempt: cdktn.booleanToTerraform(struct!.alertOnLastAttempt),
    no_alert_for_canceled_runs: cdktn.booleanToTerraform(struct!.noAlertForCanceledRuns),
    no_alert_for_skipped_runs: cdktn.booleanToTerraform(struct!.noAlertForSkippedRuns),
  }
}


export function jobTaskNotificationSettingsToHclTerraform(struct?: JobTaskNotificationSettingsOutputReference | JobTaskNotificationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_on_last_attempt: {
      value: cdktn.booleanToHclTerraform(struct!.alertOnLastAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_alert_for_canceled_runs: {
      value: cdktn.booleanToHclTerraform(struct!.noAlertForCanceledRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_alert_for_skipped_runs: {
      value: cdktn.booleanToHclTerraform(struct!.noAlertForSkippedRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskNotificationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertOnLastAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertOnLastAttempt = this._alertOnLastAttempt;
    }
    if (this._noAlertForCanceledRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlertForCanceledRuns = this._noAlertForCanceledRuns;
    }
    if (this._noAlertForSkippedRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlertForSkippedRuns = this._noAlertForSkippedRuns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertOnLastAttempt = undefined;
      this._noAlertForCanceledRuns = undefined;
      this._noAlertForSkippedRuns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertOnLastAttempt = value.alertOnLastAttempt;
      this._noAlertForCanceledRuns = value.noAlertForCanceledRuns;
      this._noAlertForSkippedRuns = value.noAlertForSkippedRuns;
    }
  }

  // alert_on_last_attempt - computed: false, optional: true, required: false
  private _alertOnLastAttempt?: boolean | cdktn.IResolvable; 
  public get alertOnLastAttempt() {
    return this.getBooleanAttribute('alert_on_last_attempt');
  }
  public set alertOnLastAttempt(value: boolean | cdktn.IResolvable) {
    this._alertOnLastAttempt = value;
  }
  public resetAlertOnLastAttempt() {
    this._alertOnLastAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnLastAttemptInput() {
    return this._alertOnLastAttempt;
  }

  // no_alert_for_canceled_runs - computed: false, optional: true, required: false
  private _noAlertForCanceledRuns?: boolean | cdktn.IResolvable; 
  public get noAlertForCanceledRuns() {
    return this.getBooleanAttribute('no_alert_for_canceled_runs');
  }
  public set noAlertForCanceledRuns(value: boolean | cdktn.IResolvable) {
    this._noAlertForCanceledRuns = value;
  }
  public resetNoAlertForCanceledRuns() {
    this._noAlertForCanceledRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAlertForCanceledRunsInput() {
    return this._noAlertForCanceledRuns;
  }

  // no_alert_for_skipped_runs - computed: false, optional: true, required: false
  private _noAlertForSkippedRuns?: boolean | cdktn.IResolvable; 
  public get noAlertForSkippedRuns() {
    return this.getBooleanAttribute('no_alert_for_skipped_runs');
  }
  public set noAlertForSkippedRuns(value: boolean | cdktn.IResolvable) {
    this._noAlertForSkippedRuns = value;
  }
  public resetNoAlertForSkippedRuns() {
    this._noAlertForSkippedRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAlertForSkippedRunsInput() {
    return this._noAlertForSkippedRuns;
  }
}
export interface JobTaskPipelineTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#full_refresh Job#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pipeline_id Job#pipeline_id}
  */
  readonly pipelineId: string;
}

export function jobTaskPipelineTaskToTerraform(struct?: JobTaskPipelineTaskOutputReference | JobTaskPipelineTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_refresh: cdktn.booleanToTerraform(struct!.fullRefresh),
    pipeline_id: cdktn.stringToTerraform(struct!.pipelineId),
  }
}


export function jobTaskPipelineTaskToHclTerraform(struct?: JobTaskPipelineTaskOutputReference | JobTaskPipelineTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_refresh: {
      value: cdktn.booleanToHclTerraform(struct!.fullRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pipeline_id: {
      value: cdktn.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskPipelineTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskPipelineTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefresh = this._fullRefresh;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPipelineTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullRefresh = undefined;
      this._pipelineId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullRefresh = value.fullRefresh;
      this._pipelineId = value.pipelineId;
    }
  }

  // full_refresh - computed: false, optional: true, required: false
  private _fullRefresh?: boolean | cdktn.IResolvable; 
  public get fullRefresh() {
    return this.getBooleanAttribute('full_refresh');
  }
  public set fullRefresh(value: boolean | cdktn.IResolvable) {
    this._fullRefresh = value;
  }
  public resetFullRefresh() {
    this._fullRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRefreshInput() {
    return this._fullRefresh;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }
}
export interface JobTaskPowerBiTaskPowerBiModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#authentication_method Job#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#model_name Job#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#overwrite_existing Job#overwrite_existing}
  */
  readonly overwriteExisting?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#storage_mode Job#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#workspace_name Job#workspace_name}
  */
  readonly workspaceName?: string;
}

export function jobTaskPowerBiTaskPowerBiModelToTerraform(struct?: JobTaskPowerBiTaskPowerBiModelOutputReference | JobTaskPowerBiTaskPowerBiModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktn.stringToTerraform(struct!.authenticationMethod),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    overwrite_existing: cdktn.booleanToTerraform(struct!.overwriteExisting),
    storage_mode: cdktn.stringToTerraform(struct!.storageMode),
    workspace_name: cdktn.stringToTerraform(struct!.workspaceName),
  }
}


export function jobTaskPowerBiTaskPowerBiModelToHclTerraform(struct?: JobTaskPowerBiTaskPowerBiModelOutputReference | JobTaskPowerBiTaskPowerBiModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_method: {
      value: cdktn.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing: {
      value: cdktn.booleanToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_mode: {
      value: cdktn.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_name: {
      value: cdktn.stringToHclTerraform(struct!.workspaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskPowerBiTaskPowerBiModelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskPowerBiTaskPowerBiModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._workspaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceName = this._workspaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPowerBiTaskPowerBiModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationMethod = undefined;
      this._modelName = undefined;
      this._overwriteExisting = undefined;
      this._storageMode = undefined;
      this._workspaceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationMethod = value.authenticationMethod;
      this._modelName = value.modelName;
      this._overwriteExisting = value.overwriteExisting;
      this._storageMode = value.storageMode;
      this._workspaceName = value.workspaceName;
    }
  }

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: boolean | cdktn.IResolvable; 
  public get overwriteExisting() {
    return this.getBooleanAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: boolean | cdktn.IResolvable) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // workspace_name - computed: false, optional: true, required: false
  private _workspaceName?: string; 
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }
  public resetWorkspaceName() {
    this._workspaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName;
  }
}
export interface JobTaskPowerBiTaskTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#catalog Job#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#name Job#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#schema Job#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#storage_mode Job#storage_mode}
  */
  readonly storageMode?: string;
}

export function jobTaskPowerBiTaskTablesToTerraform(struct?: JobTaskPowerBiTaskTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    name: cdktn.stringToTerraform(struct!.name),
    schema: cdktn.stringToTerraform(struct!.schema),
    storage_mode: cdktn.stringToTerraform(struct!.storageMode),
  }
}


export function jobTaskPowerBiTaskTablesToHclTerraform(struct?: JobTaskPowerBiTaskTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
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
    schema: {
      value: cdktn.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_mode: {
      value: cdktn.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskPowerBiTaskTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskPowerBiTaskTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPowerBiTaskTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._name = undefined;
      this._schema = undefined;
      this._storageMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._name = value.name;
      this._schema = value.schema;
      this._storageMode = value.storageMode;
    }
  }

  // catalog - computed: false, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
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

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }
}

export class JobTaskPowerBiTaskTablesList extends cdktn.ComplexList {
  public internalValue? : JobTaskPowerBiTaskTables[] | cdktn.IResolvable

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
  public get(index: number): JobTaskPowerBiTaskTablesOutputReference {
    return new JobTaskPowerBiTaskTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskPowerBiTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#connection_resource_name Job#connection_resource_name}
  */
  readonly connectionResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#refresh_after_update Job#refresh_after_update}
  */
  readonly refreshAfterUpdate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId?: string;
  /**
  * power_bi_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#power_bi_model Job#power_bi_model}
  */
  readonly powerBiModel?: JobTaskPowerBiTaskPowerBiModel;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#tables Job#tables}
  */
  readonly tables?: JobTaskPowerBiTaskTables[] | cdktn.IResolvable;
}

export function jobTaskPowerBiTaskToTerraform(struct?: JobTaskPowerBiTaskOutputReference | JobTaskPowerBiTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_resource_name: cdktn.stringToTerraform(struct!.connectionResourceName),
    refresh_after_update: cdktn.booleanToTerraform(struct!.refreshAfterUpdate),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
    power_bi_model: jobTaskPowerBiTaskPowerBiModelToTerraform(struct!.powerBiModel),
    tables: cdktn.listMapper(jobTaskPowerBiTaskTablesToTerraform, true)(struct!.tables),
  }
}


export function jobTaskPowerBiTaskToHclTerraform(struct?: JobTaskPowerBiTaskOutputReference | JobTaskPowerBiTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_resource_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_after_update: {
      value: cdktn.booleanToHclTerraform(struct!.refreshAfterUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    power_bi_model: {
      value: jobTaskPowerBiTaskPowerBiModelToHclTerraform(struct!.powerBiModel),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskPowerBiTaskPowerBiModelList",
    },
    tables: {
      value: cdktn.listMapperHcl(jobTaskPowerBiTaskTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskPowerBiTaskTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskPowerBiTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskPowerBiTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionResourceName = this._connectionResourceName;
    }
    if (this._refreshAfterUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshAfterUpdate = this._refreshAfterUpdate;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    if (this._powerBiModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerBiModel = this._powerBiModel?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPowerBiTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionResourceName = undefined;
      this._refreshAfterUpdate = undefined;
      this._warehouseId = undefined;
      this._powerBiModel.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionResourceName = value.connectionResourceName;
      this._refreshAfterUpdate = value.refreshAfterUpdate;
      this._warehouseId = value.warehouseId;
      this._powerBiModel.internalValue = value.powerBiModel;
      this._tables.internalValue = value.tables;
    }
  }

  // connection_resource_name - computed: false, optional: true, required: false
  private _connectionResourceName?: string; 
  public get connectionResourceName() {
    return this.getStringAttribute('connection_resource_name');
  }
  public set connectionResourceName(value: string) {
    this._connectionResourceName = value;
  }
  public resetConnectionResourceName() {
    this._connectionResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionResourceNameInput() {
    return this._connectionResourceName;
  }

  // refresh_after_update - computed: false, optional: true, required: false
  private _refreshAfterUpdate?: boolean | cdktn.IResolvable; 
  public get refreshAfterUpdate() {
    return this.getBooleanAttribute('refresh_after_update');
  }
  public set refreshAfterUpdate(value: boolean | cdktn.IResolvable) {
    this._refreshAfterUpdate = value;
  }
  public resetRefreshAfterUpdate() {
    this._refreshAfterUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshAfterUpdateInput() {
    return this._refreshAfterUpdate;
  }

  // warehouse_id - computed: false, optional: true, required: false
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  public resetWarehouseId() {
    this._warehouseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // power_bi_model - computed: false, optional: true, required: false
  private _powerBiModel = new JobTaskPowerBiTaskPowerBiModelOutputReference(this, "power_bi_model");
  public get powerBiModel() {
    return this._powerBiModel;
  }
  public putPowerBiModel(value: JobTaskPowerBiTaskPowerBiModel) {
    this._powerBiModel.internalValue = value;
  }
  public resetPowerBiModel() {
    this._powerBiModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerBiModelInput() {
    return this._powerBiModel.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new JobTaskPowerBiTaskTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: JobTaskPowerBiTaskTables[] | cdktn.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface JobTaskPythonWheelTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#entry_point Job#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#named_parameters Job#named_parameters}
  */
  readonly namedParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#package_name Job#package_name}
  */
  readonly packageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobTaskPythonWheelTaskToTerraform(struct?: JobTaskPythonWheelTaskOutputReference | JobTaskPythonWheelTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_point: cdktn.stringToTerraform(struct!.entryPoint),
    named_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.namedParameters),
    package_name: cdktn.stringToTerraform(struct!.packageName),
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
  }
}


export function jobTaskPythonWheelTaskToHclTerraform(struct?: JobTaskPythonWheelTaskOutputReference | JobTaskPythonWheelTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_point: {
      value: cdktn.stringToHclTerraform(struct!.entryPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.namedParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    package_name: {
      value: cdktn.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskPythonWheelTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskPythonWheelTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._namedParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedParameters = this._namedParameters;
    }
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskPythonWheelTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryPoint = undefined;
      this._namedParameters = undefined;
      this._packageName = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryPoint = value.entryPoint;
      this._namedParameters = value.namedParameters;
      this._packageName = value.packageName;
      this._parameters = value.parameters;
    }
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // named_parameters - computed: false, optional: true, required: false
  private _namedParameters?: { [key: string]: string }; 
  public get namedParameters() {
    return this.getStringMapAttribute('named_parameters');
  }
  public set namedParameters(value: { [key: string]: string }) {
    this._namedParameters = value;
  }
  public resetNamedParameters() {
    this._namedParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedParametersInput() {
    return this._namedParameters;
  }

  // package_name - computed: false, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface JobTaskRunJobTaskPipelineParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#full_refresh Job#full_refresh}
  */
  readonly fullRefresh?: boolean | cdktn.IResolvable;
}

export function jobTaskRunJobTaskPipelineParamsToTerraform(struct?: JobTaskRunJobTaskPipelineParamsOutputReference | JobTaskRunJobTaskPipelineParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_refresh: cdktn.booleanToTerraform(struct!.fullRefresh),
  }
}


export function jobTaskRunJobTaskPipelineParamsToHclTerraform(struct?: JobTaskRunJobTaskPipelineParamsOutputReference | JobTaskRunJobTaskPipelineParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_refresh: {
      value: cdktn.booleanToHclTerraform(struct!.fullRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskRunJobTaskPipelineParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskRunJobTaskPipelineParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullRefresh = this._fullRefresh;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskRunJobTaskPipelineParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullRefresh = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullRefresh = value.fullRefresh;
    }
  }

  // full_refresh - computed: false, optional: true, required: false
  private _fullRefresh?: boolean | cdktn.IResolvable; 
  public get fullRefresh() {
    return this.getBooleanAttribute('full_refresh');
  }
  public set fullRefresh(value: boolean | cdktn.IResolvable) {
    this._fullRefresh = value;
  }
  public resetFullRefresh() {
    this._fullRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRefreshInput() {
    return this._fullRefresh;
  }
}
export interface JobTaskRunJobTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dbt_commands Job#dbt_commands}
  */
  readonly dbtCommands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#jar_params Job#jar_params}
  */
  readonly jarParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#job_id Job#job_id}
  */
  readonly jobId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#job_parameters Job#job_parameters}
  */
  readonly jobParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#notebook_params Job#notebook_params}
  */
  readonly notebookParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#python_named_params Job#python_named_params}
  */
  readonly pythonNamedParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#python_params Job#python_params}
  */
  readonly pythonParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#spark_submit_params Job#spark_submit_params}
  */
  readonly sparkSubmitParams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#sql_params Job#sql_params}
  */
  readonly sqlParams?: { [key: string]: string };
  /**
  * pipeline_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pipeline_params Job#pipeline_params}
  */
  readonly pipelineParams?: JobTaskRunJobTaskPipelineParams;
}

export function jobTaskRunJobTaskToTerraform(struct?: JobTaskRunJobTaskOutputReference | JobTaskRunJobTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbt_commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dbtCommands),
    jar_params: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.jarParams),
    job_id: cdktn.numberToTerraform(struct!.jobId),
    job_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.jobParameters),
    notebook_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.notebookParams),
    python_named_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.pythonNamedParams),
    python_params: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pythonParams),
    spark_submit_params: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sparkSubmitParams),
    sql_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sqlParams),
    pipeline_params: jobTaskRunJobTaskPipelineParamsToTerraform(struct!.pipelineParams),
  }
}


export function jobTaskRunJobTaskToHclTerraform(struct?: JobTaskRunJobTaskOutputReference | JobTaskRunJobTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbt_commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dbtCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jar_params: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.jarParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    job_id: {
      value: cdktn.numberToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.jobParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    notebook_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.notebookParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_named_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.pythonNamedParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_params: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pythonParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spark_submit_params: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sparkSubmitParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sql_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sqlParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pipeline_params: {
      value: jobTaskRunJobTaskPipelineParamsToHclTerraform(struct!.pipelineParams),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskRunJobTaskPipelineParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskRunJobTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskRunJobTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbtCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbtCommands = this._dbtCommands;
    }
    if (this._jarParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarParams = this._jarParams;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._jobParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobParameters = this._jobParameters;
    }
    if (this._notebookParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookParams = this._notebookParams;
    }
    if (this._pythonNamedParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonNamedParams = this._pythonNamedParams;
    }
    if (this._pythonParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonParams = this._pythonParams;
    }
    if (this._sparkSubmitParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkSubmitParams = this._sparkSubmitParams;
    }
    if (this._sqlParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlParams = this._sqlParams;
    }
    if (this._pipelineParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineParams = this._pipelineParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskRunJobTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbtCommands = undefined;
      this._jarParams = undefined;
      this._jobId = undefined;
      this._jobParameters = undefined;
      this._notebookParams = undefined;
      this._pythonNamedParams = undefined;
      this._pythonParams = undefined;
      this._sparkSubmitParams = undefined;
      this._sqlParams = undefined;
      this._pipelineParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbtCommands = value.dbtCommands;
      this._jarParams = value.jarParams;
      this._jobId = value.jobId;
      this._jobParameters = value.jobParameters;
      this._notebookParams = value.notebookParams;
      this._pythonNamedParams = value.pythonNamedParams;
      this._pythonParams = value.pythonParams;
      this._sparkSubmitParams = value.sparkSubmitParams;
      this._sqlParams = value.sqlParams;
      this._pipelineParams.internalValue = value.pipelineParams;
    }
  }

  // dbt_commands - computed: false, optional: true, required: false
  private _dbtCommands?: string[]; 
  public get dbtCommands() {
    return this.getListAttribute('dbt_commands');
  }
  public set dbtCommands(value: string[]) {
    this._dbtCommands = value;
  }
  public resetDbtCommands() {
    this._dbtCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtCommandsInput() {
    return this._dbtCommands;
  }

  // jar_params - computed: false, optional: true, required: false
  private _jarParams?: string[]; 
  public get jarParams() {
    return this.getListAttribute('jar_params');
  }
  public set jarParams(value: string[]) {
    this._jarParams = value;
  }
  public resetJarParams() {
    this._jarParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarParamsInput() {
    return this._jarParams;
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: number; 
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }
  public set jobId(value: number) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_parameters - computed: false, optional: true, required: false
  private _jobParameters?: { [key: string]: string }; 
  public get jobParameters() {
    return this.getStringMapAttribute('job_parameters');
  }
  public set jobParameters(value: { [key: string]: string }) {
    this._jobParameters = value;
  }
  public resetJobParameters() {
    this._jobParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobParametersInput() {
    return this._jobParameters;
  }

  // notebook_params - computed: false, optional: true, required: false
  private _notebookParams?: { [key: string]: string }; 
  public get notebookParams() {
    return this.getStringMapAttribute('notebook_params');
  }
  public set notebookParams(value: { [key: string]: string }) {
    this._notebookParams = value;
  }
  public resetNotebookParams() {
    this._notebookParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookParamsInput() {
    return this._notebookParams;
  }

  // python_named_params - computed: false, optional: true, required: false
  private _pythonNamedParams?: { [key: string]: string }; 
  public get pythonNamedParams() {
    return this.getStringMapAttribute('python_named_params');
  }
  public set pythonNamedParams(value: { [key: string]: string }) {
    this._pythonNamedParams = value;
  }
  public resetPythonNamedParams() {
    this._pythonNamedParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonNamedParamsInput() {
    return this._pythonNamedParams;
  }

  // python_params - computed: false, optional: true, required: false
  private _pythonParams?: string[]; 
  public get pythonParams() {
    return this.getListAttribute('python_params');
  }
  public set pythonParams(value: string[]) {
    this._pythonParams = value;
  }
  public resetPythonParams() {
    this._pythonParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonParamsInput() {
    return this._pythonParams;
  }

  // spark_submit_params - computed: false, optional: true, required: false
  private _sparkSubmitParams?: string[]; 
  public get sparkSubmitParams() {
    return this.getListAttribute('spark_submit_params');
  }
  public set sparkSubmitParams(value: string[]) {
    this._sparkSubmitParams = value;
  }
  public resetSparkSubmitParams() {
    this._sparkSubmitParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkSubmitParamsInput() {
    return this._sparkSubmitParams;
  }

  // sql_params - computed: false, optional: true, required: false
  private _sqlParams?: { [key: string]: string }; 
  public get sqlParams() {
    return this.getStringMapAttribute('sql_params');
  }
  public set sqlParams(value: { [key: string]: string }) {
    this._sqlParams = value;
  }
  public resetSqlParams() {
    this._sqlParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlParamsInput() {
    return this._sqlParams;
  }

  // pipeline_params - computed: false, optional: true, required: false
  private _pipelineParams = new JobTaskRunJobTaskPipelineParamsOutputReference(this, "pipeline_params");
  public get pipelineParams() {
    return this._pipelineParams;
  }
  public putPipelineParams(value: JobTaskRunJobTaskPipelineParams) {
    this._pipelineParams.internalValue = value;
  }
  public resetPipelineParams() {
    this._pipelineParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParamsInput() {
    return this._pipelineParams.internalValue;
  }
}
export interface JobTaskSparkJarTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#jar_uri Job#jar_uri}
  */
  readonly jarUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#main_class_name Job#main_class_name}
  */
  readonly mainClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#run_as_repl Job#run_as_repl}
  */
  readonly runAsRepl?: boolean | cdktn.IResolvable;
}

export function jobTaskSparkJarTaskToTerraform(struct?: JobTaskSparkJarTaskOutputReference | JobTaskSparkJarTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jar_uri: cdktn.stringToTerraform(struct!.jarUri),
    main_class_name: cdktn.stringToTerraform(struct!.mainClassName),
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
    run_as_repl: cdktn.booleanToTerraform(struct!.runAsRepl),
  }
}


export function jobTaskSparkJarTaskToHclTerraform(struct?: JobTaskSparkJarTaskOutputReference | JobTaskSparkJarTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jar_uri: {
      value: cdktn.stringToHclTerraform(struct!.jarUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_class_name: {
      value: cdktn.stringToHclTerraform(struct!.mainClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    run_as_repl: {
      value: cdktn.booleanToHclTerraform(struct!.runAsRepl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSparkJarTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSparkJarTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jarUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jarUri = this._jarUri;
    }
    if (this._mainClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClassName = this._mainClassName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._runAsRepl !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsRepl = this._runAsRepl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSparkJarTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jarUri = undefined;
      this._mainClassName = undefined;
      this._parameters = undefined;
      this._runAsRepl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jarUri = value.jarUri;
      this._mainClassName = value.mainClassName;
      this._parameters = value.parameters;
      this._runAsRepl = value.runAsRepl;
    }
  }

  // jar_uri - computed: false, optional: true, required: false
  private _jarUri?: string; 
  public get jarUri() {
    return this.getStringAttribute('jar_uri');
  }
  public set jarUri(value: string) {
    this._jarUri = value;
  }
  public resetJarUri() {
    this._jarUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarUriInput() {
    return this._jarUri;
  }

  // main_class_name - computed: false, optional: true, required: false
  private _mainClassName?: string; 
  public get mainClassName() {
    return this.getStringAttribute('main_class_name');
  }
  public set mainClassName(value: string) {
    this._mainClassName = value;
  }
  public resetMainClassName() {
    this._mainClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassNameInput() {
    return this._mainClassName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // run_as_repl - computed: true, optional: true, required: false
  private _runAsRepl?: boolean | cdktn.IResolvable; 
  public get runAsRepl() {
    return this.getBooleanAttribute('run_as_repl');
  }
  public set runAsRepl(value: boolean | cdktn.IResolvable) {
    this._runAsRepl = value;
  }
  public resetRunAsRepl() {
    this._runAsRepl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsReplInput() {
    return this._runAsRepl;
  }
}
export interface JobTaskSparkPythonTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#python_file Job#python_file}
  */
  readonly pythonFile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
}

export function jobTaskSparkPythonTaskToTerraform(struct?: JobTaskSparkPythonTaskOutputReference | JobTaskSparkPythonTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
    python_file: cdktn.stringToTerraform(struct!.pythonFile),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function jobTaskSparkPythonTaskToHclTerraform(struct?: JobTaskSparkPythonTaskOutputReference | JobTaskSparkPythonTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    python_file: {
      value: cdktn.stringToHclTerraform(struct!.pythonFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSparkPythonTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSparkPythonTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._pythonFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonFile = this._pythonFile;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSparkPythonTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._pythonFile = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._pythonFile = value.pythonFile;
      this._source = value.source;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // python_file - computed: false, optional: false, required: true
  private _pythonFile?: string; 
  public get pythonFile() {
    return this.getStringAttribute('python_file');
  }
  public set pythonFile(value: string) {
    this._pythonFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonFileInput() {
    return this._pythonFile;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface JobTaskSparkSubmitTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: string[];
}

export function jobTaskSparkSubmitTaskToTerraform(struct?: JobTaskSparkSubmitTaskOutputReference | JobTaskSparkSubmitTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.parameters),
  }
}


export function jobTaskSparkSubmitTaskToHclTerraform(struct?: JobTaskSparkSubmitTaskOutputReference | JobTaskSparkSubmitTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSparkSubmitTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSparkSubmitTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSparkSubmitTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface JobTaskSqlTaskAlertSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#user_name Job#user_name}
  */
  readonly userName?: string;
}

export function jobTaskSqlTaskAlertSubscriptionsToTerraform(struct?: JobTaskSqlTaskAlertSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktn.stringToTerraform(struct!.destinationId),
    user_name: cdktn.stringToTerraform(struct!.userName),
  }
}


export function jobTaskSqlTaskAlertSubscriptionsToHclTerraform(struct?: JobTaskSqlTaskAlertSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_id: {
      value: cdktn.stringToHclTerraform(struct!.destinationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktn.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskAlertSubscriptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskSqlTaskAlertSubscriptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationId = this._destinationId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskAlertSubscriptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationId = undefined;
      this._userName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationId = value.destinationId;
      this._userName = value.userName;
    }
  }

  // destination_id - computed: false, optional: true, required: false
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class JobTaskSqlTaskAlertSubscriptionsList extends cdktn.ComplexList {
  public internalValue? : JobTaskSqlTaskAlertSubscriptions[] | cdktn.IResolvable

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
  public get(index: number): JobTaskSqlTaskAlertSubscriptionsOutputReference {
    return new JobTaskSqlTaskAlertSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskSqlTaskAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#alert_id Job#alert_id}
  */
  readonly alertId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktn.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#subscriptions Job#subscriptions}
  */
  readonly subscriptions?: JobTaskSqlTaskAlertSubscriptions[] | cdktn.IResolvable;
}

export function jobTaskSqlTaskAlertToTerraform(struct?: JobTaskSqlTaskAlertOutputReference | JobTaskSqlTaskAlert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_id: cdktn.stringToTerraform(struct!.alertId),
    pause_subscriptions: cdktn.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktn.listMapper(jobTaskSqlTaskAlertSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function jobTaskSqlTaskAlertToHclTerraform(struct?: JobTaskSqlTaskAlertOutputReference | JobTaskSqlTaskAlert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_id: {
      value: cdktn.stringToHclTerraform(struct!.alertId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_subscriptions: {
      value: cdktn.booleanToHclTerraform(struct!.pauseSubscriptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subscriptions: {
      value: cdktn.listMapperHcl(jobTaskSqlTaskAlertSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskAlertSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskAlertOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertId = this._alertId;
    }
    if (this._pauseSubscriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseSubscriptions = this._pauseSubscriptions;
    }
    if (this._subscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptions = this._subscriptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertId = undefined;
      this._pauseSubscriptions = undefined;
      this._subscriptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertId = value.alertId;
      this._pauseSubscriptions = value.pauseSubscriptions;
      this._subscriptions.internalValue = value.subscriptions;
    }
  }

  // alert_id - computed: false, optional: false, required: true
  private _alertId?: string; 
  public get alertId() {
    return this.getStringAttribute('alert_id');
  }
  public set alertId(value: string) {
    this._alertId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIdInput() {
    return this._alertId;
  }

  // pause_subscriptions - computed: false, optional: true, required: false
  private _pauseSubscriptions?: boolean | cdktn.IResolvable; 
  public get pauseSubscriptions() {
    return this.getBooleanAttribute('pause_subscriptions');
  }
  public set pauseSubscriptions(value: boolean | cdktn.IResolvable) {
    this._pauseSubscriptions = value;
  }
  public resetPauseSubscriptions() {
    this._pauseSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseSubscriptionsInput() {
    return this._pauseSubscriptions;
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new JobTaskSqlTaskAlertSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: JobTaskSqlTaskAlertSubscriptions[] | cdktn.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }
}
export interface JobTaskSqlTaskDashboardSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#destination_id Job#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#user_name Job#user_name}
  */
  readonly userName?: string;
}

export function jobTaskSqlTaskDashboardSubscriptionsToTerraform(struct?: JobTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_id: cdktn.stringToTerraform(struct!.destinationId),
    user_name: cdktn.stringToTerraform(struct!.userName),
  }
}


export function jobTaskSqlTaskDashboardSubscriptionsToHclTerraform(struct?: JobTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_id: {
      value: cdktn.stringToHclTerraform(struct!.destinationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktn.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskDashboardSubscriptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationId = this._destinationId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskDashboardSubscriptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationId = undefined;
      this._userName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationId = value.destinationId;
      this._userName = value.userName;
    }
  }

  // destination_id - computed: false, optional: true, required: false
  private _destinationId?: string; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class JobTaskSqlTaskDashboardSubscriptionsList extends cdktn.ComplexList {
  public internalValue? : JobTaskSqlTaskDashboardSubscriptions[] | cdktn.IResolvable

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
  public get(index: number): JobTaskSqlTaskDashboardSubscriptionsOutputReference {
    return new JobTaskSqlTaskDashboardSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskSqlTaskDashboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#custom_subject Job#custom_subject}
  */
  readonly customSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dashboard_id Job#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#pause_subscriptions Job#pause_subscriptions}
  */
  readonly pauseSubscriptions?: boolean | cdktn.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#subscriptions Job#subscriptions}
  */
  readonly subscriptions?: JobTaskSqlTaskDashboardSubscriptions[] | cdktn.IResolvable;
}

export function jobTaskSqlTaskDashboardToTerraform(struct?: JobTaskSqlTaskDashboardOutputReference | JobTaskSqlTaskDashboard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_subject: cdktn.stringToTerraform(struct!.customSubject),
    dashboard_id: cdktn.stringToTerraform(struct!.dashboardId),
    pause_subscriptions: cdktn.booleanToTerraform(struct!.pauseSubscriptions),
    subscriptions: cdktn.listMapper(jobTaskSqlTaskDashboardSubscriptionsToTerraform, true)(struct!.subscriptions),
  }
}


export function jobTaskSqlTaskDashboardToHclTerraform(struct?: JobTaskSqlTaskDashboardOutputReference | JobTaskSqlTaskDashboard): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_subject: {
      value: cdktn.stringToHclTerraform(struct!.customSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_id: {
      value: cdktn.stringToHclTerraform(struct!.dashboardId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_subscriptions: {
      value: cdktn.booleanToHclTerraform(struct!.pauseSubscriptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subscriptions: {
      value: cdktn.listMapperHcl(jobTaskSqlTaskDashboardSubscriptionsToHclTerraform, true)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskDashboardSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskDashboardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskDashboard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSubject = this._customSubject;
    }
    if (this._dashboardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardId = this._dashboardId;
    }
    if (this._pauseSubscriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseSubscriptions = this._pauseSubscriptions;
    }
    if (this._subscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptions = this._subscriptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskDashboard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSubject = undefined;
      this._dashboardId = undefined;
      this._pauseSubscriptions = undefined;
      this._subscriptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSubject = value.customSubject;
      this._dashboardId = value.dashboardId;
      this._pauseSubscriptions = value.pauseSubscriptions;
      this._subscriptions.internalValue = value.subscriptions;
    }
  }

  // custom_subject - computed: false, optional: true, required: false
  private _customSubject?: string; 
  public get customSubject() {
    return this.getStringAttribute('custom_subject');
  }
  public set customSubject(value: string) {
    this._customSubject = value;
  }
  public resetCustomSubject() {
    this._customSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubjectInput() {
    return this._customSubject;
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // pause_subscriptions - computed: false, optional: true, required: false
  private _pauseSubscriptions?: boolean | cdktn.IResolvable; 
  public get pauseSubscriptions() {
    return this.getBooleanAttribute('pause_subscriptions');
  }
  public set pauseSubscriptions(value: boolean | cdktn.IResolvable) {
    this._pauseSubscriptions = value;
  }
  public resetPauseSubscriptions() {
    this._pauseSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseSubscriptionsInput() {
    return this._pauseSubscriptions;
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new JobTaskSqlTaskDashboardSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: JobTaskSqlTaskDashboardSubscriptions[] | cdktn.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }
}
export interface JobTaskSqlTaskFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#path Job#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#source Job#source}
  */
  readonly source?: string;
}

export function jobTaskSqlTaskFileToTerraform(struct?: JobTaskSqlTaskFileOutputReference | JobTaskSqlTaskFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function jobTaskSqlTaskFileToHclTerraform(struct?: JobTaskSqlTaskFileOutputReference | JobTaskSqlTaskFile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._source = value.source;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface JobTaskSqlTaskQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#query_id Job#query_id}
  */
  readonly queryId: string;
}

export function jobTaskSqlTaskQueryToTerraform(struct?: JobTaskSqlTaskQueryOutputReference | JobTaskSqlTaskQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_id: cdktn.stringToTerraform(struct!.queryId),
  }
}


export function jobTaskSqlTaskQueryToHclTerraform(struct?: JobTaskSqlTaskQueryOutputReference | JobTaskSqlTaskQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_id: {
      value: cdktn.stringToHclTerraform(struct!.queryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTaskQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryId = this._queryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTaskQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryId = value.queryId;
    }
  }

  // query_id - computed: false, optional: false, required: true
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }
}
export interface JobTaskSqlTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#parameters Job#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#warehouse_id Job#warehouse_id}
  */
  readonly warehouseId: string;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#alert Job#alert}
  */
  readonly alert?: JobTaskSqlTaskAlert;
  /**
  * dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#dashboard Job#dashboard}
  */
  readonly dashboard?: JobTaskSqlTaskDashboard;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#file Job#file}
  */
  readonly file?: JobTaskSqlTaskFile;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#query Job#query}
  */
  readonly query?: JobTaskSqlTaskQuery;
}

export function jobTaskSqlTaskToTerraform(struct?: JobTaskSqlTaskOutputReference | JobTaskSqlTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    warehouse_id: cdktn.stringToTerraform(struct!.warehouseId),
    alert: jobTaskSqlTaskAlertToTerraform(struct!.alert),
    dashboard: jobTaskSqlTaskDashboardToTerraform(struct!.dashboard),
    file: jobTaskSqlTaskFileToTerraform(struct!.file),
    query: jobTaskSqlTaskQueryToTerraform(struct!.query),
  }
}


export function jobTaskSqlTaskToHclTerraform(struct?: JobTaskSqlTaskOutputReference | JobTaskSqlTask): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    warehouse_id: {
      value: cdktn.stringToHclTerraform(struct!.warehouseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert: {
      value: jobTaskSqlTaskAlertToHclTerraform(struct!.alert),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskAlertList",
    },
    dashboard: {
      value: jobTaskSqlTaskDashboardToHclTerraform(struct!.dashboard),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskDashboardList",
    },
    file: {
      value: jobTaskSqlTaskFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskFileList",
    },
    query: {
      value: jobTaskSqlTaskQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "JobTaskSqlTaskQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskSqlTaskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobTaskSqlTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._warehouseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseId = this._warehouseId;
    }
    if (this._alert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert?.internalValue;
    }
    if (this._dashboard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskSqlTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._warehouseId = undefined;
      this._alert.internalValue = undefined;
      this._dashboard.internalValue = undefined;
      this._file.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._warehouseId = value.warehouseId;
      this._alert.internalValue = value.alert;
      this._dashboard.internalValue = value.dashboard;
      this._file.internalValue = value.file;
      this._query.internalValue = value.query;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // alert - computed: false, optional: true, required: false
  private _alert = new JobTaskSqlTaskAlertOutputReference(this, "alert");
  public get alert() {
    return this._alert;
  }
  public putAlert(value: JobTaskSqlTaskAlert) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard = new JobTaskSqlTaskDashboardOutputReference(this, "dashboard");
  public get dashboard() {
    return this._dashboard;
  }
  public putDashboard(value: JobTaskSqlTaskDashboard) {
    this._dashboard.internalValue = value;
  }
  public resetDashboard() {
    this._dashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new JobTaskSqlTaskFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: JobTaskSqlTaskFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new JobTaskSqlTaskQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: JobTaskSqlTaskQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnDurationWarningThresholdExceededToTerraform(struct?: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnDurationWarningThresholdExceededToHclTerraform(struct?: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class JobTaskWebhookNotificationsOnDurationWarningThresholdExceededList extends cdktn.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnDurationWarningThresholdExceeded[] | cdktn.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference {
    return new JobTaskWebhookNotificationsOnDurationWarningThresholdExceededOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnFailureToTerraform(struct?: JobTaskWebhookNotificationsOnFailure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnFailureToHclTerraform(struct?: JobTaskWebhookNotificationsOnFailure | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOnFailureOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnFailure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskWebhookNotificationsOnFailure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class JobTaskWebhookNotificationsOnFailureList extends cdktn.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnFailure[] | cdktn.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnFailureOutputReference {
    return new JobTaskWebhookNotificationsOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskWebhookNotificationsOnStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function jobTaskWebhookNotificationsOnStartToTerraform(struct?: JobTaskWebhookNotificationsOnStart | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function jobTaskWebhookNotificationsOnStartToHclTerraform(struct?: JobTaskWebhookNotificationsOnStart | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTaskWebhookNotificationsOnStartOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): JobTaskWebhookNotificationsOnStart | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskWebhookNotificationsOnStart | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class JobTaskWebhookNotificationsOnStartList extends cdktn.ComplexList {
  public internalValue? : JobTaskWebhookNotificationsOnStart[] | cdktn.IResolvable

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
  public get(index: number): JobTaskWebhookNotificationsOnStartOutputReference {
    return new JobTaskWebhookNotificationsOnStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
