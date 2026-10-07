# `masonManagedMemoryEntry` Submodule <a name="`masonManagedMemoryEntry` Submodule" id="@cdktn/provider-databricks.masonManagedMemoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MasonManagedMemoryEntry <a name="MasonManagedMemoryEntry" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry databricks_mason_managed_memory_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_entry

masonManagedMemoryEntry.MasonManagedMemoryEntry(
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
  provider_config: MasonManagedMemoryEntryProviderConfig = None,
  session_id: str = None,
  source_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.actorId">actor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#actor_id MasonManagedMemoryEntry#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#parent MasonManagedMemoryEntry#parent}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#path MasonManagedMemoryEntry#path}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#content MasonManagedMemoryEntry#content}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#description MasonManagedMemoryEntry#description}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.managedMemoryEntryId">managed_memory_entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#managed_memory_entry_id MasonManagedMemoryEntry#managed_memory_entry_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#provider_config MasonManagedMemoryEntry#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.sessionId">session_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#session_id MasonManagedMemoryEntry#session_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#source_type MasonManagedMemoryEntry#source_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.actorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#actor_id MasonManagedMemoryEntry#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#parent MasonManagedMemoryEntry#parent}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#path MasonManagedMemoryEntry#path}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#content MasonManagedMemoryEntry#content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#description MasonManagedMemoryEntry#description}.

---

##### `managed_memory_entry_id`<sup>Optional</sup> <a name="managed_memory_entry_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.managedMemoryEntryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#managed_memory_entry_id MasonManagedMemoryEntry#managed_memory_entry_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#provider_config MasonManagedMemoryEntry#provider_config}.

---

##### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.sessionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#session_id MasonManagedMemoryEntry#session_id}.

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#source_type MasonManagedMemoryEntry#source_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetManagedMemoryEntryId">reset_managed_memory_entry_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSessionId">reset_session_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSourceType">reset_source_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#workspace_id MasonManagedMemoryEntry#workspace_id}.

---

##### `reset_content` <a name="reset_content" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_managed_memory_entry_id` <a name="reset_managed_memory_entry_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetManagedMemoryEntryId"></a>

```python
def reset_managed_memory_entry_id() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_session_id` <a name="reset_session_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSessionId"></a>

```python
def reset_session_id() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSourceType"></a>

```python
def reset_source_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MasonManagedMemoryEntry resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_entry

masonManagedMemoryEntry.MasonManagedMemoryEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_entry

masonManagedMemoryEntry.MasonManagedMemoryEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_entry

masonManagedMemoryEntry.MasonManagedMemoryEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_entry

masonManagedMemoryEntry.MasonManagedMemoryEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MasonManagedMemoryEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MasonManagedMemoryEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MasonManagedMemoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MasonManagedMemoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference">MasonManagedMemoryEntryProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorIdInput">actor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryIdInput">managed_memory_entry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionIdInput">session_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorId">actor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryId">managed_memory_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionId">session_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfig"></a>

```python
provider_config: MasonManagedMemoryEntryProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference">MasonManagedMemoryEntryProviderConfigOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `actor_id_input`<sup>Optional</sup> <a name="actor_id_input" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorIdInput"></a>

```python
actor_id_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `managed_memory_entry_id_input`<sup>Optional</sup> <a name="managed_memory_entry_id_input" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryIdInput"></a>

```python
managed_memory_entry_id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | MasonManagedMemoryEntryProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

---

##### `session_id_input`<sup>Optional</sup> <a name="session_id_input" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionIdInput"></a>

```python
session_id_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `managed_memory_entry_id`<sup>Required</sup> <a name="managed_memory_entry_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryId"></a>

```python
managed_memory_entry_id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `session_id`<sup>Required</sup> <a name="session_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MasonManagedMemoryEntryConfig <a name="MasonManagedMemoryEntryConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.Initializer"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_entry

masonManagedMemoryEntry.MasonManagedMemoryEntryConfig(
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
  provider_config: MasonManagedMemoryEntryProviderConfig = None,
  session_id: str = None,
  source_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.actorId">actor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#actor_id MasonManagedMemoryEntry#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#parent MasonManagedMemoryEntry#parent}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#path MasonManagedMemoryEntry#path}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#content MasonManagedMemoryEntry#content}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#description MasonManagedMemoryEntry#description}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.managedMemoryEntryId">managed_memory_entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#managed_memory_entry_id MasonManagedMemoryEntry#managed_memory_entry_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#provider_config MasonManagedMemoryEntry#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sessionId">session_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#session_id MasonManagedMemoryEntry#session_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#source_type MasonManagedMemoryEntry#source_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#actor_id MasonManagedMemoryEntry#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#parent MasonManagedMemoryEntry#parent}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#path MasonManagedMemoryEntry#path}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#content MasonManagedMemoryEntry#content}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#description MasonManagedMemoryEntry#description}.

---

##### `managed_memory_entry_id`<sup>Optional</sup> <a name="managed_memory_entry_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.managedMemoryEntryId"></a>

```python
managed_memory_entry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#managed_memory_entry_id MasonManagedMemoryEntry#managed_memory_entry_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.providerConfig"></a>

```python
provider_config: MasonManagedMemoryEntryProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#provider_config MasonManagedMemoryEntry#provider_config}.

---

##### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#session_id MasonManagedMemoryEntry#session_id}.

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#source_type MasonManagedMemoryEntry#source_type}.

---

### MasonManagedMemoryEntryProviderConfig <a name="MasonManagedMemoryEntryProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_entry

masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#workspace_id MasonManagedMemoryEntry#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#workspace_id MasonManagedMemoryEntry#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MasonManagedMemoryEntryProviderConfigOutputReference <a name="MasonManagedMemoryEntryProviderConfigOutputReference" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_entry

masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MasonManagedMemoryEntryProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

---



