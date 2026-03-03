/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SqlGlobalConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}
  */
  readonly dataAccessConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}
  */
  readonly enableServerlessCompute?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config#id SqlGlobalConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}
  */
  readonly sqlConfigParams?: { [key: string]: string };
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config#provider_config SqlGlobalConfig#provider_config}
  */
  readonly providerConfig?: SqlGlobalConfigProviderConfig;
}
export interface SqlGlobalConfigProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config#workspace_id SqlGlobalConfig#workspace_id}
  */
  readonly workspaceId: string;
}

export function sqlGlobalConfigProviderConfigToTerraform(struct?: SqlGlobalConfigProviderConfigOutputReference | SqlGlobalConfigProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function sqlGlobalConfigProviderConfigToHclTerraform(struct?: SqlGlobalConfigProviderConfigOutputReference | SqlGlobalConfigProviderConfig): any {
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

export class SqlGlobalConfigProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlGlobalConfigProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlGlobalConfigProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config databricks_sql_global_config}
*/
export class SqlGlobalConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_global_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SqlGlobalConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlGlobalConfig to import
  * @param importFromId The id of the existing SqlGlobalConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlGlobalConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_sql_global_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_global_config databricks_sql_global_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlGlobalConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SqlGlobalConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_global_config',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.110.0',
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
    this._dataAccessConfig = config.dataAccessConfig;
    this._enableServerlessCompute = config.enableServerlessCompute;
    this._googleServiceAccount = config.googleServiceAccount;
    this._id = config.id;
    this._instanceProfileArn = config.instanceProfileArn;
    this._securityPolicy = config.securityPolicy;
    this._sqlConfigParams = config.sqlConfigParams;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_access_config - computed: false, optional: true, required: false
  private _dataAccessConfig?: { [key: string]: string }; 
  public get dataAccessConfig() {
    return this.getStringMapAttribute('data_access_config');
  }
  public set dataAccessConfig(value: { [key: string]: string }) {
    this._dataAccessConfig = value;
  }
  public resetDataAccessConfig() {
    this._dataAccessConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessConfigInput() {
    return this._dataAccessConfig;
  }

  // enable_serverless_compute - computed: true, optional: true, required: false
  private _enableServerlessCompute?: boolean | cdktn.IResolvable; 
  public get enableServerlessCompute() {
    return this.getBooleanAttribute('enable_serverless_compute');
  }
  public set enableServerlessCompute(value: boolean | cdktn.IResolvable) {
    this._enableServerlessCompute = value;
  }
  public resetEnableServerlessCompute() {
    this._enableServerlessCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServerlessComputeInput() {
    return this._enableServerlessCompute;
  }

  // google_service_account - computed: false, optional: true, required: false
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
  public set googleServiceAccount(value: string) {
    this._googleServiceAccount = value;
  }
  public resetGoogleServiceAccount() {
    this._googleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
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

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // security_policy - computed: false, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
  }

  // sql_config_params - computed: false, optional: true, required: false
  private _sqlConfigParams?: { [key: string]: string }; 
  public get sqlConfigParams() {
    return this.getStringMapAttribute('sql_config_params');
  }
  public set sqlConfigParams(value: { [key: string]: string }) {
    this._sqlConfigParams = value;
  }
  public resetSqlConfigParams() {
    this._sqlConfigParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConfigParamsInput() {
    return this._sqlConfigParams;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new SqlGlobalConfigProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: SqlGlobalConfigProviderConfig) {
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
      data_access_config: cdktn.hashMapper(cdktn.stringToTerraform)(this._dataAccessConfig),
      enable_serverless_compute: cdktn.booleanToTerraform(this._enableServerlessCompute),
      google_service_account: cdktn.stringToTerraform(this._googleServiceAccount),
      id: cdktn.stringToTerraform(this._id),
      instance_profile_arn: cdktn.stringToTerraform(this._instanceProfileArn),
      security_policy: cdktn.stringToTerraform(this._securityPolicy),
      sql_config_params: cdktn.hashMapper(cdktn.stringToTerraform)(this._sqlConfigParams),
      provider_config: sqlGlobalConfigProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_access_config: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._dataAccessConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      enable_serverless_compute: {
        value: cdktn.booleanToHclTerraform(this._enableServerlessCompute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      google_service_account: {
        value: cdktn.stringToHclTerraform(this._googleServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_profile_arn: {
        value: cdktn.stringToHclTerraform(this._instanceProfileArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy: {
        value: cdktn.stringToHclTerraform(this._securityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_config_params: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._sqlConfigParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      provider_config: {
        value: sqlGlobalConfigProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlGlobalConfigProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
