/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { AccountNetworkPolicyIngressDryRunCrossWorkspaceAccess,
accountNetworkPolicyIngressDryRunCrossWorkspaceAccessToTerraform,
accountNetworkPolicyIngressDryRunCrossWorkspaceAccessToHclTerraform,
AccountNetworkPolicyIngressDryRunCrossWorkspaceAccessOutputReference,
AccountNetworkPolicyIngressDryRunPrivateAccess,
accountNetworkPolicyIngressDryRunPrivateAccessToTerraform,
accountNetworkPolicyIngressDryRunPrivateAccessToHclTerraform,
AccountNetworkPolicyIngressDryRunPrivateAccessOutputReference,
AccountNetworkPolicyIngressDryRunPublicAccess,
accountNetworkPolicyIngressDryRunPublicAccessToTerraform,
accountNetworkPolicyIngressDryRunPublicAccessToHclTerraform,
AccountNetworkPolicyIngressDryRunPublicAccessOutputReference } from './structs0';
export interface AccountNetworkPolicyIngressDryRun {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/account_network_policy#cross_workspace_access AccountNetworkPolicy#cross_workspace_access}
  */
  readonly crossWorkspaceAccess?: AccountNetworkPolicyIngressDryRunCrossWorkspaceAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/account_network_policy#private_access AccountNetworkPolicy#private_access}
  */
  readonly privateAccess?: AccountNetworkPolicyIngressDryRunPrivateAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/account_network_policy#public_access AccountNetworkPolicy#public_access}
  */
  readonly publicAccess?: AccountNetworkPolicyIngressDryRunPublicAccess;
}

export function accountNetworkPolicyIngressDryRunToTerraform(struct?: AccountNetworkPolicyIngressDryRun | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_workspace_access: accountNetworkPolicyIngressDryRunCrossWorkspaceAccessToTerraform(struct!.crossWorkspaceAccess),
    private_access: accountNetworkPolicyIngressDryRunPrivateAccessToTerraform(struct!.privateAccess),
    public_access: accountNetworkPolicyIngressDryRunPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function accountNetworkPolicyIngressDryRunToHclTerraform(struct?: AccountNetworkPolicyIngressDryRun | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_workspace_access: {
      value: accountNetworkPolicyIngressDryRunCrossWorkspaceAccessToHclTerraform(struct!.crossWorkspaceAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunCrossWorkspaceAccess",
    },
    private_access: {
      value: accountNetworkPolicyIngressDryRunPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPrivateAccess",
    },
    public_access: {
      value: accountNetworkPolicyIngressDryRunPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountNetworkPolicyIngressDryRunPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountNetworkPolicyIngressDryRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountNetworkPolicyIngressDryRun | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossWorkspaceAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossWorkspaceAccess = this._crossWorkspaceAccess?.internalValue;
    }
    if (this._privateAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess?.internalValue;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountNetworkPolicyIngressDryRun | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossWorkspaceAccess.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossWorkspaceAccess.internalValue = value.crossWorkspaceAccess;
      this._privateAccess.internalValue = value.privateAccess;
      this._publicAccess.internalValue = value.publicAccess;
    }
  }

  // cross_workspace_access - computed: false, optional: true, required: false
  private _crossWorkspaceAccess = new AccountNetworkPolicyIngressDryRunCrossWorkspaceAccessOutputReference(this, "cross_workspace_access");
  public get crossWorkspaceAccess() {
    return this._crossWorkspaceAccess;
  }
  public putCrossWorkspaceAccess(value: AccountNetworkPolicyIngressDryRunCrossWorkspaceAccess) {
    this._crossWorkspaceAccess.internalValue = value;
  }
  public resetCrossWorkspaceAccess() {
    this._crossWorkspaceAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossWorkspaceAccessInput() {
    return this._crossWorkspaceAccess.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new AccountNetworkPolicyIngressDryRunPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: AccountNetworkPolicyIngressDryRunPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new AccountNetworkPolicyIngressDryRunPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: AccountNetworkPolicyIngressDryRunPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }
}
