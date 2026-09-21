# `dataDatabricksPostgresSnapshotSchedule` Submodule <a name="`dataDatabricksPostgresSnapshotSchedule` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresSnapshotSchedule <a name="DataDatabricksPostgresSnapshotSchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule databricks_postgres_snapshot_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksPostgresSnapshotScheduleProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#name DataDatabricksPostgresSnapshotSchedule#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#provider_config DataDatabricksPostgresSnapshotSchedule#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#name DataDatabricksPostgresSnapshotSchedule#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#provider_config DataDatabricksPostgresSnapshotSchedule#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#workspace_id DataDatabricksPostgresSnapshotSchedule#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksPostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksPostgresSnapshotSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksPostgresSnapshotSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresSnapshotSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference">DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList">DataDatabricksPostgresSnapshotScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference">DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.schedule"></a>

```python
schedule: DataDatabricksPostgresSnapshotScheduleScheduleList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList">DataDatabricksPostgresSnapshotScheduleScheduleList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksPostgresSnapshotScheduleProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresSnapshotScheduleConfig <a name="DataDatabricksPostgresSnapshotScheduleConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksPostgresSnapshotScheduleProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#name DataDatabricksPostgresSnapshotSchedule#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#provider_config DataDatabricksPostgresSnapshotSchedule#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#name DataDatabricksPostgresSnapshotSchedule#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresSnapshotScheduleProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#provider_config DataDatabricksPostgresSnapshotSchedule#provider_config}.

---

### DataDatabricksPostgresSnapshotScheduleProviderConfig <a name="DataDatabricksPostgresSnapshotScheduleProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#workspace_id DataDatabricksPostgresSnapshotSchedule#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#workspace_id DataDatabricksPostgresSnapshotSchedule#workspace_id}.

---

### DataDatabricksPostgresSnapshotScheduleSchedule <a name="DataDatabricksPostgresSnapshotScheduleSchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule(
  retention: str,
  daily_schedule: DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule = None,
  monthly_schedule: DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule = None,
  weekly_schedule: DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.retention">retention</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#retention DataDatabricksPostgresSnapshotSchedule#retention}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#daily_schedule DataDatabricksPostgresSnapshotSchedule#daily_schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#monthly_schedule DataDatabricksPostgresSnapshotSchedule#monthly_schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#weekly_schedule DataDatabricksPostgresSnapshotSchedule#weekly_schedule}. |

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.retention"></a>

```python
retention: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#retention DataDatabricksPostgresSnapshotSchedule#retention}.

---

##### `daily_schedule`<sup>Optional</sup> <a name="daily_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.dailySchedule"></a>

```python
daily_schedule: DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#daily_schedule DataDatabricksPostgresSnapshotSchedule#daily_schedule}.

---

##### `monthly_schedule`<sup>Optional</sup> <a name="monthly_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.monthlySchedule"></a>

```python
monthly_schedule: DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#monthly_schedule DataDatabricksPostgresSnapshotSchedule#monthly_schedule}.

---

##### `weekly_schedule`<sup>Optional</sup> <a name="weekly_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule.property.weeklySchedule"></a>

```python
weekly_schedule: DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#weekly_schedule DataDatabricksPostgresSnapshotSchedule#weekly_schedule}.

---

### DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule <a name="DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule(
  hour: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}. |

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

### DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule <a name="DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule(
  day: typing.Union[int, float],
  hour: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#day DataDatabricksPostgresSnapshotSchedule#day}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#day DataDatabricksPostgresSnapshotSchedule#day}.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

### DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule <a name="DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule(
  day_of_week: str,
  hour: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#day_of_week DataDatabricksPostgresSnapshotSchedule#day_of_week}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#day_of_week DataDatabricksPostgresSnapshotSchedule#day_of_week}.

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference <a name="DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresSnapshotScheduleProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleProviderConfig">DataDatabricksPostgresSnapshotScheduleProviderConfig</a>

---


### DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hour` <a name="reset_hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a>

---


### DataDatabricksPostgresSnapshotScheduleScheduleList <a name="DataDatabricksPostgresSnapshotScheduleScheduleList" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPostgresSnapshotScheduleScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule">DataDatabricksPostgresSnapshotScheduleSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPostgresSnapshotScheduleSchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule">DataDatabricksPostgresSnapshotScheduleSchedule</a>]

---


### DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hour` <a name="reset_hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a>

---


### DataDatabricksPostgresSnapshotScheduleScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putDailySchedule">put_daily_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule">put_monthly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule">put_weekly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule">reset_daily_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule">reset_monthly_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule">reset_weekly_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_daily_schedule` <a name="put_daily_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putDailySchedule"></a>

```python
def put_daily_schedule(
  hour: typing.Union[int, float] = None
) -> None
```

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putDailySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

##### `put_monthly_schedule` <a name="put_monthly_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule"></a>

```python
def put_monthly_schedule(
  day: typing.Union[int, float],
  hour: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule.parameter.day"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#day DataDatabricksPostgresSnapshotSchedule#day}.

---

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

##### `put_weekly_schedule` <a name="put_weekly_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule"></a>

```python
def put_weekly_schedule(
  day_of_week: str,
  hour: typing.Union[int, float] = None
) -> None
```

###### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule.parameter.dayOfWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#day_of_week DataDatabricksPostgresSnapshotSchedule#day_of_week}.

---

###### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule.parameter.hour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.133.0/docs/data-sources/postgres_snapshot_schedule#hour DataDatabricksPostgresSnapshotSchedule#hour}.

---

##### `reset_daily_schedule` <a name="reset_daily_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule"></a>

```python
def reset_daily_schedule() -> None
```

##### `reset_monthly_schedule` <a name="reset_monthly_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule"></a>

```python
def reset_monthly_schedule() -> None
```

##### `reset_weekly_schedule` <a name="reset_weekly_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule"></a>

```python
def reset_weekly_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule">daily_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule">monthly_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule">weekly_schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput">daily_schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput">monthly_schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retentionInput">retention_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput">weekly_schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retention">retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule">DataDatabricksPostgresSnapshotScheduleSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `daily_schedule`<sup>Required</sup> <a name="daily_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule"></a>

```python
daily_schedule: DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a>

---

##### `monthly_schedule`<sup>Required</sup> <a name="monthly_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule"></a>

```python
monthly_schedule: DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a>

---

##### `weekly_schedule`<sup>Required</sup> <a name="weekly_schedule" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule"></a>

```python
weekly_schedule: DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a>

---

##### `daily_schedule_input`<sup>Optional</sup> <a name="daily_schedule_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput"></a>

```python
daily_schedule_input: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule">DataDatabricksPostgresSnapshotScheduleScheduleDailySchedule</a>

---

##### `monthly_schedule_input`<sup>Optional</sup> <a name="monthly_schedule_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput"></a>

```python
monthly_schedule_input: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule">DataDatabricksPostgresSnapshotScheduleScheduleMonthlySchedule</a>

---

##### `retention_input`<sup>Optional</sup> <a name="retention_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retentionInput"></a>

```python
retention_input: str
```

- *Type:* str

---

##### `weekly_schedule_input`<sup>Optional</sup> <a name="weekly_schedule_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput"></a>

```python
weekly_schedule_input: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a>

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.retention"></a>

```python
retention: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresSnapshotScheduleSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleSchedule">DataDatabricksPostgresSnapshotScheduleSchedule</a>

---


### DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference <a name="DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_snapshot_schedule

dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour">reset_hour</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hour` <a name="reset_hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput">hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput"></a>

```python
hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSnapshotSchedule.DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule">DataDatabricksPostgresSnapshotScheduleScheduleWeeklySchedule</a>

---



