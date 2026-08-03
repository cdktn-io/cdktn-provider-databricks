# `dataDatabricksPostgresDataApi` Submodule <a name="`dataDatabricksPostgresDataApi` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresDataApi <a name="DataDatabricksPostgresDataApi" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api databricks_postgres_data_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi(
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
  provider_config: DataDatabricksPostgresDataApiProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#workspace_id DataDatabricksPostgresDataApi#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresDataApi resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksPostgresDataApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksPostgresDataApi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksPostgresDataApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresDataApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference">DataDatabricksPostgresDataApiProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference">DataDatabricksPostgresDataApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference">DataDatabricksPostgresDataApiStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresDataApiProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference">DataDatabricksPostgresDataApiProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.spec"></a>

```python
spec: DataDatabricksPostgresDataApiSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference">DataDatabricksPostgresDataApiSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.status"></a>

```python
status: DataDatabricksPostgresDataApiStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference">DataDatabricksPostgresDataApiStatusOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksPostgresDataApiProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresDataApiConfig <a name="DataDatabricksPostgresDataApiConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksPostgresDataApiProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresDataApiProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}.

---

### DataDatabricksPostgresDataApiProviderConfig <a name="DataDatabricksPostgresDataApiProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#workspace_id DataDatabricksPostgresDataApi#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#workspace_id DataDatabricksPostgresDataApi#workspace_id}.

---

### DataDatabricksPostgresDataApiSpec <a name="DataDatabricksPostgresDataApiSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec(
  db_aggregates_enabled: bool | IResolvable = None,
  db_extra_search_path: typing.List[str] = None,
  db_max_rows: typing.Union[int, float] = None,
  db_schemas: typing.List[str] = None,
  jwt_cache_max_lifetime: str = None,
  jwt_role_claim_key: str = None,
  openapi_mode: str = None,
  server_cors_allowed_origins: typing.List[str] = None,
  server_timing_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbAggregatesEnabled">db_aggregates_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_aggregates_enabled DataDatabricksPostgresDataApi#db_aggregates_enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbExtraSearchPath">db_extra_search_path</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_extra_search_path DataDatabricksPostgresDataApi#db_extra_search_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbMaxRows">db_max_rows</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_max_rows DataDatabricksPostgresDataApi#db_max_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbSchemas">db_schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_schemas DataDatabricksPostgresDataApi#db_schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtCacheMaxLifetime">jwt_cache_max_lifetime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#jwt_cache_max_lifetime DataDatabricksPostgresDataApi#jwt_cache_max_lifetime}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtRoleClaimKey">jwt_role_claim_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#jwt_role_claim_key DataDatabricksPostgresDataApi#jwt_role_claim_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.openapiMode">openapi_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#openapi_mode DataDatabricksPostgresDataApi#openapi_mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverCorsAllowedOrigins">server_cors_allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#server_cors_allowed_origins DataDatabricksPostgresDataApi#server_cors_allowed_origins}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverTimingEnabled">server_timing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#server_timing_enabled DataDatabricksPostgresDataApi#server_timing_enabled}. |

---

##### `db_aggregates_enabled`<sup>Optional</sup> <a name="db_aggregates_enabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbAggregatesEnabled"></a>

```python
db_aggregates_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_aggregates_enabled DataDatabricksPostgresDataApi#db_aggregates_enabled}.

---

##### `db_extra_search_path`<sup>Optional</sup> <a name="db_extra_search_path" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbExtraSearchPath"></a>

```python
db_extra_search_path: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_extra_search_path DataDatabricksPostgresDataApi#db_extra_search_path}.

---

##### `db_max_rows`<sup>Optional</sup> <a name="db_max_rows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbMaxRows"></a>

```python
db_max_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_max_rows DataDatabricksPostgresDataApi#db_max_rows}.

---

##### `db_schemas`<sup>Optional</sup> <a name="db_schemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbSchemas"></a>

```python
db_schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#db_schemas DataDatabricksPostgresDataApi#db_schemas}.

---

##### `jwt_cache_max_lifetime`<sup>Optional</sup> <a name="jwt_cache_max_lifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtCacheMaxLifetime"></a>

```python
jwt_cache_max_lifetime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#jwt_cache_max_lifetime DataDatabricksPostgresDataApi#jwt_cache_max_lifetime}.

---

##### `jwt_role_claim_key`<sup>Optional</sup> <a name="jwt_role_claim_key" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtRoleClaimKey"></a>

```python
jwt_role_claim_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#jwt_role_claim_key DataDatabricksPostgresDataApi#jwt_role_claim_key}.

---

##### `openapi_mode`<sup>Optional</sup> <a name="openapi_mode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.openapiMode"></a>

```python
openapi_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#openapi_mode DataDatabricksPostgresDataApi#openapi_mode}.

---

##### `server_cors_allowed_origins`<sup>Optional</sup> <a name="server_cors_allowed_origins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverCorsAllowedOrigins"></a>

```python
server_cors_allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#server_cors_allowed_origins DataDatabricksPostgresDataApi#server_cors_allowed_origins}.

---

##### `server_timing_enabled`<sup>Optional</sup> <a name="server_timing_enabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverTimingEnabled"></a>

```python
server_timing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/postgres_data_api#server_timing_enabled DataDatabricksPostgresDataApi#server_timing_enabled}.

---

### DataDatabricksPostgresDataApiStatus <a name="DataDatabricksPostgresDataApiStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresDataApiProviderConfigOutputReference <a name="DataDatabricksPostgresDataApiProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresDataApiProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

---


### DataDatabricksPostgresDataApiSpecOutputReference <a name="DataDatabricksPostgresDataApiSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbAggregatesEnabled">reset_db_aggregates_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbExtraSearchPath">reset_db_extra_search_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbMaxRows">reset_db_max_rows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbSchemas">reset_db_schemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime">reset_jwt_cache_max_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtRoleClaimKey">reset_jwt_role_claim_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetOpenapiMode">reset_openapi_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins">reset_server_cors_allowed_origins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerTimingEnabled">reset_server_timing_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_db_aggregates_enabled` <a name="reset_db_aggregates_enabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbAggregatesEnabled"></a>

```python
def reset_db_aggregates_enabled() -> None
```

##### `reset_db_extra_search_path` <a name="reset_db_extra_search_path" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbExtraSearchPath"></a>

```python
def reset_db_extra_search_path() -> None
```

##### `reset_db_max_rows` <a name="reset_db_max_rows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbMaxRows"></a>

```python
def reset_db_max_rows() -> None
```

##### `reset_db_schemas` <a name="reset_db_schemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbSchemas"></a>

```python
def reset_db_schemas() -> None
```

##### `reset_jwt_cache_max_lifetime` <a name="reset_jwt_cache_max_lifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime"></a>

```python
def reset_jwt_cache_max_lifetime() -> None
```

##### `reset_jwt_role_claim_key` <a name="reset_jwt_role_claim_key" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtRoleClaimKey"></a>

```python
def reset_jwt_role_claim_key() -> None
```

##### `reset_openapi_mode` <a name="reset_openapi_mode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetOpenapiMode"></a>

```python
def reset_openapi_mode() -> None
```

##### `reset_server_cors_allowed_origins` <a name="reset_server_cors_allowed_origins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins"></a>

```python
def reset_server_cors_allowed_origins() -> None
```

##### `reset_server_timing_enabled` <a name="reset_server_timing_enabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerTimingEnabled"></a>

```python
def reset_server_timing_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput">db_aggregates_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput">db_extra_search_path_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRowsInput">db_max_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemasInput">db_schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput">jwt_cache_max_lifetime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput">jwt_role_claim_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiModeInput">openapi_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput">server_cors_allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabledInput">server_timing_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabled">db_aggregates_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPath">db_extra_search_path</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRows">db_max_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemas">db_schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime">jwt_cache_max_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKey">jwt_role_claim_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiMode">openapi_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins">server_cors_allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabled">server_timing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec">DataDatabricksPostgresDataApiSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_aggregates_enabled_input`<sup>Optional</sup> <a name="db_aggregates_enabled_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput"></a>

```python
db_aggregates_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `db_extra_search_path_input`<sup>Optional</sup> <a name="db_extra_search_path_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput"></a>

```python
db_extra_search_path_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_max_rows_input`<sup>Optional</sup> <a name="db_max_rows_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRowsInput"></a>

```python
db_max_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_schemas_input`<sup>Optional</sup> <a name="db_schemas_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemasInput"></a>

```python
db_schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jwt_cache_max_lifetime_input`<sup>Optional</sup> <a name="jwt_cache_max_lifetime_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput"></a>

```python
jwt_cache_max_lifetime_input: str
```

- *Type:* str

---

##### `jwt_role_claim_key_input`<sup>Optional</sup> <a name="jwt_role_claim_key_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput"></a>

```python
jwt_role_claim_key_input: str
```

- *Type:* str

---

##### `openapi_mode_input`<sup>Optional</sup> <a name="openapi_mode_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiModeInput"></a>

```python
openapi_mode_input: str
```

- *Type:* str

---

##### `server_cors_allowed_origins_input`<sup>Optional</sup> <a name="server_cors_allowed_origins_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput"></a>

```python
server_cors_allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_timing_enabled_input`<sup>Optional</sup> <a name="server_timing_enabled_input" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabledInput"></a>

```python
server_timing_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `db_aggregates_enabled`<sup>Required</sup> <a name="db_aggregates_enabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabled"></a>

```python
db_aggregates_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `db_extra_search_path`<sup>Required</sup> <a name="db_extra_search_path" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPath"></a>

```python
db_extra_search_path: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_max_rows`<sup>Required</sup> <a name="db_max_rows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRows"></a>

```python
db_max_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_schemas`<sup>Required</sup> <a name="db_schemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemas"></a>

```python
db_schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jwt_cache_max_lifetime`<sup>Required</sup> <a name="jwt_cache_max_lifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime"></a>

```python
jwt_cache_max_lifetime: str
```

- *Type:* str

---

##### `jwt_role_claim_key`<sup>Required</sup> <a name="jwt_role_claim_key" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKey"></a>

```python
jwt_role_claim_key: str
```

- *Type:* str

---

##### `openapi_mode`<sup>Required</sup> <a name="openapi_mode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiMode"></a>

```python
openapi_mode: str
```

- *Type:* str

---

##### `server_cors_allowed_origins`<sup>Required</sup> <a name="server_cors_allowed_origins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins"></a>

```python
server_cors_allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_timing_enabled`<sup>Required</sup> <a name="server_timing_enabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabled"></a>

```python
server_timing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresDataApiSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec">DataDatabricksPostgresDataApiSpec</a>

---


### DataDatabricksPostgresDataApiStatusOutputReference <a name="DataDatabricksPostgresDataApiStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_data_api

dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.availableSchemas">available_schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbAggregatesEnabled">db_aggregates_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbExtraSearchPath">db_extra_search_path</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbMaxRows">db_max_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbSchemas">db_schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime">jwt_cache_max_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtRoleClaimKey">jwt_role_claim_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.openapiMode">openapi_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins">server_cors_allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverTimingEnabled">server_timing_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus">DataDatabricksPostgresDataApiStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_schemas`<sup>Required</sup> <a name="available_schemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.availableSchemas"></a>

```python
available_schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_aggregates_enabled`<sup>Required</sup> <a name="db_aggregates_enabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbAggregatesEnabled"></a>

```python
db_aggregates_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `db_extra_search_path`<sup>Required</sup> <a name="db_extra_search_path" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbExtraSearchPath"></a>

```python
db_extra_search_path: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_max_rows`<sup>Required</sup> <a name="db_max_rows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbMaxRows"></a>

```python
db_max_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_schemas`<sup>Required</sup> <a name="db_schemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbSchemas"></a>

```python
db_schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jwt_cache_max_lifetime`<sup>Required</sup> <a name="jwt_cache_max_lifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime"></a>

```python
jwt_cache_max_lifetime: str
```

- *Type:* str

---

##### `jwt_role_claim_key`<sup>Required</sup> <a name="jwt_role_claim_key" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtRoleClaimKey"></a>

```python
jwt_role_claim_key: str
```

- *Type:* str

---

##### `openapi_mode`<sup>Required</sup> <a name="openapi_mode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.openapiMode"></a>

```python
openapi_mode: str
```

- *Type:* str

---

##### `server_cors_allowed_origins`<sup>Required</sup> <a name="server_cors_allowed_origins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins"></a>

```python
server_cors_allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `server_timing_enabled`<sup>Required</sup> <a name="server_timing_enabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverTimingEnabled"></a>

```python
server_timing_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresDataApiStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus">DataDatabricksPostgresDataApiStatus</a>

---



