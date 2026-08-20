/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksRegisteredModelVersionsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#full_name DataDatabricksRegisteredModelVersions#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#model_versions DataDatabricksRegisteredModelVersions#model_versions}
  */
  readonly modelVersions?: DataDatabricksRegisteredModelVersionsModelVersions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#provider_config DataDatabricksRegisteredModelVersions#provider_config}
  */
  readonly providerConfig?: DataDatabricksRegisteredModelVersionsProviderConfig;
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsAliases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#alias_name DataDatabricksRegisteredModelVersions#alias_name}
  */
  readonly aliasName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#catalog_name DataDatabricksRegisteredModelVersions#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#id DataDatabricksRegisteredModelVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#model_name DataDatabricksRegisteredModelVersions#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#schema_name DataDatabricksRegisteredModelVersions#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#version_num DataDatabricksRegisteredModelVersions#version_num}
  */
  readonly versionNum?: number;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsAliasesToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsAliases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias_name: cdktn.stringToTerraform(struct!.aliasName),
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    id: cdktn.stringToTerraform(struct!.id),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
    version_num: cdktn.numberToTerraform(struct!.versionNum),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsAliasesToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsAliases | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias_name: {
      value: cdktn.stringToHclTerraform(struct!.aliasName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
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
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_num: {
      value: cdktn.numberToHclTerraform(struct!.versionNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsAliases | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasName = this._aliasName;
    }
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._versionNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionNum = this._versionNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsAliases | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasName = undefined;
      this._catalogName = undefined;
      this._id = undefined;
      this._modelName = undefined;
      this._schemaName = undefined;
      this._versionNum = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasName = value.aliasName;
      this._catalogName = value.catalogName;
      this._id = value.id;
      this._modelName = value.modelName;
      this._schemaName = value.schemaName;
      this._versionNum = value.versionNum;
    }
  }

  // alias_name - computed: true, optional: true, required: false
  private _aliasName?: string; 
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  public resetAliasName() {
    this._aliasName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName;
  }

  // catalog_name - computed: true, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
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

  // model_name - computed: true, optional: true, required: false
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

  // schema_name - computed: true, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // version_num - computed: true, optional: true, required: false
  private _versionNum?: number; 
  public get versionNum() {
    return this.getNumberAttribute('version_num');
  }
  public set versionNum(value: number) {
    this._versionNum = value;
  }
  public resetVersionNum() {
    this._versionNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNumInput() {
    return this._versionNum;
  }
}

export class DataDatabricksRegisteredModelVersionsModelVersionsAliasesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsAliases[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#connection_name DataDatabricksRegisteredModelVersions#connection_name}
  */
  readonly connectionName?: string;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_name: cdktn.stringToTerraform(struct!.connectionName),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_name: {
      value: cdktn.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionName = value.connectionName;
    }
  }

  // connection_name - computed: true, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#credential_name DataDatabricksRegisteredModelVersions#credential_name}
  */
  readonly credentialName?: string;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credential_name: cdktn.stringToTerraform(struct!.credentialName),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credential_name: {
      value: cdktn.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialName = value.credentialName;
    }
  }

  // credential_name - computed: true, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#function_full_name DataDatabricksRegisteredModelVersions#function_full_name}
  */
  readonly functionFullName: string;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    function_full_name: cdktn.stringToTerraform(struct!.functionFullName),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    function_full_name: {
      value: cdktn.stringToHclTerraform(struct!.functionFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionFullName = this._functionFullName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionFullName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionFullName = value.functionFullName;
    }
  }

  // function_full_name - computed: true, optional: false, required: true
  private _functionFullName?: string; 
  public get functionFullName() {
    return this.getStringAttribute('function_full_name');
  }
  public set functionFullName(value: string) {
    this._functionFullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionFullNameInput() {
    return this._functionFullName;
  }
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#table_full_name DataDatabricksRegisteredModelVersions#table_full_name}
  */
  readonly tableFullName: string;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_full_name: cdktn.stringToTerraform(struct!.tableFullName),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_full_name: {
      value: cdktn.stringToHclTerraform(struct!.tableFullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableFullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFullName = this._tableFullName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableFullName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableFullName = value.tableFullName;
    }
  }

  // table_full_name - computed: true, optional: false, required: true
  private _tableFullName?: string; 
  public get tableFullName() {
    return this.getStringAttribute('table_full_name');
  }
  public set tableFullName(value: string) {
    this._tableFullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFullNameInput() {
    return this._tableFullName;
  }
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#connection DataDatabricksRegisteredModelVersions#connection}
  */
  readonly connection?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#credential DataDatabricksRegisteredModelVersions#credential}
  */
  readonly credential?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#function DataDatabricksRegisteredModelVersions#function}
  */
  readonly function?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#table DataDatabricksRegisteredModelVersions#table}
  */
  readonly table?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[] | cdktn.IResolvable;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection: cdktn.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionToTerraform, false)(struct!.connection),
    credential: cdktn.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialToTerraform, false)(struct!.credential),
    function: cdktn.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionToTerraform, false)(struct!.function),
    table: cdktn.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableToTerraform, false)(struct!.table),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection: {
      value: cdktn.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionToHclTerraform, false)(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList",
    },
    credential: {
      value: cdktn.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialToHclTerraform, false)(struct!.credential),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList",
    },
    function: {
      value: cdktn.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionToHclTerraform, false)(struct!.function),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList",
    },
    table: {
      value: cdktn.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableToHclTerraform, false)(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    if (this._function?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connection.internalValue = undefined;
      this._credential.internalValue = undefined;
      this._function.internalValue = undefined;
      this._table.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connection.internalValue = value.connection;
      this._credential.internalValue = value.credential;
      this._function.internalValue = value.function;
      this._table.internalValue = value.table;
    }
  }

  // connection - computed: true, optional: true, required: false
  private _connection = new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList(this, "connection", false);
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[] | cdktn.IResolvable) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // credential - computed: true, optional: true, required: false
  private _credential = new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList(this, "credential", false);
  public get credential() {
    return this._credential;
  }
  public putCredential(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[] | cdktn.IResolvable) {
    this._credential.internalValue = value;
  }
  public resetCredential() {
    this._credential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // function - computed: true, optional: true, required: false
  private _function = new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList(this, "function", false);
  public get function() {
    return this._function;
  }
  public putFunction(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[] | cdktn.IResolvable) {
    this._function.internalValue = value;
  }
  public resetFunction() {
    this._function.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // table - computed: true, optional: true, required: false
  private _table = new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList(this, "table", false);
  public get table() {
    return this._table;
  }
  public putTable(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[] | cdktn.IResolvable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#dependencies DataDatabricksRegisteredModelVersions#dependencies}
  */
  readonly dependencies?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[] | cdktn.IResolvable;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dependencies: cdktn.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesToTerraform, false)(struct!.dependencies),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dependencies: {
      value: cdktn.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesToHclTerraform, false)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencies.internalValue = value.dependencies;
    }
  }

  // dependencies - computed: true, optional: true, required: false
  private _dependencies = new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[] | cdktn.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }
}

export class DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsModelVersions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#aliases DataDatabricksRegisteredModelVersions#aliases}
  */
  readonly aliases?: DataDatabricksRegisteredModelVersionsModelVersionsAliases[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#catalog_name DataDatabricksRegisteredModelVersions#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#comment DataDatabricksRegisteredModelVersions#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#created_at DataDatabricksRegisteredModelVersions#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#created_by DataDatabricksRegisteredModelVersions#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#id DataDatabricksRegisteredModelVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#metastore_id DataDatabricksRegisteredModelVersions#metastore_id}
  */
  readonly metastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#model_name DataDatabricksRegisteredModelVersions#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#model_version_dependencies DataDatabricksRegisteredModelVersions#model_version_dependencies}
  */
  readonly modelVersionDependencies?: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#run_id DataDatabricksRegisteredModelVersions#run_id}
  */
  readonly runId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#run_workspace_id DataDatabricksRegisteredModelVersions#run_workspace_id}
  */
  readonly runWorkspaceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#schema_name DataDatabricksRegisteredModelVersions#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#source DataDatabricksRegisteredModelVersions#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#status DataDatabricksRegisteredModelVersions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#storage_location DataDatabricksRegisteredModelVersions#storage_location}
  */
  readonly storageLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#updated_at DataDatabricksRegisteredModelVersions#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#updated_by DataDatabricksRegisteredModelVersions#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#version DataDatabricksRegisteredModelVersions#version}
  */
  readonly version?: number;
}

export function dataDatabricksRegisteredModelVersionsModelVersionsToTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aliases: cdktn.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsAliasesToTerraform, false)(struct!.aliases),
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    comment: cdktn.stringToTerraform(struct!.comment),
    created_at: cdktn.numberToTerraform(struct!.createdAt),
    created_by: cdktn.stringToTerraform(struct!.createdBy),
    id: cdktn.stringToTerraform(struct!.id),
    metastore_id: cdktn.stringToTerraform(struct!.metastoreId),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    model_version_dependencies: cdktn.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesToTerraform, false)(struct!.modelVersionDependencies),
    run_id: cdktn.stringToTerraform(struct!.runId),
    run_workspace_id: cdktn.numberToTerraform(struct!.runWorkspaceId),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
    source: cdktn.stringToTerraform(struct!.source),
    status: cdktn.stringToTerraform(struct!.status),
    storage_location: cdktn.stringToTerraform(struct!.storageLocation),
    updated_at: cdktn.numberToTerraform(struct!.updatedAt),
    updated_by: cdktn.stringToTerraform(struct!.updatedBy),
    version: cdktn.numberToTerraform(struct!.version),
  }
}


export function dataDatabricksRegisteredModelVersionsModelVersionsToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsModelVersions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aliases: {
      value: cdktn.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsAliasesToHclTerraform, false)(struct!.aliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsAliasesList",
    },
    catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_at: {
      value: cdktn.numberToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    created_by: {
      value: cdktn.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metastore_id: {
      value: cdktn.stringToHclTerraform(struct!.metastoreId),
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
    model_version_dependencies: {
      value: cdktn.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesToHclTerraform, false)(struct!.modelVersionDependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList",
    },
    run_id: {
      value: cdktn.stringToHclTerraform(struct!.runId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_workspace_id: {
      value: cdktn.numberToHclTerraform(struct!.runWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
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
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_location: {
      value: cdktn.stringToHclTerraform(struct!.storageLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktn.numberToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    updated_by: {
      value: cdktn.stringToHclTerraform(struct!.updatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataDatabricksRegisteredModelVersionsModelVersionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksRegisteredModelVersionsModelVersions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases?.internalValue;
    }
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreId = this._metastoreId;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._modelVersionDependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersionDependencies = this._modelVersionDependencies?.internalValue;
    }
    if (this._runId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runId = this._runId;
    }
    if (this._runWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runWorkspaceId = this._runWorkspaceId;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._storageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocation = this._storageLocation;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksRegisteredModelVersionsModelVersions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliases.internalValue = undefined;
      this._catalogName = undefined;
      this._comment = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._id = undefined;
      this._metastoreId = undefined;
      this._modelName = undefined;
      this._modelVersionDependencies.internalValue = undefined;
      this._runId = undefined;
      this._runWorkspaceId = undefined;
      this._schemaName = undefined;
      this._source = undefined;
      this._status = undefined;
      this._storageLocation = undefined;
      this._updatedAt = undefined;
      this._updatedBy = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliases.internalValue = value.aliases;
      this._catalogName = value.catalogName;
      this._comment = value.comment;
      this._createdAt = value.createdAt;
      this._createdBy = value.createdBy;
      this._id = value.id;
      this._metastoreId = value.metastoreId;
      this._modelName = value.modelName;
      this._modelVersionDependencies.internalValue = value.modelVersionDependencies;
      this._runId = value.runId;
      this._runWorkspaceId = value.runWorkspaceId;
      this._schemaName = value.schemaName;
      this._source = value.source;
      this._status = value.status;
      this._storageLocation = value.storageLocation;
      this._updatedAt = value.updatedAt;
      this._updatedBy = value.updatedBy;
      this._version = value.version;
    }
  }

  // aliases - computed: true, optional: true, required: false
  private _aliases = new DataDatabricksRegisteredModelVersionsModelVersionsAliasesList(this, "aliases", false);
  public get aliases() {
    return this._aliases;
  }
  public putAliases(value: DataDatabricksRegisteredModelVersionsModelVersionsAliases[] | cdktn.IResolvable) {
    this._aliases.internalValue = value;
  }
  public resetAliases() {
    this._aliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases.internalValue;
  }

  // catalog_name - computed: true, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // metastore_id - computed: true, optional: true, required: false
  private _metastoreId?: string; 
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
  }
  public set metastoreId(value: string) {
    this._metastoreId = value;
  }
  public resetMetastoreId() {
    this._metastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreIdInput() {
    return this._metastoreId;
  }

  // model_name - computed: true, optional: true, required: false
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

  // model_version_dependencies - computed: true, optional: true, required: false
  private _modelVersionDependencies = new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList(this, "model_version_dependencies", false);
  public get modelVersionDependencies() {
    return this._modelVersionDependencies;
  }
  public putModelVersionDependencies(value: DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[] | cdktn.IResolvable) {
    this._modelVersionDependencies.internalValue = value;
  }
  public resetModelVersionDependencies() {
    this._modelVersionDependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionDependenciesInput() {
    return this._modelVersionDependencies.internalValue;
  }

  // run_id - computed: true, optional: true, required: false
  private _runId?: string; 
  public get runId() {
    return this.getStringAttribute('run_id');
  }
  public set runId(value: string) {
    this._runId = value;
  }
  public resetRunId() {
    this._runId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIdInput() {
    return this._runId;
  }

  // run_workspace_id - computed: true, optional: true, required: false
  private _runWorkspaceId?: number; 
  public get runWorkspaceId() {
    return this.getNumberAttribute('run_workspace_id');
  }
  public set runWorkspaceId(value: number) {
    this._runWorkspaceId = value;
  }
  public resetRunWorkspaceId() {
    this._runWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runWorkspaceIdInput() {
    return this._runWorkspaceId;
  }

  // schema_name - computed: true, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // source - computed: true, optional: true, required: false
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // storage_location - computed: true, optional: true, required: false
  private _storageLocation?: string; 
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }
  public set storageLocation(value: string) {
    this._storageLocation = value;
  }
  public resetStorageLocation() {
    this._storageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // updated_by - computed: true, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataDatabricksRegisteredModelVersionsModelVersionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksRegisteredModelVersionsModelVersions[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksRegisteredModelVersionsModelVersionsOutputReference {
    return new DataDatabricksRegisteredModelVersionsModelVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksRegisteredModelVersionsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#workspace_id DataDatabricksRegisteredModelVersions#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksRegisteredModelVersionsProviderConfigToTerraform(struct?: DataDatabricksRegisteredModelVersionsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksRegisteredModelVersionsProviderConfigToHclTerraform(struct?: DataDatabricksRegisteredModelVersionsProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksRegisteredModelVersionsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksRegisteredModelVersionsProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksRegisteredModelVersionsProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions databricks_registered_model_versions}
*/
export class DataDatabricksRegisteredModelVersions extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_registered_model_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksRegisteredModelVersions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksRegisteredModelVersions to import
  * @param importFromId The id of the existing DataDatabricksRegisteredModelVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksRegisteredModelVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_registered_model_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/registered_model_versions databricks_registered_model_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksRegisteredModelVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksRegisteredModelVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_registered_model_versions',
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
    this._fullName = config.fullName;
    this._modelVersions.internalValue = config.modelVersions;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // model_versions - computed: true, optional: true, required: false
  private _modelVersions = new DataDatabricksRegisteredModelVersionsModelVersionsList(this, "model_versions", false);
  public get modelVersions() {
    return this._modelVersions;
  }
  public putModelVersions(value: DataDatabricksRegisteredModelVersionsModelVersions[] | cdktn.IResolvable) {
    this._modelVersions.internalValue = value;
  }
  public resetModelVersions() {
    this._modelVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionsInput() {
    return this._modelVersions.internalValue;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksRegisteredModelVersionsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksRegisteredModelVersionsProviderConfig) {
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
      full_name: cdktn.stringToTerraform(this._fullName),
      model_versions: cdktn.listMapper(dataDatabricksRegisteredModelVersionsModelVersionsToTerraform, false)(this._modelVersions.internalValue),
      provider_config: dataDatabricksRegisteredModelVersionsProviderConfigToTerraform(this._providerConfig.internalValue),
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
      model_versions: {
        value: cdktn.listMapperHcl(dataDatabricksRegisteredModelVersionsModelVersionsToHclTerraform, false)(this._modelVersions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksRegisteredModelVersionsModelVersionsList",
      },
      provider_config: {
        value: dataDatabricksRegisteredModelVersionsProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksRegisteredModelVersionsProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
