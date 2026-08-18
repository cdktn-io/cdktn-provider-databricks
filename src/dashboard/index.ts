/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DashboardConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#create_time Dashboard#create_time}
  */
  readonly createTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}
  */
  readonly dashboardChangeDetected?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}
  */
  readonly dashboardId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#dataset_catalog Dashboard#dataset_catalog}
  */
  readonly datasetCatalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#dataset_schema Dashboard#dataset_schema}
  */
  readonly datasetSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#display_name Dashboard#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}
  */
  readonly embedCredentials?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#etag Dashboard#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#file_path Dashboard#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}
  */
  readonly lifecycleState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#md5 Dashboard#md5}
  */
  readonly md5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#parent_path Dashboard#parent_path}
  */
  readonly parentPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#path Dashboard#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}
  */
  readonly serializedDashboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#update_time Dashboard#update_time}
  */
  readonly updateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}
  */
  readonly warehouseId: string;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#provider_config Dashboard#provider_config}
  */
  readonly providerConfig?: DashboardProviderConfig;
}
export interface DashboardProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#workspace_id Dashboard#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dashboardProviderConfigToTerraform(struct?: DashboardProviderConfigOutputReference | DashboardProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dashboardProviderConfigToHclTerraform(struct?: DashboardProviderConfigOutputReference | DashboardProviderConfig): any {
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

export class DashboardProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard databricks_dashboard}
*/
export class Dashboard extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Dashboard resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/dashboard databricks_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_dashboard',
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
    this._createTime = config.createTime;
    this._dashboardChangeDetected = config.dashboardChangeDetected;
    this._dashboardId = config.dashboardId;
    this._datasetCatalog = config.datasetCatalog;
    this._datasetSchema = config.datasetSchema;
    this._displayName = config.displayName;
    this._embedCredentials = config.embedCredentials;
    this._etag = config.etag;
    this._filePath = config.filePath;
    this._id = config.id;
    this._lifecycleState = config.lifecycleState;
    this._md5 = config.md5;
    this._parentPath = config.parentPath;
    this._path = config.path;
    this._serializedDashboard = config.serializedDashboard;
    this._updateTime = config.updateTime;
    this._warehouseId = config.warehouseId;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // dashboard_change_detected - computed: false, optional: true, required: false
  private _dashboardChangeDetected?: boolean | cdktn.IResolvable; 
  public get dashboardChangeDetected() {
    return this.getBooleanAttribute('dashboard_change_detected');
  }
  public set dashboardChangeDetected(value: boolean | cdktn.IResolvable) {
    this._dashboardChangeDetected = value;
  }
  public resetDashboardChangeDetected() {
    this._dashboardChangeDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardChangeDetectedInput() {
    return this._dashboardChangeDetected;
  }

  // dashboard_id - computed: true, optional: true, required: false
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  public resetDashboardId() {
    this._dashboardId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // dataset_catalog - computed: false, optional: true, required: false
  private _datasetCatalog?: string; 
  public get datasetCatalog() {
    return this.getStringAttribute('dataset_catalog');
  }
  public set datasetCatalog(value: string) {
    this._datasetCatalog = value;
  }
  public resetDatasetCatalog() {
    this._datasetCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetCatalogInput() {
    return this._datasetCatalog;
  }

  // dataset_schema - computed: false, optional: true, required: false
  private _datasetSchema?: string; 
  public get datasetSchema() {
    return this.getStringAttribute('dataset_schema');
  }
  public set datasetSchema(value: string) {
    this._datasetSchema = value;
  }
  public resetDatasetSchema() {
    this._datasetSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetSchemaInput() {
    return this._datasetSchema;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // embed_credentials - computed: false, optional: true, required: false
  private _embedCredentials?: boolean | cdktn.IResolvable; 
  public get embedCredentials() {
    return this.getBooleanAttribute('embed_credentials');
  }
  public set embedCredentials(value: boolean | cdktn.IResolvable) {
    this._embedCredentials = value;
  }
  public resetEmbedCredentials() {
    this._embedCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedCredentialsInput() {
    return this._embedCredentials;
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
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

  // lifecycle_state - computed: true, optional: true, required: false
  private _lifecycleState?: string; 
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }
  public set lifecycleState(value: string) {
    this._lifecycleState = value;
  }
  public resetLifecycleState() {
    this._lifecycleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStateInput() {
    return this._lifecycleState;
  }

  // md5 - computed: true, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
  }

  // parent_path - computed: false, optional: false, required: true
  private _parentPath?: string; 
  public get parentPath() {
    return this.getStringAttribute('parent_path');
  }
  public set parentPath(value: string) {
    this._parentPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPathInput() {
    return this._parentPath;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // serialized_dashboard - computed: false, optional: true, required: false
  private _serializedDashboard?: string; 
  public get serializedDashboard() {
    return this.getStringAttribute('serialized_dashboard');
  }
  public set serializedDashboard(value: string) {
    this._serializedDashboard = value;
  }
  public resetSerializedDashboard() {
    this._serializedDashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializedDashboardInput() {
    return this._serializedDashboard;
  }

  // update_time - computed: true, optional: true, required: false
  private _updateTime?: string; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }

  // warehouse_id - computed: false, optional: false, required: true
  private _warehouseId?: string; 
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
  public set warehouseId(value: string) {
    this._warehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseIdInput() {
    return this._warehouseId;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DashboardProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DashboardProviderConfig) {
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
      create_time: cdktn.stringToTerraform(this._createTime),
      dashboard_change_detected: cdktn.booleanToTerraform(this._dashboardChangeDetected),
      dashboard_id: cdktn.stringToTerraform(this._dashboardId),
      dataset_catalog: cdktn.stringToTerraform(this._datasetCatalog),
      dataset_schema: cdktn.stringToTerraform(this._datasetSchema),
      display_name: cdktn.stringToTerraform(this._displayName),
      embed_credentials: cdktn.booleanToTerraform(this._embedCredentials),
      etag: cdktn.stringToTerraform(this._etag),
      file_path: cdktn.stringToTerraform(this._filePath),
      id: cdktn.stringToTerraform(this._id),
      lifecycle_state: cdktn.stringToTerraform(this._lifecycleState),
      md5: cdktn.stringToTerraform(this._md5),
      parent_path: cdktn.stringToTerraform(this._parentPath),
      path: cdktn.stringToTerraform(this._path),
      serialized_dashboard: cdktn.stringToTerraform(this._serializedDashboard),
      update_time: cdktn.stringToTerraform(this._updateTime),
      warehouse_id: cdktn.stringToTerraform(this._warehouseId),
      provider_config: dashboardProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_time: {
        value: cdktn.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_change_detected: {
        value: cdktn.booleanToHclTerraform(this._dashboardChangeDetected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dashboard_id: {
        value: cdktn.stringToHclTerraform(this._dashboardId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset_catalog: {
        value: cdktn.stringToHclTerraform(this._datasetCatalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset_schema: {
        value: cdktn.stringToHclTerraform(this._datasetSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      embed_credentials: {
        value: cdktn.booleanToHclTerraform(this._embedCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      etag: {
        value: cdktn.stringToHclTerraform(this._etag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_path: {
        value: cdktn.stringToHclTerraform(this._filePath),
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
      lifecycle_state: {
        value: cdktn.stringToHclTerraform(this._lifecycleState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      md5: {
        value: cdktn.stringToHclTerraform(this._md5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_path: {
        value: cdktn.stringToHclTerraform(this._parentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serialized_dashboard: {
        value: cdktn.stringToHclTerraform(this._serializedDashboard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_time: {
        value: cdktn.stringToHclTerraform(this._updateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse_id: {
        value: cdktn.stringToHclTerraform(this._warehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dashboardProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
