/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccess,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessToTerraform,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessToHclTerraform,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessOutputReference,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToTerraform,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToHclTerraform,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessOutputReference,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToTerraform,
dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToHclTerraform,
DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessOutputReference,
DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference,
DataDatabricksAccountNetworkPoliciesItemsIngressOutputReference } from './structs0';
export interface DataDatabricksAccountNetworkPoliciesItemsIngressDryRun {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/account_network_policies#cross_workspace_access DataDatabricksAccountNetworkPolicies#cross_workspace_access}
  */
  readonly crossWorkspaceAccess?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/account_network_policies#private_access DataDatabricksAccountNetworkPolicies#private_access}
  */
  readonly privateAccess?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/account_network_policies#public_access DataDatabricksAccountNetworkPolicies#public_access}
  */
  readonly publicAccess?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess;
}

export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_workspace_access: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessToTerraform(struct!.crossWorkspaceAccess),
    private_access: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToTerraform(struct!.privateAccess),
    public_access: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsIngressDryRunToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItemsIngressDryRun): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_workspace_access: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessToHclTerraform(struct!.crossWorkspaceAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccess",
    },
    private_access: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess",
    },
    public_access: {
      value: dataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsIngressDryRunOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItemsIngressDryRun | undefined {
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

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossWorkspaceAccess.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossWorkspaceAccess.internalValue = value.crossWorkspaceAccess;
      this._privateAccess.internalValue = value.privateAccess;
      this._publicAccess.internalValue = value.publicAccess;
    }
  }

  // cross_workspace_access - computed: true, optional: true, required: false
  private _crossWorkspaceAccess = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccessOutputReference(this, "cross_workspace_access");
  public get crossWorkspaceAccess() {
    return this._crossWorkspaceAccess;
  }
  public putCrossWorkspaceAccess(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunCrossWorkspaceAccess) {
    this._crossWorkspaceAccess.internalValue = value;
  }
  public resetCrossWorkspaceAccess() {
    this._crossWorkspaceAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossWorkspaceAccessInput() {
    return this._crossWorkspaceAccess.internalValue;
  }

  // private_access - computed: true, optional: true, required: false
  private _privateAccess = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // public_access - computed: true, optional: true, required: false
  private _publicAccess = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: DataDatabricksAccountNetworkPoliciesItemsIngressDryRunPublicAccess) {
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
export interface DataDatabricksAccountNetworkPoliciesItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/account_network_policies#network_policy_id DataDatabricksAccountNetworkPolicies#network_policy_id}
  */
  readonly networkPolicyId: string;
}

export function dataDatabricksAccountNetworkPoliciesItemsToTerraform(struct?: DataDatabricksAccountNetworkPoliciesItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policy_id: cdktn.stringToTerraform(struct!.networkPolicyId),
  }
}


export function dataDatabricksAccountNetworkPoliciesItemsToHclTerraform(struct?: DataDatabricksAccountNetworkPoliciesItems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.networkPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAccountNetworkPoliciesItemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksAccountNetworkPoliciesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyId = this._networkPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAccountNetworkPoliciesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPolicyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPolicyId = value.networkPolicyId;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // egress - computed: true, optional: false, required: false
  private _egress = new DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }

  // ingress - computed: true, optional: false, required: false
  private _ingress = new DataDatabricksAccountNetworkPoliciesItemsIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }

  // ingress_dry_run - computed: true, optional: false, required: false
  private _ingressDryRun = new DataDatabricksAccountNetworkPoliciesItemsIngressDryRunOutputReference(this, "ingress_dry_run");
  public get ingressDryRun() {
    return this._ingressDryRun;
  }

  // network_policy_id - computed: true, optional: false, required: true
  private _networkPolicyId?: string; 
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }
  public set networkPolicyId(value: string) {
    this._networkPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyIdInput() {
    return this._networkPolicyId;
  }
}

export class DataDatabricksAccountNetworkPoliciesItemsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksAccountNetworkPoliciesItems[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksAccountNetworkPoliciesItemsOutputReference {
    return new DataDatabricksAccountNetworkPoliciesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
