/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { AccountNetworkPolicyEgress, 
accountNetworkPolicyEgressToTerraform, 
accountNetworkPolicyEgressToHclTerraform, 
AccountNetworkPolicyEgressOutputReference, 
AccountNetworkPolicyIngress, 
accountNetworkPolicyIngressToTerraform, 
accountNetworkPolicyIngressToHclTerraform, 
AccountNetworkPolicyIngressOutputReference, 
AccountNetworkPolicyIngressDryRun, 
accountNetworkPolicyIngressDryRunToTerraform, 
accountNetworkPolicyIngressDryRunToHclTerraform, 
AccountNetworkPolicyIngressDryRunOutputReference} from './index-structs/index';
export * from './index-structs/index';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AccountNetworkPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}
  */
  readonly egress?: AccountNetworkPolicyEgress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_network_policy#ingress AccountNetworkPolicy#ingress}
  */
  readonly ingress?: AccountNetworkPolicyIngress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_network_policy#ingress_dry_run AccountNetworkPolicy#ingress_dry_run}
  */
  readonly ingressDryRun?: AccountNetworkPolicyIngressDryRun;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}
  */
  readonly networkPolicyId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_network_policy databricks_account_network_policy}
*/
export class AccountNetworkPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_account_network_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AccountNetworkPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountNetworkPolicy to import
  * @param importFromId The id of the existing AccountNetworkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_network_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountNetworkPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_account_network_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/account_network_policy databricks_account_network_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountNetworkPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccountNetworkPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_account_network_policy',
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
    this._accountId = config.accountId;
    this._egress.internalValue = config.egress;
    this._ingress.internalValue = config.ingress;
    this._ingressDryRun.internalValue = config.ingressDryRun;
    this._networkPolicyId = config.networkPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new AccountNetworkPolicyEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }
  public putEgress(value: AccountNetworkPolicyEgress) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new AccountNetworkPolicyIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: AccountNetworkPolicyIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // ingress_dry_run - computed: false, optional: true, required: false
  private _ingressDryRun = new AccountNetworkPolicyIngressDryRunOutputReference(this, "ingress_dry_run");
  public get ingressDryRun() {
    return this._ingressDryRun;
  }
  public putIngressDryRun(value: AccountNetworkPolicyIngressDryRun) {
    this._ingressDryRun.internalValue = value;
  }
  public resetIngressDryRun() {
    this._ingressDryRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressDryRunInput() {
    return this._ingressDryRun.internalValue;
  }

  // network_policy_id - computed: false, optional: true, required: false
  private _networkPolicyId?: string; 
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }
  public set networkPolicyId(value: string) {
    this._networkPolicyId = value;
  }
  public resetNetworkPolicyId() {
    this._networkPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyIdInput() {
    return this._networkPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      egress: accountNetworkPolicyEgressToTerraform(this._egress.internalValue),
      ingress: accountNetworkPolicyIngressToTerraform(this._ingress.internalValue),
      ingress_dry_run: accountNetworkPolicyIngressDryRunToTerraform(this._ingressDryRun.internalValue),
      network_policy_id: cdktn.stringToTerraform(this._networkPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress: {
        value: accountNetworkPolicyEgressToHclTerraform(this._egress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountNetworkPolicyEgress",
      },
      ingress: {
        value: accountNetworkPolicyIngressToHclTerraform(this._ingress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountNetworkPolicyIngress",
      },
      ingress_dry_run: {
        value: accountNetworkPolicyIngressDryRunToHclTerraform(this._ingressDryRun.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountNetworkPolicyIngressDryRun",
      },
      network_policy_id: {
        value: cdktn.stringToHclTerraform(this._networkPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
