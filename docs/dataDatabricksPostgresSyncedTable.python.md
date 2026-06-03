# `dataDatabricksPostgresSyncedTable` Submodule <a name="`dataDatabricksPostgresSyncedTable` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresSyncedTable <a name="DataDatabricksPostgresSyncedTable" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table databricks_postgres_synced_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable(
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
  provider_config: DataDatabricksPostgresSyncedTableProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#workspace_id DataDatabricksPostgresSyncedTable#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresSyncedTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksPostgresSyncedTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksPostgresSyncedTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksPostgresSyncedTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresSyncedTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference">DataDatabricksPostgresSyncedTableProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference">DataDatabricksPostgresSyncedTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference">DataDatabricksPostgresSyncedTableStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresSyncedTableProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference">DataDatabricksPostgresSyncedTableProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.spec"></a>

```python
spec: DataDatabricksPostgresSyncedTableSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference">DataDatabricksPostgresSyncedTableSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.status"></a>

```python
status: DataDatabricksPostgresSyncedTableStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference">DataDatabricksPostgresSyncedTableStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksPostgresSyncedTableProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresSyncedTableConfig <a name="DataDatabricksPostgresSyncedTableConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksPostgresSyncedTableProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresSyncedTableProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}.

---

### DataDatabricksPostgresSyncedTableProviderConfig <a name="DataDatabricksPostgresSyncedTableProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#workspace_id DataDatabricksPostgresSyncedTable#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#workspace_id DataDatabricksPostgresSyncedTable#workspace_id}.

---

### DataDatabricksPostgresSyncedTableSpec <a name="DataDatabricksPostgresSyncedTableSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec(
  branch: str = None,
  create_database_objects_if_missing: bool | IResolvable = None,
  existing_pipeline_id: str = None,
  new_pipeline_spec: DataDatabricksPostgresSyncedTableSpecNewPipelineSpec = None,
  postgres_database: str = None,
  primary_key_columns: typing.List[str] = None,
  scheduling_policy: str = None,
  source_table_full_name: str = None,
  timeseries_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#branch DataDatabricksPostgresSyncedTable#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing">create_database_objects_if_missing</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#create_database_objects_if_missing DataDatabricksPostgresSyncedTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.existingPipelineId">existing_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#existing_pipeline_id DataDatabricksPostgresSyncedTable#existing_pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.newPipelineSpec">new_pipeline_spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#new_pipeline_spec DataDatabricksPostgresSyncedTable#new_pipeline_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.postgresDatabase">postgres_database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#postgres_database DataDatabricksPostgresSyncedTable#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.primaryKeyColumns">primary_key_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#primary_key_columns DataDatabricksPostgresSyncedTable#primary_key_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#scheduling_policy DataDatabricksPostgresSyncedTable#scheduling_policy}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.sourceTableFullName">source_table_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#source_table_full_name DataDatabricksPostgresSyncedTable#source_table_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.timeseriesKey">timeseries_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#timeseries_key DataDatabricksPostgresSyncedTable#timeseries_key}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#branch DataDatabricksPostgresSyncedTable#branch}.

---

##### `create_database_objects_if_missing`<sup>Optional</sup> <a name="create_database_objects_if_missing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing"></a>

```python
create_database_objects_if_missing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#create_database_objects_if_missing DataDatabricksPostgresSyncedTable#create_database_objects_if_missing}.

---

##### `existing_pipeline_id`<sup>Optional</sup> <a name="existing_pipeline_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.existingPipelineId"></a>

```python
existing_pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#existing_pipeline_id DataDatabricksPostgresSyncedTable#existing_pipeline_id}.

---

##### `new_pipeline_spec`<sup>Optional</sup> <a name="new_pipeline_spec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.newPipelineSpec"></a>

```python
new_pipeline_spec: DataDatabricksPostgresSyncedTableSpecNewPipelineSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#new_pipeline_spec DataDatabricksPostgresSyncedTable#new_pipeline_spec}.

---

##### `postgres_database`<sup>Optional</sup> <a name="postgres_database" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.postgresDatabase"></a>

```python
postgres_database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#postgres_database DataDatabricksPostgresSyncedTable#postgres_database}.

---

##### `primary_key_columns`<sup>Optional</sup> <a name="primary_key_columns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.primaryKeyColumns"></a>

```python
primary_key_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#primary_key_columns DataDatabricksPostgresSyncedTable#primary_key_columns}.

---

##### `scheduling_policy`<sup>Optional</sup> <a name="scheduling_policy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#scheduling_policy DataDatabricksPostgresSyncedTable#scheduling_policy}.

---

##### `source_table_full_name`<sup>Optional</sup> <a name="source_table_full_name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.sourceTableFullName"></a>

```python
source_table_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#source_table_full_name DataDatabricksPostgresSyncedTable#source_table_full_name}.

---

##### `timeseries_key`<sup>Optional</sup> <a name="timeseries_key" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.timeseriesKey"></a>

```python
timeseries_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#timeseries_key DataDatabricksPostgresSyncedTable#timeseries_key}.

---

### DataDatabricksPostgresSyncedTableSpecNewPipelineSpec <a name="DataDatabricksPostgresSyncedTableSpecNewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec(
  budget_policy_id: str = None,
  storage_catalog: str = None,
  storage_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#budget_policy_id DataDatabricksPostgresSyncedTable#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog">storage_catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#storage_catalog DataDatabricksPostgresSyncedTable#storage_catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageSchema">storage_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#storage_schema DataDatabricksPostgresSyncedTable#storage_schema}. |

---

##### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#budget_policy_id DataDatabricksPostgresSyncedTable#budget_policy_id}.

---

##### `storage_catalog`<sup>Optional</sup> <a name="storage_catalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog"></a>

```python
storage_catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#storage_catalog DataDatabricksPostgresSyncedTable#storage_catalog}.

---

##### `storage_schema`<sup>Optional</sup> <a name="storage_schema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageSchema"></a>

```python
storage_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#storage_schema DataDatabricksPostgresSyncedTable#storage_schema}.

---

### DataDatabricksPostgresSyncedTableStatus <a name="DataDatabricksPostgresSyncedTableStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus()
```


### DataDatabricksPostgresSyncedTableStatusLastSync <a name="DataDatabricksPostgresSyncedTableStatusLastSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync()
```


### DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo <a name="DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo()
```


### DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress <a name="DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresSyncedTableProviderConfigOutputReference <a name="DataDatabricksPostgresSyncedTableProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresSyncedTableProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

---


### DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference <a name="DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId">reset_budget_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">reset_storage_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema">reset_storage_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_budget_policy_id` <a name="reset_budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId"></a>

```python
def reset_budget_policy_id() -> None
```

##### `reset_storage_catalog` <a name="reset_storage_catalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```python
def reset_storage_catalog() -> None
```

##### `reset_storage_schema` <a name="reset_storage_schema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```python
def reset_storage_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput">budget_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">storage_catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">storage_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog">storage_catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema">storage_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `budget_policy_id_input`<sup>Optional</sup> <a name="budget_policy_id_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput"></a>

```python
budget_policy_id_input: str
```

- *Type:* str

---

##### `storage_catalog_input`<sup>Optional</sup> <a name="storage_catalog_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```python
storage_catalog_input: str
```

- *Type:* str

---

##### `storage_schema_input`<sup>Optional</sup> <a name="storage_schema_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```python
storage_schema_input: str
```

- *Type:* str

---

##### `budget_policy_id`<sup>Required</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

---

##### `storage_catalog`<sup>Required</sup> <a name="storage_catalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```python
storage_catalog: str
```

- *Type:* str

---

##### `storage_schema`<sup>Required</sup> <a name="storage_schema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```python
storage_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresSyncedTableSpecNewPipelineSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

---


### DataDatabricksPostgresSyncedTableSpecOutputReference <a name="DataDatabricksPostgresSyncedTableSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec">put_new_pipeline_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">reset_create_database_objects_if_missing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExistingPipelineId">reset_existing_pipeline_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetNewPipelineSpec">reset_new_pipeline_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPostgresDatabase">reset_postgres_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns">reset_primary_key_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSchedulingPolicy">reset_scheduling_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSourceTableFullName">reset_source_table_full_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTimeseriesKey">reset_timeseries_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_new_pipeline_spec` <a name="put_new_pipeline_spec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec"></a>

```python
def put_new_pipeline_spec(
  budget_policy_id: str = None,
  storage_catalog: str = None,
  storage_schema: str = None
) -> None
```

###### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.budgetPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#budget_policy_id DataDatabricksPostgresSyncedTable#budget_policy_id}.

---

###### `storage_catalog`<sup>Optional</sup> <a name="storage_catalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.storageCatalog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#storage_catalog DataDatabricksPostgresSyncedTable#storage_catalog}.

---

###### `storage_schema`<sup>Optional</sup> <a name="storage_schema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.storageSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/data-sources/postgres_synced_table#storage_schema DataDatabricksPostgresSyncedTable#storage_schema}.

---

##### `reset_branch` <a name="reset_branch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_create_database_objects_if_missing` <a name="reset_create_database_objects_if_missing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```python
def reset_create_database_objects_if_missing() -> None
```

##### `reset_existing_pipeline_id` <a name="reset_existing_pipeline_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExistingPipelineId"></a>

```python
def reset_existing_pipeline_id() -> None
```

##### `reset_new_pipeline_spec` <a name="reset_new_pipeline_spec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetNewPipelineSpec"></a>

```python
def reset_new_pipeline_spec() -> None
```

##### `reset_postgres_database` <a name="reset_postgres_database" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPostgresDatabase"></a>

```python
def reset_postgres_database() -> None
```

##### `reset_primary_key_columns` <a name="reset_primary_key_columns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```python
def reset_primary_key_columns() -> None
```

##### `reset_scheduling_policy` <a name="reset_scheduling_policy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSchedulingPolicy"></a>

```python
def reset_scheduling_policy() -> None
```

##### `reset_source_table_full_name` <a name="reset_source_table_full_name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSourceTableFullName"></a>

```python
def reset_source_table_full_name() -> None
```

##### `reset_timeseries_key` <a name="reset_timeseries_key" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTimeseriesKey"></a>

```python
def reset_timeseries_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpec">new_pipeline_spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference">DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">create_database_objects_if_missing_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput">existing_pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput">new_pipeline_spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput">postgres_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput">primary_key_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput">scheduling_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput">source_table_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput">timeseries_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing">create_database_objects_if_missing</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineId">existing_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabase">postgres_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumns">primary_key_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullName">source_table_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKey">timeseries_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec">DataDatabricksPostgresSyncedTableSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `new_pipeline_spec`<sup>Required</sup> <a name="new_pipeline_spec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpec"></a>

```python
new_pipeline_spec: DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference">DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference</a>

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `create_database_objects_if_missing_input`<sup>Optional</sup> <a name="create_database_objects_if_missing_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```python
create_database_objects_if_missing_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `existing_pipeline_id_input`<sup>Optional</sup> <a name="existing_pipeline_id_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput"></a>

```python
existing_pipeline_id_input: str
```

- *Type:* str

---

##### `new_pipeline_spec_input`<sup>Optional</sup> <a name="new_pipeline_spec_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput"></a>

```python
new_pipeline_spec_input: IResolvable | DataDatabricksPostgresSyncedTableSpecNewPipelineSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `postgres_database_input`<sup>Optional</sup> <a name="postgres_database_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput"></a>

```python
postgres_database_input: str
```

- *Type:* str

---

##### `primary_key_columns_input`<sup>Optional</sup> <a name="primary_key_columns_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```python
primary_key_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_policy_input`<sup>Optional</sup> <a name="scheduling_policy_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput"></a>

```python
scheduling_policy_input: str
```

- *Type:* str

---

##### `source_table_full_name_input`<sup>Optional</sup> <a name="source_table_full_name_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```python
source_table_full_name_input: str
```

- *Type:* str

---

##### `timeseries_key_input`<sup>Optional</sup> <a name="timeseries_key_input" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput"></a>

```python
timeseries_key_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `create_database_objects_if_missing`<sup>Required</sup> <a name="create_database_objects_if_missing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```python
create_database_objects_if_missing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `existing_pipeline_id`<sup>Required</sup> <a name="existing_pipeline_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineId"></a>

```python
existing_pipeline_id: str
```

- *Type:* str

---

##### `postgres_database`<sup>Required</sup> <a name="postgres_database" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabase"></a>

```python
postgres_database: str
```

- *Type:* str

---

##### `primary_key_columns`<sup>Required</sup> <a name="primary_key_columns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumns"></a>

```python
primary_key_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_policy`<sup>Required</sup> <a name="scheduling_policy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

---

##### `source_table_full_name`<sup>Required</sup> <a name="source_table_full_name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullName"></a>

```python
source_table_full_name: str
```

- *Type:* str

---

##### `timeseries_key`<sup>Required</sup> <a name="timeseries_key" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKey"></a>

```python
timeseries_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresSyncedTableSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec">DataDatabricksPostgresSyncedTableSpec</a>

---


### DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime">delta_commit_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">delta_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_commit_time`<sup>Required</sup> <a name="delta_commit_time" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime"></a>

```python
delta_commit_time: str
```

- *Type:* str

---

##### `delta_commit_version`<sup>Required</sup> <a name="delta_commit_version" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```python
delta_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a>

---


### DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference <a name="DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo">delta_table_sync_info</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime">sync_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime">sync_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync">DataDatabricksPostgresSyncedTableStatusLastSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_table_sync_info`<sup>Required</sup> <a name="delta_table_sync_info" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```python
delta_table_sync_info: DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `sync_end_time`<sup>Required</sup> <a name="sync_end_time" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime"></a>

```python
sync_end_time: str
```

- *Type:* str

---

##### `sync_start_time`<sup>Required</sup> <a name="sync_start_time" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime"></a>

```python
sync_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresSyncedTableStatusLastSync
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync">DataDatabricksPostgresSyncedTableStatusLastSync</a>

---


### DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference <a name="DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">estimated_completion_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">latest_version_currently_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount">synced_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion">sync_progress_completion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount">total_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_completion_time_seconds`<sup>Required</sup> <a name="estimated_completion_time_seconds" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```python
estimated_completion_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `latest_version_currently_processing`<sup>Required</sup> <a name="latest_version_currently_processing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```python
latest_version_currently_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `synced_row_count`<sup>Required</sup> <a name="synced_row_count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount"></a>

```python
synced_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_progress_completion`<sup>Required</sup> <a name="sync_progress_completion" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion"></a>

```python
sync_progress_completion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_row_count`<sup>Required</sup> <a name="total_row_count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount"></a>

```python
total_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress</a>

---


### DataDatabricksPostgresSyncedTableStatusOutputReference <a name="DataDatabricksPostgresSyncedTableStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_synced_table

dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.detailedState">detailed_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion">last_processed_commit_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSync">last_sync</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSyncTime">last_sync_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress">ongoing_sync_progress</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.provisioningPhase">provisioning_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState">unity_catalog_provisioning_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus">DataDatabricksPostgresSyncedTableStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detailed_state`<sup>Required</sup> <a name="detailed_state" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.detailedState"></a>

```python
detailed_state: str
```

- *Type:* str

---

##### `last_processed_commit_version`<sup>Required</sup> <a name="last_processed_commit_version" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion"></a>

```python
last_processed_commit_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_sync`<sup>Required</sup> <a name="last_sync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSync"></a>

```python
last_sync: DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference</a>

---

##### `last_sync_time`<sup>Required</sup> <a name="last_sync_time" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSyncTime"></a>

```python
last_sync_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `ongoing_sync_progress`<sup>Required</sup> <a name="ongoing_sync_progress" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress"></a>

```python
ongoing_sync_progress: DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference</a>

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `provisioning_phase`<sup>Required</sup> <a name="provisioning_phase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.provisioningPhase"></a>

```python
provisioning_phase: str
```

- *Type:* str

---

##### `unity_catalog_provisioning_state`<sup>Required</sup> <a name="unity_catalog_provisioning_state" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState"></a>

```python
unity_catalog_provisioning_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresSyncedTableStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus">DataDatabricksPostgresSyncedTableStatus</a>

---



