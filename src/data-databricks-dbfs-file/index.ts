/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/dbfs_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksDbfsFileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/dbfs_file#id DataDatabricksDbfsFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/dbfs_file#limit_file_size DataDatabricksDbfsFile#limit_file_size}
  */
  readonly limitFileSize: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/dbfs_file#path DataDatabricksDbfsFile#path}
  */
  readonly path: string;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/dbfs_file#provider_config DataDatabricksDbfsFile#provider_config}
  */
  readonly providerConfig?: DataDatabricksDbfsFileProviderConfig;
}
export interface DataDatabricksDbfsFileProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/dbfs_file#workspace_id DataDatabricksDbfsFile#workspace_id}
  */
  readonly workspaceId: string;
}

export function dataDatabricksDbfsFileProviderConfigToTerraform(struct?: DataDatabricksDbfsFileProviderConfigOutputReference | DataDatabricksDbfsFileProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksDbfsFileProviderConfigToHclTerraform(struct?: DataDatabricksDbfsFileProviderConfigOutputReference | DataDatabricksDbfsFileProviderConfig): any {
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

export class DataDatabricksDbfsFileProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksDbfsFileProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDbfsFileProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/dbfs_file databricks_dbfs_file}
*/
export class DataDatabricksDbfsFile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_dbfs_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksDbfsFile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDbfsFile to import
  * @param importFromId The id of the existing DataDatabricksDbfsFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/dbfs_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDbfsFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_dbfs_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.113.0/docs/data-sources/dbfs_file databricks_dbfs_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDbfsFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDbfsFileConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_dbfs_file',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.113.0',
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
    this._id = config.id;
    this._limitFileSize = config.limitFileSize;
    this._path = config.path;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // file_size - computed: true, optional: false, required: false
  public get fileSize() {
    return this.getNumberAttribute('file_size');
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

  // limit_file_size - computed: false, optional: false, required: true
  private _limitFileSize?: boolean | cdktn.IResolvable; 
  public get limitFileSize() {
    return this.getBooleanAttribute('limit_file_size');
  }
  public set limitFileSize(value: boolean | cdktn.IResolvable) {
    this._limitFileSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitFileSizeInput() {
    return this._limitFileSize;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksDbfsFileProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksDbfsFileProviderConfig) {
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
      id: cdktn.stringToTerraform(this._id),
      limit_file_size: cdktn.booleanToTerraform(this._limitFileSize),
      path: cdktn.stringToTerraform(this._path),
      provider_config: dataDatabricksDbfsFileProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_file_size: {
        value: cdktn.booleanToHclTerraform(this._limitFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksDbfsFileProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksDbfsFileProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
