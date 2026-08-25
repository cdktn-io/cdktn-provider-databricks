/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksPostgresRoleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#name DataDatabricksPostgresRole#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#provider_config DataDatabricksPostgresRole#provider_config}
  */
  readonly providerConfig?: DataDatabricksPostgresRoleProviderConfig;
}
export interface DataDatabricksPostgresRoleProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#workspace_id DataDatabricksPostgresRole#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPostgresRoleProviderConfigToTerraform(struct?: DataDatabricksPostgresRoleProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPostgresRoleProviderConfigToHclTerraform(struct?: DataDatabricksPostgresRoleProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresRoleProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresRoleProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresRoleProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPostgresRoleSpecAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}
  */
  readonly bypassrls?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}
  */
  readonly createdb?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}
  */
  readonly createrole?: boolean | cdktn.IResolvable;
}

export function dataDatabricksPostgresRoleSpecAttributesToTerraform(struct?: DataDatabricksPostgresRoleSpecAttributes | cdktn.IResolvable): any {
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


export function dataDatabricksPostgresRoleSpecAttributesToHclTerraform(struct?: DataDatabricksPostgresRoleSpecAttributes | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresRoleSpecAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresRoleSpecAttributes | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresRoleSpecAttributes | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPostgresRoleSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}
  */
  readonly attributes?: DataDatabricksPostgresRoleSpecAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}
  */
  readonly identityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}
  */
  readonly membershipRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}
  */
  readonly postgresRole?: string;
}

export function dataDatabricksPostgresRoleSpecToTerraform(struct?: DataDatabricksPostgresRoleSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: dataDatabricksPostgresRoleSpecAttributesToTerraform(struct!.attributes),
    auth_method: cdktn.stringToTerraform(struct!.authMethod),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
    membership_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.membershipRoles),
    postgres_role: cdktn.stringToTerraform(struct!.postgresRole),
  }
}


export function dataDatabricksPostgresRoleSpecToHclTerraform(struct?: DataDatabricksPostgresRoleSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: dataDatabricksPostgresRoleSpecAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresRoleSpecAttributes",
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

export class DataDatabricksPostgresRoleSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresRoleSpec | undefined {
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

  public set internalValue(value: DataDatabricksPostgresRoleSpec | undefined) {
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
  private _attributes = new DataDatabricksPostgresRoleSpecAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataDatabricksPostgresRoleSpecAttributes) {
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
export interface DataDatabricksPostgresRoleStatusAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}
  */
  readonly bypassrls?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}
  */
  readonly createdb?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}
  */
  readonly createrole?: boolean | cdktn.IResolvable;
}

export function dataDatabricksPostgresRoleStatusAttributesToTerraform(struct?: DataDatabricksPostgresRoleStatusAttributes | cdktn.IResolvable): any {
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


export function dataDatabricksPostgresRoleStatusAttributesToHclTerraform(struct?: DataDatabricksPostgresRoleStatusAttributes | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresRoleStatusAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresRoleStatusAttributes | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresRoleStatusAttributes | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPostgresRoleStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}
  */
  readonly attributes?: DataDatabricksPostgresRoleStatusAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}
  */
  readonly identityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}
  */
  readonly membershipRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}
  */
  readonly postgresRole?: string;
}

export function dataDatabricksPostgresRoleStatusToTerraform(struct?: DataDatabricksPostgresRoleStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: dataDatabricksPostgresRoleStatusAttributesToTerraform(struct!.attributes),
    auth_method: cdktn.stringToTerraform(struct!.authMethod),
    identity_type: cdktn.stringToTerraform(struct!.identityType),
    membership_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.membershipRoles),
    postgres_role: cdktn.stringToTerraform(struct!.postgresRole),
  }
}


export function dataDatabricksPostgresRoleStatusToHclTerraform(struct?: DataDatabricksPostgresRoleStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: dataDatabricksPostgresRoleStatusAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresRoleStatusAttributes",
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

export class DataDatabricksPostgresRoleStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresRoleStatus | undefined {
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

  public set internalValue(value: DataDatabricksPostgresRoleStatus | undefined) {
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
  private _attributes = new DataDatabricksPostgresRoleStatusAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataDatabricksPostgresRoleStatusAttributes) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role databricks_postgres_role}
*/
export class DataDatabricksPostgresRole extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_postgres_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksPostgresRole resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPostgresRole to import
  * @param importFromId The id of the existing DataDatabricksPostgresRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPostgresRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_postgres_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_role databricks_postgres_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPostgresRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPostgresRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_postgres_role',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.129.0',
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
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksPostgresRoleProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPostgresRoleProviderConfig) {
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
  private _spec = new DataDatabricksPostgresRoleSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksPostgresRoleStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksPostgresRoleProviderConfigToTerraform(this._providerConfig.internalValue),
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
      provider_config: {
        value: dataDatabricksPostgresRoleProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksPostgresRoleProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
