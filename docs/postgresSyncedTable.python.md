# `postgresSyncedTable` Submodule <a name="`postgresSyncedTable` Submodule" id="@cdktn/provider-databricks.postgresSyncedTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresSyncedTable <a name="PostgresSyncedTable" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table databricks_postgres_synced_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  synced_table_id: str,
  provider_config: PostgresSyncedTableProviderConfig = None,
  spec: PostgresSyncedTableSpec = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.syncedTableId">synced_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `synced_table_id`<sup>Required</sup> <a name="synced_table_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.syncedTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetSpec">reset_spec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}.

---

##### `put_spec` <a name="put_spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec"></a>

```python
def put_spec(
  accelerated_sync: bool | IResolvable = None,
  branch: str = None,
  create_database_objects_if_missing: bool | IResolvable = None,
  existing_pipeline_id: str = None,
  extra_columns: IResolvable | typing.List[PostgresSyncedTableSpecExtraColumns] = None,
  new_pipeline_spec: PostgresSyncedTableSpecNewPipelineSpec = None,
  postgres_database: str = None,
  primary_key_columns: typing.List[str] = None,
  scheduling_policy: str = None,
  source_table_full_name: str = None,
  timeseries_key: str = None,
  type_overrides: IResolvable | typing.List[PostgresSyncedTableSpecTypeOverrides] = None
) -> None
```

###### `accelerated_sync`<sup>Optional</sup> <a name="accelerated_sync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.acceleratedSync"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#accelerated_sync PostgresSyncedTable#accelerated_sync}.

---

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}.

---

###### `create_database_objects_if_missing`<sup>Optional</sup> <a name="create_database_objects_if_missing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.createDatabaseObjectsIfMissing"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}.

---

###### `existing_pipeline_id`<sup>Optional</sup> <a name="existing_pipeline_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.existingPipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}.

---

###### `extra_columns`<sup>Optional</sup> <a name="extra_columns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.extraColumns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#extra_columns PostgresSyncedTable#extra_columns}.

---

###### `new_pipeline_spec`<sup>Optional</sup> <a name="new_pipeline_spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.newPipelineSpec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}.

---

###### `postgres_database`<sup>Optional</sup> <a name="postgres_database" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.postgresDatabase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}.

---

###### `primary_key_columns`<sup>Optional</sup> <a name="primary_key_columns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.primaryKeyColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}.

---

###### `scheduling_policy`<sup>Optional</sup> <a name="scheduling_policy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.schedulingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}.

---

###### `source_table_full_name`<sup>Optional</sup> <a name="source_table_full_name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.sourceTableFullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}.

---

###### `timeseries_key`<sup>Optional</sup> <a name="timeseries_key" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.timeseriesKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}.

---

###### `type_overrides`<sup>Optional</sup> <a name="type_overrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.typeOverrides"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#type_overrides PostgresSyncedTable#type_overrides}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetSpec"></a>

```python
def reset_spec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PostgresSyncedTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PostgresSyncedTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PostgresSyncedTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PostgresSyncedTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresSyncedTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference">PostgresSyncedTableProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference">PostgresSyncedTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference">PostgresSyncedTableStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.specInput">spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableIdInput">synced_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableId">synced_table_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfig"></a>

```python
provider_config: PostgresSyncedTableProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference">PostgresSyncedTableProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.spec"></a>

```python
spec: PostgresSyncedTableSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference">PostgresSyncedTableSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.status"></a>

```python
status: PostgresSyncedTableStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference">PostgresSyncedTableStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | PostgresSyncedTableProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.specInput"></a>

```python
spec_input: IResolvable | PostgresSyncedTableSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---

##### `synced_table_id_input`<sup>Optional</sup> <a name="synced_table_id_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableIdInput"></a>

```python
synced_table_id_input: str
```

- *Type:* str

---

##### `synced_table_id`<sup>Required</sup> <a name="synced_table_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableId"></a>

```python
synced_table_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresSyncedTableConfig <a name="PostgresSyncedTableConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  synced_table_id: str,
  provider_config: PostgresSyncedTableProviderConfig = None,
  spec: PostgresSyncedTableSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.syncedTableId">synced_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `synced_table_id`<sup>Required</sup> <a name="synced_table_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.syncedTableId"></a>

```python
synced_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.providerConfig"></a>

```python
provider_config: PostgresSyncedTableProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.spec"></a>

```python
spec: PostgresSyncedTableSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}.

---

### PostgresSyncedTableProviderConfig <a name="PostgresSyncedTableProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}.

---

### PostgresSyncedTableSpec <a name="PostgresSyncedTableSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableSpec(
  accelerated_sync: bool | IResolvable = None,
  branch: str = None,
  create_database_objects_if_missing: bool | IResolvable = None,
  existing_pipeline_id: str = None,
  extra_columns: IResolvable | typing.List[PostgresSyncedTableSpecExtraColumns] = None,
  new_pipeline_spec: PostgresSyncedTableSpecNewPipelineSpec = None,
  postgres_database: str = None,
  primary_key_columns: typing.List[str] = None,
  scheduling_policy: str = None,
  source_table_full_name: str = None,
  timeseries_key: str = None,
  type_overrides: IResolvable | typing.List[PostgresSyncedTableSpecTypeOverrides] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.acceleratedSync">accelerated_sync</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#accelerated_sync PostgresSyncedTable#accelerated_sync}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing">create_database_objects_if_missing</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.existingPipelineId">existing_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.extraColumns">extra_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#extra_columns PostgresSyncedTable#extra_columns}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.newPipelineSpec">new_pipeline_spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.postgresDatabase">postgres_database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.primaryKeyColumns">primary_key_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.sourceTableFullName">source_table_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.timeseriesKey">timeseries_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.typeOverrides">type_overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#type_overrides PostgresSyncedTable#type_overrides}. |

---

##### `accelerated_sync`<sup>Optional</sup> <a name="accelerated_sync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.acceleratedSync"></a>

```python
accelerated_sync: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#accelerated_sync PostgresSyncedTable#accelerated_sync}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}.

---

##### `create_database_objects_if_missing`<sup>Optional</sup> <a name="create_database_objects_if_missing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing"></a>

```python
create_database_objects_if_missing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}.

---

##### `existing_pipeline_id`<sup>Optional</sup> <a name="existing_pipeline_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.existingPipelineId"></a>

```python
existing_pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}.

---

##### `extra_columns`<sup>Optional</sup> <a name="extra_columns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.extraColumns"></a>

```python
extra_columns: IResolvable | typing.List[PostgresSyncedTableSpecExtraColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#extra_columns PostgresSyncedTable#extra_columns}.

---

##### `new_pipeline_spec`<sup>Optional</sup> <a name="new_pipeline_spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.newPipelineSpec"></a>

```python
new_pipeline_spec: PostgresSyncedTableSpecNewPipelineSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}.

---

##### `postgres_database`<sup>Optional</sup> <a name="postgres_database" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.postgresDatabase"></a>

```python
postgres_database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}.

---

##### `primary_key_columns`<sup>Optional</sup> <a name="primary_key_columns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.primaryKeyColumns"></a>

```python
primary_key_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}.

---

##### `scheduling_policy`<sup>Optional</sup> <a name="scheduling_policy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}.

---

##### `source_table_full_name`<sup>Optional</sup> <a name="source_table_full_name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.sourceTableFullName"></a>

```python
source_table_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}.

---

##### `timeseries_key`<sup>Optional</sup> <a name="timeseries_key" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.timeseriesKey"></a>

```python
timeseries_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}.

---

##### `type_overrides`<sup>Optional</sup> <a name="type_overrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.typeOverrides"></a>

```python
type_overrides: IResolvable | typing.List[PostgresSyncedTableSpecTypeOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#type_overrides PostgresSyncedTable#type_overrides}.

---

### PostgresSyncedTableSpecExtraColumns <a name="PostgresSyncedTableSpecExtraColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableSpecExtraColumns(
  column_name: str,
  column_type: str,
  compute: str = None,
  maintenance: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnType">column_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#column_type PostgresSyncedTable#column_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.compute">compute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#compute PostgresSyncedTable#compute}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.maintenance">maintenance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#maintenance PostgresSyncedTable#maintenance}. |

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}.

---

##### `column_type`<sup>Required</sup> <a name="column_type" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#column_type PostgresSyncedTable#column_type}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.compute"></a>

```python
compute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#compute PostgresSyncedTable#compute}.

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.maintenance"></a>

```python
maintenance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#maintenance PostgresSyncedTable#maintenance}.

---

### PostgresSyncedTableSpecNewPipelineSpec <a name="PostgresSyncedTableSpecNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec(
  budget_policy_id: str = None,
  pipeline_channel: str = None,
  storage_catalog: str = None,
  storage_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.pipelineChannel">pipeline_channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#pipeline_channel PostgresSyncedTable#pipeline_channel}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog">storage_catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageSchema">storage_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}. |

---

##### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}.

---

##### `pipeline_channel`<sup>Optional</sup> <a name="pipeline_channel" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.pipelineChannel"></a>

```python
pipeline_channel: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#pipeline_channel PostgresSyncedTable#pipeline_channel}.

---

##### `storage_catalog`<sup>Optional</sup> <a name="storage_catalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog"></a>

```python
storage_catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}.

---

##### `storage_schema`<sup>Optional</sup> <a name="storage_schema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageSchema"></a>

```python
storage_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}.

---

### PostgresSyncedTableSpecTypeOverrides <a name="PostgresSyncedTableSpecTypeOverrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides(
  column_name: str,
  pg_type: str,
  size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.pgType">pg_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#pg_type PostgresSyncedTable#pg_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#size PostgresSyncedTable#size}. |

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}.

---

##### `pg_type`<sup>Required</sup> <a name="pg_type" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.pgType"></a>

```python
pg_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#pg_type PostgresSyncedTable#pg_type}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#size PostgresSyncedTable#size}.

---

### PostgresSyncedTableStatus <a name="PostgresSyncedTableStatus" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableStatus()
```


### PostgresSyncedTableStatusLastSync <a name="PostgresSyncedTableStatusLastSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableStatusLastSync()
```


### PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo <a name="PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo()
```


### PostgresSyncedTableStatusOngoingSyncProgress <a name="PostgresSyncedTableStatusOngoingSyncProgress" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress()
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresSyncedTableProviderConfigOutputReference <a name="PostgresSyncedTableProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresSyncedTableProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---


### PostgresSyncedTableSpecExtraColumnsList <a name="PostgresSyncedTableSpecExtraColumnsList" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PostgresSyncedTableSpecExtraColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PostgresSyncedTableSpecExtraColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>]

---


### PostgresSyncedTableSpecExtraColumnsOutputReference <a name="PostgresSyncedTableSpecExtraColumnsOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute">reset_compute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance">reset_maintenance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute` <a name="reset_compute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute"></a>

```python
def reset_compute() -> None
```

##### `reset_maintenance` <a name="reset_maintenance" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance"></a>

```python
def reset_maintenance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput">column_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput">compute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput">maintenance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType">column_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.compute">compute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance">maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `column_type_input`<sup>Optional</sup> <a name="column_type_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput"></a>

```python
column_type_input: str
```

- *Type:* str

---

##### `compute_input`<sup>Optional</sup> <a name="compute_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput"></a>

```python
compute_input: str
```

- *Type:* str

---

##### `maintenance_input`<sup>Optional</sup> <a name="maintenance_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput"></a>

```python
maintenance_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `column_type`<sup>Required</sup> <a name="column_type" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.compute"></a>

```python
compute: str
```

- *Type:* str

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance"></a>

```python
maintenance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresSyncedTableSpecExtraColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>

---


### PostgresSyncedTableSpecNewPipelineSpecOutputReference <a name="PostgresSyncedTableSpecNewPipelineSpecOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId">reset_budget_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetPipelineChannel">reset_pipeline_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">reset_storage_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema">reset_storage_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_budget_policy_id` <a name="reset_budget_policy_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId"></a>

```python
def reset_budget_policy_id() -> None
```

##### `reset_pipeline_channel` <a name="reset_pipeline_channel" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetPipelineChannel"></a>

```python
def reset_pipeline_channel() -> None
```

##### `reset_storage_catalog` <a name="reset_storage_catalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```python
def reset_storage_catalog() -> None
```

##### `reset_storage_schema` <a name="reset_storage_schema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```python
def reset_storage_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput">budget_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannelInput">pipeline_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">storage_catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">storage_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannel">pipeline_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog">storage_catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema">storage_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `budget_policy_id_input`<sup>Optional</sup> <a name="budget_policy_id_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput"></a>

```python
budget_policy_id_input: str
```

- *Type:* str

---

##### `pipeline_channel_input`<sup>Optional</sup> <a name="pipeline_channel_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannelInput"></a>

```python
pipeline_channel_input: str
```

- *Type:* str

---

##### `storage_catalog_input`<sup>Optional</sup> <a name="storage_catalog_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```python
storage_catalog_input: str
```

- *Type:* str

---

##### `storage_schema_input`<sup>Optional</sup> <a name="storage_schema_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```python
storage_schema_input: str
```

- *Type:* str

---

##### `budget_policy_id`<sup>Required</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

---

##### `pipeline_channel`<sup>Required</sup> <a name="pipeline_channel" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannel"></a>

```python
pipeline_channel: str
```

- *Type:* str

---

##### `storage_catalog`<sup>Required</sup> <a name="storage_catalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```python
storage_catalog: str
```

- *Type:* str

---

##### `storage_schema`<sup>Required</sup> <a name="storage_schema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```python
storage_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresSyncedTableSpecNewPipelineSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---


### PostgresSyncedTableSpecOutputReference <a name="PostgresSyncedTableSpecOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putExtraColumns">put_extra_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec">put_new_pipeline_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putTypeOverrides">put_type_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetAcceleratedSync">reset_accelerated_sync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">reset_create_database_objects_if_missing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExistingPipelineId">reset_existing_pipeline_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExtraColumns">reset_extra_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetNewPipelineSpec">reset_new_pipeline_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPostgresDatabase">reset_postgres_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns">reset_primary_key_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSchedulingPolicy">reset_scheduling_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSourceTableFullName">reset_source_table_full_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTimeseriesKey">reset_timeseries_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTypeOverrides">reset_type_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extra_columns` <a name="put_extra_columns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putExtraColumns"></a>

```python
def put_extra_columns(
  value: IResolvable | typing.List[PostgresSyncedTableSpecExtraColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putExtraColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>]

---

##### `put_new_pipeline_spec` <a name="put_new_pipeline_spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec"></a>

```python
def put_new_pipeline_spec(
  budget_policy_id: str = None,
  pipeline_channel: str = None,
  storage_catalog: str = None,
  storage_schema: str = None
) -> None
```

###### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.budgetPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}.

---

###### `pipeline_channel`<sup>Optional</sup> <a name="pipeline_channel" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.pipelineChannel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#pipeline_channel PostgresSyncedTable#pipeline_channel}.

---

###### `storage_catalog`<sup>Optional</sup> <a name="storage_catalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.storageCatalog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}.

---

###### `storage_schema`<sup>Optional</sup> <a name="storage_schema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.storageSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}.

---

##### `put_type_overrides` <a name="put_type_overrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putTypeOverrides"></a>

```python
def put_type_overrides(
  value: IResolvable | typing.List[PostgresSyncedTableSpecTypeOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putTypeOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>]

---

##### `reset_accelerated_sync` <a name="reset_accelerated_sync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetAcceleratedSync"></a>

```python
def reset_accelerated_sync() -> None
```

##### `reset_branch` <a name="reset_branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_create_database_objects_if_missing` <a name="reset_create_database_objects_if_missing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```python
def reset_create_database_objects_if_missing() -> None
```

##### `reset_existing_pipeline_id` <a name="reset_existing_pipeline_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExistingPipelineId"></a>

```python
def reset_existing_pipeline_id() -> None
```

##### `reset_extra_columns` <a name="reset_extra_columns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExtraColumns"></a>

```python
def reset_extra_columns() -> None
```

##### `reset_new_pipeline_spec` <a name="reset_new_pipeline_spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetNewPipelineSpec"></a>

```python
def reset_new_pipeline_spec() -> None
```

##### `reset_postgres_database` <a name="reset_postgres_database" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPostgresDatabase"></a>

```python
def reset_postgres_database() -> None
```

##### `reset_primary_key_columns` <a name="reset_primary_key_columns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```python
def reset_primary_key_columns() -> None
```

##### `reset_scheduling_policy` <a name="reset_scheduling_policy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSchedulingPolicy"></a>

```python
def reset_scheduling_policy() -> None
```

##### `reset_source_table_full_name` <a name="reset_source_table_full_name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSourceTableFullName"></a>

```python
def reset_source_table_full_name() -> None
```

##### `reset_timeseries_key` <a name="reset_timeseries_key" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTimeseriesKey"></a>

```python
def reset_timeseries_key() -> None
```

##### `reset_type_overrides` <a name="reset_type_overrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTypeOverrides"></a>

```python
def reset_type_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumns">extra_columns</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList">PostgresSyncedTableSpecExtraColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpec">new_pipeline_spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference">PostgresSyncedTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverrides">type_overrides</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList">PostgresSyncedTableSpecTypeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput">accelerated_sync_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">create_database_objects_if_missing_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput">existing_pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumnsInput">extra_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput">new_pipeline_spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput">postgres_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput">primary_key_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput">scheduling_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput">source_table_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput">timeseries_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverridesInput">type_overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSync">accelerated_sync</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing">create_database_objects_if_missing</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineId">existing_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabase">postgres_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumns">primary_key_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullName">source_table_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKey">timeseries_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extra_columns`<sup>Required</sup> <a name="extra_columns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumns"></a>

```python
extra_columns: PostgresSyncedTableSpecExtraColumnsList
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList">PostgresSyncedTableSpecExtraColumnsList</a>

---

##### `new_pipeline_spec`<sup>Required</sup> <a name="new_pipeline_spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpec"></a>

```python
new_pipeline_spec: PostgresSyncedTableSpecNewPipelineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference">PostgresSyncedTableSpecNewPipelineSpecOutputReference</a>

---

##### `type_overrides`<sup>Required</sup> <a name="type_overrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverrides"></a>

```python
type_overrides: PostgresSyncedTableSpecTypeOverridesList
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList">PostgresSyncedTableSpecTypeOverridesList</a>

---

##### `accelerated_sync_input`<sup>Optional</sup> <a name="accelerated_sync_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput"></a>

```python
accelerated_sync_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `create_database_objects_if_missing_input`<sup>Optional</sup> <a name="create_database_objects_if_missing_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```python
create_database_objects_if_missing_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `existing_pipeline_id_input`<sup>Optional</sup> <a name="existing_pipeline_id_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput"></a>

```python
existing_pipeline_id_input: str
```

- *Type:* str

---

##### `extra_columns_input`<sup>Optional</sup> <a name="extra_columns_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumnsInput"></a>

```python
extra_columns_input: IResolvable | typing.List[PostgresSyncedTableSpecExtraColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns">PostgresSyncedTableSpecExtraColumns</a>]

---

##### `new_pipeline_spec_input`<sup>Optional</sup> <a name="new_pipeline_spec_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput"></a>

```python
new_pipeline_spec_input: IResolvable | PostgresSyncedTableSpecNewPipelineSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `postgres_database_input`<sup>Optional</sup> <a name="postgres_database_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput"></a>

```python
postgres_database_input: str
```

- *Type:* str

---

##### `primary_key_columns_input`<sup>Optional</sup> <a name="primary_key_columns_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```python
primary_key_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_policy_input`<sup>Optional</sup> <a name="scheduling_policy_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput"></a>

```python
scheduling_policy_input: str
```

- *Type:* str

---

##### `source_table_full_name_input`<sup>Optional</sup> <a name="source_table_full_name_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```python
source_table_full_name_input: str
```

- *Type:* str

---

##### `timeseries_key_input`<sup>Optional</sup> <a name="timeseries_key_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput"></a>

```python
timeseries_key_input: str
```

- *Type:* str

---

##### `type_overrides_input`<sup>Optional</sup> <a name="type_overrides_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverridesInput"></a>

```python
type_overrides_input: IResolvable | typing.List[PostgresSyncedTableSpecTypeOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>]

---

##### `accelerated_sync`<sup>Required</sup> <a name="accelerated_sync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSync"></a>

```python
accelerated_sync: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `create_database_objects_if_missing`<sup>Required</sup> <a name="create_database_objects_if_missing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```python
create_database_objects_if_missing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `existing_pipeline_id`<sup>Required</sup> <a name="existing_pipeline_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineId"></a>

```python
existing_pipeline_id: str
```

- *Type:* str

---

##### `postgres_database`<sup>Required</sup> <a name="postgres_database" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabase"></a>

```python
postgres_database: str
```

- *Type:* str

---

##### `primary_key_columns`<sup>Required</sup> <a name="primary_key_columns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumns"></a>

```python
primary_key_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_policy`<sup>Required</sup> <a name="scheduling_policy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

---

##### `source_table_full_name`<sup>Required</sup> <a name="source_table_full_name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullName"></a>

```python
source_table_full_name: str
```

- *Type:* str

---

##### `timeseries_key`<sup>Required</sup> <a name="timeseries_key" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKey"></a>

```python
timeseries_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresSyncedTableSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---


### PostgresSyncedTableSpecTypeOverridesList <a name="PostgresSyncedTableSpecTypeOverridesList" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PostgresSyncedTableSpecTypeOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PostgresSyncedTableSpecTypeOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>]

---


### PostgresSyncedTableSpecTypeOverridesOutputReference <a name="PostgresSyncedTableSpecTypeOverridesOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resetSize">reset_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_size` <a name="reset_size" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resetSize"></a>

```python
def reset_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput">pg_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType">pg_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `pg_type_input`<sup>Optional</sup> <a name="pg_type_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput"></a>

```python
pg_type_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `pg_type`<sup>Required</sup> <a name="pg_type" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType"></a>

```python
pg_type: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresSyncedTableSpecTypeOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides">PostgresSyncedTableSpecTypeOverrides</a>

---


### PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference <a name="PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime">delta_commit_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">delta_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_commit_time`<sup>Required</sup> <a name="delta_commit_time" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime"></a>

```python
delta_commit_time: str
```

- *Type:* str

---

##### `delta_commit_version`<sup>Required</sup> <a name="delta_commit_version" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```python
delta_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```python
internal_value: PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a>

---


### PostgresSyncedTableStatusLastSyncOutputReference <a name="PostgresSyncedTableStatusLastSyncOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo">delta_table_sync_info</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime">sync_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime">sync_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync">PostgresSyncedTableStatusLastSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_table_sync_info`<sup>Required</sup> <a name="delta_table_sync_info" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```python
delta_table_sync_info: PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `sync_end_time`<sup>Required</sup> <a name="sync_end_time" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime"></a>

```python
sync_end_time: str
```

- *Type:* str

---

##### `sync_start_time`<sup>Required</sup> <a name="sync_start_time" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime"></a>

```python
sync_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.internalValue"></a>

```python
internal_value: PostgresSyncedTableStatusLastSync
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync">PostgresSyncedTableStatusLastSync</a>

---


### PostgresSyncedTableStatusOngoingSyncProgressOutputReference <a name="PostgresSyncedTableStatusOngoingSyncProgressOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimated_completion_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latest_version_currently_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount">synced_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion">sync_progress_completion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount">total_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress">PostgresSyncedTableStatusOngoingSyncProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_completion_time_seconds`<sup>Required</sup> <a name="estimated_completion_time_seconds" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```python
estimated_completion_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_currently_processing`<sup>Required</sup> <a name="latest_version_currently_processing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```python
latest_version_currently_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `synced_row_count`<sup>Required</sup> <a name="synced_row_count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount"></a>

```python
synced_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_progress_completion`<sup>Required</sup> <a name="sync_progress_completion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion"></a>

```python
sync_progress_completion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_row_count`<sup>Required</sup> <a name="total_row_count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount"></a>

```python
total_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue"></a>

```python
internal_value: PostgresSyncedTableStatusOngoingSyncProgress
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress">PostgresSyncedTableStatusOngoingSyncProgress</a>

---


### PostgresSyncedTableStatusOutputReference <a name="PostgresSyncedTableStatusOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_synced_table

postgresSyncedTable.PostgresSyncedTableStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.detailedState">detailed_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion">last_processed_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSync">last_sync</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference">PostgresSyncedTableStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSyncTime">last_sync_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress">ongoing_sync_progress</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference">PostgresSyncedTableStatusOngoingSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.provisioningPhase">provisioning_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState">unity_catalog_provisioning_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus">PostgresSyncedTableStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detailed_state`<sup>Required</sup> <a name="detailed_state" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.detailedState"></a>

```python
detailed_state: str
```

- *Type:* str

---

##### `last_processed_commit_version`<sup>Required</sup> <a name="last_processed_commit_version" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion"></a>

```python
last_processed_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_sync`<sup>Required</sup> <a name="last_sync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSync"></a>

```python
last_sync: PostgresSyncedTableStatusLastSyncOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference">PostgresSyncedTableStatusLastSyncOutputReference</a>

---

##### `last_sync_time`<sup>Required</sup> <a name="last_sync_time" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSyncTime"></a>

```python
last_sync_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `ongoing_sync_progress`<sup>Required</sup> <a name="ongoing_sync_progress" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress"></a>

```python
ongoing_sync_progress: PostgresSyncedTableStatusOngoingSyncProgressOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference">PostgresSyncedTableStatusOngoingSyncProgressOutputReference</a>

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `provisioning_phase`<sup>Required</sup> <a name="provisioning_phase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.provisioningPhase"></a>

```python
provisioning_phase: str
```

- *Type:* str

---

##### `unity_catalog_provisioning_state`<sup>Required</sup> <a name="unity_catalog_provisioning_state" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState"></a>

```python
unity_catalog_provisioning_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.internalValue"></a>

```python
internal_value: PostgresSyncedTableStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus">PostgresSyncedTableStatus</a>

---



