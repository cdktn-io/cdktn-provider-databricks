# `dataDatabricksPostgresProject` Submodule <a name="`dataDatabricksPostgresProject` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresProject <a name="DataDatabricksPostgresProject" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project databricks_postgres_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProject(
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
  provider_config: DataDatabricksPostgresProjectProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#name DataDatabricksPostgresProject#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#provider_config DataDatabricksPostgresProject#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#name DataDatabricksPostgresProject#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#provider_config DataDatabricksPostgresProject#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#workspace_id DataDatabricksPostgresProject#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresProject resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProject.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksPostgresProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksPostgresProject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksPostgresProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.initialBranchSpec">initial_branch_spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference">DataDatabricksPostgresProjectInitialBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.initialEndpointSpec">initial_endpoint_spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference">DataDatabricksPostgresProjectProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.purgeTime">purge_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference">DataDatabricksPostgresProjectSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference">DataDatabricksPostgresProjectStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `initial_branch_spec`<sup>Required</sup> <a name="initial_branch_spec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.initialBranchSpec"></a>

```python
initial_branch_spec: DataDatabricksPostgresProjectInitialBranchSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference">DataDatabricksPostgresProjectInitialBranchSpecOutputReference</a>

---

##### `initial_endpoint_spec`<sup>Required</sup> <a name="initial_endpoint_spec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.initialEndpointSpec"></a>

```python
initial_endpoint_spec: DataDatabricksPostgresProjectInitialEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecOutputReference</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresProjectProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference">DataDatabricksPostgresProjectProviderConfigOutputReference</a>

---

##### `purge_time`<sup>Required</sup> <a name="purge_time" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.purgeTime"></a>

```python
purge_time: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.spec"></a>

```python
spec: DataDatabricksPostgresProjectSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference">DataDatabricksPostgresProjectSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.status"></a>

```python
status: DataDatabricksPostgresProjectStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference">DataDatabricksPostgresProjectStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksPostgresProjectProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresProjectConfig <a name="DataDatabricksPostgresProjectConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksPostgresProjectProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#name DataDatabricksPostgresProject#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#provider_config DataDatabricksPostgresProject#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#name DataDatabricksPostgresProject#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresProjectProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#provider_config DataDatabricksPostgresProject#provider_config}.

---

### DataDatabricksPostgresProjectInitialBranchSpec <a name="DataDatabricksPostgresProjectInitialBranchSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec(
  is_protected: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec.property.isProtected">is_protected</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#is_protected DataDatabricksPostgresProject#is_protected}. |

---

##### `is_protected`<sup>Optional</sup> <a name="is_protected" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec.property.isProtected"></a>

```python
is_protected: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#is_protected DataDatabricksPostgresProject#is_protected}.

---

### DataDatabricksPostgresProjectInitialEndpointSpec <a name="DataDatabricksPostgresProjectInitialEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec(
  autoscaling_limit_max_cu: typing.Union[int, float] = None,
  autoscaling_limit_min_cu: typing.Union[int, float] = None,
  group: DataDatabricksPostgresProjectInitialEndpointSpecGroup = None,
  no_suspension: bool | IResolvable = None,
  suspend_timeout_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.autoscalingLimitMaxCu">autoscaling_limit_max_cu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.autoscalingLimitMinCu">autoscaling_limit_min_cu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#group DataDatabricksPostgresProject#group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.noSuspension">no_suspension</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.suspendTimeoutDuration">suspend_timeout_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}. |

---

##### `autoscaling_limit_max_cu`<sup>Optional</sup> <a name="autoscaling_limit_max_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.autoscalingLimitMaxCu"></a>

```python
autoscaling_limit_max_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}.

---

##### `autoscaling_limit_min_cu`<sup>Optional</sup> <a name="autoscaling_limit_min_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.autoscalingLimitMinCu"></a>

```python
autoscaling_limit_min_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.group"></a>

```python
group: DataDatabricksPostgresProjectInitialEndpointSpecGroup
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#group DataDatabricksPostgresProject#group}.

---

##### `no_suspension`<sup>Optional</sup> <a name="no_suspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.noSuspension"></a>

```python
no_suspension: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}.

---

##### `suspend_timeout_duration`<sup>Optional</sup> <a name="suspend_timeout_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.suspendTimeoutDuration"></a>

```python
suspend_timeout_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectInitialEndpointSpecGroup <a name="DataDatabricksPostgresProjectInitialEndpointSpecGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup(
  max: typing.Union[int, float],
  min: typing.Union[int, float],
  enable_readable_secondaries: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.max">max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#max DataDatabricksPostgresProject#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.min">min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#min DataDatabricksPostgresProject#min}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.enableReadableSecondaries">enable_readable_secondaries</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#enable_readable_secondaries DataDatabricksPostgresProject#enable_readable_secondaries}. |

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#max DataDatabricksPostgresProject#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#min DataDatabricksPostgresProject#min}.

---

##### `enable_readable_secondaries`<sup>Optional</sup> <a name="enable_readable_secondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.enableReadableSecondaries"></a>

```python
enable_readable_secondaries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#enable_readable_secondaries DataDatabricksPostgresProject#enable_readable_secondaries}.

---

### DataDatabricksPostgresProjectProviderConfig <a name="DataDatabricksPostgresProjectProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#workspace_id DataDatabricksPostgresProject#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#workspace_id DataDatabricksPostgresProject#workspace_id}.

---

### DataDatabricksPostgresProjectSpec <a name="DataDatabricksPostgresProjectSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec(
  budget_policy_id: str = None,
  custom_tags: IResolvable | typing.List[DataDatabricksPostgresProjectSpecCustomTags] = None,
  default_branch: str = None,
  default_endpoint_settings: DataDatabricksPostgresProjectSpecDefaultEndpointSettings = None,
  display_name: str = None,
  enable_pg_native_login: bool | IResolvable = None,
  history_retention_duration: str = None,
  pg_version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#budget_policy_id DataDatabricksPostgresProject#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.customTags">custom_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#custom_tags DataDatabricksPostgresProject#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.defaultBranch">default_branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#default_branch DataDatabricksPostgresProject#default_branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.defaultEndpointSettings">default_endpoint_settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#default_endpoint_settings DataDatabricksPostgresProject#default_endpoint_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#display_name DataDatabricksPostgresProject#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.enablePgNativeLogin">enable_pg_native_login</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#enable_pg_native_login DataDatabricksPostgresProject#enable_pg_native_login}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.historyRetentionDuration">history_retention_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#history_retention_duration DataDatabricksPostgresProject#history_retention_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.pgVersion">pg_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_version DataDatabricksPostgresProject#pg_version}. |

---

##### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#budget_policy_id DataDatabricksPostgresProject#budget_policy_id}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.customTags"></a>

```python
custom_tags: IResolvable | typing.List[DataDatabricksPostgresProjectSpecCustomTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#custom_tags DataDatabricksPostgresProject#custom_tags}.

---

##### `default_branch`<sup>Optional</sup> <a name="default_branch" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#default_branch DataDatabricksPostgresProject#default_branch}.

---

##### `default_endpoint_settings`<sup>Optional</sup> <a name="default_endpoint_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.defaultEndpointSettings"></a>

```python
default_endpoint_settings: DataDatabricksPostgresProjectSpecDefaultEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#default_endpoint_settings DataDatabricksPostgresProject#default_endpoint_settings}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#display_name DataDatabricksPostgresProject#display_name}.

---

##### `enable_pg_native_login`<sup>Optional</sup> <a name="enable_pg_native_login" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.enablePgNativeLogin"></a>

```python
enable_pg_native_login: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#enable_pg_native_login DataDatabricksPostgresProject#enable_pg_native_login}.

---

##### `history_retention_duration`<sup>Optional</sup> <a name="history_retention_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.historyRetentionDuration"></a>

```python
history_retention_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#history_retention_duration DataDatabricksPostgresProject#history_retention_duration}.

---

##### `pg_version`<sup>Optional</sup> <a name="pg_version" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.pgVersion"></a>

```python
pg_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_version DataDatabricksPostgresProject#pg_version}.

---

### DataDatabricksPostgresProjectSpecCustomTags <a name="DataDatabricksPostgresProjectSpecCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}.

---

### DataDatabricksPostgresProjectSpecDefaultEndpointSettings <a name="DataDatabricksPostgresProjectSpecDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings(
  autoscaling_limit_max_cu: typing.Union[int, float] = None,
  autoscaling_limit_min_cu: typing.Union[int, float] = None,
  no_suspension: bool | IResolvable = None,
  pg_settings: typing.Mapping[str] = None,
  suspend_timeout_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscaling_limit_max_cu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscaling_limit_min_cu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.noSuspension">no_suspension</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.pgSettings">pg_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.suspendTimeoutDuration">suspend_timeout_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}. |

---

##### `autoscaling_limit_max_cu`<sup>Optional</sup> <a name="autoscaling_limit_max_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```python
autoscaling_limit_max_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}.

---

##### `autoscaling_limit_min_cu`<sup>Optional</sup> <a name="autoscaling_limit_min_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```python
autoscaling_limit_min_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}.

---

##### `no_suspension`<sup>Optional</sup> <a name="no_suspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.noSuspension"></a>

```python
no_suspension: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}.

---

##### `pg_settings`<sup>Optional</sup> <a name="pg_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.pgSettings"></a>

```python
pg_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}.

---

##### `suspend_timeout_duration`<sup>Optional</sup> <a name="suspend_timeout_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```python
suspend_timeout_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectStatus <a name="DataDatabricksPostgresProjectStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus()
```


### DataDatabricksPostgresProjectStatusCustomTags <a name="DataDatabricksPostgresProjectStatusCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}.

---

### DataDatabricksPostgresProjectStatusDefaultEndpointSettings <a name="DataDatabricksPostgresProjectStatusDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings(
  autoscaling_limit_max_cu: typing.Union[int, float] = None,
  autoscaling_limit_min_cu: typing.Union[int, float] = None,
  no_suspension: bool | IResolvable = None,
  pg_settings: typing.Mapping[str] = None,
  suspend_timeout_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu">autoscaling_limit_max_cu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMinCu">autoscaling_limit_min_cu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.noSuspension">no_suspension</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.pgSettings">pg_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.suspendTimeoutDuration">suspend_timeout_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}. |

---

##### `autoscaling_limit_max_cu`<sup>Optional</sup> <a name="autoscaling_limit_max_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```python
autoscaling_limit_max_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}.

---

##### `autoscaling_limit_min_cu`<sup>Optional</sup> <a name="autoscaling_limit_min_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```python
autoscaling_limit_min_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}.

---

##### `no_suspension`<sup>Optional</sup> <a name="no_suspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.noSuspension"></a>

```python
no_suspension: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}.

---

##### `pg_settings`<sup>Optional</sup> <a name="pg_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.pgSettings"></a>

```python
pg_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}.

---

##### `suspend_timeout_duration`<sup>Optional</sup> <a name="suspend_timeout_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```python
suspend_timeout_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresProjectInitialBranchSpecOutputReference <a name="DataDatabricksPostgresProjectInitialBranchSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.resetIsProtected">reset_is_protected</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_protected` <a name="reset_is_protected" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.resetIsProtected"></a>

```python
def reset_is_protected() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.isProtectedInput">is_protected_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.isProtected">is_protected</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec">DataDatabricksPostgresProjectInitialBranchSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_protected_input`<sup>Optional</sup> <a name="is_protected_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.isProtectedInput"></a>

```python
is_protected_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_protected`<sup>Required</sup> <a name="is_protected" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.isProtected"></a>

```python
is_protected: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresProjectInitialBranchSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec">DataDatabricksPostgresProjectInitialBranchSpec</a>

---


### DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference <a name="DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries">reset_enable_readable_secondaries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_readable_secondaries` <a name="reset_enable_readable_secondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```python
def reset_enable_readable_secondaries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput">enable_readable_secondaries_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.maxInput">max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.minInput">min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries">enable_readable_secondaries</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_readable_secondaries_input`<sup>Optional</sup> <a name="enable_readable_secondaries_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```python
enable_readable_secondaries_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_input`<sup>Optional</sup> <a name="max_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.maxInput"></a>

```python
max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_input`<sup>Optional</sup> <a name="min_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.minInput"></a>

```python
min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_readable_secondaries`<sup>Required</sup> <a name="enable_readable_secondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```python
enable_readable_secondaries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresProjectInitialEndpointSpecGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a>

---


### DataDatabricksPostgresProjectInitialEndpointSpecOutputReference <a name="DataDatabricksPostgresProjectInitialEndpointSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.putGroup">put_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetAutoscalingLimitMaxCu">reset_autoscaling_limit_max_cu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetAutoscalingLimitMinCu">reset_autoscaling_limit_min_cu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetNoSuspension">reset_no_suspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetSuspendTimeoutDuration">reset_suspend_timeout_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_group` <a name="put_group" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.putGroup"></a>

```python
def put_group(
  max: typing.Union[int, float],
  min: typing.Union[int, float],
  enable_readable_secondaries: bool | IResolvable = None
) -> None
```

###### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.putGroup.parameter.max"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#max DataDatabricksPostgresProject#max}.

---

###### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.putGroup.parameter.min"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#min DataDatabricksPostgresProject#min}.

---

###### `enable_readable_secondaries`<sup>Optional</sup> <a name="enable_readable_secondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.putGroup.parameter.enableReadableSecondaries"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#enable_readable_secondaries DataDatabricksPostgresProject#enable_readable_secondaries}.

---

##### `reset_autoscaling_limit_max_cu` <a name="reset_autoscaling_limit_max_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetAutoscalingLimitMaxCu"></a>

```python
def reset_autoscaling_limit_max_cu() -> None
```

##### `reset_autoscaling_limit_min_cu` <a name="reset_autoscaling_limit_min_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetAutoscalingLimitMinCu"></a>

```python
def reset_autoscaling_limit_min_cu() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_no_suspension` <a name="reset_no_suspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetNoSuspension"></a>

```python
def reset_no_suspension() -> None
```

##### `reset_suspend_timeout_duration` <a name="reset_suspend_timeout_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetSuspendTimeoutDuration"></a>

```python
def reset_suspend_timeout_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput">autoscaling_limit_max_cu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMinCuInput">autoscaling_limit_min_cu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.groupInput">group_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.noSuspensionInput">no_suspension_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.suspendTimeoutDurationInput">suspend_timeout_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCu">autoscaling_limit_max_cu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMinCu">autoscaling_limit_min_cu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.noSuspension">no_suspension</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.suspendTimeoutDuration">suspend_timeout_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec">DataDatabricksPostgresProjectInitialEndpointSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.group"></a>

```python
group: DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference</a>

---

##### `autoscaling_limit_max_cu_input`<sup>Optional</sup> <a name="autoscaling_limit_max_cu_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput"></a>

```python
autoscaling_limit_max_cu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscaling_limit_min_cu_input`<sup>Optional</sup> <a name="autoscaling_limit_min_cu_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMinCuInput"></a>

```python
autoscaling_limit_min_cu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.groupInput"></a>

```python
group_input: IResolvable | DataDatabricksPostgresProjectInitialEndpointSpecGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a>

---

##### `no_suspension_input`<sup>Optional</sup> <a name="no_suspension_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.noSuspensionInput"></a>

```python
no_suspension_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `suspend_timeout_duration_input`<sup>Optional</sup> <a name="suspend_timeout_duration_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.suspendTimeoutDurationInput"></a>

```python
suspend_timeout_duration_input: str
```

- *Type:* str

---

##### `autoscaling_limit_max_cu`<sup>Required</sup> <a name="autoscaling_limit_max_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCu"></a>

```python
autoscaling_limit_max_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscaling_limit_min_cu`<sup>Required</sup> <a name="autoscaling_limit_min_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMinCu"></a>

```python
autoscaling_limit_min_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_suspension`<sup>Required</sup> <a name="no_suspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.noSuspension"></a>

```python
no_suspension: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `suspend_timeout_duration`<sup>Required</sup> <a name="suspend_timeout_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.suspendTimeoutDuration"></a>

```python
suspend_timeout_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresProjectInitialEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec">DataDatabricksPostgresProjectInitialEndpointSpec</a>

---


### DataDatabricksPostgresProjectProviderConfigOutputReference <a name="DataDatabricksPostgresProjectProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresProjectProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a>

---


### DataDatabricksPostgresProjectSpecCustomTagsList <a name="DataDatabricksPostgresProjectSpecCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPostgresProjectSpecCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPostgresProjectSpecCustomTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>]

---


### DataDatabricksPostgresProjectSpecCustomTagsOutputReference <a name="DataDatabricksPostgresProjectSpecCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresProjectSpecCustomTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>

---


### DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">reset_autoscaling_limit_max_cu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">reset_autoscaling_limit_min_cu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetNoSuspension">reset_no_suspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetPgSettings">reset_pg_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">reset_suspend_timeout_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_autoscaling_limit_max_cu` <a name="reset_autoscaling_limit_max_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```python
def reset_autoscaling_limit_max_cu() -> None
```

##### `reset_autoscaling_limit_min_cu` <a name="reset_autoscaling_limit_min_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```python
def reset_autoscaling_limit_min_cu() -> None
```

##### `reset_no_suspension` <a name="reset_no_suspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```python
def reset_no_suspension() -> None
```

##### `reset_pg_settings` <a name="reset_pg_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```python
def reset_pg_settings() -> None
```

##### `reset_suspend_timeout_duration` <a name="reset_suspend_timeout_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```python
def reset_suspend_timeout_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">autoscaling_limit_max_cu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">autoscaling_limit_min_cu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput">no_suspension_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput">pg_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">suspend_timeout_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">autoscaling_limit_max_cu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">autoscaling_limit_min_cu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspension">no_suspension</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettings">pg_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">suspend_timeout_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_limit_max_cu_input`<sup>Optional</sup> <a name="autoscaling_limit_max_cu_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```python
autoscaling_limit_max_cu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscaling_limit_min_cu_input`<sup>Optional</sup> <a name="autoscaling_limit_min_cu_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```python
autoscaling_limit_min_cu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_suspension_input`<sup>Optional</sup> <a name="no_suspension_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```python
no_suspension_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pg_settings_input`<sup>Optional</sup> <a name="pg_settings_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```python
pg_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `suspend_timeout_duration_input`<sup>Optional</sup> <a name="suspend_timeout_duration_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```python
suspend_timeout_duration_input: str
```

- *Type:* str

---

##### `autoscaling_limit_max_cu`<sup>Required</sup> <a name="autoscaling_limit_max_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```python
autoscaling_limit_max_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscaling_limit_min_cu`<sup>Required</sup> <a name="autoscaling_limit_min_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```python
autoscaling_limit_min_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_suspension`<sup>Required</sup> <a name="no_suspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```python
no_suspension: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pg_settings`<sup>Required</sup> <a name="pg_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```python
pg_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `suspend_timeout_duration`<sup>Required</sup> <a name="suspend_timeout_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```python
suspend_timeout_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresProjectSpecDefaultEndpointSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a>

---


### DataDatabricksPostgresProjectSpecOutputReference <a name="DataDatabricksPostgresProjectSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putCustomTags">put_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings">put_default_endpoint_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetBudgetPolicyId">reset_budget_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDefaultBranch">reset_default_branch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDefaultEndpointSettings">reset_default_endpoint_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetEnablePgNativeLogin">reset_enable_pg_native_login</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetHistoryRetentionDuration">reset_history_retention_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetPgVersion">reset_pg_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_tags` <a name="put_custom_tags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putCustomTags"></a>

```python
def put_custom_tags(
  value: IResolvable | typing.List[DataDatabricksPostgresProjectSpecCustomTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putCustomTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>]

---

##### `put_default_endpoint_settings` <a name="put_default_endpoint_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings"></a>

```python
def put_default_endpoint_settings(
  autoscaling_limit_max_cu: typing.Union[int, float] = None,
  autoscaling_limit_min_cu: typing.Union[int, float] = None,
  no_suspension: bool | IResolvable = None,
  pg_settings: typing.Mapping[str] = None,
  suspend_timeout_duration: str = None
) -> None
```

###### `autoscaling_limit_max_cu`<sup>Optional</sup> <a name="autoscaling_limit_max_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings.parameter.autoscalingLimitMaxCu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}.

---

###### `autoscaling_limit_min_cu`<sup>Optional</sup> <a name="autoscaling_limit_min_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings.parameter.autoscalingLimitMinCu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}.

---

###### `no_suspension`<sup>Optional</sup> <a name="no_suspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings.parameter.noSuspension"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}.

---

###### `pg_settings`<sup>Optional</sup> <a name="pg_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings.parameter.pgSettings"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}.

---

###### `suspend_timeout_duration`<sup>Optional</sup> <a name="suspend_timeout_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings.parameter.suspendTimeoutDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}.

---

##### `reset_budget_policy_id` <a name="reset_budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetBudgetPolicyId"></a>

```python
def reset_budget_policy_id() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_default_branch` <a name="reset_default_branch" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDefaultBranch"></a>

```python
def reset_default_branch() -> None
```

##### `reset_default_endpoint_settings` <a name="reset_default_endpoint_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDefaultEndpointSettings"></a>

```python
def reset_default_endpoint_settings() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enable_pg_native_login` <a name="reset_enable_pg_native_login" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetEnablePgNativeLogin"></a>

```python
def reset_enable_pg_native_login() -> None
```

##### `reset_history_retention_duration` <a name="reset_history_retention_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetHistoryRetentionDuration"></a>

```python
def reset_history_retention_duration() -> None
```

##### `reset_pg_version` <a name="reset_pg_version" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetPgVersion"></a>

```python
def reset_pg_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTags">custom_tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList">DataDatabricksPostgresProjectSpecCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettings">default_endpoint_settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyIdInput">budget_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTagsInput">custom_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultBranchInput">default_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettingsInput">default_endpoint_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.enablePgNativeLoginInput">enable_pg_native_login_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDurationInput">history_retention_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersionInput">pg_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultBranch">default_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.enablePgNativeLogin">enable_pg_native_login</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDuration">history_retention_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersion">pg_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec">DataDatabricksPostgresProjectSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTags"></a>

```python
custom_tags: DataDatabricksPostgresProjectSpecCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList">DataDatabricksPostgresProjectSpecCustomTagsList</a>

---

##### `default_endpoint_settings`<sup>Required</sup> <a name="default_endpoint_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettings"></a>

```python
default_endpoint_settings: DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference</a>

---

##### `budget_policy_id_input`<sup>Optional</sup> <a name="budget_policy_id_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyIdInput"></a>

```python
budget_policy_id_input: str
```

- *Type:* str

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTagsInput"></a>

```python
custom_tags_input: IResolvable | typing.List[DataDatabricksPostgresProjectSpecCustomTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags">DataDatabricksPostgresProjectSpecCustomTags</a>]

---

##### `default_branch_input`<sup>Optional</sup> <a name="default_branch_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultBranchInput"></a>

```python
default_branch_input: str
```

- *Type:* str

---

##### `default_endpoint_settings_input`<sup>Optional</sup> <a name="default_endpoint_settings_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettingsInput"></a>

```python
default_endpoint_settings_input: IResolvable | DataDatabricksPostgresProjectSpecDefaultEndpointSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_pg_native_login_input`<sup>Optional</sup> <a name="enable_pg_native_login_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.enablePgNativeLoginInput"></a>

```python
enable_pg_native_login_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `history_retention_duration_input`<sup>Optional</sup> <a name="history_retention_duration_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDurationInput"></a>

```python
history_retention_duration_input: str
```

- *Type:* str

---

##### `pg_version_input`<sup>Optional</sup> <a name="pg_version_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersionInput"></a>

```python
pg_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `budget_policy_id`<sup>Required</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

---

##### `default_branch`<sup>Required</sup> <a name="default_branch" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_pg_native_login`<sup>Required</sup> <a name="enable_pg_native_login" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.enablePgNativeLogin"></a>

```python
enable_pg_native_login: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `history_retention_duration`<sup>Required</sup> <a name="history_retention_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDuration"></a>

```python
history_retention_duration: str
```

- *Type:* str

---

##### `pg_version`<sup>Required</sup> <a name="pg_version" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersion"></a>

```python
pg_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresProjectSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec">DataDatabricksPostgresProjectSpec</a>

---


### DataDatabricksPostgresProjectStatusCustomTagsList <a name="DataDatabricksPostgresProjectStatusCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPostgresProjectStatusCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags">DataDatabricksPostgresProjectStatusCustomTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPostgresProjectStatusCustomTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags">DataDatabricksPostgresProjectStatusCustomTags</a>]

---


### DataDatabricksPostgresProjectStatusCustomTagsOutputReference <a name="DataDatabricksPostgresProjectStatusCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags">DataDatabricksPostgresProjectStatusCustomTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresProjectStatusCustomTags
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags">DataDatabricksPostgresProjectStatusCustomTags</a>

---


### DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">reset_autoscaling_limit_max_cu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">reset_autoscaling_limit_min_cu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetNoSuspension">reset_no_suspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetPgSettings">reset_pg_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">reset_suspend_timeout_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_autoscaling_limit_max_cu` <a name="reset_autoscaling_limit_max_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```python
def reset_autoscaling_limit_max_cu() -> None
```

##### `reset_autoscaling_limit_min_cu` <a name="reset_autoscaling_limit_min_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```python
def reset_autoscaling_limit_min_cu() -> None
```

##### `reset_no_suspension` <a name="reset_no_suspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```python
def reset_no_suspension() -> None
```

##### `reset_pg_settings` <a name="reset_pg_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```python
def reset_pg_settings() -> None
```

##### `reset_suspend_timeout_duration` <a name="reset_suspend_timeout_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```python
def reset_suspend_timeout_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">autoscaling_limit_max_cu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">autoscaling_limit_min_cu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput">no_suspension_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput">pg_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">suspend_timeout_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">autoscaling_limit_max_cu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">autoscaling_limit_min_cu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspension">no_suspension</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettings">pg_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">suspend_timeout_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings">DataDatabricksPostgresProjectStatusDefaultEndpointSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_limit_max_cu_input`<sup>Optional</sup> <a name="autoscaling_limit_max_cu_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```python
autoscaling_limit_max_cu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscaling_limit_min_cu_input`<sup>Optional</sup> <a name="autoscaling_limit_min_cu_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```python
autoscaling_limit_min_cu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_suspension_input`<sup>Optional</sup> <a name="no_suspension_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```python
no_suspension_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pg_settings_input`<sup>Optional</sup> <a name="pg_settings_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```python
pg_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `suspend_timeout_duration_input`<sup>Optional</sup> <a name="suspend_timeout_duration_input" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```python
suspend_timeout_duration_input: str
```

- *Type:* str

---

##### `autoscaling_limit_max_cu`<sup>Required</sup> <a name="autoscaling_limit_max_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```python
autoscaling_limit_max_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscaling_limit_min_cu`<sup>Required</sup> <a name="autoscaling_limit_min_cu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```python
autoscaling_limit_min_cu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_suspension`<sup>Required</sup> <a name="no_suspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```python
no_suspension: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pg_settings`<sup>Required</sup> <a name="pg_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```python
pg_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `suspend_timeout_duration`<sup>Required</sup> <a name="suspend_timeout_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```python
suspend_timeout_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresProjectStatusDefaultEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings">DataDatabricksPostgresProjectStatusDefaultEndpointSettings</a>

---


### DataDatabricksPostgresProjectStatusOutputReference <a name="DataDatabricksPostgresProjectStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_project

dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.branchLogicalSizeLimitBytes">branch_logical_size_limit_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.computeLastActiveTime">compute_last_active_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.customTags">custom_tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList">DataDatabricksPostgresProjectStatusCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.defaultBranch">default_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.defaultEndpointSettings">default_endpoint_settings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.enablePgNativeLogin">enable_pg_native_login</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.historyRetentionDuration">history_retention_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.pgVersion">pg_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.syntheticStorageSizeBytes">synthetic_storage_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus">DataDatabricksPostgresProjectStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_logical_size_limit_bytes`<sup>Required</sup> <a name="branch_logical_size_limit_bytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.branchLogicalSizeLimitBytes"></a>

```python
branch_logical_size_limit_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `budget_policy_id`<sup>Required</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

---

##### `compute_last_active_time`<sup>Required</sup> <a name="compute_last_active_time" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.computeLastActiveTime"></a>

```python
compute_last_active_time: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.customTags"></a>

```python
custom_tags: DataDatabricksPostgresProjectStatusCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList">DataDatabricksPostgresProjectStatusCustomTagsList</a>

---

##### `default_branch`<sup>Required</sup> <a name="default_branch" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

---

##### `default_endpoint_settings`<sup>Required</sup> <a name="default_endpoint_settings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.defaultEndpointSettings"></a>

```python
default_endpoint_settings: DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_pg_native_login`<sup>Required</sup> <a name="enable_pg_native_login" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.enablePgNativeLogin"></a>

```python
enable_pg_native_login: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `history_retention_duration`<sup>Required</sup> <a name="history_retention_duration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.historyRetentionDuration"></a>

```python
history_retention_duration: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `pg_version`<sup>Required</sup> <a name="pg_version" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.pgVersion"></a>

```python
pg_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `synthetic_storage_size_bytes`<sup>Required</sup> <a name="synthetic_storage_size_bytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.syntheticStorageSizeBytes"></a>

```python
synthetic_storage_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresProjectStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus">DataDatabricksPostgresProjectStatus</a>

---



