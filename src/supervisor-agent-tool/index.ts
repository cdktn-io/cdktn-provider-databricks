/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SupervisorAgentToolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}
  */
  readonly app?: SupervisorAgentToolApp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}
  */
  readonly genieSpace?: SupervisorAgentToolGenieSpace;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}
  */
  readonly knowledgeAssistant?: SupervisorAgentToolKnowledgeAssistant;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}
  */
  readonly providerConfig?: SupervisorAgentToolProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}
  */
  readonly toolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}
  */
  readonly toolType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}
  */
  readonly ucConnection?: SupervisorAgentToolUcConnection;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}
  */
  readonly ucFunction?: SupervisorAgentToolUcFunction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}
  */
  readonly volume?: SupervisorAgentToolVolume;
}
export interface SupervisorAgentToolApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}
  */
  readonly name: string;
}

export function supervisorAgentToolAppToTerraform(struct?: SupervisorAgentToolApp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function supervisorAgentToolAppToHclTerraform(struct?: SupervisorAgentToolApp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class SupervisorAgentToolAppOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupervisorAgentToolApp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorAgentToolApp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface SupervisorAgentToolGenieSpace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#id SupervisorAgentTool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function supervisorAgentToolGenieSpaceToTerraform(struct?: SupervisorAgentToolGenieSpace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function supervisorAgentToolGenieSpaceToHclTerraform(struct?: SupervisorAgentToolGenieSpace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class SupervisorAgentToolGenieSpaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupervisorAgentToolGenieSpace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorAgentToolGenieSpace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
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
export interface SupervisorAgentToolKnowledgeAssistant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#knowledge_assistant_id SupervisorAgentTool#knowledge_assistant_id}
  */
  readonly knowledgeAssistantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#serving_endpoint_name SupervisorAgentTool#serving_endpoint_name}
  */
  readonly servingEndpointName?: string;
}

export function supervisorAgentToolKnowledgeAssistantToTerraform(struct?: SupervisorAgentToolKnowledgeAssistant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    knowledge_assistant_id: cdktn.stringToTerraform(struct!.knowledgeAssistantId),
    serving_endpoint_name: cdktn.stringToTerraform(struct!.servingEndpointName),
  }
}


export function supervisorAgentToolKnowledgeAssistantToHclTerraform(struct?: SupervisorAgentToolKnowledgeAssistant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class SupervisorAgentToolKnowledgeAssistantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupervisorAgentToolKnowledgeAssistant | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: SupervisorAgentToolKnowledgeAssistant | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knowledgeAssistantId = undefined;
      this._servingEndpointName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knowledgeAssistantId = value.knowledgeAssistantId;
      this._servingEndpointName = value.servingEndpointName;
    }
  }

  // knowledge_assistant_id - computed: false, optional: false, required: true
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

  // serving_endpoint_name - computed: false, optional: true, required: false
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
export interface SupervisorAgentToolProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#workspace_id SupervisorAgentTool#workspace_id}
  */
  readonly workspaceId?: string;
}

export function supervisorAgentToolProviderConfigToTerraform(struct?: SupervisorAgentToolProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function supervisorAgentToolProviderConfigToHclTerraform(struct?: SupervisorAgentToolProviderConfig | cdktn.IResolvable): any {
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

export class SupervisorAgentToolProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupervisorAgentToolProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SupervisorAgentToolProviderConfig | cdktn.IResolvable | undefined) {
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
export interface SupervisorAgentToolUcConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}
  */
  readonly name: string;
}

export function supervisorAgentToolUcConnectionToTerraform(struct?: SupervisorAgentToolUcConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function supervisorAgentToolUcConnectionToHclTerraform(struct?: SupervisorAgentToolUcConnection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class SupervisorAgentToolUcConnectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupervisorAgentToolUcConnection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorAgentToolUcConnection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface SupervisorAgentToolUcFunction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}
  */
  readonly name: string;
}

export function supervisorAgentToolUcFunctionToTerraform(struct?: SupervisorAgentToolUcFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function supervisorAgentToolUcFunctionToHclTerraform(struct?: SupervisorAgentToolUcFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class SupervisorAgentToolUcFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupervisorAgentToolUcFunction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorAgentToolUcFunction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface SupervisorAgentToolVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}
  */
  readonly name: string;
}

export function supervisorAgentToolVolumeToTerraform(struct?: SupervisorAgentToolVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function supervisorAgentToolVolumeToHclTerraform(struct?: SupervisorAgentToolVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class SupervisorAgentToolVolumeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupervisorAgentToolVolume | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorAgentToolVolume | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool databricks_supervisor_agent_tool}
*/
export class SupervisorAgentTool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_supervisor_agent_tool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SupervisorAgentTool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SupervisorAgentTool to import
  * @param importFromId The id of the existing SupervisorAgentTool that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SupervisorAgentTool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_supervisor_agent_tool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/supervisor_agent_tool databricks_supervisor_agent_tool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SupervisorAgentToolConfig
  */
  public constructor(scope: Construct, id: string, config: SupervisorAgentToolConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_supervisor_agent_tool',
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
    this._app.internalValue = config.app;
    this._description = config.description;
    this._genieSpace.internalValue = config.genieSpace;
    this._knowledgeAssistant.internalValue = config.knowledgeAssistant;
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
    this._toolId = config.toolId;
    this._toolType = config.toolType;
    this._ucConnection.internalValue = config.ucConnection;
    this._ucFunction.internalValue = config.ucFunction;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: true, required: false
  private _app = new SupervisorAgentToolAppOutputReference(this, "app");
  public get app() {
    return this._app;
  }
  public putApp(value: SupervisorAgentToolApp) {
    this._app.internalValue = value;
  }
  public resetApp() {
    this._app.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // genie_space - computed: false, optional: true, required: false
  private _genieSpace = new SupervisorAgentToolGenieSpaceOutputReference(this, "genie_space");
  public get genieSpace() {
    return this._genieSpace;
  }
  public putGenieSpace(value: SupervisorAgentToolGenieSpace) {
    this._genieSpace.internalValue = value;
  }
  public resetGenieSpace() {
    this._genieSpace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genieSpaceInput() {
    return this._genieSpace.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // knowledge_assistant - computed: false, optional: true, required: false
  private _knowledgeAssistant = new SupervisorAgentToolKnowledgeAssistantOutputReference(this, "knowledge_assistant");
  public get knowledgeAssistant() {
    return this._knowledgeAssistant;
  }
  public putKnowledgeAssistant(value: SupervisorAgentToolKnowledgeAssistant) {
    this._knowledgeAssistant.internalValue = value;
  }
  public resetKnowledgeAssistant() {
    this._knowledgeAssistant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeAssistantInput() {
    return this._knowledgeAssistant.internalValue;
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
  private _providerConfig = new SupervisorAgentToolProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: SupervisorAgentToolProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // tool_id - computed: false, optional: false, required: true
  private _toolId?: string; 
  public get toolId() {
    return this.getStringAttribute('tool_id');
  }
  public set toolId(value: string) {
    this._toolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolIdInput() {
    return this._toolId;
  }

  // tool_type - computed: false, optional: false, required: true
  private _toolType?: string; 
  public get toolType() {
    return this.getStringAttribute('tool_type');
  }
  public set toolType(value: string) {
    this._toolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolTypeInput() {
    return this._toolType;
  }

  // uc_connection - computed: false, optional: true, required: false
  private _ucConnection = new SupervisorAgentToolUcConnectionOutputReference(this, "uc_connection");
  public get ucConnection() {
    return this._ucConnection;
  }
  public putUcConnection(value: SupervisorAgentToolUcConnection) {
    this._ucConnection.internalValue = value;
  }
  public resetUcConnection() {
    this._ucConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucConnectionInput() {
    return this._ucConnection.internalValue;
  }

  // uc_function - computed: false, optional: true, required: false
  private _ucFunction = new SupervisorAgentToolUcFunctionOutputReference(this, "uc_function");
  public get ucFunction() {
    return this._ucFunction;
  }
  public putUcFunction(value: SupervisorAgentToolUcFunction) {
    this._ucFunction.internalValue = value;
  }
  public resetUcFunction() {
    this._ucFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucFunctionInput() {
    return this._ucFunction.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new SupervisorAgentToolVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: SupervisorAgentToolVolume) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: supervisorAgentToolAppToTerraform(this._app.internalValue),
      description: cdktn.stringToTerraform(this._description),
      genie_space: supervisorAgentToolGenieSpaceToTerraform(this._genieSpace.internalValue),
      knowledge_assistant: supervisorAgentToolKnowledgeAssistantToTerraform(this._knowledgeAssistant.internalValue),
      parent: cdktn.stringToTerraform(this._parent),
      provider_config: supervisorAgentToolProviderConfigToTerraform(this._providerConfig.internalValue),
      tool_id: cdktn.stringToTerraform(this._toolId),
      tool_type: cdktn.stringToTerraform(this._toolType),
      uc_connection: supervisorAgentToolUcConnectionToTerraform(this._ucConnection.internalValue),
      uc_function: supervisorAgentToolUcFunctionToTerraform(this._ucFunction.internalValue),
      volume: supervisorAgentToolVolumeToTerraform(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: supervisorAgentToolAppToHclTerraform(this._app.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SupervisorAgentToolApp",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      genie_space: {
        value: supervisorAgentToolGenieSpaceToHclTerraform(this._genieSpace.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SupervisorAgentToolGenieSpace",
      },
      knowledge_assistant: {
        value: supervisorAgentToolKnowledgeAssistantToHclTerraform(this._knowledgeAssistant.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SupervisorAgentToolKnowledgeAssistant",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: supervisorAgentToolProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SupervisorAgentToolProviderConfig",
      },
      tool_id: {
        value: cdktn.stringToHclTerraform(this._toolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tool_type: {
        value: cdktn.stringToHclTerraform(this._toolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uc_connection: {
        value: supervisorAgentToolUcConnectionToHclTerraform(this._ucConnection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SupervisorAgentToolUcConnection",
      },
      uc_function: {
        value: supervisorAgentToolUcFunctionToHclTerraform(this._ucFunction.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SupervisorAgentToolUcFunction",
      },
      volume: {
        value: supervisorAgentToolVolumeToHclTerraform(this._volume.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SupervisorAgentToolVolume",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
