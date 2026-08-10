/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PostgresBranchConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}
  */
  readonly branchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#parent PostgresBranch#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}
  */
  readonly providerConfig?: PostgresBranchProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}
  */
  readonly purgeOnDelete?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}
  */
  readonly replaceExisting?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#spec PostgresBranch#spec}
  */
  readonly spec?: PostgresBranchSpec;
}
export interface PostgresBranchProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#workspace_id PostgresBranch#workspace_id}
  */
  readonly workspaceId?: string;
}

export function postgresBranchProviderConfigToTerraform(struct?: PostgresBranchProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function postgresBranchProviderConfigToHclTerraform(struct?: PostgresBranchProviderConfig | cdktn.IResolvable): any {
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

export class PostgresBranchProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresBranchProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PostgresBranchProviderConfig | cdktn.IResolvable | undefined) {
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
export interface PostgresBranchSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#expire_time PostgresBranch#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#is_protected PostgresBranch#is_protected}
  */
  readonly isProtected?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#no_expiry PostgresBranch#no_expiry}
  */
  readonly noExpiry?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#source_branch PostgresBranch#source_branch}
  */
  readonly sourceBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#source_branch_lsn PostgresBranch#source_branch_lsn}
  */
  readonly sourceBranchLsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#source_branch_time PostgresBranch#source_branch_time}
  */
  readonly sourceBranchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#ttl PostgresBranch#ttl}
  */
  readonly ttl?: string;
}

export function postgresBranchSpecToTerraform(struct?: PostgresBranchSpec | cdktn.IResolvable): any {
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


export function postgresBranchSpecToHclTerraform(struct?: PostgresBranchSpec | cdktn.IResolvable): any {
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

export class PostgresBranchSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresBranchSpec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: PostgresBranchSpec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expireTime = undefined;
      this._isProtected = undefined;
      this._noExpiry = undefined;
      this._sourceBranch = undefined;
      this._sourceBranchLsn = undefined;
      this._sourceBranchTime = undefined;
      this._ttl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface PostgresBranchStatus {
}

export function postgresBranchStatusToTerraform(struct?: PostgresBranchStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function postgresBranchStatusToHclTerraform(struct?: PostgresBranchStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class PostgresBranchStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresBranchStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresBranchStatus | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch databricks_postgres_branch}
*/
export class PostgresBranch extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_postgres_branch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PostgresBranch resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresBranch to import
  * @param importFromId The id of the existing PostgresBranch that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresBranch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_postgres_branch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/postgres_branch databricks_postgres_branch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresBranchConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresBranchConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_postgres_branch',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.125.0',
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
    this._branchId = config.branchId;
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
    this._purgeOnDelete = config.purgeOnDelete;
    this._replaceExisting = config.replaceExisting;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch_id - computed: false, optional: false, required: true
  private _branchId?: string; 
  public get branchId() {
    return this.getStringAttribute('branch_id');
  }
  public set branchId(value: string) {
    this._branchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchIdInput() {
    return this._branchId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new PostgresBranchProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: PostgresBranchProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // purge_on_delete - computed: false, optional: true, required: false
  private _purgeOnDelete?: boolean | cdktn.IResolvable; 
  public get purgeOnDelete() {
    return this.getBooleanAttribute('purge_on_delete');
  }
  public set purgeOnDelete(value: boolean | cdktn.IResolvable) {
    this._purgeOnDelete = value;
  }
  public resetPurgeOnDelete() {
    this._purgeOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeOnDeleteInput() {
    return this._purgeOnDelete;
  }

  // replace_existing - computed: false, optional: true, required: false
  private _replaceExisting?: boolean | cdktn.IResolvable; 
  public get replaceExisting() {
    return this.getBooleanAttribute('replace_existing');
  }
  public set replaceExisting(value: boolean | cdktn.IResolvable) {
    this._replaceExisting = value;
  }
  public resetReplaceExisting() {
    this._replaceExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceExistingInput() {
    return this._replaceExisting;
  }

  // spec - computed: true, optional: true, required: false
  private _spec = new PostgresBranchSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PostgresBranchSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: true, optional: false, required: false
  private _status = new PostgresBranchStatusOutputReference(this, "status");
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
      branch_id: cdktn.stringToTerraform(this._branchId),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: postgresBranchProviderConfigToTerraform(this._providerConfig.internalValue),
      purge_on_delete: cdktn.booleanToTerraform(this._purgeOnDelete),
      replace_existing: cdktn.booleanToTerraform(this._replaceExisting),
      spec: postgresBranchSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch_id: {
        value: cdktn.stringToHclTerraform(this._branchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: postgresBranchProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PostgresBranchProviderConfig",
      },
      purge_on_delete: {
        value: cdktn.booleanToHclTerraform(this._purgeOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replace_existing: {
        value: cdktn.booleanToHclTerraform(this._replaceExisting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spec: {
        value: postgresBranchSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PostgresBranchSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
