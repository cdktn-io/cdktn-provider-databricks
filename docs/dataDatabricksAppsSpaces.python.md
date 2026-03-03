# `dataDatabricksAppsSpaces` Submodule <a name="`dataDatabricksAppsSpaces` Submodule" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAppsSpaces <a name="DataDatabricksAppsSpaces" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces databricks_apps_spaces}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpaces(
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
  provider_config: DataDatabricksAppsSpacesProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#page_size DataDatabricksAppsSpaces#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig">DataDatabricksAppsSpacesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#provider_config DataDatabricksAppsSpaces#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#page_size DataDatabricksAppsSpaces#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig">DataDatabricksAppsSpacesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#provider_config DataDatabricksAppsSpaces#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#workspace_id DataDatabricksAppsSpaces#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAppsSpaces resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAppsSpaces resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAppsSpaces to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAppsSpaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAppsSpaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference">DataDatabricksAppsSpacesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.spaces">spaces</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList">DataDatabricksAppsSpacesSpacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig">DataDatabricksAppsSpacesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppsSpacesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference">DataDatabricksAppsSpacesProviderConfigOutputReference</a>

---

##### `spaces`<sup>Required</sup> <a name="spaces" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.spaces"></a>

```python
spaces: DataDatabricksAppsSpacesSpacesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList">DataDatabricksAppsSpacesSpacesList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAppsSpacesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig">DataDatabricksAppsSpacesProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpaces.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppsSpacesConfig <a name="DataDatabricksAppsSpacesConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksAppsSpacesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#page_size DataDatabricksAppsSpaces#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig">DataDatabricksAppsSpacesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#provider_config DataDatabricksAppsSpaces#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#page_size DataDatabricksAppsSpaces#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppsSpacesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig">DataDatabricksAppsSpacesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#provider_config DataDatabricksAppsSpaces#provider_config}.

---

### DataDatabricksAppsSpacesProviderConfig <a name="DataDatabricksAppsSpacesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#workspace_id DataDatabricksAppsSpaces#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#workspace_id DataDatabricksAppsSpaces#workspace_id}.

---

### DataDatabricksAppsSpacesSpaces <a name="DataDatabricksAppsSpacesSpaces" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpaces.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpaces(
  name: str,
  provider_config: DataDatabricksAppsSpacesSpacesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpaces.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#name DataDatabricksAppsSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpaces.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfig">DataDatabricksAppsSpacesSpacesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#provider_config DataDatabricksAppsSpaces#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpaces.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#name DataDatabricksAppsSpaces#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpaces.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppsSpacesSpacesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfig">DataDatabricksAppsSpacesSpacesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#provider_config DataDatabricksAppsSpaces#provider_config}.

---

### DataDatabricksAppsSpacesSpacesProviderConfig <a name="DataDatabricksAppsSpacesSpacesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#workspace_id DataDatabricksAppsSpaces#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#workspace_id DataDatabricksAppsSpaces#workspace_id}.

---

### DataDatabricksAppsSpacesSpacesResources <a name="DataDatabricksAppsSpacesSpacesResources" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources(
  name: str,
  app: DataDatabricksAppsSpacesSpacesResourcesApp = None,
  database: DataDatabricksAppsSpacesSpacesResourcesDatabase = None,
  description: str = None,
  experiment: DataDatabricksAppsSpacesSpacesResourcesExperiment = None,
  genie_space: DataDatabricksAppsSpacesSpacesResourcesGenieSpace = None,
  job: DataDatabricksAppsSpacesSpacesResourcesJob = None,
  secret: DataDatabricksAppsSpacesSpacesResourcesSecret = None,
  serving_endpoint: DataDatabricksAppsSpacesSpacesResourcesServingEndpoint = None,
  sql_warehouse: DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse = None,
  uc_securable: DataDatabricksAppsSpacesSpacesResourcesUcSecurable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#name DataDatabricksAppsSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesApp">DataDatabricksAppsSpacesSpacesResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#app DataDatabricksAppsSpaces#app}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase">DataDatabricksAppsSpacesSpacesResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#database DataDatabricksAppsSpaces#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#description DataDatabricksAppsSpaces#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment">DataDatabricksAppsSpacesSpacesResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#experiment DataDatabricksAppsSpaces#experiment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace">DataDatabricksAppsSpacesSpacesResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#genie_space DataDatabricksAppsSpaces#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob">DataDatabricksAppsSpacesSpacesResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#job DataDatabricksAppsSpaces#job}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret">DataDatabricksAppsSpacesSpacesResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#secret DataDatabricksAppsSpaces#secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.servingEndpoint">serving_endpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint">DataDatabricksAppsSpacesSpacesResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#serving_endpoint DataDatabricksAppsSpaces#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.sqlWarehouse">sql_warehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#sql_warehouse DataDatabricksAppsSpaces#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.ucSecurable">uc_securable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable">DataDatabricksAppsSpacesSpacesResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#uc_securable DataDatabricksAppsSpaces#uc_securable}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#name DataDatabricksAppsSpaces#name}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.app"></a>

```python
app: DataDatabricksAppsSpacesSpacesResourcesApp
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesApp">DataDatabricksAppsSpacesSpacesResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#app DataDatabricksAppsSpaces#app}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.database"></a>

```python
database: DataDatabricksAppsSpacesSpacesResourcesDatabase
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase">DataDatabricksAppsSpacesSpacesResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#database DataDatabricksAppsSpaces#database}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#description DataDatabricksAppsSpaces#description}.

---

##### `experiment`<sup>Optional</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.experiment"></a>

```python
experiment: DataDatabricksAppsSpacesSpacesResourcesExperiment
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment">DataDatabricksAppsSpacesSpacesResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#experiment DataDatabricksAppsSpaces#experiment}.

---

##### `genie_space`<sup>Optional</sup> <a name="genie_space" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.genieSpace"></a>

```python
genie_space: DataDatabricksAppsSpacesSpacesResourcesGenieSpace
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace">DataDatabricksAppsSpacesSpacesResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#genie_space DataDatabricksAppsSpaces#genie_space}.

---

##### `job`<sup>Optional</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.job"></a>

```python
job: DataDatabricksAppsSpacesSpacesResourcesJob
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob">DataDatabricksAppsSpacesSpacesResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#job DataDatabricksAppsSpaces#job}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.secret"></a>

```python
secret: DataDatabricksAppsSpacesSpacesResourcesSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret">DataDatabricksAppsSpacesSpacesResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#secret DataDatabricksAppsSpaces#secret}.

---

##### `serving_endpoint`<sup>Optional</sup> <a name="serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.servingEndpoint"></a>

```python
serving_endpoint: DataDatabricksAppsSpacesSpacesResourcesServingEndpoint
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint">DataDatabricksAppsSpacesSpacesResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#serving_endpoint DataDatabricksAppsSpaces#serving_endpoint}.

---

##### `sql_warehouse`<sup>Optional</sup> <a name="sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.sqlWarehouse"></a>

```python
sql_warehouse: DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#sql_warehouse DataDatabricksAppsSpaces#sql_warehouse}.

---

##### `uc_securable`<sup>Optional</sup> <a name="uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources.property.ucSecurable"></a>

```python
uc_securable: DataDatabricksAppsSpacesSpacesResourcesUcSecurable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable">DataDatabricksAppsSpacesSpacesResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#uc_securable DataDatabricksAppsSpaces#uc_securable}.

---

### DataDatabricksAppsSpacesSpacesResourcesApp <a name="DataDatabricksAppsSpacesSpacesResourcesApp" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesApp.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesApp()
```


### DataDatabricksAppsSpacesSpacesResourcesDatabase <a name="DataDatabricksAppsSpacesSpacesResourcesDatabase" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase(
  database_name: str,
  instance_name: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#database_name DataDatabricksAppsSpaces#database_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#instance_name DataDatabricksAppsSpaces#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}. |

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#database_name DataDatabricksAppsSpaces#database_name}.

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#instance_name DataDatabricksAppsSpaces#instance_name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

### DataDatabricksAppsSpacesSpacesResourcesExperiment <a name="DataDatabricksAppsSpacesSpacesResourcesExperiment" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment(
  experiment_id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment.property.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#experiment_id DataDatabricksAppsSpaces#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}. |

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#experiment_id DataDatabricksAppsSpaces#experiment_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

### DataDatabricksAppsSpacesSpacesResourcesGenieSpace <a name="DataDatabricksAppsSpacesSpacesResourcesGenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace(
  name: str,
  permission: str,
  space_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#name DataDatabricksAppsSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace.property.spaceId">space_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#space_id DataDatabricksAppsSpaces#space_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#name DataDatabricksAppsSpaces#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#space_id DataDatabricksAppsSpaces#space_id}.

---

### DataDatabricksAppsSpacesSpacesResourcesJob <a name="DataDatabricksAppsSpacesSpacesResourcesJob" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob(
  id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#id DataDatabricksAppsSpaces#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#id DataDatabricksAppsSpaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

### DataDatabricksAppsSpacesSpacesResourcesSecret <a name="DataDatabricksAppsSpacesSpacesResourcesSecret" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret(
  key: str,
  permission: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#key DataDatabricksAppsSpaces#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#scope DataDatabricksAppsSpaces#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#key DataDatabricksAppsSpaces#key}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#scope DataDatabricksAppsSpaces#scope}.

---

### DataDatabricksAppsSpacesSpacesResourcesServingEndpoint <a name="DataDatabricksAppsSpacesSpacesResourcesServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint(
  name: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#name DataDatabricksAppsSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#name DataDatabricksAppsSpaces#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

### DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse <a name="DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse(
  id: str,
  permission: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#id DataDatabricksAppsSpaces#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#id DataDatabricksAppsSpaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

### DataDatabricksAppsSpacesSpacesResourcesUcSecurable <a name="DataDatabricksAppsSpacesSpacesResourcesUcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable(
  permission: str,
  securable_full_name: str,
  securable_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable.property.securableFullName">securable_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#securable_full_name DataDatabricksAppsSpaces#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable.property.securableType">securable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#securable_type DataDatabricksAppsSpaces#securable_type}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

##### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable.property.securableFullName"></a>

```python
securable_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#securable_full_name DataDatabricksAppsSpaces#securable_full_name}.

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#securable_type DataDatabricksAppsSpaces#securable_type}.

---

### DataDatabricksAppsSpacesSpacesStatus <a name="DataDatabricksAppsSpacesSpacesStatus" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatus()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppsSpacesProviderConfigOutputReference <a name="DataDatabricksAppsSpacesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig">DataDatabricksAppsSpacesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpacesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesProviderConfig">DataDatabricksAppsSpacesProviderConfig</a>

---


### DataDatabricksAppsSpacesSpacesList <a name="DataDatabricksAppsSpacesSpacesList" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAppsSpacesSpacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpaces">DataDatabricksAppsSpacesSpaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAppsSpacesSpaces]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpaces">DataDatabricksAppsSpacesSpaces</a>]

---


### DataDatabricksAppsSpacesSpacesOutputReference <a name="DataDatabricksAppsSpacesSpacesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#workspace_id DataDatabricksAppsSpaces#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.effectiveUsagePolicyId">effective_usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.effectiveUserApiScopes">effective_user_api_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.oauth2AppClientId">oauth2_app_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.oauth2AppIntegrationId">oauth2_app_integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference">DataDatabricksAppsSpacesSpacesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList">DataDatabricksAppsSpacesSpacesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.servicePrincipalClientId">service_principal_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference">DataDatabricksAppsSpacesSpacesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.updater">updater</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.userApiScopes">user_api_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfig">DataDatabricksAppsSpacesSpacesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpaces">DataDatabricksAppsSpacesSpaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_usage_policy_id`<sup>Required</sup> <a name="effective_usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.effectiveUsagePolicyId"></a>

```python
effective_usage_policy_id: str
```

- *Type:* str

---

##### `effective_user_api_scopes`<sup>Required</sup> <a name="effective_user_api_scopes" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.effectiveUserApiScopes"></a>

```python
effective_user_api_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `oauth2_app_client_id`<sup>Required</sup> <a name="oauth2_app_client_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.oauth2AppClientId"></a>

```python
oauth2_app_client_id: str
```

- *Type:* str

---

##### `oauth2_app_integration_id`<sup>Required</sup> <a name="oauth2_app_integration_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.oauth2AppIntegrationId"></a>

```python
oauth2_app_integration_id: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksAppsSpacesSpacesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference">DataDatabricksAppsSpacesSpacesProviderConfigOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.resources"></a>

```python
resources: DataDatabricksAppsSpacesSpacesResourcesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList">DataDatabricksAppsSpacesSpacesResourcesList</a>

---

##### `service_principal_client_id`<sup>Required</sup> <a name="service_principal_client_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.servicePrincipalClientId"></a>

```python
service_principal_client_id: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_principal_name`<sup>Required</sup> <a name="service_principal_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.status"></a>

```python
status: DataDatabricksAppsSpacesSpacesStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference">DataDatabricksAppsSpacesSpacesStatusOutputReference</a>

---

##### `updater`<sup>Required</sup> <a name="updater" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.updater"></a>

```python
updater: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `usage_policy_id`<sup>Required</sup> <a name="usage_policy_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.usagePolicyId"></a>

```python
usage_policy_id: str
```

- *Type:* str

---

##### `user_api_scopes`<sup>Required</sup> <a name="user_api_scopes" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.userApiScopes"></a>

```python
user_api_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAppsSpacesSpacesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfig">DataDatabricksAppsSpacesSpacesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsSpacesSpaces
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpaces">DataDatabricksAppsSpacesSpaces</a>

---


### DataDatabricksAppsSpacesSpacesProviderConfigOutputReference <a name="DataDatabricksAppsSpacesSpacesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfig">DataDatabricksAppsSpacesSpacesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpacesSpacesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesProviderConfig">DataDatabricksAppsSpacesSpacesProviderConfig</a>

---


### DataDatabricksAppsSpacesSpacesResourcesAppOutputReference <a name="DataDatabricksAppsSpacesSpacesResourcesAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesApp">DataDatabricksAppsSpacesSpacesResourcesApp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpacesSpacesResourcesApp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesApp">DataDatabricksAppsSpacesSpacesResourcesApp</a>

---


### DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference <a name="DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase">DataDatabricksAppsSpacesSpacesResourcesDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpacesSpacesResourcesDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase">DataDatabricksAppsSpacesSpacesResourcesDatabase</a>

---


### DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference <a name="DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.experimentIdInput">experiment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.experimentId">experiment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment">DataDatabricksAppsSpacesSpacesResourcesExperiment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `experiment_id_input`<sup>Optional</sup> <a name="experiment_id_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.experimentIdInput"></a>

```python
experiment_id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpacesSpacesResourcesExperiment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment">DataDatabricksAppsSpacesSpacesResourcesExperiment</a>

---


### DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference <a name="DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceIdInput">space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceId">space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace">DataDatabricksAppsSpacesSpacesResourcesGenieSpace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `space_id_input`<sup>Optional</sup> <a name="space_id_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```python
space_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpacesSpacesResourcesGenieSpace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace">DataDatabricksAppsSpacesSpacesResourcesGenieSpace</a>

---


### DataDatabricksAppsSpacesSpacesResourcesJobOutputReference <a name="DataDatabricksAppsSpacesSpacesResourcesJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob">DataDatabricksAppsSpacesSpacesResourcesJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpacesSpacesResourcesJob
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob">DataDatabricksAppsSpacesSpacesResourcesJob</a>

---


### DataDatabricksAppsSpacesSpacesResourcesList <a name="DataDatabricksAppsSpacesSpacesResourcesList" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAppsSpacesSpacesResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources">DataDatabricksAppsSpacesSpacesResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAppsSpacesSpacesResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources">DataDatabricksAppsSpacesSpacesResources</a>]

---


### DataDatabricksAppsSpacesSpacesResourcesOutputReference <a name="DataDatabricksAppsSpacesSpacesResourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putApp">put_app</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putExperiment">put_experiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putGenieSpace">put_genie_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putJob">put_job</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putServingEndpoint">put_serving_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putSqlWarehouse">put_sql_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putUcSecurable">put_uc_securable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetApp">reset_app</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetExperiment">reset_experiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetGenieSpace">reset_genie_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetJob">reset_job</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetServingEndpoint">reset_serving_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetSqlWarehouse">reset_sql_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetUcSecurable">reset_uc_securable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_app` <a name="put_app" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putApp"></a>

```python
def put_app() -> None
```

##### `put_database` <a name="put_database" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putDatabase"></a>

```python
def put_database(
  database_name: str,
  instance_name: str,
  permission: str
) -> None
```

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putDatabase.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#database_name DataDatabricksAppsSpaces#database_name}.

---

###### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putDatabase.parameter.instanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#instance_name DataDatabricksAppsSpaces#instance_name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putDatabase.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

##### `put_experiment` <a name="put_experiment" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putExperiment"></a>

```python
def put_experiment(
  experiment_id: str,
  permission: str
) -> None
```

###### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putExperiment.parameter.experimentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#experiment_id DataDatabricksAppsSpaces#experiment_id}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putExperiment.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

##### `put_genie_space` <a name="put_genie_space" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putGenieSpace"></a>

```python
def put_genie_space(
  name: str,
  permission: str,
  space_id: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putGenieSpace.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#name DataDatabricksAppsSpaces#name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putGenieSpace.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

###### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putGenieSpace.parameter.spaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#space_id DataDatabricksAppsSpaces#space_id}.

---

##### `put_job` <a name="put_job" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putJob"></a>

```python
def put_job(
  id: str,
  permission: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putJob.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#id DataDatabricksAppsSpaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putJob.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

##### `put_secret` <a name="put_secret" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putSecret"></a>

```python
def put_secret(
  key: str,
  permission: str,
  scope: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putSecret.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#key DataDatabricksAppsSpaces#key}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putSecret.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putSecret.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#scope DataDatabricksAppsSpaces#scope}.

---

##### `put_serving_endpoint` <a name="put_serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putServingEndpoint"></a>

```python
def put_serving_endpoint(
  name: str,
  permission: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putServingEndpoint.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#name DataDatabricksAppsSpaces#name}.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putServingEndpoint.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

##### `put_sql_warehouse` <a name="put_sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putSqlWarehouse"></a>

```python
def put_sql_warehouse(
  id: str,
  permission: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putSqlWarehouse.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#id DataDatabricksAppsSpaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putSqlWarehouse.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

##### `put_uc_securable` <a name="put_uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putUcSecurable"></a>

```python
def put_uc_securable(
  permission: str,
  securable_full_name: str,
  securable_type: str
) -> None
```

###### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putUcSecurable.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#permission DataDatabricksAppsSpaces#permission}.

---

###### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putUcSecurable.parameter.securableFullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#securable_full_name DataDatabricksAppsSpaces#securable_full_name}.

---

###### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.putUcSecurable.parameter.securableType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/data-sources/apps_spaces#securable_type DataDatabricksAppsSpaces#securable_type}.

---

##### `reset_app` <a name="reset_app" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetApp"></a>

```python
def reset_app() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_experiment` <a name="reset_experiment" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetExperiment"></a>

```python
def reset_experiment() -> None
```

##### `reset_genie_space` <a name="reset_genie_space" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetGenieSpace"></a>

```python
def reset_genie_space() -> None
```

##### `reset_job` <a name="reset_job" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetJob"></a>

```python
def reset_job() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_serving_endpoint` <a name="reset_serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetServingEndpoint"></a>

```python
def reset_serving_endpoint() -> None
```

##### `reset_sql_warehouse` <a name="reset_sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetSqlWarehouse"></a>

```python
def reset_sql_warehouse() -> None
```

##### `reset_uc_securable` <a name="reset_uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.resetUcSecurable"></a>

```python
def reset_uc_securable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.app">app</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference">DataDatabricksAppsSpacesSpacesResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference">DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.experiment">experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference">DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.genieSpace">genie_space</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference">DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.job">job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference">DataDatabricksAppsSpacesSpacesResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference">DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.servingEndpoint">serving_endpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference">DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.sqlWarehouse">sql_warehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference">DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.ucSecurable">uc_securable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference">DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.appInput">app_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesApp">DataDatabricksAppsSpacesSpacesResourcesApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.databaseInput">database_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase">DataDatabricksAppsSpacesSpacesResourcesDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.experimentInput">experiment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment">DataDatabricksAppsSpacesSpacesResourcesExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.genieSpaceInput">genie_space_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace">DataDatabricksAppsSpacesSpacesResourcesGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.jobInput">job_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob">DataDatabricksAppsSpacesSpacesResourcesJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.secretInput">secret_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret">DataDatabricksAppsSpacesSpacesResourcesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.servingEndpointInput">serving_endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint">DataDatabricksAppsSpacesSpacesResourcesServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.sqlWarehouseInput">sql_warehouse_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.ucSecurableInput">uc_securable_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable">DataDatabricksAppsSpacesSpacesResourcesUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources">DataDatabricksAppsSpacesSpacesResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.app"></a>

```python
app: DataDatabricksAppsSpacesSpacesResourcesAppOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesAppOutputReference">DataDatabricksAppsSpacesSpacesResourcesAppOutputReference</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.database"></a>

```python
database: DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference">DataDatabricksAppsSpacesSpacesResourcesDatabaseOutputReference</a>

---

##### `experiment`<sup>Required</sup> <a name="experiment" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.experiment"></a>

```python
experiment: DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference">DataDatabricksAppsSpacesSpacesResourcesExperimentOutputReference</a>

---

##### `genie_space`<sup>Required</sup> <a name="genie_space" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.genieSpace"></a>

```python
genie_space: DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference">DataDatabricksAppsSpacesSpacesResourcesGenieSpaceOutputReference</a>

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.job"></a>

```python
job: DataDatabricksAppsSpacesSpacesResourcesJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJobOutputReference">DataDatabricksAppsSpacesSpacesResourcesJobOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.secret"></a>

```python
secret: DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference">DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference</a>

---

##### `serving_endpoint`<sup>Required</sup> <a name="serving_endpoint" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.servingEndpoint"></a>

```python
serving_endpoint: DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference">DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference</a>

---

##### `sql_warehouse`<sup>Required</sup> <a name="sql_warehouse" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.sqlWarehouse"></a>

```python
sql_warehouse: DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference">DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference</a>

---

##### `uc_securable`<sup>Required</sup> <a name="uc_securable" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.ucSecurable"></a>

```python
uc_securable: DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference">DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference</a>

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.appInput"></a>

```python
app_input: IResolvable | DataDatabricksAppsSpacesSpacesResourcesApp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesApp">DataDatabricksAppsSpacesSpacesResourcesApp</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.databaseInput"></a>

```python
database_input: IResolvable | DataDatabricksAppsSpacesSpacesResourcesDatabase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesDatabase">DataDatabricksAppsSpacesSpacesResourcesDatabase</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `experiment_input`<sup>Optional</sup> <a name="experiment_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.experimentInput"></a>

```python
experiment_input: IResolvable | DataDatabricksAppsSpacesSpacesResourcesExperiment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesExperiment">DataDatabricksAppsSpacesSpacesResourcesExperiment</a>

---

##### `genie_space_input`<sup>Optional</sup> <a name="genie_space_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.genieSpaceInput"></a>

```python
genie_space_input: IResolvable | DataDatabricksAppsSpacesSpacesResourcesGenieSpace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesGenieSpace">DataDatabricksAppsSpacesSpacesResourcesGenieSpace</a>

---

##### `job_input`<sup>Optional</sup> <a name="job_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.jobInput"></a>

```python
job_input: IResolvable | DataDatabricksAppsSpacesSpacesResourcesJob
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesJob">DataDatabricksAppsSpacesSpacesResourcesJob</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.secretInput"></a>

```python
secret_input: IResolvable | DataDatabricksAppsSpacesSpacesResourcesSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret">DataDatabricksAppsSpacesSpacesResourcesSecret</a>

---

##### `serving_endpoint_input`<sup>Optional</sup> <a name="serving_endpoint_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.servingEndpointInput"></a>

```python
serving_endpoint_input: IResolvable | DataDatabricksAppsSpacesSpacesResourcesServingEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint">DataDatabricksAppsSpacesSpacesResourcesServingEndpoint</a>

---

##### `sql_warehouse_input`<sup>Optional</sup> <a name="sql_warehouse_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.sqlWarehouseInput"></a>

```python
sql_warehouse_input: IResolvable | DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse</a>

---

##### `uc_securable_input`<sup>Optional</sup> <a name="uc_securable_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.ucSecurableInput"></a>

```python
uc_securable_input: IResolvable | DataDatabricksAppsSpacesSpacesResourcesUcSecurable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable">DataDatabricksAppsSpacesSpacesResourcesUcSecurable</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsSpacesSpacesResources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResources">DataDatabricksAppsSpacesSpacesResources</a>

---


### DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference <a name="DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret">DataDatabricksAppsSpacesSpacesResourcesSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpacesSpacesResourcesSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSecret">DataDatabricksAppsSpacesSpacesResourcesSecret</a>

---


### DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference <a name="DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint">DataDatabricksAppsSpacesSpacesResourcesServingEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpacesSpacesResourcesServingEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesServingEndpoint">DataDatabricksAppsSpacesSpacesResourcesServingEndpoint</a>

---


### DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference <a name="DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppsSpacesSpacesResourcesSqlWarehouse</a>

---


### DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference <a name="DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.securableKind">securable_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullNameInput">securable_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.securableTypeInput">securable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullName">securable_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.securableType">securable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable">DataDatabricksAppsSpacesSpacesResourcesUcSecurable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `securable_kind`<sup>Required</sup> <a name="securable_kind" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.securableKind"></a>

```python
securable_kind: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `securable_full_name_input`<sup>Optional</sup> <a name="securable_full_name_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```python
securable_full_name_input: str
```

- *Type:* str

---

##### `securable_type_input`<sup>Optional</sup> <a name="securable_type_input" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```python
securable_type_input: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `securable_full_name`<sup>Required</sup> <a name="securable_full_name" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullName"></a>

```python
securable_full_name: str
```

- *Type:* str

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAppsSpacesSpacesResourcesUcSecurable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesResourcesUcSecurable">DataDatabricksAppsSpacesSpacesResourcesUcSecurable</a>

---


### DataDatabricksAppsSpacesSpacesStatusOutputReference <a name="DataDatabricksAppsSpacesSpacesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_apps_spaces

dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatus">DataDatabricksAppsSpacesSpacesStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAppsSpacesSpacesStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSpaces.DataDatabricksAppsSpacesSpacesStatus">DataDatabricksAppsSpacesSpacesStatus</a>

---



