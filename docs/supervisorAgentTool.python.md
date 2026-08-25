# `supervisorAgentTool` Submodule <a name="`supervisorAgentTool` Submodule" id="@cdktn/provider-databricks.supervisorAgentTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupervisorAgentTool <a name="SupervisorAgentTool" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool databricks_supervisor_agent_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentTool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  tool_id: str,
  tool_type: str,
  app: SupervisorAgentToolApp = None,
  description: str = None,
  genie_space: SupervisorAgentToolGenieSpace = None,
  knowledge_assistant: SupervisorAgentToolKnowledgeAssistant = None,
  provider_config: SupervisorAgentToolProviderConfig = None,
  uc_connection: SupervisorAgentToolUcConnection = None,
  uc_function: SupervisorAgentToolUcFunction = None,
  volume: SupervisorAgentToolVolume = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.toolId">tool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.toolType">tool_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.knowledgeAssistant">knowledge_assistant</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.ucConnection">uc_connection</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.ucFunction">uc_function</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}.

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.toolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}.

---

##### `tool_type`<sup>Required</sup> <a name="tool_type" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.toolType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.app"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}.

---

##### `genie_space`<sup>Optional</sup> <a name="genie_space" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.genieSpace"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}.

---

##### `knowledge_assistant`<sup>Optional</sup> <a name="knowledge_assistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.knowledgeAssistant"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}.

---

##### `uc_connection`<sup>Optional</sup> <a name="uc_connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.ucConnection"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}.

---

##### `uc_function`<sup>Optional</sup> <a name="uc_function" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.ucFunction"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.Initializer.parameter.volume"></a>

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp">put_app</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace">put_genie_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant">put_knowledge_assistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection">put_uc_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction">put_uc_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetApp">reset_app</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetGenieSpace">reset_genie_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetKnowledgeAssistant">reset_knowledge_assistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcConnection">reset_uc_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcFunction">reset_uc_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetVolume">reset_volume</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app` <a name="put_app" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp"></a>

```python
def put_app(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putApp.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

##### `put_genie_space` <a name="put_genie_space" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace"></a>

```python
def put_genie_space(
  id: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putGenieSpace.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#id SupervisorAgentTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `put_knowledge_assistant` <a name="put_knowledge_assistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant"></a>

```python
def put_knowledge_assistant(
  knowledge_assistant_id: str,
  serving_endpoint_name: str = None
) -> None
```

###### `knowledge_assistant_id`<sup>Required</sup> <a name="knowledge_assistant_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant.parameter.knowledgeAssistantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#knowledge_assistant_id SupervisorAgentTool#knowledge_assistant_id}.

---

###### `serving_endpoint_name`<sup>Optional</sup> <a name="serving_endpoint_name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putKnowledgeAssistant.parameter.servingEndpointName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#serving_endpoint_name SupervisorAgentTool#serving_endpoint_name}.

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#workspace_id SupervisorAgentTool#workspace_id}.

---

##### `put_uc_connection` <a name="put_uc_connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection"></a>

```python
def put_uc_connection(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcConnection.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

##### `put_uc_function` <a name="put_uc_function" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction"></a>

```python
def put_uc_function(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putUcFunction.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

##### `put_volume` <a name="put_volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume"></a>

```python
def put_volume(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.putVolume.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

##### `reset_app` <a name="reset_app" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetApp"></a>

```python
def reset_app() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_genie_space` <a name="reset_genie_space" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetGenieSpace"></a>

```python
def reset_genie_space() -> None
```

##### `reset_knowledge_assistant` <a name="reset_knowledge_assistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetKnowledgeAssistant"></a>

```python
def reset_knowledge_assistant() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_uc_connection` <a name="reset_uc_connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcConnection"></a>

```python
def reset_uc_connection() -> None
```

##### `reset_uc_function` <a name="reset_uc_function" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetUcFunction"></a>

```python
def reset_uc_function() -> None
```

##### `reset_volume` <a name="reset_volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.resetVolume"></a>

```python
def reset_volume() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SupervisorAgentTool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentTool.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentTool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentTool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentTool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SupervisorAgentTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SupervisorAgentTool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SupervisorAgentTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SupervisorAgentTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference">SupervisorAgentToolAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference">SupervisorAgentToolGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistant">knowledge_assistant</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference">SupervisorAgentToolKnowledgeAssistantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference">SupervisorAgentToolProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnection">uc_connection</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference">SupervisorAgentToolUcConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunction">uc_function</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference">SupervisorAgentToolUcFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference">SupervisorAgentToolVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.appInput">app_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpaceInput">genie_space_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistantInput">knowledge_assistant_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolIdInput">tool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolTypeInput">tool_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnectionInput">uc_connection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunctionInput">uc_function_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volumeInput">volume_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolId">tool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolType">tool_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.app"></a>

```python
app: SupervisorAgentToolAppOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference">SupervisorAgentToolAppOutputReference</a>

---

##### `genie_space`<sup>Required</sup> <a name="genie_space" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpace"></a>

```python
genie_space: SupervisorAgentToolGenieSpaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference">SupervisorAgentToolGenieSpaceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `knowledge_assistant`<sup>Required</sup> <a name="knowledge_assistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistant"></a>

```python
knowledge_assistant: SupervisorAgentToolKnowledgeAssistantOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference">SupervisorAgentToolKnowledgeAssistantOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfig"></a>

```python
provider_config: SupervisorAgentToolProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference">SupervisorAgentToolProviderConfigOutputReference</a>

---

##### `uc_connection`<sup>Required</sup> <a name="uc_connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnection"></a>

```python
uc_connection: SupervisorAgentToolUcConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference">SupervisorAgentToolUcConnectionOutputReference</a>

---

##### `uc_function`<sup>Required</sup> <a name="uc_function" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunction"></a>

```python
uc_function: SupervisorAgentToolUcFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference">SupervisorAgentToolUcFunctionOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volume"></a>

```python
volume: SupervisorAgentToolVolumeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference">SupervisorAgentToolVolumeOutputReference</a>

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.appInput"></a>

```python
app_input: IResolvable | SupervisorAgentToolApp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `genie_space_input`<sup>Optional</sup> <a name="genie_space_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.genieSpaceInput"></a>

```python
genie_space_input: IResolvable | SupervisorAgentToolGenieSpace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

---

##### `knowledge_assistant_input`<sup>Optional</sup> <a name="knowledge_assistant_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.knowledgeAssistantInput"></a>

```python
knowledge_assistant_input: IResolvable | SupervisorAgentToolKnowledgeAssistant
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | SupervisorAgentToolProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

---

##### `tool_id_input`<sup>Optional</sup> <a name="tool_id_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolIdInput"></a>

```python
tool_id_input: str
```

- *Type:* str

---

##### `tool_type_input`<sup>Optional</sup> <a name="tool_type_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolTypeInput"></a>

```python
tool_type_input: str
```

- *Type:* str

---

##### `uc_connection_input`<sup>Optional</sup> <a name="uc_connection_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucConnectionInput"></a>

```python
uc_connection_input: IResolvable | SupervisorAgentToolUcConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

---

##### `uc_function_input`<sup>Optional</sup> <a name="uc_function_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.ucFunctionInput"></a>

```python
uc_function_input: IResolvable | SupervisorAgentToolUcFunction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.volumeInput"></a>

```python
volume_input: IResolvable | SupervisorAgentToolVolume
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

---

##### `tool_type`<sup>Required</sup> <a name="tool_type" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.toolType"></a>

```python
tool_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentTool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SupervisorAgentToolApp <a name="SupervisorAgentToolApp" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolApp(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolConfig <a name="SupervisorAgentToolConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  tool_id: str,
  tool_type: str,
  app: SupervisorAgentToolApp = None,
  description: str = None,
  genie_space: SupervisorAgentToolGenieSpace = None,
  knowledge_assistant: SupervisorAgentToolKnowledgeAssistant = None,
  provider_config: SupervisorAgentToolProviderConfig = None,
  uc_connection: SupervisorAgentToolUcConnection = None,
  uc_function: SupervisorAgentToolUcFunction = None,
  volume: SupervisorAgentToolVolume = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolId">tool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolType">tool_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.knowledgeAssistant">knowledge_assistant</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucConnection">uc_connection</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucFunction">uc_function</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.volume">volume</a></code> | <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#parent SupervisorAgentTool#parent}.

---

##### `tool_id`<sup>Required</sup> <a name="tool_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolId"></a>

```python
tool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#tool_id SupervisorAgentTool#tool_id}.

---

##### `tool_type`<sup>Required</sup> <a name="tool_type" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.toolType"></a>

```python
tool_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#tool_type SupervisorAgentTool#tool_type}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.app"></a>

```python
app: SupervisorAgentToolApp
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#app SupervisorAgentTool#app}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#description SupervisorAgentTool#description}.

---

##### `genie_space`<sup>Optional</sup> <a name="genie_space" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.genieSpace"></a>

```python
genie_space: SupervisorAgentToolGenieSpace
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#genie_space SupervisorAgentTool#genie_space}.

---

##### `knowledge_assistant`<sup>Optional</sup> <a name="knowledge_assistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.knowledgeAssistant"></a>

```python
knowledge_assistant: SupervisorAgentToolKnowledgeAssistant
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#knowledge_assistant SupervisorAgentTool#knowledge_assistant}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.providerConfig"></a>

```python
provider_config: SupervisorAgentToolProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#provider_config SupervisorAgentTool#provider_config}.

---

##### `uc_connection`<sup>Optional</sup> <a name="uc_connection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucConnection"></a>

```python
uc_connection: SupervisorAgentToolUcConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#uc_connection SupervisorAgentTool#uc_connection}.

---

##### `uc_function`<sup>Optional</sup> <a name="uc_function" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.ucFunction"></a>

```python
uc_function: SupervisorAgentToolUcFunction
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#uc_function SupervisorAgentTool#uc_function}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolConfig.property.volume"></a>

```python
volume: SupervisorAgentToolVolume
```

- *Type:* <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#volume SupervisorAgentTool#volume}.

---

### SupervisorAgentToolGenieSpace <a name="SupervisorAgentToolGenieSpace" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolGenieSpace(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#id SupervisorAgentTool#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#id SupervisorAgentTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SupervisorAgentToolKnowledgeAssistant <a name="SupervisorAgentToolKnowledgeAssistant" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant(
  knowledge_assistant_id: str,
  serving_endpoint_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId">knowledge_assistant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#knowledge_assistant_id SupervisorAgentTool#knowledge_assistant_id}. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.servingEndpointName">serving_endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#serving_endpoint_name SupervisorAgentTool#serving_endpoint_name}. |

---

##### `knowledge_assistant_id`<sup>Required</sup> <a name="knowledge_assistant_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.knowledgeAssistantId"></a>

```python
knowledge_assistant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#knowledge_assistant_id SupervisorAgentTool#knowledge_assistant_id}.

---

##### `serving_endpoint_name`<sup>Optional</sup> <a name="serving_endpoint_name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant.property.servingEndpointName"></a>

```python
serving_endpoint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#serving_endpoint_name SupervisorAgentTool#serving_endpoint_name}.

---

### SupervisorAgentToolProviderConfig <a name="SupervisorAgentToolProviderConfig" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#workspace_id SupervisorAgentTool#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#workspace_id SupervisorAgentTool#workspace_id}.

---

### SupervisorAgentToolUcConnection <a name="SupervisorAgentToolUcConnection" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolUcConnection(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolUcFunction <a name="SupervisorAgentToolUcFunction" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolUcFunction(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

### SupervisorAgentToolVolume <a name="SupervisorAgentToolVolume" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolVolume(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/supervisor_agent_tool#name SupervisorAgentTool#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### SupervisorAgentToolAppOutputReference <a name="SupervisorAgentToolAppOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolAppOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolAppOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupervisorAgentToolApp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolApp">SupervisorAgentToolApp</a>

---


### SupervisorAgentToolGenieSpaceOutputReference <a name="SupervisorAgentToolGenieSpaceOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupervisorAgentToolGenieSpace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolGenieSpace">SupervisorAgentToolGenieSpace</a>

---


### SupervisorAgentToolKnowledgeAssistantOutputReference <a name="SupervisorAgentToolKnowledgeAssistantOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName">reset_serving_endpoint_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_serving_endpoint_name` <a name="reset_serving_endpoint_name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.resetServingEndpointName"></a>

```python
def reset_serving_endpoint_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput">knowledge_assistant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput">serving_endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId">knowledge_assistant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName">serving_endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `knowledge_assistant_id_input`<sup>Optional</sup> <a name="knowledge_assistant_id_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantIdInput"></a>

```python
knowledge_assistant_id_input: str
```

- *Type:* str

---

##### `serving_endpoint_name_input`<sup>Optional</sup> <a name="serving_endpoint_name_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointNameInput"></a>

```python
serving_endpoint_name_input: str
```

- *Type:* str

---

##### `knowledge_assistant_id`<sup>Required</sup> <a name="knowledge_assistant_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.knowledgeAssistantId"></a>

```python
knowledge_assistant_id: str
```

- *Type:* str

---

##### `serving_endpoint_name`<sup>Required</sup> <a name="serving_endpoint_name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.servingEndpointName"></a>

```python
serving_endpoint_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistantOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupervisorAgentToolKnowledgeAssistant
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolKnowledgeAssistant">SupervisorAgentToolKnowledgeAssistant</a>

---


### SupervisorAgentToolProviderConfigOutputReference <a name="SupervisorAgentToolProviderConfigOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupervisorAgentToolProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolProviderConfig">SupervisorAgentToolProviderConfig</a>

---


### SupervisorAgentToolUcConnectionOutputReference <a name="SupervisorAgentToolUcConnectionOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupervisorAgentToolUcConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcConnection">SupervisorAgentToolUcConnection</a>

---


### SupervisorAgentToolUcFunctionOutputReference <a name="SupervisorAgentToolUcFunctionOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunctionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupervisorAgentToolUcFunction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolUcFunction">SupervisorAgentToolUcFunction</a>

---


### SupervisorAgentToolVolumeOutputReference <a name="SupervisorAgentToolVolumeOutputReference" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import supervisor_agent_tool

supervisorAgentTool.SupervisorAgentToolVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolumeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SupervisorAgentToolVolume
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.supervisorAgentTool.SupervisorAgentToolVolume">SupervisorAgentToolVolume</a>

---



