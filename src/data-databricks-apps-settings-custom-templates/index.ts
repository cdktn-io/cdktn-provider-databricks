/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksAppsSettingsCustomTemplatesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#page_size DataDatabricksAppsSettingsCustomTemplates#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#provider_config DataDatabricksAppsSettingsCustomTemplates#provider_config}
  */
  readonly providerConfig?: DataDatabricksAppsSettingsCustomTemplatesProviderConfig;
}
export interface DataDatabricksAppsSettingsCustomTemplatesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#workspace_id DataDatabricksAppsSettingsCustomTemplates#workspace_id}
  */
  readonly workspaceId: string;
}

export function dataDatabricksAppsSettingsCustomTemplatesProviderConfigToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAppsSettingsCustomTemplatesProviderConfigToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplatesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplatesProviderConfig | cdktn.IResolvable | undefined) {
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

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}
export interface DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
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
}
export interface DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
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
}
export interface DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
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
}
export interface DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
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
}
export interface DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}
  */
  readonly permission: string;
}

export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktn.stringToTerraform(struct!.permission),
  }
}


export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
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
}
export interface DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#securable_type DataDatabricksAppsSettingsCustomTemplates#securable_type}
  */
  readonly securableType: string;
}

export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktn.stringToTerraform(struct!.permission),
    securable_type: cdktn.stringToTerraform(struct!.securableType),
  }
}


export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec | cdktn.IResolvable): any {
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

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._securableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.securableType = this._securableType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
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
export interface DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#experiment_spec DataDatabricksAppsSettingsCustomTemplates#experiment_spec}
  */
  readonly experimentSpec?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#job_spec DataDatabricksAppsSettingsCustomTemplates#job_spec}
  */
  readonly jobSpec?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#secret_spec DataDatabricksAppsSettingsCustomTemplates#secret_spec}
  */
  readonly secretSpec?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplates#serving_endpoint_spec}
  */
  readonly servingEndpointSpec?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplates#sql_warehouse_spec}
  */
  readonly sqlWarehouseSpec?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#uc_securable_spec DataDatabricksAppsSettingsCustomTemplates#uc_securable_spec}
  */
  readonly ucSecurableSpec?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec;
}

export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    experiment_spec: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecToTerraform(struct!.experimentSpec),
    job_spec: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecToTerraform(struct!.jobSpec),
    name: cdktn.stringToTerraform(struct!.name),
    secret_spec: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecToTerraform(struct!.secretSpec),
    serving_endpoint_spec: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecToTerraform(struct!.servingEndpointSpec),
    sql_warehouse_spec: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecToTerraform(struct!.sqlWarehouseSpec),
    uc_securable_spec: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecToTerraform(struct!.ucSecurableSpec),
  }
}


export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs | cdktn.IResolvable): any {
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
    experiment_spec: {
      value: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecToHclTerraform(struct!.experimentSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec",
    },
    job_spec: {
      value: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecToHclTerraform(struct!.jobSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_spec: {
      value: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecToHclTerraform(struct!.secretSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec",
    },
    serving_endpoint_spec: {
      value: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecToHclTerraform(struct!.servingEndpointSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec",
    },
    sql_warehouse_spec: {
      value: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecToHclTerraform(struct!.sqlWarehouseSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec",
    },
    uc_securable_spec: {
      value: dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecToHclTerraform(struct!.ucSecurableSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._experimentSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentSpec = this._experimentSpec?.internalValue;
    }
    if (this._jobSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobSpec = this._jobSpec?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretSpec = this._secretSpec?.internalValue;
    }
    if (this._servingEndpointSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servingEndpointSpec = this._servingEndpointSpec?.internalValue;
    }
    if (this._sqlWarehouseSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlWarehouseSpec = this._sqlWarehouseSpec?.internalValue;
    }
    if (this._ucSecurableSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucSecurableSpec = this._ucSecurableSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._experimentSpec.internalValue = undefined;
      this._jobSpec.internalValue = undefined;
      this._name = undefined;
      this._secretSpec.internalValue = undefined;
      this._servingEndpointSpec.internalValue = undefined;
      this._sqlWarehouseSpec.internalValue = undefined;
      this._ucSecurableSpec.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._experimentSpec.internalValue = value.experimentSpec;
      this._jobSpec.internalValue = value.jobSpec;
      this._name = value.name;
      this._secretSpec.internalValue = value.secretSpec;
      this._servingEndpointSpec.internalValue = value.servingEndpointSpec;
      this._sqlWarehouseSpec.internalValue = value.sqlWarehouseSpec;
      this._ucSecurableSpec.internalValue = value.ucSecurableSpec;
    }
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

  // experiment_spec - computed: true, optional: true, required: false
  private _experimentSpec = new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpecOutputReference(this, "experiment_spec");
  public get experimentSpec() {
    return this._experimentSpec;
  }
  public putExperimentSpec(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsExperimentSpec) {
    this._experimentSpec.internalValue = value;
  }
  public resetExperimentSpec() {
    this._experimentSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentSpecInput() {
    return this._experimentSpec.internalValue;
  }

  // job_spec - computed: true, optional: true, required: false
  private _jobSpec = new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference(this, "job_spec");
  public get jobSpec() {
    return this._jobSpec;
  }
  public putJobSpec(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec) {
    this._jobSpec.internalValue = value;
  }
  public resetJobSpec() {
    this._jobSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobSpecInput() {
    return this._jobSpec.internalValue;
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

  // secret_spec - computed: true, optional: true, required: false
  private _secretSpec = new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference(this, "secret_spec");
  public get secretSpec() {
    return this._secretSpec;
  }
  public putSecretSpec(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec) {
    this._secretSpec.internalValue = value;
  }
  public resetSecretSpec() {
    this._secretSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretSpecInput() {
    return this._secretSpec.internalValue;
  }

  // serving_endpoint_spec - computed: true, optional: true, required: false
  private _servingEndpointSpec = new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference(this, "serving_endpoint_spec");
  public get servingEndpointSpec() {
    return this._servingEndpointSpec;
  }
  public putServingEndpointSpec(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec) {
    this._servingEndpointSpec.internalValue = value;
  }
  public resetServingEndpointSpec() {
    this._servingEndpointSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingEndpointSpecInput() {
    return this._servingEndpointSpec.internalValue;
  }

  // sql_warehouse_spec - computed: true, optional: true, required: false
  private _sqlWarehouseSpec = new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference(this, "sql_warehouse_spec");
  public get sqlWarehouseSpec() {
    return this._sqlWarehouseSpec;
  }
  public putSqlWarehouseSpec(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec) {
    this._sqlWarehouseSpec.internalValue = value;
  }
  public resetSqlWarehouseSpec() {
    this._sqlWarehouseSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlWarehouseSpecInput() {
    return this._sqlWarehouseSpec.internalValue;
  }

  // uc_securable_spec - computed: true, optional: true, required: false
  private _ucSecurableSpec = new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference(this, "uc_securable_spec");
  public get ucSecurableSpec() {
    return this._ucSecurableSpec;
  }
  public putUcSecurableSpec(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec) {
    this._ucSecurableSpec.internalValue = value;
  }
  public resetUcSecurableSpec() {
    this._ucSecurableSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucSecurableSpecInput() {
    return this._ucSecurableSpec.internalValue;
  }
}

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference {
    return new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#resource_specs DataDatabricksAppsSettingsCustomTemplates#resource_specs}
  */
  readonly resourceSpecs?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#version DataDatabricksAppsSettingsCustomTemplates#version}
  */
  readonly version: number;
}

export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    resource_specs: cdktn.listMapper(dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsToTerraform, false)(struct!.resourceSpecs),
    version: cdktn.numberToTerraform(struct!.version),
  }
}


export function dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest): any {
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_specs: {
      value: cdktn.listMapperHcl(dataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsToHclTerraform, false)(struct!.resourceSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList",
    },
    version: {
      value: cdktn.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSpecs = this._resourceSpecs?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._resourceSpecs.internalValue = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._resourceSpecs.internalValue = value.resourceSpecs;
      this._version = value.version;
    }
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

  // resource_specs - computed: true, optional: true, required: false
  private _resourceSpecs = new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList(this, "resource_specs", false);
  public get resourceSpecs() {
    return this._resourceSpecs;
  }
  public putResourceSpecs(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs[] | cdktn.IResolvable) {
    this._resourceSpecs.internalValue = value;
  }
  public resetResourceSpecs() {
    this._resourceSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSpecsInput() {
    return this._resourceSpecs.internalValue;
  }

  // version - computed: true, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#workspace_id DataDatabricksAppsSettingsCustomTemplates#workspace_id}
  */
  readonly workspaceId: string;
}

export function dataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig | cdktn.IResolvable | undefined) {
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

  // workspace_id - computed: true, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}
export interface DataDatabricksAppsSettingsCustomTemplatesTemplates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#provider_config DataDatabricksAppsSettingsCustomTemplates#provider_config}
  */
  readonly providerConfig?: DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig;
}

export function dataDatabricksAppsSettingsCustomTemplatesTemplatesToTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksAppsSettingsCustomTemplatesTemplatesToHclTerraform(struct?: DataDatabricksAppsSettingsCustomTemplatesTemplates): any {
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
    provider_config: {
      value: dataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAppsSettingsCustomTemplatesTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAppsSettingsCustomTemplatesTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // git_provider - computed: true, optional: false, required: false
  public get gitProvider() {
    return this.getStringAttribute('git_provider');
  }

  // git_repo - computed: true, optional: false, required: false
  public get gitRepo() {
    return this.getStringAttribute('git_repo');
  }

  // manifest - computed: true, optional: false, required: false
  private _manifest = new DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference(this, "manifest");
  public get manifest() {
    return this._manifest;
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAppsSettingsCustomTemplatesTemplatesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }
}

export class DataDatabricksAppsSettingsCustomTemplatesTemplatesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAppsSettingsCustomTemplatesTemplates[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference {
    return new DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates databricks_apps_settings_custom_templates}
*/
export class DataDatabricksAppsSettingsCustomTemplates extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_apps_settings_custom_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksAppsSettingsCustomTemplates resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAppsSettingsCustomTemplates to import
  * @param importFromId The id of the existing DataDatabricksAppsSettingsCustomTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAppsSettingsCustomTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_apps_settings_custom_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/apps_settings_custom_templates databricks_apps_settings_custom_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAppsSettingsCustomTemplatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAppsSettingsCustomTemplatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_apps_settings_custom_templates',
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
  private _providerConfig = new DataDatabricksAppsSettingsCustomTemplatesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAppsSettingsCustomTemplatesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // templates - computed: true, optional: false, required: false
  private _templates = new DataDatabricksAppsSettingsCustomTemplatesTemplatesList(this, "templates", false);
  public get templates() {
    return this._templates;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktn.numberToTerraform(this._pageSize),
      provider_config: dataDatabricksAppsSettingsCustomTemplatesProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksAppsSettingsCustomTemplatesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAppsSettingsCustomTemplatesProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
