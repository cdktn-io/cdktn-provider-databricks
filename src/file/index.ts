/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file#content_base64 File#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file#id File#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file#md5 File#md5}
  */
  readonly md5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file#path File#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file#remote_file_modified File#remote_file_modified}
  */
  readonly remoteFileModified?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file#source File#source}
  */
  readonly source?: string;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file#provider_config File#provider_config}
  */
  readonly providerConfig?: FileProviderConfig;
}
export interface FileProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file#workspace_id File#workspace_id}
  */
  readonly workspaceId?: string;
}

export function fileProviderConfigToTerraform(struct?: FileProviderConfigOutputReference | FileProviderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function fileProviderConfigToHclTerraform(struct?: FileProviderConfigOutputReference | FileProviderConfig): any {
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

export class FileProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileProviderConfig | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file databricks_file}
*/
export class File extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a File resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the File to import
  * @param importFromId The id of the existing File that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the File to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/file databricks_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileConfig
  */
  public constructor(scope: Construct, id: string, config: FileConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_file',
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
    this._contentBase64 = config.contentBase64;
    this._id = config.id;
    this._md5 = config.md5;
    this._path = config.path;
    this._remoteFileModified = config.remoteFileModified;
    this._source = config.source;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_base64 - computed: false, optional: true, required: false
  private _contentBase64?: string; 
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }
  public set contentBase64(value: string) {
    this._contentBase64 = value;
  }
  public resetContentBase64() {
    this._contentBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBase64Input() {
    return this._contentBase64;
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

  // md5 - computed: false, optional: true, required: false
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

  // modification_time - computed: true, optional: false, required: false
  public get modificationTime() {
    return this.getStringAttribute('modification_time');
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

  // remote_file_modified - computed: false, optional: true, required: false
  private _remoteFileModified?: boolean | cdktn.IResolvable; 
  public get remoteFileModified() {
    return this.getBooleanAttribute('remote_file_modified');
  }
  public set remoteFileModified(value: boolean | cdktn.IResolvable) {
    this._remoteFileModified = value;
  }
  public resetRemoteFileModified() {
    this._remoteFileModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileModifiedInput() {
    return this._remoteFileModified;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new FileProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: FileProviderConfig) {
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
      content_base64: cdktn.stringToTerraform(this._contentBase64),
      id: cdktn.stringToTerraform(this._id),
      md5: cdktn.stringToTerraform(this._md5),
      path: cdktn.stringToTerraform(this._path),
      remote_file_modified: cdktn.booleanToTerraform(this._remoteFileModified),
      source: cdktn.stringToTerraform(this._source),
      provider_config: fileProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_base64: {
        value: cdktn.stringToHclTerraform(this._contentBase64),
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
      md5: {
        value: cdktn.stringToHclTerraform(this._md5),
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
      remote_file_modified: {
        value: cdktn.booleanToHclTerraform(this._remoteFileModified),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source: {
        value: cdktn.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: fileProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileProviderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
