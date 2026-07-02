/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/data_quality_refresh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataQualityRefreshConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/data_quality_refresh#object_id DataQualityRefresh#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/data_quality_refresh#object_type DataQualityRefresh#object_type}
  */
  readonly objectType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/data_quality_refresh#provider_config DataQualityRefresh#provider_config}
  */
  readonly providerConfig?: DataQualityRefreshProviderConfig;
}
export interface DataQualityRefreshProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/data_quality_refresh#workspace_id DataQualityRefresh#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataQualityRefreshProviderConfigToTerraform(struct?: DataQualityRefreshProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataQualityRefreshProviderConfigToHclTerraform(struct?: DataQualityRefreshProviderConfig | cdktn.IResolvable): any {
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

export class DataQualityRefreshProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataQualityRefreshProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataQualityRefreshProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/data_quality_refresh databricks_data_quality_refresh}
*/
export class DataQualityRefresh extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_data_quality_refresh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataQualityRefresh resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataQualityRefresh to import
  * @param importFromId The id of the existing DataQualityRefresh that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/data_quality_refresh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataQualityRefresh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_data_quality_refresh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/resources/data_quality_refresh databricks_data_quality_refresh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataQualityRefreshConfig
  */
  public constructor(scope: Construct, id: string, config: DataQualityRefreshConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_data_quality_refresh',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.120.0',
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
    this._objectId = config.objectId;
    this._objectType = config.objectType;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_time_ms - computed: true, optional: false, required: false
  public get endTimeMs() {
    return this.getNumberAttribute('end_time_ms');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataQualityRefreshProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataQualityRefreshProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // refresh_id - computed: true, optional: false, required: false
  public get refreshId() {
    return this.getNumberAttribute('refresh_id');
  }

  // start_time_ms - computed: true, optional: false, required: false
  public get startTimeMs() {
    return this.getNumberAttribute('start_time_ms');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    return this.getStringAttribute('trigger');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      object_id: cdktn.stringToTerraform(this._objectId),
      object_type: cdktn.stringToTerraform(this._objectType),
      provider_config: dataQualityRefreshProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      object_id: {
        value: cdktn.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktn.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataQualityRefreshProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataQualityRefreshProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
