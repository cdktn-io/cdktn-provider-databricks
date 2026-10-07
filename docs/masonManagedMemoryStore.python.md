# `masonManagedMemoryStore` Submodule <a name="`masonManagedMemoryStore` Submodule" id="@cdktn/provider-databricks.masonManagedMemoryStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MasonManagedMemoryStore <a name="MasonManagedMemoryStore" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store databricks_mason_managed_memory_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_store

masonManagedMemoryStore.MasonManagedMemoryStore(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  managed_memory_store_id: str,
  description: str = None,
  display_name: str = None,
  provider_config: MasonManagedMemoryStoreProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.managedMemoryStoreId">managed_memory_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#managed_memory_store_id MasonManagedMemoryStore#managed_memory_store_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#description MasonManagedMemoryStore#description}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#display_name MasonManagedMemoryStore#display_name}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#provider_config MasonManagedMemoryStore#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `managed_memory_store_id`<sup>Required</sup> <a name="managed_memory_store_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.managedMemoryStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#managed_memory_store_id MasonManagedMemoryStore#managed_memory_store_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#description MasonManagedMemoryStore#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#display_name MasonManagedMemoryStore#display_name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#provider_config MasonManagedMemoryStore#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#workspace_id MasonManagedMemoryStore#workspace_id}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MasonManagedMemoryStore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isConstruct"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_store

masonManagedMemoryStore.MasonManagedMemoryStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformElement"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_store

masonManagedMemoryStore.MasonManagedMemoryStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformResource"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_store

masonManagedMemoryStore.MasonManagedMemoryStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_store

masonManagedMemoryStore.MasonManagedMemoryStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MasonManagedMemoryStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MasonManagedMemoryStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MasonManagedMemoryStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MasonManagedMemoryStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.creatorUserId">creator_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.ownerUserId">owner_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference">MasonManagedMemoryStoreProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.storageBackend">storage_backend</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference">MasonManagedMemoryStoreStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.managedMemoryStoreIdInput">managed_memory_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.managedMemoryStoreId">managed_memory_store_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator_user_id`<sup>Required</sup> <a name="creator_user_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.creatorUserId"></a>

```python
creator_user_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_user_id`<sup>Required</sup> <a name="owner_user_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.ownerUserId"></a>

```python
owner_user_id: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.providerConfig"></a>

```python
provider_config: MasonManagedMemoryStoreProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference">MasonManagedMemoryStoreProviderConfigOutputReference</a>

---

##### `storage_backend`<sup>Required</sup> <a name="storage_backend" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.storageBackend"></a>

```python
storage_backend: MasonManagedMemoryStoreStorageBackendOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference">MasonManagedMemoryStoreStorageBackendOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `managed_memory_store_id_input`<sup>Optional</sup> <a name="managed_memory_store_id_input" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.managedMemoryStoreIdInput"></a>

```python
managed_memory_store_id_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | MasonManagedMemoryStoreProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `managed_memory_store_id`<sup>Required</sup> <a name="managed_memory_store_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.managedMemoryStoreId"></a>

```python
managed_memory_store_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MasonManagedMemoryStoreConfig <a name="MasonManagedMemoryStoreConfig" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.Initializer"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_store

masonManagedMemoryStore.MasonManagedMemoryStoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  managed_memory_store_id: str,
  description: str = None,
  display_name: str = None,
  provider_config: MasonManagedMemoryStoreProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.managedMemoryStoreId">managed_memory_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#managed_memory_store_id MasonManagedMemoryStore#managed_memory_store_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#description MasonManagedMemoryStore#description}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#display_name MasonManagedMemoryStore#display_name}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#provider_config MasonManagedMemoryStore#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `managed_memory_store_id`<sup>Required</sup> <a name="managed_memory_store_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.managedMemoryStoreId"></a>

```python
managed_memory_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#managed_memory_store_id MasonManagedMemoryStore#managed_memory_store_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#description MasonManagedMemoryStore#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#display_name MasonManagedMemoryStore#display_name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreConfig.property.providerConfig"></a>

```python
provider_config: MasonManagedMemoryStoreProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#provider_config MasonManagedMemoryStore#provider_config}.

---

### MasonManagedMemoryStoreProviderConfig <a name="MasonManagedMemoryStoreProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_store

masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#workspace_id MasonManagedMemoryStore#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_store#workspace_id MasonManagedMemoryStore#workspace_id}.

---

### MasonManagedMemoryStoreStorageBackend <a name="MasonManagedMemoryStoreStorageBackend" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackend.Initializer"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_store

masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackend()
```


## Classes <a name="Classes" id="Classes"></a>

### MasonManagedMemoryStoreProviderConfigOutputReference <a name="MasonManagedMemoryStoreProviderConfigOutputReference" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_store

masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MasonManagedMemoryStoreProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreProviderConfig">MasonManagedMemoryStoreProviderConfig</a>

---


### MasonManagedMemoryStoreStorageBackendOutputReference <a name="MasonManagedMemoryStoreStorageBackendOutputReference" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import mason_managed_memory_store

masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.backendId">backend_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.backendType">backend_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackend">MasonManagedMemoryStoreStorageBackend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_id`<sup>Required</sup> <a name="backend_id" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.backendId"></a>

```python
backend_id: str
```

- *Type:* str

---

##### `backend_type`<sup>Required</sup> <a name="backend_type" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.backendType"></a>

```python
backend_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackendOutputReference.property.internalValue"></a>

```python
internal_value: MasonManagedMemoryStoreStorageBackend
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryStore.MasonManagedMemoryStoreStorageBackend">MasonManagedMemoryStoreStorageBackend</a>

---



