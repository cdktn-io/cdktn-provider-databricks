# `dataDatabricksAppSpaces` Submodule <a name="`dataDatabricksAppSpaces` Submodule" id="@cdktn/provider-databricks.dataDatabricksAppSpaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAppSpaces <a name="DataDatabricksAppSpaces" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces databricks_app_spaces}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpaces(
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
  provider_config: DataDatabricksAppSpacesProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#page_size DataDatabricksAppSpaces#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#provider_config DataDatabricksAppSpaces#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#page_size DataDatabricksAppSpaces#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#provider_config DataDatabricksAppSpaces#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#workspace_id DataDatabricksAppSpaces#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAppSpaces resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpaces.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpaces.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpaces.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpaces.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAppSpaces resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAppSpaces to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAppSpaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAppSpaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference">DataDatabricksAppSpacesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.spaces">spaces</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList">DataDatabricksAppSpacesSpacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppSpacesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference">DataDatabricksAppSpacesProviderConfigOutputReference</a>

---

##### `spaces`<sup>Required</sup> <a name="spaces" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.spaces"></a>

```python
spaces: DataDatabricksAppSpacesSpacesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList">DataDatabricksAppSpacesSpacesList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAppSpacesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppSpacesConfig <a name="DataDatabricksAppSpacesConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksAppSpacesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#page_size DataDatabricksAppSpaces#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#provider_config DataDatabricksAppSpaces#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#page_size DataDatabricksAppSpaces#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppSpacesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#provider_config DataDatabricksAppSpaces#provider_config}.

---

### DataDatabricksAppSpacesProviderConfig <a name="DataDatabricksAppSpacesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#workspace_id DataDatabricksAppSpaces#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#workspace_id DataDatabricksAppSpaces#workspace_id}.

---

### DataDatabricksAppSpacesSpaces <a name="DataDatabricksAppSpacesSpaces" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces(
  name: str,
  provider_config: DataDatabricksAppSpacesSpacesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#provider_config DataDatabricksAppSpaces#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppSpacesSpacesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#provider_config DataDatabricksAppSpaces#provider_config}.

---

### DataDatabricksAppSpacesSpacesProviderConfig <a name="DataDatabricksAppSpacesSpacesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#workspace_id DataDatabricksAppSpaces#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#workspace_id DataDatabricksAppSpaces#workspace_id}.

---

### DataDatabricksAppSpacesSpacesResources <a name="DataDatabricksAppSpacesSpacesResources" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources(
  name: str,
  app: DataDatabricksAppSpacesSpacesResourcesApp = None,
  database: DataDatabricksAppSpacesSpacesResourcesDatabase = None,
  description: str = None,
  experiment: DataDatabricksAppSpacesSpacesResourcesExperiment = None,
  genie_space: DataDatabricksAppSpacesSpacesResourcesGenieSpace = None,
  job: DataDatabricksAppSpacesSpacesResourcesJob = None,
  postgres: DataDatabricksAppSpacesSpacesResourcesPostgres = None,
  secret: DataDatabricksAppSpacesSpacesResourcesSecret = None,
  serving_endpoint: DataDatabricksAppSpacesSpacesResourcesServingEndpoint = None,
  sql_warehouse: DataDatabricksAppSpacesSpacesResourcesSqlWarehouse = None,
  uc_securable: DataDatabricksAppSpacesSpacesResourcesUcSecurable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#app DataDatabricksAppSpaces#app}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#database DataDatabricksAppSpaces#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#description DataDatabricksAppSpaces#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#experiment DataDatabricksAppSpaces#experiment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#genie_space DataDatabricksAppSpaces#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#job DataDatabricksAppSpaces#job}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#postgres DataDatabricksAppSpaces#postgres}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#secret DataDatabricksAppSpaces#secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.servingEndpoint">serving_endpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#serving_endpoint DataDatabricksAppSpaces#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.sqlWarehouse">sql_warehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#sql_warehouse DataDatabricksAppSpaces#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.ucSecurable">uc_securable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#uc_securable DataDatabricksAppSpaces#uc_securable}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.app"></a>

```python
app: DataDatabricksAppSpacesSpacesResourcesApp
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#app DataDatabricksAppSpaces#app}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.database"></a>

```python
database: DataDatabricksAppSpacesSpacesResourcesDatabase
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#database DataDatabricksAppSpaces#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#description DataDatabricksAppSpaces#description}.

---

##### `experiment`<sup>Optional</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.experiment"></a>

```python
experiment: DataDatabricksAppSpacesSpacesResourcesExperiment
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#experiment DataDatabricksAppSpaces#experiment}.

---

##### `genie_space`<sup>Optional</sup> <a name="genie_space" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.genieSpace"></a>

```python
genie_space: DataDatabricksAppSpacesSpacesResourcesGenieSpace
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#genie_space DataDatabricksAppSpaces#genie_space}.

---

##### `job`<sup>Optional</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.job"></a>

```python
job: DataDatabricksAppSpacesSpacesResourcesJob
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#job DataDatabricksAppSpaces#job}.

---

##### `postgres`<sup>Optional</sup> <a name="postgres" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.postgres"></a>

```python
postgres: DataDatabricksAppSpacesSpacesResourcesPostgres
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#postgres DataDatabricksAppSpaces#postgres}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.secret"></a>

```python
secret: DataDatabricksAppSpacesSpacesResourcesSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#secret DataDatabricksAppSpaces#secret}.

---

##### `serving_endpoint`<sup>Optional</sup> <a name="serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.servingEndpoint"></a>

```python
serving_endpoint: DataDatabricksAppSpacesSpacesResourcesServingEndpoint
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#serving_endpoint DataDatabricksAppSpaces#serving_endpoint}.

---

##### `sql_warehouse`<sup>Optional</sup> <a name="sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.sqlWarehouse"></a>

```python
sql_warehouse: DataDatabricksAppSpacesSpacesResourcesSqlWarehouse
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#sql_warehouse DataDatabricksAppSpaces#sql_warehouse}.

---

##### `uc_securable`<sup>Optional</sup> <a name="uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.ucSecurable"></a>

```python
uc_securable: DataDatabricksAppSpacesSpacesResourcesUcSecurable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#uc_securable DataDatabricksAppSpaces#uc_securable}.

---

### DataDatabricksAppSpacesSpacesResourcesApp <a name="DataDatabricksAppSpacesSpacesResourcesApp" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp(
  name: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesDatabase <a name="DataDatabricksAppSpacesSpacesResourcesDatabase" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase(
  database_name: str,
  instance_name: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#database_name DataDatabricksAppSpaces#database_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#instance_name DataDatabricksAppSpaces#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#database_name DataDatabricksAppSpaces#database_name}.

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#instance_name DataDatabricksAppSpaces#instance_name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesExperiment <a name="DataDatabricksAppSpacesSpacesResourcesExperiment" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment(
  experiment_id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment.property.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#experiment_id DataDatabricksAppSpaces#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#experiment_id DataDatabricksAppSpaces#experiment_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesGenieSpace <a name="DataDatabricksAppSpacesSpacesResourcesGenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace(
  name: str,
  permission: str,
  space_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.spaceId">space_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#space_id DataDatabricksAppSpaces#space_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#space_id DataDatabricksAppSpaces#space_id}.

---

### DataDatabricksAppSpacesSpacesResourcesJob <a name="DataDatabricksAppSpacesSpacesResourcesJob" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob(
  id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#id DataDatabricksAppSpaces#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#id DataDatabricksAppSpaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesPostgres <a name="DataDatabricksAppSpacesSpacesResourcesPostgres" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres(
  branch: str = None,
  database: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#branch DataDatabricksAppSpaces#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#database DataDatabricksAppSpaces#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#branch DataDatabricksAppSpaces#branch}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#database DataDatabricksAppSpaces#database}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesSecret <a name="DataDatabricksAppSpacesSpacesResourcesSecret" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret(
  key: str,
  permission: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#key DataDatabricksAppSpaces#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#scope DataDatabricksAppSpaces#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#key DataDatabricksAppSpaces#key}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#scope DataDatabricksAppSpaces#scope}.

---

### DataDatabricksAppSpacesSpacesResourcesServingEndpoint <a name="DataDatabricksAppSpacesSpacesResourcesServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint(
  name: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesSqlWarehouse <a name="DataDatabricksAppSpacesSpacesResourcesSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse(
  id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#id DataDatabricksAppSpaces#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#id DataDatabricksAppSpaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesUcSecurable <a name="DataDatabricksAppSpacesSpacesResourcesUcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable(
  permission: str,
  securable_full_name: str,
  securable_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.securableFullName">securable_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#securable_full_name DataDatabricksAppSpaces#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.securableType">securable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#securable_type DataDatabricksAppSpaces#securable_type}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.securableFullName"></a>

```python
securable_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#securable_full_name DataDatabricksAppSpaces#securable_full_name}.

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#securable_type DataDatabricksAppSpaces#securable_type}.

---

### DataDatabricksAppSpacesSpacesStatus <a name="DataDatabricksAppSpacesSpacesStatus" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatus()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppSpacesProviderConfigOutputReference <a name="DataDatabricksAppSpacesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a>

---


### DataDatabricksAppSpacesSpacesList <a name="DataDatabricksAppSpacesSpacesList" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAppSpacesSpacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces">DataDatabricksAppSpacesSpaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAppSpacesSpaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces">DataDatabricksAppSpacesSpaces</a>]

---


### DataDatabricksAppSpacesSpacesOutputReference <a name="DataDatabricksAppSpacesSpacesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#workspace_id DataDatabricksAppSpaces#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.effectiveUsagePolicyId">effective_usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.effectiveUserApiScopes">effective_user_api_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference">DataDatabricksAppSpacesSpacesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList">DataDatabricksAppSpacesSpacesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalClientId">service_principal_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference">DataDatabricksAppSpacesSpacesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.updater">updater</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.userApiScopes">user_api_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces">DataDatabricksAppSpacesSpaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_usage_policy_id`<sup>Required</sup> <a name="effective_usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.effectiveUsagePolicyId"></a>

```python
effective_usage_policy_id: str
```

- *Type:* str

---

##### `effective_user_api_scopes`<sup>Required</sup> <a name="effective_user_api_scopes" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.effectiveUserApiScopes"></a>

```python
effective_user_api_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppSpacesSpacesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference">DataDatabricksAppSpacesSpacesProviderConfigOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.resources"></a>

```python
resources: DataDatabricksAppSpacesSpacesResourcesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList">DataDatabricksAppSpacesSpacesResourcesList</a>

---

##### `service_principal_client_id`<sup>Required</sup> <a name="service_principal_client_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalClientId"></a>

```python
service_principal_client_id: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_principal_name`<sup>Required</sup> <a name="service_principal_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.status"></a>

```python
status: DataDatabricksAppSpacesSpacesStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference">DataDatabricksAppSpacesSpacesStatusOutputReference</a>

---

##### `updater`<sup>Required</sup> <a name="updater" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.updater"></a>

```python
updater: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `usage_policy_id`<sup>Required</sup> <a name="usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.usagePolicyId"></a>

```python
usage_policy_id: str
```

- *Type:* str

---

##### `user_api_scopes`<sup>Required</sup> <a name="user_api_scopes" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.userApiScopes"></a>

```python
user_api_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAppSpacesSpacesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppSpacesSpaces
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces">DataDatabricksAppSpacesSpaces</a>

---


### DataDatabricksAppSpacesSpacesProviderConfigOutputReference <a name="DataDatabricksAppSpacesSpacesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesSpacesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a>

---


### DataDatabricksAppSpacesSpacesResourcesAppOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesSpacesResourcesApp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a>

---


### DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesSpacesResourcesDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a>

---


### DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.experimentIdInput">experiment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.experimentId">experiment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `experiment_id_input`<sup>Optional</sup> <a name="experiment_id_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.experimentIdInput"></a>

```python
experiment_id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesSpacesResourcesExperiment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a>

---


### DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceIdInput">space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceId">space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `space_id_input`<sup>Optional</sup> <a name="space_id_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```python
space_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesSpacesResourcesGenieSpace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a>

---


### DataDatabricksAppSpacesSpacesResourcesJobOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesSpacesResourcesJob
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a>

---


### DataDatabricksAppSpacesSpacesResourcesList <a name="DataDatabricksAppSpacesSpacesResourcesList" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAppSpacesSpacesResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources">DataDatabricksAppSpacesSpacesResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAppSpacesSpacesResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources">DataDatabricksAppSpacesSpacesResources</a>]

---


### DataDatabricksAppSpacesSpacesResourcesOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putApp">put_app</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putExperiment">put_experiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putGenieSpace">put_genie_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putJob">put_job</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putPostgres">put_postgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putServingEndpoint">put_serving_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSqlWarehouse">put_sql_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putUcSecurable">put_uc_securable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetApp">reset_app</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetExperiment">reset_experiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetGenieSpace">reset_genie_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetJob">reset_job</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetPostgres">reset_postgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetServingEndpoint">reset_serving_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetSqlWarehouse">reset_sql_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetUcSecurable">reset_uc_securable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_app` <a name="put_app" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putApp"></a>

```python
def put_app(
  name: str = None,
  permission: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putApp.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

###### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putApp.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `put_database` <a name="put_database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putDatabase"></a>

```python
def put_database(
  database_name: str,
  instance_name: str,
  permission: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putDatabase.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#database_name DataDatabricksAppSpaces#database_name}.

---

###### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putDatabase.parameter.instanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#instance_name DataDatabricksAppSpaces#instance_name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putDatabase.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `put_experiment` <a name="put_experiment" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putExperiment"></a>

```python
def put_experiment(
  experiment_id: str,
  permission: str
) -> None
```

###### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putExperiment.parameter.experimentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#experiment_id DataDatabricksAppSpaces#experiment_id}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putExperiment.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `put_genie_space` <a name="put_genie_space" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putGenieSpace"></a>

```python
def put_genie_space(
  name: str,
  permission: str,
  space_id: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putGenieSpace.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putGenieSpace.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

###### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putGenieSpace.parameter.spaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#space_id DataDatabricksAppSpaces#space_id}.

---

##### `put_job` <a name="put_job" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putJob"></a>

```python
def put_job(
  id: str,
  permission: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putJob.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#id DataDatabricksAppSpaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putJob.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `put_postgres` <a name="put_postgres" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putPostgres"></a>

```python
def put_postgres(
  branch: str = None,
  database: str = None,
  permission: str = None
) -> None
```

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putPostgres.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#branch DataDatabricksAppSpaces#branch}.

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putPostgres.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#database DataDatabricksAppSpaces#database}.

---

###### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putPostgres.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `put_secret` <a name="put_secret" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSecret"></a>

```python
def put_secret(
  key: str,
  permission: str,
  scope: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSecret.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#key DataDatabricksAppSpaces#key}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSecret.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSecret.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#scope DataDatabricksAppSpaces#scope}.

---

##### `put_serving_endpoint` <a name="put_serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putServingEndpoint"></a>

```python
def put_serving_endpoint(
  name: str,
  permission: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putServingEndpoint.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putServingEndpoint.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `put_sql_warehouse` <a name="put_sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSqlWarehouse"></a>

```python
def put_sql_warehouse(
  id: str,
  permission: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSqlWarehouse.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#id DataDatabricksAppSpaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSqlWarehouse.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `put_uc_securable` <a name="put_uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putUcSecurable"></a>

```python
def put_uc_securable(
  permission: str,
  securable_full_name: str,
  securable_type: str
) -> None
```

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putUcSecurable.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

###### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putUcSecurable.parameter.securableFullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#securable_full_name DataDatabricksAppSpaces#securable_full_name}.

---

###### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putUcSecurable.parameter.securableType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/app_spaces#securable_type DataDatabricksAppSpaces#securable_type}.

---

##### `reset_app` <a name="reset_app" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetApp"></a>

```python
def reset_app() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_experiment` <a name="reset_experiment" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetExperiment"></a>

```python
def reset_experiment() -> None
```

##### `reset_genie_space` <a name="reset_genie_space" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetGenieSpace"></a>

```python
def reset_genie_space() -> None
```

##### `reset_job` <a name="reset_job" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetJob"></a>

```python
def reset_job() -> None
```

##### `reset_postgres` <a name="reset_postgres" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetPostgres"></a>

```python
def reset_postgres() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_serving_endpoint` <a name="reset_serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetServingEndpoint"></a>

```python
def reset_serving_endpoint() -> None
```

##### `reset_sql_warehouse` <a name="reset_sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetSqlWarehouse"></a>

```python
def reset_sql_warehouse() -> None
```

##### `reset_uc_securable` <a name="reset_uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetUcSecurable"></a>

```python
def reset_uc_securable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference">DataDatabricksAppSpacesSpacesResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference">DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference">DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference">DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference">DataDatabricksAppSpacesSpacesResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.postgres">postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference">DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference">DataDatabricksAppSpacesSpacesResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.servingEndpoint">serving_endpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference">DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.sqlWarehouse">sql_warehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference">DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.ucSecurable">uc_securable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference">DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.appInput">app_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.databaseInput">database_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.experimentInput">experiment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.genieSpaceInput">genie_space_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.jobInput">job_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.postgresInput">postgres_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.secretInput">secret_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.servingEndpointInput">serving_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.sqlWarehouseInput">sql_warehouse_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.ucSecurableInput">uc_securable_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources">DataDatabricksAppSpacesSpacesResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.app"></a>

```python
app: DataDatabricksAppSpacesSpacesResourcesAppOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference">DataDatabricksAppSpacesSpacesResourcesAppOutputReference</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.database"></a>

```python
database: DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference">DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference</a>

---

##### `experiment`<sup>Required</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.experiment"></a>

```python
experiment: DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference">DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference</a>

---

##### `genie_space`<sup>Required</sup> <a name="genie_space" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.genieSpace"></a>

```python
genie_space: DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference">DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference</a>

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.job"></a>

```python
job: DataDatabricksAppSpacesSpacesResourcesJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference">DataDatabricksAppSpacesSpacesResourcesJobOutputReference</a>

---

##### `postgres`<sup>Required</sup> <a name="postgres" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.postgres"></a>

```python
postgres: DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference">DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.secret"></a>

```python
secret: DataDatabricksAppSpacesSpacesResourcesSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference">DataDatabricksAppSpacesSpacesResourcesSecretOutputReference</a>

---

##### `serving_endpoint`<sup>Required</sup> <a name="serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.servingEndpoint"></a>

```python
serving_endpoint: DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference">DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference</a>

---

##### `sql_warehouse`<sup>Required</sup> <a name="sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.sqlWarehouse"></a>

```python
sql_warehouse: DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference">DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference</a>

---

##### `uc_securable`<sup>Required</sup> <a name="uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.ucSecurable"></a>

```python
uc_securable: DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference">DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference</a>

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.appInput"></a>

```python
app_input: IResolvable | DataDatabricksAppSpacesSpacesResourcesApp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.databaseInput"></a>

```python
database_input: IResolvable | DataDatabricksAppSpacesSpacesResourcesDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `experiment_input`<sup>Optional</sup> <a name="experiment_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.experimentInput"></a>

```python
experiment_input: IResolvable | DataDatabricksAppSpacesSpacesResourcesExperiment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a>

---

##### `genie_space_input`<sup>Optional</sup> <a name="genie_space_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.genieSpaceInput"></a>

```python
genie_space_input: IResolvable | DataDatabricksAppSpacesSpacesResourcesGenieSpace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a>

---

##### `job_input`<sup>Optional</sup> <a name="job_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.jobInput"></a>

```python
job_input: IResolvable | DataDatabricksAppSpacesSpacesResourcesJob
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `postgres_input`<sup>Optional</sup> <a name="postgres_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.postgresInput"></a>

```python
postgres_input: IResolvable | DataDatabricksAppSpacesSpacesResourcesPostgres
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a>

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.secretInput"></a>

```python
secret_input: IResolvable | DataDatabricksAppSpacesSpacesResourcesSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a>

---

##### `serving_endpoint_input`<sup>Optional</sup> <a name="serving_endpoint_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.servingEndpointInput"></a>

```python
serving_endpoint_input: IResolvable | DataDatabricksAppSpacesSpacesResourcesServingEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a>

---

##### `sql_warehouse_input`<sup>Optional</sup> <a name="sql_warehouse_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.sqlWarehouseInput"></a>

```python
sql_warehouse_input: IResolvable | DataDatabricksAppSpacesSpacesResourcesSqlWarehouse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a>

---

##### `uc_securable_input`<sup>Optional</sup> <a name="uc_securable_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.ucSecurableInput"></a>

```python
uc_securable_input: IResolvable | DataDatabricksAppSpacesSpacesResourcesUcSecurable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppSpacesSpacesResources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources">DataDatabricksAppSpacesSpacesResources</a>

---


### DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesSpacesResourcesPostgres
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a>

---


### DataDatabricksAppSpacesSpacesResourcesSecretOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesSpacesResourcesSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a>

---


### DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesSpacesResourcesServingEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a>

---


### DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesSpacesResourcesSqlWarehouse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a>

---


### DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableKind">securable_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullNameInput">securable_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableTypeInput">securable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullName">securable_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableType">securable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `securable_kind`<sup>Required</sup> <a name="securable_kind" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableKind"></a>

```python
securable_kind: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `securable_full_name_input`<sup>Optional</sup> <a name="securable_full_name_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```python
securable_full_name_input: str
```

- *Type:* str

---

##### `securable_type_input`<sup>Optional</sup> <a name="securable_type_input" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```python
securable_type_input: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullName"></a>

```python
securable_full_name: str
```

- *Type:* str

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppSpacesSpacesResourcesUcSecurable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a>

---


### DataDatabricksAppSpacesSpacesStatusOutputReference <a name="DataDatabricksAppSpacesSpacesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_app_spaces

dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatus">DataDatabricksAppSpacesSpacesStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppSpacesSpacesStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatus">DataDatabricksAppSpacesSpacesStatus</a>

---



