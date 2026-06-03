/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksSupervisorAgentToolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool#provider_config DataDatabricksSupervisorAgentTool#provider_config}
  */
  readonly providerConfig?: DataDatabricksSupervisorAgentToolProviderConfig;
}
export interface DataDatabricksSupervisorAgentToolApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}
  */
  readonly name: string;
}

export function dataDatabricksSupervisorAgentToolAppToTerraform(struct?: DataDatabricksSupervisorAgentToolApp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksSupervisorAgentToolAppToHclTerraform(struct?: DataDatabricksSupervisorAgentToolApp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSupervisorAgentToolAppOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksSupervisorAgentToolApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSupervisorAgentToolApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
}
export interface DataDatabricksSupervisorAgentToolGenieSpace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool#id DataDatabricksSupervisorAgentTool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataDatabricksSupervisorAgentToolGenieSpaceToTerraform(struct?: DataDatabricksSupervisorAgentToolGenieSpace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksSupervisorAgentToolGenieSpaceToHclTerraform(struct?: DataDatabricksSupervisorAgentToolGenieSpace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSupervisorAgentToolGenieSpaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksSupervisorAgentToolGenieSpace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSupervisorAgentToolGenieSpace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataDatabricksSupervisorAgentToolKnowledgeAssistant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool#knowledge_assistant_id DataDatabricksSupervisorAgentTool#knowledge_assistant_id}
  */
  readonly knowledgeAssistantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool#serving_endpoint_name DataDatabricksSupervisorAgentTool#serving_endpoint_name}
  */
  readonly servingEndpointName?: string;
}

export function dataDatabricksSupervisorAgentToolKnowledgeAssistantToTerraform(struct?: DataDatabricksSupervisorAgentToolKnowledgeAssistant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    knowledge_assistant_id: cdktn.stringToTerraform(struct!.knowledgeAssistantId),
    serving_endpoint_name: cdktn.stringToTerraform(struct!.servingEndpointName),
  }
}


export function dataDatabricksSupervisorAgentToolKnowledgeAssistantToHclTerraform(struct?: DataDatabricksSupervisorAgentToolKnowledgeAssistant): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    knowledge_assistant_id: {
      value: cdktn.stringToHclTerraform(struct!.knowledgeAssistantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serving_endpoint_name: {
      value: cdktn.stringToHclTerraform(struct!.servingEndpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksSupervisorAgentToolKnowledgeAssistant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knowledgeAssistantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.knowledgeAssistantId = this._knowledgeAssistantId;
    }
    if (this._servingEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servingEndpointName = this._servingEndpointName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSupervisorAgentToolKnowledgeAssistant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._knowledgeAssistantId = undefined;
      this._servingEndpointName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._knowledgeAssistantId = value.knowledgeAssistantId;
      this._servingEndpointName = value.servingEndpointName;
    }
  }

  // knowledge_assistant_id - computed: true, optional: false, required: true
  private _knowledgeAssistantId?: string; 
  public get knowledgeAssistantId() {
    return this.getStringAttribute('knowledge_assistant_id');
  }
  public set knowledgeAssistantId(value: string) {
    this._knowledgeAssistantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeAssistantIdInput() {
    return this._knowledgeAssistantId;
  }

  // serving_endpoint_name - computed: true, optional: true, required: false
  private _servingEndpointName?: string; 
  public get servingEndpointName() {
    return this.getStringAttribute('serving_endpoint_name');
  }
  public set servingEndpointName(value: string) {
    this._servingEndpointName = value;
  }
  public resetServingEndpointName() {
    this._servingEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servingEndpointNameInput() {
    return this._servingEndpointName;
  }
}
export interface DataDatabricksSupervisorAgentToolProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool#workspace_id DataDatabricksSupervisorAgentTool#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksSupervisorAgentToolProviderConfigToTerraform(struct?: DataDatabricksSupervisorAgentToolProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksSupervisorAgentToolProviderConfigToHclTerraform(struct?: DataDatabricksSupervisorAgentToolProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksSupervisorAgentToolProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksSupervisorAgentToolProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksSupervisorAgentToolProviderConfig | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksSupervisorAgentToolUcConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}
  */
  readonly name: string;
}

export function dataDatabricksSupervisorAgentToolUcConnectionToTerraform(struct?: DataDatabricksSupervisorAgentToolUcConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksSupervisorAgentToolUcConnectionToHclTerraform(struct?: DataDatabricksSupervisorAgentToolUcConnection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSupervisorAgentToolUcConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksSupervisorAgentToolUcConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSupervisorAgentToolUcConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
}
export interface DataDatabricksSupervisorAgentToolUcFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}
  */
  readonly name: string;
}

export function dataDatabricksSupervisorAgentToolUcFunctionToTerraform(struct?: DataDatabricksSupervisorAgentToolUcFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksSupervisorAgentToolUcFunctionToHclTerraform(struct?: DataDatabricksSupervisorAgentToolUcFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSupervisorAgentToolUcFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksSupervisorAgentToolUcFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSupervisorAgentToolUcFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
}
export interface DataDatabricksSupervisorAgentToolVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool#name DataDatabricksSupervisorAgentTool#name}
  */
  readonly name: string;
}

export function dataDatabricksSupervisorAgentToolVolumeToTerraform(struct?: DataDatabricksSupervisorAgentToolVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksSupervisorAgentToolVolumeToHclTerraform(struct?: DataDatabricksSupervisorAgentToolVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSupervisorAgentToolVolumeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksSupervisorAgentToolVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSupervisorAgentToolVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool databricks_supervisor_agent_tool}
*/
export class DataDatabricksSupervisorAgentTool extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_supervisor_agent_tool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksSupervisorAgentTool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksSupervisorAgentTool to import
  * @param importFromId The id of the existing DataDatabricksSupervisorAgentTool that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksSupervisorAgentTool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_supervisor_agent_tool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/supervisor_agent_tool databricks_supervisor_agent_tool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksSupervisorAgentToolConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksSupervisorAgentToolConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_supervisor_agent_tool',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.117.0',
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

  // app - computed: true, optional: false, required: false
  private _app = new DataDatabricksSupervisorAgentToolAppOutputReference(this, "app");
  public get app() {
    return this._app;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // genie_space - computed: true, optional: false, required: false
  private _genieSpace = new DataDatabricksSupervisorAgentToolGenieSpaceOutputReference(this, "genie_space");
  public get genieSpace() {
    return this._genieSpace;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // knowledge_assistant - computed: true, optional: false, required: false
  private _knowledgeAssistant = new DataDatabricksSupervisorAgentToolKnowledgeAssistantOutputReference(this, "knowledge_assistant");
  public get knowledgeAssistant() {
    return this._knowledgeAssistant;
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksSupervisorAgentToolProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksSupervisorAgentToolProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // tool_id - computed: true, optional: false, required: false
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }

  // tool_type - computed: true, optional: false, required: false
  public get toolType() {
    return this.getStringAttribute('tool_type');
  }

  // uc_connection - computed: true, optional: false, required: false
  private _ucConnection = new DataDatabricksSupervisorAgentToolUcConnectionOutputReference(this, "uc_connection");
  public get ucConnection() {
    return this._ucConnection;
  }

  // uc_function - computed: true, optional: false, required: false
  private _ucFunction = new DataDatabricksSupervisorAgentToolUcFunctionOutputReference(this, "uc_function");
  public get ucFunction() {
    return this._ucFunction;
  }

  // volume - computed: true, optional: false, required: false
  private _volume = new DataDatabricksSupervisorAgentToolVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksSupervisorAgentToolProviderConfigToTerraform(this._providerConfig.internalValue),
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
        value: dataDatabricksSupervisorAgentToolProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksSupervisorAgentToolProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
