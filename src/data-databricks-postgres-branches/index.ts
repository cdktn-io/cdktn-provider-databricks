/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksPostgresBranchesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#page_size DataDatabricksPostgresBranches#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#parent DataDatabricksPostgresBranches#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#provider_config DataDatabricksPostgresBranches#provider_config}
  */
  readonly providerConfig?: DataDatabricksPostgresBranchesProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#show_deleted DataDatabricksPostgresBranches#show_deleted}
  */
  readonly showDeleted?: boolean | cdktn.IResolvable;
}
export interface DataDatabricksPostgresBranchesBranchesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#workspace_id DataDatabricksPostgresBranches#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPostgresBranchesBranchesProviderConfigToTerraform(struct?: DataDatabricksPostgresBranchesBranchesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPostgresBranchesBranchesProviderConfigToHclTerraform(struct?: DataDatabricksPostgresBranchesBranchesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresBranchesBranchesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresBranchesBranchesProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPostgresBranchesBranchesSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#expire_time DataDatabricksPostgresBranches#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#is_protected DataDatabricksPostgresBranches#is_protected}
  */
  readonly isProtected?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#no_expiry DataDatabricksPostgresBranches#no_expiry}
  */
  readonly noExpiry?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#source_branch DataDatabricksPostgresBranches#source_branch}
  */
  readonly sourceBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#source_branch_lsn DataDatabricksPostgresBranches#source_branch_lsn}
  */
  readonly sourceBranchLsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#source_branch_time DataDatabricksPostgresBranches#source_branch_time}
  */
  readonly sourceBranchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#ttl DataDatabricksPostgresBranches#ttl}
  */
  readonly ttl?: string;
}

export function dataDatabricksPostgresBranchesBranchesSpecToTerraform(struct?: DataDatabricksPostgresBranchesBranchesSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expire_time: cdktn.stringToTerraform(struct!.expireTime),
    is_protected: cdktn.booleanToTerraform(struct!.isProtected),
    no_expiry: cdktn.booleanToTerraform(struct!.noExpiry),
    source_branch: cdktn.stringToTerraform(struct!.sourceBranch),
    source_branch_lsn: cdktn.stringToTerraform(struct!.sourceBranchLsn),
    source_branch_time: cdktn.stringToTerraform(struct!.sourceBranchTime),
    ttl: cdktn.stringToTerraform(struct!.ttl),
  }
}


export function dataDatabricksPostgresBranchesBranchesSpecToHclTerraform(struct?: DataDatabricksPostgresBranchesBranchesSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expire_time: {
      value: cdktn.stringToHclTerraform(struct!.expireTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_protected: {
      value: cdktn.booleanToHclTerraform(struct!.isProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_expiry: {
      value: cdktn.booleanToHclTerraform(struct!.noExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_branch: {
      value: cdktn.stringToHclTerraform(struct!.sourceBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_branch_lsn: {
      value: cdktn.stringToHclTerraform(struct!.sourceBranchLsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_branch_time: {
      value: cdktn.stringToHclTerraform(struct!.sourceBranchTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktn.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresBranchesBranchesSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresBranchesBranchesSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._isProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isProtected = this._isProtected;
    }
    if (this._noExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.noExpiry = this._noExpiry;
    }
    if (this._sourceBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBranch = this._sourceBranch;
    }
    if (this._sourceBranchLsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBranchLsn = this._sourceBranchLsn;
    }
    if (this._sourceBranchTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBranchTime = this._sourceBranchTime;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresBranchesBranchesSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expireTime = undefined;
      this._isProtected = undefined;
      this._noExpiry = undefined;
      this._sourceBranch = undefined;
      this._sourceBranchLsn = undefined;
      this._sourceBranchTime = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expireTime = value.expireTime;
      this._isProtected = value.isProtected;
      this._noExpiry = value.noExpiry;
      this._sourceBranch = value.sourceBranch;
      this._sourceBranchLsn = value.sourceBranchLsn;
      this._sourceBranchTime = value.sourceBranchTime;
      this._ttl = value.ttl;
    }
  }

  // expire_time - computed: true, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // is_protected - computed: true, optional: true, required: false
  private _isProtected?: boolean | cdktn.IResolvable; 
  public get isProtected() {
    return this.getBooleanAttribute('is_protected');
  }
  public set isProtected(value: boolean | cdktn.IResolvable) {
    this._isProtected = value;
  }
  public resetIsProtected() {
    this._isProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProtectedInput() {
    return this._isProtected;
  }

  // no_expiry - computed: true, optional: true, required: false
  private _noExpiry?: boolean | cdktn.IResolvable; 
  public get noExpiry() {
    return this.getBooleanAttribute('no_expiry');
  }
  public set noExpiry(value: boolean | cdktn.IResolvable) {
    this._noExpiry = value;
  }
  public resetNoExpiry() {
    this._noExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noExpiryInput() {
    return this._noExpiry;
  }

  // source_branch - computed: true, optional: true, required: false
  private _sourceBranch?: string; 
  public get sourceBranch() {
    return this.getStringAttribute('source_branch');
  }
  public set sourceBranch(value: string) {
    this._sourceBranch = value;
  }
  public resetSourceBranch() {
    this._sourceBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBranchInput() {
    return this._sourceBranch;
  }

  // source_branch_lsn - computed: true, optional: true, required: false
  private _sourceBranchLsn?: string; 
  public get sourceBranchLsn() {
    return this.getStringAttribute('source_branch_lsn');
  }
  public set sourceBranchLsn(value: string) {
    this._sourceBranchLsn = value;
  }
  public resetSourceBranchLsn() {
    this._sourceBranchLsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBranchLsnInput() {
    return this._sourceBranchLsn;
  }

  // source_branch_time - computed: true, optional: true, required: false
  private _sourceBranchTime?: string; 
  public get sourceBranchTime() {
    return this.getStringAttribute('source_branch_time');
  }
  public set sourceBranchTime(value: string) {
    this._sourceBranchTime = value;
  }
  public resetSourceBranchTime() {
    this._sourceBranchTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBranchTimeInput() {
    return this._sourceBranchTime;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface DataDatabricksPostgresBranchesBranchesStatus {
}

export function dataDatabricksPostgresBranchesBranchesStatusToTerraform(struct?: DataDatabricksPostgresBranchesBranchesStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksPostgresBranchesBranchesStatusToHclTerraform(struct?: DataDatabricksPostgresBranchesBranchesStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksPostgresBranchesBranchesStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresBranchesBranchesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresBranchesBranchesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch_id - computed: true, optional: false, required: false
  public get branchId() {
    return this.getStringAttribute('branch_id');
  }

  // current_state - computed: true, optional: false, required: false
  public get currentState() {
    return this.getStringAttribute('current_state');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // is_protected - computed: true, optional: false, required: false
  public get isProtected() {
    return this.getBooleanAttribute('is_protected');
  }

  // logical_size_bytes - computed: true, optional: false, required: false
  public get logicalSizeBytes() {
    return this.getNumberAttribute('logical_size_bytes');
  }

  // pending_state - computed: true, optional: false, required: false
  public get pendingState() {
    return this.getStringAttribute('pending_state');
  }

  // purge_time - computed: true, optional: false, required: false
  public get purgeTime() {
    return this.getStringAttribute('purge_time');
  }

  // source_branch - computed: true, optional: false, required: false
  public get sourceBranch() {
    return this.getStringAttribute('source_branch');
  }

  // source_branch_lsn - computed: true, optional: false, required: false
  public get sourceBranchLsn() {
    return this.getStringAttribute('source_branch_lsn');
  }

  // source_branch_time - computed: true, optional: false, required: false
  public get sourceBranchTime() {
    return this.getStringAttribute('source_branch_time');
  }

  // state_change_time - computed: true, optional: false, required: false
  public get stateChangeTime() {
    return this.getStringAttribute('state_change_time');
  }
}
export interface DataDatabricksPostgresBranchesBranches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#name DataDatabricksPostgresBranches#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#provider_config DataDatabricksPostgresBranches#provider_config}
  */
  readonly providerConfig?: DataDatabricksPostgresBranchesBranchesProviderConfig;
}

export function dataDatabricksPostgresBranchesBranchesToTerraform(struct?: DataDatabricksPostgresBranchesBranches): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksPostgresBranchesBranchesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksPostgresBranchesBranchesToHclTerraform(struct?: DataDatabricksPostgresBranchesBranches): any {
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
      value: dataDatabricksPostgresBranchesBranchesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksPostgresBranchesBranchesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksPostgresBranchesBranchesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksPostgresBranchesBranches | undefined {
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

  public set internalValue(value: DataDatabricksPostgresBranchesBranches | undefined) {
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

  // branch_id - computed: true, optional: false, required: false
  public get branchId() {
    return this.getStringAttribute('branch_id');
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
  private _providerConfig = new DataDatabricksPostgresBranchesBranchesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPostgresBranchesBranchesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataDatabricksPostgresBranchesBranchesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksPostgresBranchesBranchesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataDatabricksPostgresBranchesBranchesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksPostgresBranchesBranches[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksPostgresBranchesBranchesOutputReference {
    return new DataDatabricksPostgresBranchesBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksPostgresBranchesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#workspace_id DataDatabricksPostgresBranches#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPostgresBranchesProviderConfigToTerraform(struct?: DataDatabricksPostgresBranchesProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPostgresBranchesProviderConfigToHclTerraform(struct?: DataDatabricksPostgresBranchesProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresBranchesProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresBranchesProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresBranchesProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches databricks_postgres_branches}
*/
export class DataDatabricksPostgresBranches extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_postgres_branches";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksPostgresBranches resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPostgresBranches to import
  * @param importFromId The id of the existing DataDatabricksPostgresBranches that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPostgresBranches to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_postgres_branches", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/postgres_branches databricks_postgres_branches} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPostgresBranchesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPostgresBranchesConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_postgres_branches',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.118.0',
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
    this._showDeleted = config.showDeleted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branches - computed: true, optional: false, required: false
  private _branches = new DataDatabricksPostgresBranchesBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }

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
  private _providerConfig = new DataDatabricksPostgresBranchesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPostgresBranchesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // show_deleted - computed: false, optional: true, required: false
  private _showDeleted?: boolean | cdktn.IResolvable; 
  public get showDeleted() {
    return this.getBooleanAttribute('show_deleted');
  }
  public set showDeleted(value: boolean | cdktn.IResolvable) {
    this._showDeleted = value;
  }
  public resetShowDeleted() {
    this._showDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDeletedInput() {
    return this._showDeleted;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktn.numberToTerraform(this._pageSize),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: dataDatabricksPostgresBranchesProviderConfigToTerraform(this._providerConfig.internalValue),
      show_deleted: cdktn.booleanToTerraform(this._showDeleted),
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
        value: dataDatabricksPostgresBranchesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksPostgresBranchesProviderConfig",
      },
      show_deleted: {
        value: cdktn.booleanToHclTerraform(this._showDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
