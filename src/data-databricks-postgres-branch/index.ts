/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksPostgresBranchConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch#name DataDatabricksPostgresBranch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch#provider_config DataDatabricksPostgresBranch#provider_config}
  */
  readonly providerConfig?: DataDatabricksPostgresBranchProviderConfig;
}
export interface DataDatabricksPostgresBranchProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch#workspace_id DataDatabricksPostgresBranch#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksPostgresBranchProviderConfigToTerraform(struct?: DataDatabricksPostgresBranchProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksPostgresBranchProviderConfigToHclTerraform(struct?: DataDatabricksPostgresBranchProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksPostgresBranchProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresBranchProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksPostgresBranchProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksPostgresBranchSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch#expire_time DataDatabricksPostgresBranch#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch#is_protected DataDatabricksPostgresBranch#is_protected}
  */
  readonly isProtected?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch#no_expiry DataDatabricksPostgresBranch#no_expiry}
  */
  readonly noExpiry?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch#source_branch DataDatabricksPostgresBranch#source_branch}
  */
  readonly sourceBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch#source_branch_lsn DataDatabricksPostgresBranch#source_branch_lsn}
  */
  readonly sourceBranchLsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch#source_branch_time DataDatabricksPostgresBranch#source_branch_time}
  */
  readonly sourceBranchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch#ttl DataDatabricksPostgresBranch#ttl}
  */
  readonly ttl?: string;
}

export function dataDatabricksPostgresBranchSpecToTerraform(struct?: DataDatabricksPostgresBranchSpec): any {
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


export function dataDatabricksPostgresBranchSpecToHclTerraform(struct?: DataDatabricksPostgresBranchSpec): any {
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

export class DataDatabricksPostgresBranchSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresBranchSpec | undefined {
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

  public set internalValue(value: DataDatabricksPostgresBranchSpec | undefined) {
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
export interface DataDatabricksPostgresBranchStatus {
}

export function dataDatabricksPostgresBranchStatusToTerraform(struct?: DataDatabricksPostgresBranchStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatabricksPostgresBranchStatusToHclTerraform(struct?: DataDatabricksPostgresBranchStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksPostgresBranchStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksPostgresBranchStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksPostgresBranchStatus | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch databricks_postgres_branch}
*/
export class DataDatabricksPostgresBranch extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_postgres_branch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksPostgresBranch resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksPostgresBranch to import
  * @param importFromId The id of the existing DataDatabricksPostgresBranch that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksPostgresBranch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_postgres_branch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_branch databricks_postgres_branch} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksPostgresBranchConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksPostgresBranchConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_postgres_branch',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.127.0',
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

  // branch_id - computed: true, optional: false, required: false
  public get branchId() {
    return this.getStringAttribute('branch_id');
  }

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
  private _providerConfig = new DataDatabricksPostgresBranchProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksPostgresBranchProviderConfig) {
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
  private _spec = new DataDatabricksPostgresBranchSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksPostgresBranchStatusOutputReference(this, "status");
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksPostgresBranchProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksPostgresBranchProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksPostgresBranchProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
