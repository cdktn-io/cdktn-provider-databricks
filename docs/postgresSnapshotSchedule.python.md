# `postgresSnapshotSchedule` Submodule <a name="`postgresSnapshotSchedule` Submodule" id="@cdktn/provider-databricks.postgresSnapshotSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresSnapshotSchedule <a name="PostgresSnapshotSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule databricks_postgres_snapshot_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotSchedule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  provider_config: PostgresSnapshotScheduleProviderConfig = None,
  schedule: IResolvable | typing.List[PostgresSnapshotScheduleSchedule] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.schedule">schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.schedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#workspace_id PostgresSnapshotSchedule#workspace_id}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule"></a>

```python
def put_schedule(
  value: IResolvable | typing.List[PostgresSnapshotScheduleSchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>]

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetSchedule"></a>

```python
def reset_schedule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PostgresSnapshotSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PostgresSnapshotSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresSnapshotSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference">PostgresSnapshotScheduleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList">PostgresSnapshotScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfig"></a>

```python
provider_config: PostgresSnapshotScheduleProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference">PostgresSnapshotScheduleProviderConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.schedule"></a>

```python
schedule: PostgresSnapshotScheduleScheduleList
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList">PostgresSnapshotScheduleScheduleList</a>

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | PostgresSnapshotScheduleProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.scheduleInput"></a>

```python
schedule_input: IResolvable | typing.List[PostgresSnapshotScheduleSchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresSnapshotScheduleConfig <a name="PostgresSnapshotScheduleConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  provider_config: PostgresSnapshotScheduleProviderConfig = None,
  schedule: IResolvable | typing.List[PostgresSnapshotScheduleSchedule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.schedule">schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.providerConfig"></a>

```python
provider_config: PostgresSnapshotScheduleProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.schedule"></a>

```python
schedule: IResolvable | typing.List[PostgresSnapshotScheduleSchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}.

---

### PostgresSnapshotScheduleProviderConfig <a name="PostgresSnapshotScheduleProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#workspace_id PostgresSnapshotSchedule#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#workspace_id PostgresSnapshotSchedule#workspace_id}.

---

### PostgresSnapshotScheduleSchedule <a name="PostgresSnapshotScheduleSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule(
  retention: str,
  daily_schedule: PostgresSnapshotScheduleScheduleDailySchedule = None,
  monthly_schedule: PostgresSnapshotScheduleScheduleMonthlySchedule = None,
  weekly_schedule: PostgresSnapshotScheduleScheduleWeeklySchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.retention">retention</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#retention PostgresSnapshotSchedule#retention}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#daily_schedule PostgresSnapshotSchedule#daily_schedule}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#monthly_schedule PostgresSnapshotSchedule#monthly_schedule}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#weekly_schedule PostgresSnapshotSchedule#weekly_schedule}. |

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.retention"></a>

```python
retention: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#retention PostgresSnapshotSchedule#retention}.

---

##### `daily_schedule`<sup>Optional</sup> <a name="daily_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.dailySchedule"></a>

```python
daily_schedule: PostgresSnapshotScheduleScheduleDailySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#daily_schedule PostgresSnapshotSchedule#daily_schedule}.

---

##### `monthly_schedule`<sup>Optional</sup> <a name="monthly_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.monthlySchedule"></a>

```python
monthly_schedule: PostgresSnapshotScheduleScheduleMonthlySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#monthly_schedule PostgresSnapshotSchedule#monthly_schedule}.

---

##### `weekly_schedule`<sup>Optional</sup> <a name="weekly_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.weeklySchedule"></a>

```python
weekly_schedule: PostgresSnapshotScheduleScheduleWeeklySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#weekly_schedule PostgresSnapshotSchedule#weekly_schedule}.

---

### PostgresSnapshotScheduleScheduleDailySchedule <a name="PostgresSnapshotScheduleScheduleDailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule(
  hour: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

### PostgresSnapshotScheduleScheduleMonthlySchedule <a name="PostgresSnapshotScheduleScheduleMonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule(
  day: typing.Union[int, float],
  hour: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#day PostgresSnapshotSchedule#day}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#day PostgresSnapshotSchedule#day}.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

### PostgresSnapshotScheduleScheduleWeeklySchedule <a name="PostgresSnapshotScheduleScheduleWeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule(
  day_of_week: str,
  hour: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#day_of_week PostgresSnapshotSchedule#day_of_week}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#day_of_week PostgresSnapshotSchedule#day_of_week}.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresSnapshotScheduleProviderConfigOutputReference <a name="PostgresSnapshotScheduleProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresSnapshotScheduleProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

---


### PostgresSnapshotScheduleScheduleDailyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleDailyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hour` <a name="reset_hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresSnapshotScheduleScheduleDailySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

---


### PostgresSnapshotScheduleScheduleList <a name="PostgresSnapshotScheduleScheduleList" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PostgresSnapshotScheduleScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PostgresSnapshotScheduleSchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>]

---


### PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hour` <a name="reset_hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresSnapshotScheduleScheduleMonthlySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

---


### PostgresSnapshotScheduleScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule">put_daily_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule">put_monthly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule">put_weekly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule">reset_daily_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule">reset_monthly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule">reset_weekly_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_daily_schedule` <a name="put_daily_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule"></a>

```python
def put_daily_schedule(
  hour: typing.Union[int, float] = None
) -> None
```

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

##### `put_monthly_schedule` <a name="put_monthly_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule"></a>

```python
def put_monthly_schedule(
  day: typing.Union[int, float],
  hour: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule.parameter.day"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#day PostgresSnapshotSchedule#day}.

---

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

##### `put_weekly_schedule` <a name="put_weekly_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule"></a>

```python
def put_weekly_schedule(
  day_of_week: str,
  hour: typing.Union[int, float] = None
) -> None
```

###### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#day_of_week PostgresSnapshotSchedule#day_of_week}.

---

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

##### `reset_daily_schedule` <a name="reset_daily_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule"></a>

```python
def reset_daily_schedule() -> None
```

##### `reset_monthly_schedule` <a name="reset_monthly_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule"></a>

```python
def reset_monthly_schedule() -> None
```

##### `reset_weekly_schedule` <a name="reset_weekly_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule"></a>

```python
def reset_weekly_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference">PostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput">daily_schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput">monthly_schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retentionInput">retention_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput">weekly_schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retention">retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `daily_schedule`<sup>Required</sup> <a name="daily_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule"></a>

```python
daily_schedule: PostgresSnapshotScheduleScheduleDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference">PostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a>

---

##### `monthly_schedule`<sup>Required</sup> <a name="monthly_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule"></a>

```python
monthly_schedule: PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a>

---

##### `weekly_schedule`<sup>Required</sup> <a name="weekly_schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule"></a>

```python
weekly_schedule: PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a>

---

##### `daily_schedule_input`<sup>Optional</sup> <a name="daily_schedule_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput"></a>

```python
daily_schedule_input: IResolvable | PostgresSnapshotScheduleScheduleDailySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

---

##### `monthly_schedule_input`<sup>Optional</sup> <a name="monthly_schedule_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput"></a>

```python
monthly_schedule_input: IResolvable | PostgresSnapshotScheduleScheduleMonthlySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

---

##### `retention_input`<sup>Optional</sup> <a name="retention_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retentionInput"></a>

```python
retention_input: str
```

- *Type:* str

---

##### `weekly_schedule_input`<sup>Optional</sup> <a name="weekly_schedule_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput"></a>

```python
weekly_schedule_input: IResolvable | PostgresSnapshotScheduleScheduleWeeklySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retention"></a>

```python
retention: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresSnapshotScheduleSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule">PostgresSnapshotScheduleSchedule</a>

---


### PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_snapshot_schedule

postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hour` <a name="reset_hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresSnapshotScheduleScheduleWeeklySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

---



