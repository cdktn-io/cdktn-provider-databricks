/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksPostgresRolesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}
  */
  readonly providerConfig?: DataDatabricksPostgresRolesProviderConfig;
}
export interface DataDatabricksPostgresRolesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPostgresRolesProviderConfigToTerraform(struct?: DataDatabricksPostgresRolesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPostgresRolesProviderConfigToHclTerraform(struct?: DataDatabricksPostgresRolesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresRolesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresRolesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresRolesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPostgresRolesRolesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPostgresRolesRolesProviderConfigToTerraform(struct?: DataDatabricksPostgresRolesRolesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPostgresRolesRolesProviderConfigToHclTerraform(struct?: DataDatabricksPostgresRolesRolesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresRolesRolesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresRolesRolesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresRolesRolesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPostgresRolesRolesSpecAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}
  */
  readonly bypassrls?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}
  */
  readonly createdb?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}
  */
  readonly createrole?: boolean | cdktn.IResolvable;
}

export function dataDatabricksPostgresRolesRolesSpecAttributesToTerraform(struct?: DataDatabricksPostgresRolesRolesSpecAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bypassrls: cdktn.booleanToTerraform(struct!.bypassrls),
    createdb: cdktn.booleanToTerraform(struct!.createdb),
    createrole: cdktn.booleanToTerraform(struct!.createrole),
  }
}


export function dataDatabricksPostgresRolesRolesSpecAttributesToHclTerraform(struct?: DataDatabricksPostgresRolesRolesSpecAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bypassrls: {
      value: cdktn.booleanToHclTerraform(struct!.bypassrls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    createdb: {
      value: cdktn.booleanToHclTerraform(struct!.createdb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    createrole: {
      value: cdktn.booleanToHclTerraform(struct!.createrole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresRolesRolesSpecAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresRolesRolesSpecAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassrls = this._bypassrls;
    }
    if (this._createdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdb = this._createdb;
    }
    if (this._createrole !== undefined) {
      hasAnyValues = true;
      internalValueResult.createrole = this._createrole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresRolesRolesSpecAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassrls = undefined;
      this._createdb = undefined;
      this._createrole = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassrls = value.bypassrls;
      this._createdb = value.createdb;
      this._createrole = value.createrole;
    }
  }

  // bypassrls - computed: true, optional: true, required: false
  private _bypassrls?: boolean | cdktn.IResolvable; 
  public get bypassrls() {
    return this.getBooleanAttribute('bypassrls');
  }
  public set bypassrls(value: boolean | cdktn.IResolvable) {
    this._bypassrls = value;
  }
  public resetBypassrls() {
    this._bypassrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassrlsInput() {
    return this._bypassrls;
  }

  // createdb - computed: true, optional: true, required: false
  private _createdb?: boolean | cdktn.IResolvable; 
  public get createdb() {
    return this.getBooleanAttribute('createdb');
  }
  public set createdb(value: boolean | cdktn.IResolvable) {
    this._createdb = value;
  }
  public resetCreatedb() {
    this._createdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdbInput() {
    return this._createdb;
  }

  // createrole - computed: true, optional: true, required: false
  private _createrole?: boolean | cdktn.IResolvable; 
  public get createrole() {
    return this.getBooleanAttribute('createrole');
  }
  public set createrole(value: boolean | cdktn.IResolvable) {
    this._createrole = value;
  }
  public resetCreaterole() {
    this._createrole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createroleInput() {
    return this._createrole;
  }
}
export interface DataDatabricksPostgresRolesRolesSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}
  */
  readonly attributes?: DataDatabricksPostgresRolesRolesSpecAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}
  */
  readonly identityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}
  */
  readonly membershipRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}
  */
  readonly postgresRole?: string;
}

export function dataDatabricksPostgresRolesRolesSpecToTerraform(struct?: DataDatabricksPostgresRolesRolesSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: dataDatabricksPostgresRolesRolesSpecAttributesToTerraform(struct!.attributes),
    auth_method: cdktn.stringToTerraform(struct!.authMethod),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
    membership_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.membershipRoles),
    postgres_role: cdktn.stringToTerraform(struct!.postgresRole),
  }
}


export function dataDatabricksPostgresRolesRolesSpecToHclTerraform(struct?: DataDatabricksPostgresRolesRolesSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: dataDatabricksPostgresRolesRolesSpecAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresRolesRolesSpecAttributes",
    },
    auth_method: {
      value: cdktn.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    membership_roles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.membershipRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    postgres_role: {
      value: cdktn.stringToHclTerraform(struct!.postgresRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresRolesRolesSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresRolesRolesSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._membershipRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.membershipRoles = this._membershipRoles;
    }
    if (this._postgresRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresRole = this._postgresRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresRolesRolesSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes.internalValue = undefined;
      this._authMethod = undefined;
      this._identityType = undefined;
      this._membershipRoles = undefined;
      this._postgresRole = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes.internalValue = value.attributes;
      this._authMethod = value.authMethod;
      this._identityType = value.identityType;
      this._membershipRoles = value.membershipRoles;
      this._postgresRole = value.postgresRole;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new DataDatabricksPostgresRolesRolesSpecAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataDatabricksPostgresRolesRolesSpecAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // auth_method - computed: true, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // identity_type - computed: true, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // membership_roles - computed: true, optional: true, required: false
  private _membershipRoles?: string[]; 
  public get membershipRoles() {
    return this.getListAttribute('membership_roles');
  }
  public set membershipRoles(value: string[]) {
    this._membershipRoles = value;
  }
  public resetMembershipRoles() {
    this._membershipRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipRolesInput() {
    return this._membershipRoles;
  }

  // postgres_role - computed: true, optional: true, required: false
  private _postgresRole?: string; 
  public get postgresRole() {
    return this.getStringAttribute('postgres_role');
  }
  public set postgresRole(value: string) {
    this._postgresRole = value;
  }
  public resetPostgresRole() {
    this._postgresRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresRoleInput() {
    return this._postgresRole;
  }
}
export interface DataDatabricksPostgresRolesRolesStatusAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}
  */
  readonly bypassrls?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}
  */
  readonly createdb?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}
  */
  readonly createrole?: boolean | cdktn.IResolvable;
}

export function dataDatabricksPostgresRolesRolesStatusAttributesToTerraform(struct?: DataDatabricksPostgresRolesRolesStatusAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bypassrls: cdktn.booleanToTerraform(struct!.bypassrls),
    createdb: cdktn.booleanToTerraform(struct!.createdb),
    createrole: cdktn.booleanToTerraform(struct!.createrole),
  }
}


export function dataDatabricksPostgresRolesRolesStatusAttributesToHclTerraform(struct?: DataDatabricksPostgresRolesRolesStatusAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bypassrls: {
      value: cdktn.booleanToHclTerraform(struct!.bypassrls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    createdb: {
      value: cdktn.booleanToHclTerraform(struct!.createdb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    createrole: {
      value: cdktn.booleanToHclTerraform(struct!.createrole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresRolesRolesStatusAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresRolesRolesStatusAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassrls = this._bypassrls;
    }
    if (this._createdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdb = this._createdb;
    }
    if (this._createrole !== undefined) {
      hasAnyValues = true;
      internalValueResult.createrole = this._createrole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresRolesRolesStatusAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassrls = undefined;
      this._createdb = undefined;
      this._createrole = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassrls = value.bypassrls;
      this._createdb = value.createdb;
      this._createrole = value.createrole;
    }
  }

  // bypassrls - computed: true, optional: true, required: false
  private _bypassrls?: boolean | cdktn.IResolvable; 
  public get bypassrls() {
    return this.getBooleanAttribute('bypassrls');
  }
  public set bypassrls(value: boolean | cdktn.IResolvable) {
    this._bypassrls = value;
  }
  public resetBypassrls() {
    this._bypassrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassrlsInput() {
    return this._bypassrls;
  }

  // createdb - computed: true, optional: true, required: false
  private _createdb?: boolean | cdktn.IResolvable; 
  public get createdb() {
    return this.getBooleanAttribute('createdb');
  }
  public set createdb(value: boolean | cdktn.IResolvable) {
    this._createdb = value;
  }
  public resetCreatedb() {
    this._createdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdbInput() {
    return this._createdb;
  }

  // createrole - computed: true, optional: true, required: false
  private _createrole?: boolean | cdktn.IResolvable; 
  public get createrole() {
    return this.getBooleanAttribute('createrole');
  }
  public set createrole(value: boolean | cdktn.IResolvable) {
    this._createrole = value;
  }
  public resetCreaterole() {
    this._createrole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createroleInput() {
    return this._createrole;
  }
}
export interface DataDatabricksPostgresRolesRolesStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}
  */
  readonly attributes?: DataDatabricksPostgresRolesRolesStatusAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}
  */
  readonly identityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}
  */
  readonly membershipRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}
  */
  readonly postgresRole?: string;
}

export function dataDatabricksPostgresRolesRolesStatusToTerraform(struct?: DataDatabricksPostgresRolesRolesStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: dataDatabricksPostgresRolesRolesStatusAttributesToTerraform(struct!.attributes),
    auth_method: cdktn.stringToTerraform(struct!.authMethod),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
    membership_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.membershipRoles),
    postgres_role: cdktn.stringToTerraform(struct!.postgresRole),
  }
}


export function dataDatabricksPostgresRolesRolesStatusToHclTerraform(struct?: DataDatabricksPostgresRolesRolesStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: dataDatabricksPostgresRolesRolesStatusAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresRolesRolesStatusAttributes",
    },
    auth_method: {
      value: cdktn.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_type: {
      value: cdktn.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    membership_roles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.membershipRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    postgres_role: {
      value: cdktn.stringToHclTerraform(struct!.postgresRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresRolesRolesStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresRolesRolesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._membershipRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.membershipRoles = this._membershipRoles;
    }
    if (this._postgresRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresRole = this._postgresRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresRolesRolesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes.internalValue = undefined;
      this._authMethod = undefined;
      this._identityType = undefined;
      this._membershipRoles = undefined;
      this._postgresRole = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes.internalValue = value.attributes;
      this._authMethod = value.authMethod;
      this._identityType = value.identityType;
      this._membershipRoles = value.membershipRoles;
      this._postgresRole = value.postgresRole;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new DataDatabricksPostgresRolesRolesStatusAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataDatabricksPostgresRolesRolesStatusAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // auth_method - computed: true, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // identity_type - computed: true, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // membership_roles - computed: true, optional: true, required: false
  private _membershipRoles?: string[]; 
  public get membershipRoles() {
    return this.getListAttribute('membership_roles');
  }
  public set membershipRoles(value: string[]) {
    this._membershipRoles = value;
  }
  public resetMembershipRoles() {
    this._membershipRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipRolesInput() {
    return this._membershipRoles;
  }

  // postgres_role - computed: true, optional: true, required: false
  private _postgresRole?: string; 
  public get postgresRole() {
    return this.getStringAttribute('postgres_role');
  }
  public set postgresRole(value: string) {
    this._postgresRole = value;
  }
  public resetPostgresRole() {
    this._postgresRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresRoleInput() {
    return this._postgresRole;
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
}
export interface DataDatabricksPostgresRolesRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#name DataDatabricksPostgresRoles#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}
  */
  readonly providerConfig?: DataDatabricksPostgresRolesRolesProviderConfig;
}

export function dataDatabricksPostgresRolesRolesToTerraform(struct?: DataDatabricksPostgresRolesRoles): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksPostgresRolesRolesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksPostgresRolesRolesToHclTerraform(struct?: DataDatabricksPostgresRolesRoles): any {
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
    provider_config: {
      value: dataDatabricksPostgresRolesRolesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresRolesRolesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresRolesRolesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPostgresRolesRoles | undefined {
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

  public set internalValue(value: DataDatabricksPostgresRolesRoles | undefined) {
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksPostgresRolesRolesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPostgresRolesRolesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataDatabricksPostgresRolesRolesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksPostgresRolesRolesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataDatabricksPostgresRolesRolesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPostgresRolesRoles[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPostgresRolesRolesOutputReference {
    return new DataDatabricksPostgresRolesRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles databricks_postgres_roles}
*/
export class DataDatabricksPostgresRoles extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_postgres_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksPostgresRoles resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPostgresRoles to import
  * @param importFromId The id of the existing DataDatabricksPostgresRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPostgresRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_postgres_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/postgres_roles databricks_postgres_roles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPostgresRolesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPostgresRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_postgres_roles',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.128.0',
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
    this._parent = config.parent;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksPostgresRolesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPostgresRolesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // roles - computed: true, optional: false, required: false
  private _roles = new DataDatabricksPostgresRolesRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktn.numberToTerraform(this._pageSize),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: dataDatabricksPostgresRolesProviderConfigToTerraform(this._providerConfig.internalValue),
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
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksPostgresRolesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksPostgresRolesProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
