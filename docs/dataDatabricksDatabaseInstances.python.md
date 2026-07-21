# `dataDatabricksDatabaseInstances` Submodule <a name="`dataDatabricksDatabaseInstances` Submodule" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseInstances <a name="DataDatabricksDatabaseInstances" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances databricks_database_instances}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksDatabaseInstancesProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#page_size DataDatabricksDatabaseInstances#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#provider_config DataDatabricksDatabaseInstances#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#page_size DataDatabricksDatabaseInstances#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#provider_config DataDatabricksDatabaseInstances#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksDatabaseInstances resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksDatabaseInstances resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDatabaseInstances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDatabaseInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.databaseInstances">database_instances</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList">DataDatabricksDatabaseInstancesDatabaseInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference">DataDatabricksDatabaseInstancesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `database_instances`<sup>Required</sup> <a name="database_instances" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.databaseInstances"></a>

```python
database_instances: DataDatabricksDatabaseInstancesDatabaseInstancesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList">DataDatabricksDatabaseInstancesDatabaseInstancesList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.providerConfig"></a>

```python
provider_config: DataDatabricksDatabaseInstancesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference">DataDatabricksDatabaseInstancesProviderConfigOutputReference</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksDatabaseInstancesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseInstancesConfig <a name="DataDatabricksDatabaseInstancesConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksDatabaseInstancesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#page_size DataDatabricksDatabaseInstances#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#provider_config DataDatabricksDatabaseInstances#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#page_size DataDatabricksDatabaseInstances#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksDatabaseInstancesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#provider_config DataDatabricksDatabaseInstances#provider_config}.

---

### DataDatabricksDatabaseInstancesDatabaseInstances <a name="DataDatabricksDatabaseInstancesDatabaseInstances" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances(
  name: str,
  provider_config: DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#provider_config DataDatabricksDatabaseInstances#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.providerConfig"></a>

```python
provider_config: DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#provider_config DataDatabricksDatabaseInstances#provider_config}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs(
  branch_time: str = None,
  lsn: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.branchTime">branch_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.lsn">lsn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |

---

##### `branch_time`<sup>Optional</sup> <a name="branch_time" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.branchTime"></a>

```python
branch_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.lsn"></a>

```python
lsn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags <a name="DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags <a name="DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef <a name="DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef(
  branch_time: str = None,
  lsn: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.branchTime">branch_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.lsn">lsn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |

---

##### `branch_time`<sup>Optional</sup> <a name="branch_time" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.branchTime"></a>

```python
branch_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}.

---

##### `lsn`<sup>Optional</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.lsn"></a>

```python
lsn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig <a name="DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}.

---

### DataDatabricksDatabaseInstancesProviderConfig <a name="DataDatabricksDatabaseInstancesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a>]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetBranchTime">reset_branch_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetLsn">reset_lsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch_time` <a name="reset_branch_time" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetBranchTime"></a>

```python
def reset_branch_time() -> None
```

##### `reset_lsn` <a name="reset_lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetLsn"></a>

```python
def reset_lsn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.effectiveLsn">effective_lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTimeInput">branch_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsnInput">lsn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTime">branch_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsn">lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_lsn`<sup>Required</sup> <a name="effective_lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.effectiveLsn"></a>

```python
effective_lsn: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `branch_time_input`<sup>Optional</sup> <a name="branch_time_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTimeInput"></a>

```python
branch_time_input: str
```

- *Type:* str

---

##### `lsn_input`<sup>Optional</sup> <a name="lsn_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsnInput"></a>

```python
lsn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `branch_time`<sup>Required</sup> <a name="branch_time" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTime"></a>

```python
branch_time: str
```

- *Type:* str

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsn"></a>

```python
lsn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a>]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a>]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesList" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDatabaseInstancesDatabaseInstances]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a>]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/database_instances#workspace_id DataDatabricksDatabaseInstances#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.capacity">capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.childInstanceRefs">child_instance_refs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.customTags">custom_tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCapacity">effective_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCustomTags">effective_custom_tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnablePgNativeLogin">effective_enable_pg_native_login</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnableReadableSecondaries">effective_enable_readable_secondaries</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveNodeCount">effective_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveRetentionWindowInDays">effective_retention_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveStopped">effective_stopped</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveUsagePolicyId">effective_usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enablePgNativeLogin">enable_pg_native_login</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enableReadableSecondaries">enable_readable_secondaries</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.parentInstanceRef">parent_instance_ref</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.pgVersion">pg_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readOnlyDns">read_only_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readWriteDns">read_write_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.retentionWindowInDays">retention_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.stopped">stopped</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

---

##### `child_instance_refs`<sup>Required</sup> <a name="child_instance_refs" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.childInstanceRefs"></a>

```python
child_instance_refs: DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.customTags"></a>

```python
custom_tags: DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList</a>

---

##### `effective_capacity`<sup>Required</sup> <a name="effective_capacity" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCapacity"></a>

```python
effective_capacity: str
```

- *Type:* str

---

##### `effective_custom_tags`<sup>Required</sup> <a name="effective_custom_tags" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCustomTags"></a>

```python
effective_custom_tags: DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList</a>

---

##### `effective_enable_pg_native_login`<sup>Required</sup> <a name="effective_enable_pg_native_login" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnablePgNativeLogin"></a>

```python
effective_enable_pg_native_login: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `effective_enable_readable_secondaries`<sup>Required</sup> <a name="effective_enable_readable_secondaries" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnableReadableSecondaries"></a>

```python
effective_enable_readable_secondaries: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `effective_node_count`<sup>Required</sup> <a name="effective_node_count" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveNodeCount"></a>

```python
effective_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effective_retention_window_in_days`<sup>Required</sup> <a name="effective_retention_window_in_days" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveRetentionWindowInDays"></a>

```python
effective_retention_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effective_stopped`<sup>Required</sup> <a name="effective_stopped" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveStopped"></a>

```python
effective_stopped: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `effective_usage_policy_id`<sup>Required</sup> <a name="effective_usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveUsagePolicyId"></a>

```python
effective_usage_policy_id: str
```

- *Type:* str

---

##### `enable_pg_native_login`<sup>Required</sup> <a name="enable_pg_native_login" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enablePgNativeLogin"></a>

```python
enable_pg_native_login: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_readable_secondaries`<sup>Required</sup> <a name="enable_readable_secondaries" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enableReadableSecondaries"></a>

```python
enable_readable_secondaries: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_instance_ref`<sup>Required</sup> <a name="parent_instance_ref" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.parentInstanceRef"></a>

```python
parent_instance_ref: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference</a>

---

##### `pg_version`<sup>Required</sup> <a name="pg_version" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.pgVersion"></a>

```python
pg_version: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference</a>

---

##### `read_only_dns`<sup>Required</sup> <a name="read_only_dns" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readOnlyDns"></a>

```python
read_only_dns: str
```

- *Type:* str

---

##### `read_write_dns`<sup>Required</sup> <a name="read_write_dns" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readWriteDns"></a>

```python
read_write_dns: str
```

- *Type:* str

---

##### `retention_window_in_days`<sup>Required</sup> <a name="retention_window_in_days" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.retentionWindowInDays"></a>

```python
retention_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `stopped`<sup>Required</sup> <a name="stopped" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.stopped"></a>

```python
stopped: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `usage_policy_id`<sup>Required</sup> <a name="usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.usagePolicyId"></a>

```python
usage_policy_id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseInstancesDatabaseInstances
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetBranchTime">reset_branch_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetLsn">reset_lsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch_time` <a name="reset_branch_time" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetBranchTime"></a>

```python
def reset_branch_time() -> None
```

##### `reset_lsn` <a name="reset_lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetLsn"></a>

```python
def reset_lsn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.effectiveLsn">effective_lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTimeInput">branch_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsnInput">lsn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTime">branch_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsn">lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_lsn`<sup>Required</sup> <a name="effective_lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.effectiveLsn"></a>

```python
effective_lsn: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `branch_time_input`<sup>Optional</sup> <a name="branch_time_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTimeInput"></a>

```python
branch_time_input: str
```

- *Type:* str

---

##### `lsn_input`<sup>Optional</sup> <a name="lsn_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsnInput"></a>

```python
lsn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `branch_time`<sup>Required</sup> <a name="branch_time" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTime"></a>

```python
branch_time: str
```

- *Type:* str

---

##### `lsn`<sup>Required</sup> <a name="lsn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsn"></a>

```python
lsn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesDatabaseInstancesProviderConfig</a>

---


### DataDatabricksDatabaseInstancesProviderConfigOutputReference <a name="DataDatabricksDatabaseInstancesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_instances

dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDatabaseInstancesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesProviderConfig">DataDatabricksDatabaseInstancesProviderConfig</a>

---



