# `agentKitManagedMemoryEntry` Submodule <a name="`agentKitManagedMemoryEntry` Submodule" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentKitManagedMemoryEntry <a name="AgentKitManagedMemoryEntry" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry databricks_agent_kit_managed_memory_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer"></a>

```python
from cdktn_provider_databricks import agent_kit_managed_memory_entry

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actor_id: str,
  parent: str,
  path: str,
  content: str = None,
  description: str = None,
  managed_memory_entry_id: str = None,
  provider_config: AgentKitManagedMemoryEntryProviderConfig = None,
  session_id: str = None,
  source_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.actorId">actor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#actor_id AgentKitManagedMemoryEntry#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#parent AgentKitManagedMemoryEntry#parent}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#path AgentKitManagedMemoryEntry#path}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#content AgentKitManagedMemoryEntry#content}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#description AgentKitManagedMemoryEntry#description}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.managedMemoryEntryId">managed_memory_entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#managed_memory_entry_id AgentKitManagedMemoryEntry#managed_memory_entry_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#provider_config AgentKitManagedMemoryEntry#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.sessionId">session_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#session_id AgentKitManagedMemoryEntry#session_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#source_type AgentKitManagedMemoryEntry#source_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.actorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#actor_id AgentKitManagedMemoryEntry#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#parent AgentKitManagedMemoryEntry#parent}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#path AgentKitManagedMemoryEntry#path}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#content AgentKitManagedMemoryEntry#content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#description AgentKitManagedMemoryEntry#description}.

---

##### `managed_memory_entry_id`<sup>Optional</sup> <a name="managed_memory_entry_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.managedMemoryEntryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#managed_memory_entry_id AgentKitManagedMemoryEntry#managed_memory_entry_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#provider_config AgentKitManagedMemoryEntry#provider_config}.

---

##### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.sessionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#session_id AgentKitManagedMemoryEntry#session_id}.

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#source_type AgentKitManagedMemoryEntry#source_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetManagedMemoryEntryId">reset_managed_memory_entry_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSessionId">reset_session_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSourceType">reset_source_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#workspace_id AgentKitManagedMemoryEntry#workspace_id}.

---

##### `reset_content` <a name="reset_content" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_managed_memory_entry_id` <a name="reset_managed_memory_entry_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetManagedMemoryEntryId"></a>

```python
def reset_managed_memory_entry_id() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_session_id` <a name="reset_session_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSessionId"></a>

```python
def reset_session_id() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSourceType"></a>

```python
def reset_source_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AgentKitManagedMemoryEntry resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isConstruct"></a>

```python
from cdktn_provider_databricks import agent_kit_managed_memory_entry

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformElement"></a>

```python
from cdktn_provider_databricks import agent_kit_managed_memory_entry

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformResource"></a>

```python
from cdktn_provider_databricks import agent_kit_managed_memory_entry

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import agent_kit_managed_memory_entry

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AgentKitManagedMemoryEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AgentKitManagedMemoryEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AgentKitManagedMemoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AgentKitManagedMemoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference">AgentKitManagedMemoryEntryProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorIdInput">actor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryIdInput">managed_memory_entry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionIdInput">session_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorId">actor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryId">managed_memory_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionId">session_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfig"></a>

```python
provider_config: AgentKitManagedMemoryEntryProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference">AgentKitManagedMemoryEntryProviderConfigOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `actor_id_input`<sup>Optional</sup> <a name="actor_id_input" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorIdInput"></a>

```python
actor_id_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `managed_memory_entry_id_input`<sup>Optional</sup> <a name="managed_memory_entry_id_input" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryIdInput"></a>

```python
managed_memory_entry_id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | AgentKitManagedMemoryEntryProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a>

---

##### `session_id_input`<sup>Optional</sup> <a name="session_id_input" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionIdInput"></a>

```python
session_id_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `managed_memory_entry_id`<sup>Required</sup> <a name="managed_memory_entry_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryId"></a>

```python
managed_memory_entry_id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `session_id`<sup>Required</sup> <a name="session_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AgentKitManagedMemoryEntryConfig <a name="AgentKitManagedMemoryEntryConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.Initializer"></a>

```python
from cdktn_provider_databricks import agent_kit_managed_memory_entry

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actor_id: str,
  parent: str,
  path: str,
  content: str = None,
  description: str = None,
  managed_memory_entry_id: str = None,
  provider_config: AgentKitManagedMemoryEntryProviderConfig = None,
  session_id: str = None,
  source_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.actorId">actor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#actor_id AgentKitManagedMemoryEntry#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#parent AgentKitManagedMemoryEntry#parent}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#path AgentKitManagedMemoryEntry#path}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#content AgentKitManagedMemoryEntry#content}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#description AgentKitManagedMemoryEntry#description}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.managedMemoryEntryId">managed_memory_entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#managed_memory_entry_id AgentKitManagedMemoryEntry#managed_memory_entry_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#provider_config AgentKitManagedMemoryEntry#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sessionId">session_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#session_id AgentKitManagedMemoryEntry#session_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#source_type AgentKitManagedMemoryEntry#source_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#actor_id AgentKitManagedMemoryEntry#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#parent AgentKitManagedMemoryEntry#parent}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#path AgentKitManagedMemoryEntry#path}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#content AgentKitManagedMemoryEntry#content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#description AgentKitManagedMemoryEntry#description}.

---

##### `managed_memory_entry_id`<sup>Optional</sup> <a name="managed_memory_entry_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.managedMemoryEntryId"></a>

```python
managed_memory_entry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#managed_memory_entry_id AgentKitManagedMemoryEntry#managed_memory_entry_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.providerConfig"></a>

```python
provider_config: AgentKitManagedMemoryEntryProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#provider_config AgentKitManagedMemoryEntry#provider_config}.

---

##### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#session_id AgentKitManagedMemoryEntry#session_id}.

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#source_type AgentKitManagedMemoryEntry#source_type}.

---

### AgentKitManagedMemoryEntryProviderConfig <a name="AgentKitManagedMemoryEntryProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import agent_kit_managed_memory_entry

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#workspace_id AgentKitManagedMemoryEntry#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#workspace_id AgentKitManagedMemoryEntry#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentKitManagedMemoryEntryProviderConfigOutputReference <a name="AgentKitManagedMemoryEntryProviderConfigOutputReference" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import agent_kit_managed_memory_entry

agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AgentKitManagedMemoryEntryProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a>

---



